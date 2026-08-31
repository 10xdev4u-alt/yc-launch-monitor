// Supabase Drizzle placeholder — swap in-mem Map with real client when env set
// import { drizzle } from "drizzle-orm/postgres-js"; postgres(SUPABASE_URL)
export async function saveAlert(hash: string, data: any) {
  if (!process.env.SUPABASE_URL) return { ok:true, mocked:true };
  // real insert: await db.insert(alerts).values({hash, ...data}).onConflictDoNothing()
  return { ok:true };
}
