import { NextResponse } from "next/server";

// Update this filename when releasing a new version
const LATEST_DMG = "JudgyMac-1.0.1.dmg";

export async function GET() {
  return NextResponse.redirect(
    new URL(`/download/${LATEST_DMG}`, process.env.NEXT_PUBLIC_SITE_URL || "https://judgymac.xyz"),
    302
  );
}
