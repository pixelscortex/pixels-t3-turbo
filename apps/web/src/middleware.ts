import type { NextFetchEvent, NextRequest } from "next/server";
import { NextResponse } from "next/server";
import { clerkMiddleware, createRouteMatcher } from "@clerk/nextjs/server";
import { Logger } from "next-axiom";

const isProtectedRoute = createRouteMatcher(["/protected(.*)"]);

export default clerkMiddleware((auth, request, event) => {
  const logger = new Logger({ source: "middleware" });
  logger.middleware(request);

  event.waitUntil(logger.flush());

  if (isProtectedRoute(request)) {
    auth().protect();
  }

  return NextResponse.next();
});

export const config = {
  matcher: ["/((?!.*\\..*|_next).*)", "/", "/(api|trpc)(.*)"],
};
