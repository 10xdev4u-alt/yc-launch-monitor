import { fetchYC } from "../sources/yc";
import { fetchSpeedrun } from "../sources/speedrun";
import { fetchXLeaks } from "../sources/x";
import { fetchLinkedInLeaks } from "../sources/linkedin";
describe("sources", () => {
  test("fetchYC returns mock", async () => { const c = await fetchYC("W26"); expect(c.length).toBeGreaterThan(0); });
  test("fetchSpeedrun returns mock", async () => { const c = await fetchSpeedrun(); expect(c.length).toBeGreaterThan(0); });
  test("fetchXLeaks returns mock fallback", async () => { const c = await fetchXLeaks(); expect(c.length).toBeGreaterThan(0); });
  test("fetchLinkedInLeaks returns mock", async () => { const c = await fetchLinkedInLeaks(); expect(c.length).toBeGreaterThan(0); });
});
