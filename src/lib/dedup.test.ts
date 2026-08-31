import { describe, it, expect } from "vitest";
import { hashCompany } from "./dedup";
import { isYCLeak } from "./classifier";
describe("hash",()=>{ it("normalizes case",()=>{expect(hashCompany("Osmaura","W26")).toBe(hashCompany("osmaura","w26"));}); it("batch diff",()=>{expect(hashCompany("Osmaura","W26")).not.toBe(hashCompany("Osmaura","W27"));}); });
describe("classifier",()=>{ it("flags yc leak",()=>{expect(isYCLeak("thrilled to join YC W26").yes).toBe(true);}); it("rejects giveaway",()=>{expect(isYCLeak("giveaway how to get into yc").yes).toBe(false);}); });

import { fuzzyDuplicate } from "./fuzzy";
import { describe as d2, it as it2, expect as ex2 } from "vitest";
d2("fuzzy",()=>{ it2("flags typo",()=>{ ex2(fuzzyDuplicate("Osmaura",["osmaura "])).toBe(true); }); it2("rejects diff",()=>{ ex2(fuzzyDuplicate("Osmaura",["Blueprints"])).toBe(false); }); });
