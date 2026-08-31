export async function isDuplicateRedis(hash: string): Promise<boolean> {
  const url = process.env.UPSTASH_REDIS_REST_URL;
  const token = process.env.UPSTASH_REDIS_REST_TOKEN;
  if (!url || !token) return false; // fallback to in-mem dedup in dedup.ts
  try {
    const r = await fetch(`${url}/sismember/dedup/${hash}`, { headers: { Authorization: `Bearer ${token}` } });
    const j:any = await r.json().catch(()=>null);
    if (j?.result === 1) return true;
    await fetch(`${url}/sadd/dedup/${hash}`, { method:"POST", headers:{ Authorization:`Bearer ${token}` } });
    return false;
  } catch { return false; }
}
