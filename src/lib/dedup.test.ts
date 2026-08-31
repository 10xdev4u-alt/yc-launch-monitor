import { describe, it, expect } from "vitest";
import { hashCompany } from "./dedup";
import { isYCLeak } from "./classifier";
describe("hash",()=>{ it("normalizes case",()=>{expect(hashCompany("Osmaura","W26")).toBe(hashCompany("osmaura","w26"));}); it("batch diff",()=>{expect(hashCompany("Osmaura","W26")).not.toBe(hashCompany("Osmaura","W27"));}); });
describe("classifier",()=>{ it("flags yc leak",()=>{expect(isYCLeak("thrilled to join YC W26").yes).toBe(true);}); it("rejects giveaway",()=>{expect(isYCLeak("giveaway how to get into yc").yes).toBe(false);}); });
