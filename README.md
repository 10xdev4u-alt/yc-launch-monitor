# YC Launch Monitor

Tracks new YC + Speedrun companies. Polls YC Directory (Algolia) + Speedrun JSON every 15m via QStash, listens to X and LinkedIn leaks with gpt-4o-mini classifier, dedups by hash, pushes Slack Block Kit.

Live: https://yc-launch-monitor.vercel.app — Health: /health — Slack: #yc-launches

## Stack
Next.js 14 TS + Tailwind zinc/FF6600 • Supabase/Drizzle (schema ready, in-mem now) • Upstash Redis dedup (in-mem fallback) • @slack/web-api • Vercel Cron daily (Hobby) + QStash for 15m • TwitterAPI.io • SerpAPI

## Run
```
npm install
npm run build
# env: SLACK_BOT_TOKEN, CRON_SECRET, TWITTERAPI_KEY, SERPAPI_KEY, OPENAI_API_KEY
```

## Poll
`GET /api/cron/poll` → `{posted, skipped, total}` fan-out 4 sources isolated errors. Hash sha256(name::batch). Single Slack message per hash, EARLY → CONFIRMED via chat.update.

## Slack
xoxb- in Vercel env, not repo. Block Kit 🟡 EARLY / 🟢 CONFIRMED.

## Research
docs/research/yc-algolia.md • speedrun.md • x-linkedin.md • ARCHITECTURE.md
