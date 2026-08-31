# Architecture — YC Launch Monitor

Vercel Cron */15 -> POST /api/cron/poll (CRON_SECRET)
 Fan-out: yc.ts | speedrun.ts | x.ts | linkedin.ts
 -> LLM classifier (gpt-4o-mini)
 -> dedup: sha256(normalize(name)+batch) Redis SISMEMBER + DB hash unique
 -> Supabase alerts + cursor
 -> Slack @slack/web-api chat.postMessage Block Kit; chat.update for EARLY->CONFIRMED

Stateless handler, per-source error isolation.
State: alerts(hash unique), cursor(source pk)
