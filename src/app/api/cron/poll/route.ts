import { NextResponse } from "next/server";
import { fetchYC } from "@/lib/sources/yc";
import { fetchSpeedrun } from "@/lib/sources/speedrun";
import { fetchXLeaks } from "@/lib/sources/x";
import { fetchLinkedInLeaks } from "@/lib/sources/linkedin";
import { hashCompany, isDuplicate } from "@/lib/dedup";
import { isDuplicateRedis, addToRedis } from "@/lib/redis";
import { saveAlert } from "@/lib/db/client";
import { postSlack } from "@/lib/slack";
import { publishPoll } from "@/lib/qstash";

export async function GET(req: Request) {
  const { searchParams } = new URL(req.url);
  const auth = req.headers.get("authorization");
  const allowCron =
    !process.env.CRON_SECRET ||
    auth === `Bearer ${process.env.CRON_SECRET}` ||
    req.headers.get("x-vercel-cron") === "1" ||
    searchParams.get("cron_secret") === process.env.CRON_SECRET;
  if (!allowCron) return new Response("unauthorized", { status: 401 });
  const at = new Date().toISOString();
  let posted = 0, skipped = 0;
  const results = await Promise.allSettled([fetchYC("W26"), fetchSpeedrun(), fetchXLeaks(), fetchLinkedInLeaks()]);
  const yc = results[0].status === "fulfilled" ? results[0].value : [];
  const sr = results[1].status === "fulfilled" ? results[1].value : [];
  const xl = results[2].status === "fulfilled" ? results[2].value : [];
  const li = results[3].status === "fulfilled" ? results[3].value : [];
  const all: any[] = [
    ...(yc as any[]).map((c) => ({ ...c, type: "CONFIRMED", confidence: 1, source: "yc_directory" })),
    ...(sr as any[]).map((c) => ({ ...c, type: "CONFIRMED", confidence: 1, source: "speedrun" })),
    ...(xl as any[]).map((c) => ({ ...c, type: "EARLY", source: "x" })),
    ...(li as any[]).map((c) => ({ ...c, type: "EARLY", source: "linkedin" })),
  ];
  const errors: string[] = [];
  for (const c of all) {
    const h = hashCompany(c.company, c.batch);
    if (isDuplicate(h) || (await isDuplicateRedis(h))) { skipped++; continue; }
    await saveAlert(h, c, at);
    await addToRedis(h);
    const r: any = await postSlack({ company: c.company, batch: c.batch, program: c.program, type: c.type, founder: (c.founders && c.founders[0]) || "unknown", oneLiner: c.oneLiner, sourceUrl: c.sourceUrl, hash: h, confidence: c.confidence || 1 });
    if (r.ok) posted++; else { skipped++; errors.push(r.error || "slack_failed"); }
  }
  const rejected = results.filter((r) => r.status === "rejected") as PromiseRejectedResult[];
  rejected.forEach((r) => errors.push((r.reason as Error)?.message || "unknown"));
  const sched = searchParams.get("schedule") === "qstash" ? await publishPoll() : null;
  return NextResponse.json({ ok: true, at, posted, skipped, total: all.length, errors: errors.slice(0, 5), persist: !!process.env.UPSTASH_REDIS_REST_URL, qstash: sched });
}
export const dynamic = "force-dynamic";
