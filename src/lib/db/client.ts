import { createClient } from "@supabase/supabase-js";
const url = process.env.SUPABASE_URL || process.env.NEXT_PUBLIC_SUPABASE_URL || "";
const key = process.env.SUPABASE_SECRET_KEY || process.env.SUPABASE_SERVICE_ROLE_KEY || "";
const client = url && key ? createClient(url, key) : null;
export async function saveAlert(hash: string, data: any, at: string) {
  if (!client) return { ok: false, note: "supabase offline" };
  const { error } = await client.from("alerts").insert({ id: hash, company: data.company, batch: data.batch, program: data.program, type: data.type, founder: data.founder || data.founders?.[0], one_liner: data.oneLiner, source_url: data.sourceUrl, source: data.source, confidence: data.confidence || 0.9, created_at: at });
  if (error) return { ok: false, error: error.message };
  return { ok: true };
}
export async function isAlertExists(hash: string): Promise<boolean> {
  if (!client) return false;
  const { data, error } = await client.from("alerts").select("id").eq("id", hash).maybeSingle();
  return !error && !!data;
}
