/**
 * Extract spreadsheet id from a URL or bare id.
 * Strips whitespace/BOM and decodes URL-encoding so pasted links survive .env pastes.
 */
export function normalizeSpreadsheetId(raw: string): string {
  let s = raw
    .trim()
    .replace(/^\uFEFF/, "")
    .replace(/\s+/g, "");
  try {
    s = decodeURIComponent(s);
  } catch {
    /* ignore */
  }
  const fromUrl = s.match(/\/spreadsheets\/d\/([a-zA-Z0-9-_]+)/i);
  if (fromUrl) return fromUrl[1];
  return s.replace(/[#?].*$/, "").replace(/\/$/, "");
}

/** Vercel / UI pastes often wrap PEM in quotes or use literal `\n`. */
export function normalizePrivateKey(raw: string | undefined): string | undefined {
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
