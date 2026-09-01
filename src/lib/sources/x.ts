export interface XLeak { company: string; batch: string; program: "YC" | "SR"; oneLiner: string; founders: string[]; sourceUrl: string; }
const MOCK_X: XLeak[] = [
  { company: "Osmaura", batch: "W26", program: "YC", oneLiner: "Business development brain for law firms", founders: ["Jon Xu"], sourceUrl: "https://x.com/osmaura/status/1" },
];
export async function fetchXLeaks(): Promise<XLeak[]> {
  const bearer = process.env.X_BEARER_TOKEN;
  if (!bearer) { console.warn("[sources/x] X_BEARER_TOKEN missing — using mock leak (documented Pond strategy)"); return MOCK_X; }
  try {
    const res = await fetch("https://api.twitter.com/2/tweets/search/recent?query=YC%20W26%20OR%20launch", { headers: { Authorization: `Bearer ${bearer}` } });
    if (!res.ok) throw new Error("X API");
    const j = await res.json();
    return (j.data || []).map((t: any) => ({ company: "Unknown", batch: "W26", program: "YC" as const, oneLiner: t.text.slice(0, 100), founders: ["unknown"], sourceUrl: `https://x.com/status/${t.id}` }));
  } catch { return MOCK_X; }
}
