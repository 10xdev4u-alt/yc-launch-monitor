export interface LinkedInLeak { company: string; batch: string; program: "YC" | "SR"; oneLiner: string; founders: string[]; sourceUrl: string; }
const MOCK_LI: LinkedInLeak[] = [
  { company: "Shepherd", batch: "W26", program: "YC", oneLiner: "AI work memory for team tools", founders: ["Hannah Chung"], sourceUrl: "https://linkedin.com/posts/shepherd-w26-activity" },
];
export async function fetchLinkedInLeaks(): Promise<LinkedInLeak[]> {
  // LinkedIn scraping not available; documented mock strategy for Pond
  console.warn("[sources/linkedin] LinkedIn API not configured — using mock leak");
  return MOCK_LI;
}
