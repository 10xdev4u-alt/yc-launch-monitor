import { isYCLeak } from "../classifier";
export async function fetchXLeaks() {
  // TwitterAPI.io if key else mock 1 leak for demo
  if (!process.env.TWITTERAPI_KEY) return [{ company:"Osmaura", batch:"W26", program:"YC" as const, founders:["Jon Xu"], oneLiner:"thrilled to join YC W26", sourceUrl:"https://x.com/jonxu/1", confidence:0.94, raw:"thrilled to join YC W26!" }];
  // real fetch would call TwitterAPI.io search
  const txt = "thrilled to join YC W26!";
  const c = isYCLeak(txt);
  if (c.yes) return [{ company:"Osmaura", batch:"W26", program:"YC" as const, founders:["Jon Xu"], oneLiner:txt, sourceUrl:"https://x.com/jonxu/1", confidence:c.confidence, raw:txt }];
  return [];
}
