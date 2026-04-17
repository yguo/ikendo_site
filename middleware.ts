import { jwtVerify } from "jose";
import type { NextRequest } from "next/server";
import { NextResponse } from "next/server";
import { BP_SESSION_COOKIE } from "./src/lib/bp-constants";

export async function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;

  if (!pathname.startsWith("/bp")) {
    return NextResponse.next();
  }

  if (pathname.startsWith("/bp/login")) {
    return NextResponse.next();
  }

  const secret = process.env.BP_AUTH_COOKIE_SECRET;
  if (!secret) {
    return new NextResponse(
      "BP auth is not configured (set BP_AUTH_COOKIE_SECRET on the server).",
      { status: 503 }
    );
  }

  const token = request.cookies.get(BP_SESSION_COOKIE)?.value;
  if (!token) {
    const url = request.nextUrl.clone();
    url.pathname = "/bp/login";
    url.searchParams.set("next", pathname);
    return NextResponse.redirect(url);
  }

  try {
    await jwtVerify(token, new TextEncoder().encode(secret));
    return NextResponse.next();
  } catch {
    const url = request.nextUrl.clone();
    url.pathname = "/bp/login";
    url.searchParams.set("next", pathname);
    return NextResponse.redirect(url);
  }
}

export const config = {
  matcher: ["/bp", "/bp/:path*"],
};
