import { NextRequest, NextResponse } from "next/server";
import { jwtVerify } from "jose";

const secretKey = "itsol-cms-secret-key-change-this-in-env";
const key = new TextEncoder().encode(process.env.JWT_SECRET || secretKey);

export async function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;

  // Protect /admin routes
  if (pathname.startsWith("/admin")) {
    const session = request.cookies.get("admin-session")?.value;

    if (!session) {
      return NextResponse.redirect(new URL("/login", request.url));
    }

    try {
      await jwtVerify(session, key, { algorithms: ["HS256"] });
      return NextResponse.next();
    } catch (err) {
      return NextResponse.redirect(new URL("/login", request.url));
    }
  }

  // Redirect from /login if already logged in
  if (pathname === "/login") {
    const session = request.cookies.get("admin-session")?.value;
    if (session) {
      try {
        await jwtVerify(session, key, { algorithms: ["HS256"] });
        return NextResponse.redirect(new URL("/admin", request.url));
      } catch (err) {
        // Continue to login page if session is invalid
      }
    }
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/admin/:path*", "/login"],
};
