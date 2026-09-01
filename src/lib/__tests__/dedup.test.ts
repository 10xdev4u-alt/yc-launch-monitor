import { hashCompany, isDuplicate, resetDedup } from "../dedup";
describe("hashCompany", () => {
  test("deterministic", () => { expect(hashCompany("Acme","W26")).toBe(hashCompany("acme","W26")); });
});
describe("isDuplicate", () => {
  beforeEach(() => resetDedup());
  test("second call detected", () => { const h=hashCompany("Acme","W26"); expect(isDuplicate(h)).toBe(false); expect(isDuplicate(h)).toBe(true); });
});
