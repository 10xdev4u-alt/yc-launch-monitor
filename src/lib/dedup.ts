import { createHash } from "crypto";
export function hashCompany(name: string, batch: string) { return createHash("sha256").update(`${name.toLowerCase().trim()}::${batch.toLowerCase().trim()}`).digest("hex").slice(0, 8); }
const seen = new Set<string>();
export function isDuplicate(hash: string) { if (seen.has(hash)) return true; seen.add(hash); return false; }
export function resetDedup() { seen.clear(); }
