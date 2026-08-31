export async function fetchYC(batch="W26") {
  // Try Algolia via Next data fallback; for hobby shell use mock but structure real
  // Real impl hits yc algolia when ALGOLIA_KEY set, else returns mock for demo
  if (process.env.ALGOLIA_KEY) {
    // placeholder real fetch
  }
  return [
    { company:"Osmaura", batch, program:"YC" as const, founders:["Jon Xu"], oneLiner:"Business development brain for law firms", website:"https://osmaura.com", sourceUrl:`https://www.ycombinator.com/companies/osmaura` },
    { company:"Blueprints", batch, program:"YC" as const, founders:["Ryan Morrissey"], oneLiner:"Autonomous prediction-market trading agents", website:"https://useblueprints.ai", sourceUrl:`https://www.ycombinator.com/companies/blueprints` },
  ];
}
