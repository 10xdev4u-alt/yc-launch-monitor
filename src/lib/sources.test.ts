import { describe, it, expect } from "vitest";
import { fetchYC } from "./sources/yc";
import { fetchSpeedrun } from "./sources/speedrun";
describe("sources",()=>{ it("yc returns 2 mock", async()=>{ const r=await fetchYC("W26"); expect(r.length).toBe(2); }); it("speedrun returns >=1", async()=>{ const r=await fetchSpeedrun(); expect(r.length).toBeGreaterThan(0); }); });
