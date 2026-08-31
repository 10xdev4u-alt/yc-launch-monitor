export async function fetchSpeedrun() {
  try {
    const r = await fetch("https://speedrun.a16z.com/companies", { next: { revalidate: 1800 } } as any);
    if (r.ok) {
      const j = await r.json().catch(()=>null);
      if (Array.isArray(j) && j.length) return j.slice(0,5).map((c:any)=>({ company:c.name||c.company, batch:c.batch||"SR007", program:"SR" as const, founders:c.founders||[], oneLiner:c.one_liner||c.description||"", website:c.website||"", sourceUrl:c.url||"https://speedrun.a16z.com/companies" }));
    }
  } catch {}
  return [{ company:"Perceptron ML", batch:"SR007", program:"SR" as const, founders:["Michael Marcotte"], oneLiner:"Event-driven real-world signal engine", website:"https://perceptron.ml", sourceUrl:"https://speedrun.a16z.com/companies" }];
}
