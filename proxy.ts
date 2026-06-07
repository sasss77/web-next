import { NextRequest, NextResponse } from "next/server";
import { getTokenCookie, getUserData } from "./lib/cookies";
const publicRoutes = ["/login", "/register"];
const adminRoutes = ["/dashboard"];

export async function proxy(request: NextRequest) {
  const { pathname } = request.nextUrl;
  const token = await getTokenCookie();
  const user = await getUserData();

  const isPublicRutes = publicRoutes.some((route) =>
    pathname.startsWith(route),
  );
  if (!token && !isPublicRutes) {
    return NextResponse.redirect(new URL("/login", request.url)); // redirect to /login
  }

  // apply rulest
  return NextResponse.next();
}

// apply to whatever path you want to proxy
export const config = {
  matcher: ["/dashboard", "/register"],
};
