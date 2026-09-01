import { createClient } from "@supabase/supabase-js";
function getSb(){
  const url = process.env.SUPABASE_URL || process.env.NEXT_PUBLIC_SUPABASE_URL;
  const key = process.env.SUPABASE_SECRET_KEY || process.env.SUPABASE_SERVICE_ROLE_KEY;
  if(!url || !key) return null;
  return createClient(url, key);
}
export async function saveAlert(hash:string, data:any){
  const sb = getSb();
  if(!sb) return { ok:true, mocked:true };
  try{
    const { error } = await sb.from("alerts").insert({
      hash, program: data.program, type: data.type, company: data.company,
      batch: data.batch, founders: data.founders, one_liner: data.oneLiner || data.one_liner,
      website: data.website, source: data.source, source_url: data.sourceUrl, confidence: data.confidence || 1
    });
    if(error){
      if(error.message.includes("Could not find the table")) return { ok:false, error:"table missing" };
      if(error.code==="23505") return { ok:true, duplicate:true };
      return { ok:false, error: error.message.slice(0,200) };
    }
    return { ok:true };
  }catch(e:any){ return { ok:false, error:e.message }; }
}
export async function isAlertExists(hash:string){
  const sb=getSb(); if(!sb) return false;
  const { data } = await sb.from("alerts").select("hash").eq("hash",hash).limit(1);
  return !!(data && data.length);
}
