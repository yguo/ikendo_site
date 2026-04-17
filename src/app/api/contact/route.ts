import { google } from "googleapis";
import { NextResponse } from "next/server";

export const runtime = "nodejs";

const RECAPTCHA_VERIFY = "https://www.google.com/recaptcha/api/siteverify";

type SiteverifyResponse = {
  success: boolean;
  score?: number;
  action?: string;
  challenge_ts?: string;
  hostname?: string;
  "error-codes"?: string[];
};

/** If user pasted a full Sheets URL, extract the spreadsheet id. */
function normalizeSpreadsheetId(raw: string): string {
  const s = raw.trim();
  const fromUrl = s.match(/\/spreadsheets\/d\/([a-zA-Z0-9-_]+)/);
  if (fromUrl) return fromUrl[1];
  return s.replace(/[#?].*$/, "").replace(/\/$/, "");
}

/** Vercel / UI pastes often wrap PEM in quotes or use literal `\n`. */
function normalizePrivateKey(raw: string | undefined): string | undefined {
  if (!raw) return undefined;
  let k = raw.trim().replace(/^\uFEFF/, "");
  if (
    (k.startsWith('"') && k.endsWith('"')) ||
    (k.startsWith("'") && k.endsWith("'"))
  ) {
    k = k.slice(1, -1).trim();
  }
  k = k.replace(/\\n/g, "\n");
  if (!k.includes("BEGIN PRIVATE KEY")) {
    return undefined;
  }
  if (!k.endsWith("\n")) {
    k += "\n";
  }
  return k;
}

function extractGoogleApiError(err: unknown): {
  httpStatus?: number;
  status?: string;
  message?: string;
} {
  const e = err as {
    message?: string;
    response?: {
      status?: number;
      data?: { error?: { message?: string; status?: string; code?: number } };
    };
  };
  const httpStatus = e.response?.status;
  const api = e.response?.data?.error;
  const message =
    (typeof api?.message === "string" && api.message) ||
    (typeof e.message === "string" ? e.message : "");
  const status = typeof api?.status === "string" ? api.status : undefined;
  return { httpStatus, status, message };
}

function summarizeGoogleError(err: unknown): string {
  const { httpStatus, message } = extractGoogleApiError(err);
  const lower = (message ?? "").toLowerCase();
  if (
    lower.includes("has not been used") ||
    lower.includes("is disabled") ||
    lower.includes("enable it by visiting")
  ) {
    return "google_api_disabled";
  }
  if (httpStatus === 403 || lower.includes("permission")) {
    return "sheets_permission_denied";
  }
  if (lower.includes("not found") || httpStatus === 404) {
    return "sheets_not_found";
  }
  if (lower.includes("unable to parse range") || lower.includes("invalid data")) {
    return "sheets_invalid_range";
  }
  if (lower.includes("invalid_grant") || lower.includes("decoding")) {
    return "google_auth_failed";
  }
  return "unknown";
}

async function verifyRecaptcha(token: string, remoteip: string) {
  const secret = process.env.RECAPTCHA_SECRET_KEY?.trim();
  if (!secret) {
    return { ok: false as const, reason: "missing_recaptcha_secret", score: null as number | null };
  }
  const body = new URLSearchParams();
  body.set("secret", secret);
  body.set("response", token);
  if (remoteip) body.set("remoteip", remoteip);

  const res = await fetch(RECAPTCHA_VERIFY, {
    method: "POST",
    headers: { "Content-Type": "application/x-www-form-urlencoded" },
    body,
  });

  const data = (await res.json()) as SiteverifyResponse;
  if (!data.success) {
    return {
      ok: false as const,
      reason: data["error-codes"]?.join(",") || "verify_failed",
      score: null as number | null,
    };
  }

  const min = Number.parseFloat(process.env.RECAPTCHA_SCORE_MIN || "0.5");
  const score = typeof data.score === "number" ? data.score : null;
  if (score != null && Number.isFinite(min) && score < min) {
    return { ok: false as const, reason: "low_score", score };
  }

  return { ok: true as const, reason: null, score };
}

function clientIp(request: Request) {
  const forwarded = request.headers.get("x-forwarded-for");
  if (forwarded) {
    return forwarded.split(",")[0]?.trim() || "";
  }
  return request.headers.get("x-real-ip") || "";
}

export async function POST(request: Request) {
  try {
    const ip = clientIp(request);

    let json: Record<string, unknown>;
    try {
      json = await request.json();
    } catch {
      return NextResponse.json({ error: "Invalid JSON" }, { status: 400 });
    }

    const recaptchaToken = typeof json.recaptchaToken === "string" ? json.recaptchaToken : "";
    if (!recaptchaToken) {
      return NextResponse.json({ error: "Missing reCAPTCHA token" }, { status: 400 });
    }

    const recap = await verifyRecaptcha(recaptchaToken, ip);
    if (!recap.ok) {
      if (recap.reason === "missing_recaptcha_secret") {
        return NextResponse.json(
          { error: "Contact form is not configured (RECAPTCHA_SECRET_KEY)." },
          { status: 503 }
        );
      }
      return NextResponse.json(
        { error: "reCAPTCHA verification failed", code: recap.reason },
        { status: 400 }
      );
    }

    const firstName = String(json.firstName ?? "").slice(0, 200);
    const lastName = String(json.lastName ?? "").slice(0, 200);
    const workEmail = String(json.workEmail ?? "").trim().slice(0, 320);
    const company = String(json.company ?? "").slice(0, 200);
    const region = String(json.region ?? "").slice(0, 80);
    const regionLabel = String(json.regionLabel ?? "").slice(0, 160);
    const message = String(json.message ?? "").trim();

    if (!workEmail || !message) {
      return NextResponse.json({ error: "Missing required fields" }, { status: 400 });
    }

    const sheetIdRaw = process.env.GOOGLE_SHEET_ID?.trim();
    const clientEmail = process.env.GOOGLE_SERVICE_ACCOUNT_EMAIL?.trim();
    const privateKey = normalizePrivateKey(process.env.GOOGLE_PRIVATE_KEY);
    if (!sheetIdRaw || !clientEmail || !privateKey) {
      return NextResponse.json(
        {
          error: "Contact storage is not configured on the server",
          cause: "missing_google_env",
        },
        { status: 503 }
      );
    }

    const spreadsheetId = normalizeSpreadsheetId(sheetIdRaw);

    // Team Drive / Shared drive files often need Drive scope in addition to Sheets.
    // Enable both "Google Sheets API" and "Google Drive API" on the same GCP project.
    const jwt = new google.auth.JWT({
      email: clientEmail,
      key: privateKey,
      scopes: [
        "https://www.googleapis.com/auth/spreadsheets",
        "https://www.googleapis.com/auth/drive",
      ],
    });

    const drive = google.drive({ version: "v3", auth: jwt });
    const driveRes = await drive.files.get({
      fileId: spreadsheetId,
      supportsAllDrives: true,
      fields: "id,name,mimeType,capabilities(canEdit)",
    });

    const mime = driveRes.data.mimeType;
    if (mime && mime !== "application/vnd.google-apps.spreadsheet") {
      return NextResponse.json(
        {
          error: "GOOGLE_SHEET_ID is not a Google Sheet file",
          cause: "wrong_mime",
        },
        { status: 400 }
      );
    }

    if (driveRes.data.capabilities?.canEdit === false) {
      return NextResponse.json(
        {
          error:
            "This service account can view the file but cannot edit it. Grant Editor on the file, add the account to the Team Drive as Content manager, or remove sheet/range protection that blocks editors.",
          cause: "drive_not_editable",
          shareWithEmail: clientEmail,
        },
        { status: 403 }
      );
    }

    const sheets = google.sheets({ version: "v4", auth: jwt });
    const range = (process.env.GOOGLE_SHEET_RANGE || "Sheet1!A1").trim();

    await sheets.spreadsheets.get({
      spreadsheetId,
      fields: "spreadsheetId,properties.title,sheets.properties(sheetId,title)",
    });

    const row = [
      new Date().toISOString(),
      ip,
      firstName,
      lastName,
      workEmail,
      company,
      region,
      regionLabel,
      message,
      recap.score != null ? String(recap.score) : "",
    ];

    await sheets.spreadsheets.values.append({
      spreadsheetId,
      range,
      valueInputOption: "USER_ENTERED",
      insertDataOption: "INSERT_ROWS",
      requestBody: { values: [row] },
    });

    return NextResponse.json({ ok: true });
  } catch (err) {
    console.error("[contact]", err);
    const cause = summarizeGoogleError(err);
    const { status: googleStatus, message: googleMessage } = extractGoogleApiError(err);
    const debug =
      process.env.NODE_ENV === "development" || process.env.CONTACT_API_DEBUG === "1";
    const message = err instanceof Error ? err.message : String(err);
    const shareWithEmail =
      cause === "sheets_permission_denied"
        ? process.env.GOOGLE_SERVICE_ACCOUNT_EMAIL?.trim() || null
        : null;
    const safeGoogleMessage =
      googleMessage && googleMessage.length > 0
        ? googleMessage.slice(0, 280)
        : undefined;
    return NextResponse.json(
      {
        error: "Server error",
        cause,
        ...(googleStatus ? { googleStatus } : {}),
        ...(safeGoogleMessage ? { googleMessage: safeGoogleMessage } : {}),
        ...(shareWithEmail ? { shareWithEmail } : {}),
        ...(debug && cause !== "sheets_permission_denied"
          ? { debug: message }
          : {}),
      },
      { status: 500 }
    );
  }
}
