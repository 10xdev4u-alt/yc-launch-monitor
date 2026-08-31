import { NextResponse } from "next/server";
import { fetchYC } from "@/lib/sources/yc";
import { fetchSpeedrun } from "@/lib/sources/speedrun";
import { hashCompany, isDuplicate } from "@/lib/dedup";
import { postSlack } from "@/lib/slack";

export async function GET() {
  const started = new Date().toISOString();
  let posted = 0, skipped = 0, errors: string[] = [];
  try {
    const [yc, sr] = await Promise.all([fetchYC("W26"), fetchSpeedrun()]);
    const all = [...yc.map(c=>({...c, type:"CONFIRMED" as const, confidence:1, source:"yc_directory"})), ...sr.map(c=>({...c, type:"CONFIRMED" as const, confidence:1, source:"speedrun"}))];
    for (const c of all) {
      const hash = hashCompany(c.company, c.batch);
      if (isDuplicate(hash)) { skipped++; continue; }
      const res = await postSlack({ company:c.company, batch:c.batch, program:c.program, type:c.type, founder:c.founders[0]||"unknown", oneLiner:c.oneLiner, sourceUrl:c.sourceUrl, hash, confidence:c.confidence });
      if (res.ok) posted++; else { skipped++; errors.push(`${c.company}:${res.error}`); }
    }
    return NextResponse.json({ ok:true, at: started, posted, skipped, total: all.length, errors: errors.slice(0,3) });
  } catch (e:any) { return NextResponse.json({ ok:false, error:e.message, at: started }, { status:500 }); }
}
