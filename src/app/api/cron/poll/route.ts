import { NextResponse } from "next/server";
import { fetchYC } from "@/lib/sources/yc";
import { fetchSpeedrun } from "@/lib/sources/speedrun";
import { fetchXLeaks } from "@/lib/sources/x";
import { fetchLinkedInLeaks } from "@/lib/sources/linkedin";
import { hashCompany, isDuplicate } from "@/lib/dedup";
import { postSlack } from "@/lib/slack";
export async function GET() {
  const at = new Date().toISOString();
  let posted=0, skipped=0;
  const [yc, sr, xl, li] = await Promise.all([fetchYC("W26"), fetchSpeedrun(), fetchXLeaks(), fetchLinkedInLeaks()]);
  const all:any[] = [
    ...(yc as any[]).map((c:any)=>({...c, type:"CONFIRMED", confidence:1, source:"yc_directory"})),
    ...(sr as any[]).map((c:any)=>({...c, type:"CONFIRMED", confidence:1, source:"speedrun"})),
    ...(xl as any[]).map((c:any)=>({...c, type:"EARLY", source:"x"})),
    ...(li as any[]).map((c:any)=>({...c, type:"EARLY", source:"linkedin"})),
  ];
  for(const c of all){ const h=hashCompany(c.company,c.batch); if(isDuplicate(h)){skipped++;continue;} const r=await postSlack({company:c.company,batch:c.batch,program:c.program,type:c.type,founder:(c.founders[0]||"unknown"),oneLiner:c.oneLiner,sourceUrl:c.sourceUrl,hash:h,confidence:c.confidence||1}); if(r.ok) posted++; else skipped++; }
  return NextResponse.json({ ok:true, at, posted, skipped, total: all.length });
}
