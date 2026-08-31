import { NextResponse } from "next/server";
export async function GET(req: Request) {
  return NextResponse.json({ ok: true, new: 0, skipped: 0, at: new Date().toISOString(), note: "shell wiring next PR" });
}
