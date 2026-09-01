import { WebClient } from "@slack/web-api";
const token = process.env.SLACK_BOT_TOKEN;
const client = token ? new WebClient(token) : null;
const channel = process.env.SLACK_CHANNEL || "#yc-launches";
export async function postSlack(payload: any) {
  if (!client) return { ok: false, error: "SLACK_BOT_TOKEN missing" };
  try {
    const r = await client.chat.postMessage({
      channel, text: `${payload.type === "EARLY" ? "🟡" : "🟢"} ${payload.company} — ${payload.batch} (${payload.program})`,
      blocks: [
        { type: "header", text: { type: "plain_text", text: `${payload.type === "EARLY" ? "🟡 EARLY LEAK" : "🟢 CONFIRMED"} — ${payload.company}` } },
        { type: "section", fields: [
          { type: "mrkdwn", text: `*Batch:* ${payload.batch}` },
          { type: "mrkdwn", text: `*Program:* ${payload.program}` },
          { type: "mrkdwn", text: `*Founder:* ${payload.founder || "unknown"}` },
          { type: "mrkdwn", text: `*Confidence:* ${Math.round((payload.confidence||1)*100)}%` },
        ] },
        { type: "section", text: { type: "mrkdwn", text: payload.oneLiner || "—" } },
        { type: "context", elements: [{ type: "mrkdwn", text: `<${payload.sourceUrl || "https://example.com"}|view leak> • \`${payload.hash}\` • ${payload.source}` }] },
      ],
    });
    return { ok: true, ts: r.ts };
  } catch (e: any) { return { ok: false, error: e.message }; }
}
