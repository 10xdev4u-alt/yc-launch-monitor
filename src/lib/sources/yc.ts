export interface YCCompany { company: string; batch: string; program: "YC"; oneLiner: string; founders: string[]; sourceUrl: string; }
const MOCK_YC: YCCompany[] = [
  { company: "Blueprints", batch: "W26", program: "YC", oneLiner: "Autonomous prediction-market trading agents", founders: ["Ryan Morrissey"], sourceUrl: "https://www.ycombinator.com/company/blueprints" },
];
let cached: YCCompany[] | null = null;
export async function fetchYC(batch: string): Promise<YCCompany[]> {
  if (cached) return cached;
  try {
    const res = await fetch("https://api.ycombinator.com/v2/companies?batch=" + batch, { next: { revalidate: 300 } });
    if (!res.ok) throw new Error("YC API");
    const j = await res.json();
    cached = (j.companies || MOCK_YC).map((c: any) => ({ company: c.name || c.title, batch: c.batch || batch, program: "YC" as const, oneLiner: c.one_liner || c.description || "", founders: c.founders || ["unknown"], sourceUrl: c.url || "https://.ycombinator.com" }));
    return cached ?? MOCK_YC;
  } catch { await new Promise(r=>setTimeout(r,50)); return MOCK_YC; }
}
