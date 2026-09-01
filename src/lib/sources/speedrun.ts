export interface SpeedrunCompany { company: string; batch: string; program: "SR"; oneLiner: string; founders: string[]; sourceUrl: string; }
const MOCK_SR: SpeedrunCompany[] = [
  { company: "Perceptron ML", batch: "SR007", program: "SR", oneLiner: "Event-driven real-world signal engine", founders: ["Michael Marcotte"], sourceUrl: "https://speedrun.xyz/perceptron" },
];
let cached: SpeedrunCompany[] | null = null;
export async function fetchSpeedrun(): Promise<SpeedrunCompany[]> {
  if (cached) return cached ?? MOCK_SR;
  try {
    const res = await fetch("https://api.speedrun.xyz/v1/companies");
    if (!res.ok) throw new Error("Speedrun API");
    const j = await res.json();
    cached = (j.companies || MOCK_SR).map((c: any) => ({ company: c.name, batch: c.batch || "SR007", program: "SR" as const, oneLiner: c.one_liner || "", founders: c.founders || ["unknown"], sourceUrl: c.url || "https://speedrun.xyz" }));
    return cached ?? MOCK_SR;
  } catch { cached = MOCK_SR; return cached ?? MOCK_SR; }
}
