# Persist — Redis + Supabase

Dedup: Upstash Redis `SISMEMBER dedup/{hash}` + `SADD` TTL 7d EARLY, forever CONFIRMED. Fallback in-mem Set if env missing keeps build green.

State: Supabase Postgres `alerts(hash pk, program, type, company, batch, sourceUrl, confidence, status)` Drizzle `onConflictDoNothing`. Cursor table per source lastSeenAt.

Hobby cron daily → QStash trigger every 15m calls /api/cron/poll with CRON_SECRET. Vercel cron kept daily as health ping.

Env: UPSTASH_REDIS_REST_URL, UPSTASH_REDIS_REST_TOKEN, SUPABASE_URL, SUPABASE_SERVICE_ROLE_KEY, QSTASH_TOKEN
