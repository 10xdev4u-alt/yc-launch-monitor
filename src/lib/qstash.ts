import { Client } from "@upstash/qstash";
const token = process.env.QSTASH_TOKEN;
if (!token) console.warn("[qstash] QSTASH_TOKEN missing — schedule publish skipped");
export const qstash = token ? new Client({ token }) : null;
export async function publishPoll() {
  if (!qstash) return { ok: false, skipped: true, reason: "QSTASH_TOKEN missing" };
  const url = process.env.VERCEL_URL
    ? `https://${process.env.VERCEL_URL}/api/cron/poll`
    : `https://yc-launch-monitor.vercel.app/api/cron/poll`;
  try {
    await qstash.publish({
      url,
      method: "GET",
      retries: 2,
      headers: { "Content-Type": "application/json", "x-vercel-cron": "true" },
      body: JSON.stringify({ source: "qstash", ts: new Date().toISOString() }),
    });
    return { ok: true, url };
  } catch (e: any) { return { ok: false, error: e.message }; }
}
