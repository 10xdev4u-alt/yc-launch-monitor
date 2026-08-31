# X + LinkedIn — Cost and ToS Matrix

X official API:
- Basic $100/mo 500K reads, Pro $5000/mo
- May 2026 limits: 50 posts/day unverified, login gates for search, Cloudflare Turnstile
- DIY Playwright+stealth brittle, $10/GB proxy

Chosen: TwitterAPI.io pay-per-call ~$0.001, 100K free, handles proxies+fingerprint.
Query: ("got into YC" OR "YC W26" OR "joining YC" OR "Speedrun SR007") -giveaway

LinkedIn:
- Lawsuit hiQ Labs, JS rotation, datacenter IP flag, $50K/yr official partnership
- Fleet $400-800/mo residential proxies + FTE maintenance
Chosen: SerpAPI Google site:linkedin.com/posts + Proxycurl lazy enrich only on confirmed companies. Legal-safe for $400 bounty scale, proves design awareness.
Classifier: gpt-4o-mini prompt is_yc_acceptance bool + confidence 0.85 threshold.
