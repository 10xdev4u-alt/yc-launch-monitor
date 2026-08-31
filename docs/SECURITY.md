# Security & ToS

Slack: xoxb- in Vercel env only, never repo. Scopes chat:write chat:write.public channels:history.

X: no Playwright fleet at bounty scale. Use TwitterAPI.io pay-per-call. Avoid Cloudflare Turnstile, respect 500K reads Basic.

LinkedIn: hiQ Labs lawsuit. No datacenter scraping. Use SerpAPI Google site:linkedin.com + Proxycurl lazy enrich only on confirmed hash. Respects ToS for demo.

Cron: /api/cron/poll checks Bearer CRON_SECRET if set, else allows Vercel cron. Isolated per-source try/catch, one failure != abort.

Env: see .env.example — all keys server-only.
