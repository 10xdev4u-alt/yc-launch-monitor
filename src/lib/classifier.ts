export function isYCLeak(text: string) {
  const t = text.toLowerCase();
  const positives = ["got into yc", "accepted to yc", "joining yc", "yc w26", "yc s26", "y combinator", "speedrun sr"];
  const negatives = ["giveaway", "course", "how to get into yc"];
  if (negatives.some(n=>t.includes(n))) return { yes:false, confidence:0.1 };
  const hits = positives.filter(p=>t.includes(p)).length;
  if (hits===0) return { yes:false, confidence:0.2 };
  return { yes:true, confidence: Math.min(0.85 + hits*0.05, 0.97), company: text.slice(0,30) };
}
