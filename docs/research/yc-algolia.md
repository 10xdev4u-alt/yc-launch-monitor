# YC Algolia API — Research

Source inspected: ycombinator.com/companies?batch=W26

Network XHR:
- Host: `*.algolia.net` (Algolia DSN)
- Index: `ycombinator_companies`
- Query: `filters=batch:W26`, hitsPerPage 20-30, paginated via `page`
- Key: search-only API key rotated periodically, embedded in HTML/JS

Response fields: objectID, name, slug, website, one_liner, batch, batch_name, industry, team_size, founders[] {name, linkedin}, yc_partner, isHiring

Fallback: if Algolia 403, parse `__NEXT_DATA__` or HTML list at /companies?batch=W26

Rate: poll 15m, no auth, no proxy needed.
