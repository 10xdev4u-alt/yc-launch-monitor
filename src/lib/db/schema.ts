export type AlertStatus = "pending" | "sent" | "skipped_duplicate";
export type AlertType = "EARLY" | "CONFIRMED" | "ENRICHED";
export type Program = "YC" | "SR";
export interface Alert { hash: string; program: Program; type: AlertType; company: string; founders: string[]; oneLiner: string; website?: string; batch: string; source: string; sourceUrl: string; confidence: number; status: AlertStatus; firstSeenAt: string; }
export const alerts: Map<string, Alert> = new Map(); // prod: replace with Supabase+Drizzle
