import { NextResponse } from "next/server";
import { getCookie } from "cookies-next";

export function middleware(req) {
    const token = getCookie("accessToken", { req });

    if (!token && req.nextUrl.pathname.startsWith("/admin")) {
        return NextResponse.redirect(new URL("/login", req.url));
    }

    return NextResponse.next();
}

export const config = {
    matcher: ["/admin/:path*"], // Protect admin routes
};
