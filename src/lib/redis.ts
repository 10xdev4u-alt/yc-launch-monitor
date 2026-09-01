const url = process.env.UPSTASH_REDIS_REST_URL;
const token = process.env.UPSTASH_REDIS_REST_TOKEN;
export async function isDuplicateRedis(hash: string): Promise<boolean> {
  if (!url || !token) return false;
  try {
    const r = await fetch(`${url}/sismember/yc-seen/${hash}`, { headers: { Authorization: `Bearer ${token}` } });
    const j = await r.json();
    return j.result === 1;
  } catch { return false; }
}
export async function addToRedis(hash: string): Promise<void> {
  if (!url || !token) return;
  try { await fetch(`${url}/sadd/yc-seen/${hash}`, { method: "POST", headers: { Authorization: `Bearer ${token}` } }); } catch {}
}
