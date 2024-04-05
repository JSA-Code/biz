import { draftMode } from "next/headers";
import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export function GET(req: NextRequest) {
  draftMode().disable();
  const url = new URL(req.nextUrl);
  return NextResponse.redirect(new URL("/", url.origin));
}
