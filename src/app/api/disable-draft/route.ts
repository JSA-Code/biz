import { draftMode } from "next/headers";
import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export function GET(request: NextRequest) {
  draftMode().disable();
  const url = new URL(request.nextUrl);
  return NextResponse.redirect(new URL("/", url.origin));
}

export const runtime = "edge";
