import { google } from "googleapis";
import { NextRequest, NextResponse } from "next/server";
import {
  normalizePrivateKey,
  normalizeSpreadsheetId,
} from "@/lib/google-sheet-normalize";

export const runtime = "nodejs";

function apiErr(err: unknown): string {
  const e = err as {
    message?: string;
    response?: { status?: number; data?: { error?: { message?: string } } };
  };
  return (
    e.response?.data?.error?.message ||
    (typeof e.message === "string" ? e.message : "") ||
    String(err)
  );
}

/**
 * POST with header `x-ikendo-contact-diagnose: <CONTACT_DIAGNOSE_SECRET>` (same value in .env).
 * Returns which step fails (JWT, sheets.get, drive.get, append probe) without posting a real form.
 */
export async function POST(request: NextRequest) {
  const expected = process.env.CONTACT_DIAGNOSE_SECRET?.trim();
  const given = request.headers.get("x-ikendo-contact-diagnose")?.trim();
  if (!expected || given !== expected) {
    return new NextResponse(null, { status: 404 });
  }

  const sheetIdRaw = process.env.GOOGLE_SHEET_ID?.trim();
  const clientEmail = process.env.GOOGLE_SERVICE_ACCOUNT_EMAIL?.trim();
  const privateKey = normalizePrivateKey(process.env.GOOGLE_PRIVATE_KEY);
  if (!sheetIdRaw || !clientEmail || !privateKey) {
    return NextResponse.json(
      { ok: false, step: "env", error: "Missing GOOGLE_SHEET_ID, GOOGLE_SERVICE_ACCOUNT_EMAIL, or GOOGLE_PRIVATE_KEY" },
      { status: 503 }
    );
  }

  const spreadsheetId = normalizeSpreadsheetId(sheetIdRaw);
  const range = (process.env.GOOGLE_SHEET_RANGE || "Sheet1!A1").trim();
  const report: Record<string, { ok: boolean; detail?: string; httpStatus?: number }> = {};

  const jwtSheets = new google.auth.JWT({
    email: clientEmail,
    key: privateKey,
    scopes: ["https://www.googleapis.com/auth/spreadsheets"],
  });

  try {
    await jwtSheets.authorize();
    report.jwtSheetsScope = { ok: true };
  } catch (err) {
    report.jwtSheetsScope = { ok: false, detail: apiErr(err) };
    return NextResponse.json({
      spreadsheetIdNormalized: spreadsheetId,
      range,
      clientEmail,
      report,
    });
  }

  const sheets = google.sheets({ version: "v4", auth: jwtSheets });
  try {
    const meta = await sheets.spreadsheets.get({
      spreadsheetId,
      fields: "spreadsheetId,properties.title,sheets.properties(title,sheetId)",
    });
    report.sheetsSpreadsheetsGet = {
      ok: true,
      detail: meta.data.properties?.title ?? undefined,
    };
  } catch (err) {
    const e = err as { response?: { status?: number } };
    report.sheetsSpreadsheetsGet = {
      ok: false,
      detail: apiErr(err),
      httpStatus: e.response?.status,
    };
  }

  const jwtDrive = new google.auth.JWT({
    email: clientEmail,
    key: privateKey,
    scopes: [
      "https://www.googleapis.com/auth/spreadsheets",
      "https://www.googleapis.com/auth/drive",
    ],
  });
  try {
    await jwtDrive.authorize();
    const drive = google.drive({ version: "v3", auth: jwtDrive });
    const f = await drive.files.get({
      fileId: spreadsheetId,
      supportsAllDrives: true,
      fields: "id,name,mimeType,capabilities(canEdit)",
    });
    report.driveFilesGet = {
      ok: true,
      detail: `${f.data.name ?? "?"} (${f.data.mimeType ?? "?"}) canEdit=${String(f.data.capabilities?.canEdit)}`,
    };
  } catch (err) {
    const e = err as { response?: { status?: number } };
    report.driveFilesGet = {
      ok: false,
      detail: apiErr(err),
      httpStatus: e.response?.status,
    };
  }

  const url = new URL(request.url);
  const writeTestRow = url.searchParams.get("writeTestRow") === "1";
  if (!writeTestRow) {
    report.sheetsValuesAppend = {
      ok: true,
      detail: "Skipped (no sheet write). Add ?writeTestRow=1 to also try values.append.",
    };
  } else if (!report.sheetsSpreadsheetsGet?.ok) {
    report.sheetsValuesAppend = {
      ok: false,
      detail: "Cannot test append because spreadsheets.get failed.",
    };
  } else {
    try {
      await sheets.spreadsheets.values.append({
        spreadsheetId,
        range,
        valueInputOption: "USER_ENTERED",
        requestBody: {
          values: [[`__ikendo_diagnose__${Date.now()}`, "", "", "", "", "", "", "", "", ""]],
        },
      });
      report.sheetsValuesAppend = {
        ok: true,
        detail:
          "Append succeeded. You may delete the __ikendo_diagnose__ row in the sheet.",
      };
    } catch (err) {
      const e = err as { response?: { status?: number } };
      report.sheetsValuesAppend = {
        ok: false,
        detail: apiErr(err),
        httpStatus: e.response?.status,
      };
    }
  }

  return NextResponse.json({
    spreadsheetIdNormalized: spreadsheetId,
    range,
    clientEmail,
    report,
  });
}
