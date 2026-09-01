const CONFIRMED = ["yc.com", "/y-combinator", "speedrun", "directory", "batch"];
export function isYCLeak(text: string): boolean {
  const t = text.toLowerCase();
  if (CONFIRMED.some(k => t.includes(k))) return true;
  return /yc\s*w26|yc\s*f26|speedrun\s*\d|launch(s|ing)?\s*(list|day)/i.test(t);
}
export function classifyConfidence(title: string, url: string): "EARLY" | "CONFIRMED" {
  const t = (title + " " + url).toLowerCase();
  if (t.includes("directory") || t.includes("speedrun") || t.includes("yc.com")) return "CONFIRMED";
  return "EARLY";
}
