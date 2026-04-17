import { SignJWT } from "jose";
import { NextResponse } from "next/server";
import { BP_SESSION_COOKIE } from "@/lib/bp-constants";

export async function POST(request: Request) {
  const secret = process.env.BP_AUTH_COOKIE_SECRET;
  if (!secret) {
    return NextResponse.json(
      { error: "Server misconfigured (BP_AUTH_COOKIE_SECRET)" },
      { status: 500 }
    );
  }

  const expectedUser = process.env.BP_AUTH_USER ?? "";
  const expectedPass = process.env.BP_AUTH_PASSWORD ?? "";
  if (!expectedUser || !expectedPass) {
    return NextResponse.json(
      { error: "Server misconfigured (BP_AUTH_USER / BP_AUTH_PASSWORD)" },
      { status: 500 }
    );
  }

  let body: { username?: string; password?: string };
  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ error: "Invalid JSON" }, { status: 400 });
  }

  if (body.username !== expectedUser || body.password !== expectedPass) {
    return NextResponse.json({ error: "Invalid credentials" }, { status: 401 });
  }

  const token = await new SignJWT({})
    .setProtectedHeader({ alg: "HS256" })
    .setIssuedAt()
    .setExpirationTime("7d")
    .sign(new TextEncoder().encode(secret));

  const res = NextResponse.json({ ok: true });
  res.cookies.set(BP_SESSION_COOKIE, token, {
    httpOnly: true,
    secure: process.env.NODE_ENV === "production",
    sameSite: "lax",
    path: "/",
    maxAge: 60 * 60 * 24 * 7,
  });
  return res;
}
