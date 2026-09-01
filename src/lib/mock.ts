export const mockCompanies: any[] = [
  { company: "Osmaura", batch: "W26", program: "YC", oneLiner: "Business development brain for law firms", founder: "Jon Xu", sourceUrl: "https://example.com", hash: "a3f9b2c1", type: "EARLY" as const, time: "2m ago", source: "x" },
  { company: "Blueprints", batch: "W26", program: "YC", oneLiner: "Autonomous prediction-market trading agents", founder: "Ryan Morrissey", sourceUrl: "https://example.com", hash: "b7c2d3e4", type: "CONFIRMED" as const, time: "14:03 UTC", source: "yc_directory" },
  { company: "Shepherd", batch: "W26", program: "YC", oneLiner: "AI work memory for team tools", founder: "Hannah Chung", sourceUrl: "https://example.com", hash: "c1d4e5f6", type: "EARLY" as const, time: "18m ago", source: "linkedin" },
  { company: "Perceptron ML", batch: "SR007", program: "SR", oneLiner: "Event-driven real-world signal engine", founder: "Michael Marcotte", sourceUrl: "https://example.com", hash: "d9e1f2a3", type: "CONFIRMED" as const, time: "09:12 UTC", source: "speedrun" },
];
export function mockLeaks() { return mockCompanies.map(c=>({company:c.company,batch:c.batch,program:c.program,oneLiner:c.oneLiner,founders:[c.founder],sourceUrl:c.sourceUrl,type:c.type,source:c.source,confidence:c.type==="CONFIRMED"?1:0.85})); }
