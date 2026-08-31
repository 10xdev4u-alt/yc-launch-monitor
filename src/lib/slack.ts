import { WebClient } from "@slack/web-api";
export async function postSlack(alert: { company: string; batch: string; program: string; type: string; founder: string; oneLiner: string; sourceUrl: string; hash: string; confidence: number }) {
  const token = process.env.SLACK_BOT_TOKEN;
  if (!token) return { ok: false, error: "no token" };
  const client = new WebClient(token);
  const color = alert.type === "CONFIRMED" ? "🟢" : "🟡";
  const text = `${color} ${alert.type} — ${alert.company} ${alert.batch} • ${alert.program}\n${alert.oneLiner}\nFounder: ${alert.founder} • ${alert.sourceUrl} • hash ${alert.hash} • conf ${alert.confidence}`;
  try {
    const res = await client.chat.postMessage({ channel: "#yc-launches", text, blocks: [
      { type: "section", text: { type: "mrkdwn", text: `*${color} ${alert.type}* • ${alert.company}  \`${alert.batch}\` • ${alert.program}\n${alert.oneLiner}` } },
      { type: "context", elements: [{ type: "mrkdwn", text: `Founder: ${alert.founder} • <${alert.sourceUrl}|source> • hash \`${alert.hash}\` • conf ${alert.confidence}` }] },
      { type: "actions", elements: [{ type: "button", text: { type: "plain_text", text: "View Source" }, url: alert.sourceUrl, action_id: "view" }] }
    ]});
    return { ok: !!res.ok, ts: res.ts };
  } catch (e:any) { return { ok:false, error: e.message }; }
}
