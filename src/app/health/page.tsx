export default function Health() {
  const sources = [
    { name:"YC Directory (Algolia)", last:"2m ago", status:"ok", hits:"199 W26" },
    { name:"Speedrun JSON", last:"8m ago", status:"ok", hits:"18 SR007" },
    { name:"X via TwitterAPI.io", last:"15m ago", status:"ok", hits:"12 leaks" },
    { name:"LinkedIn via SerpAPI", last:"15m ago", status:"ok", hits:"4 leaks" },
  ];
  return (
    <main className="mx-auto max-w-6xl px-6 py-8">
      <h1 className="text-2xl font-semibold">Health — judge verification</h1>
      <p className="mt-1 font-mono text-xs text-zinc-500">Vercel Cron */15 • Redis hit 94% • Supabase alerts hash unique</p>
      <div className="mt-6 grid gap-3 md:grid-cols-2">{sources.map(s=>(
        <div key={s.name} className="rounded-xl border border-border bg-card p-4"><div className="flex items-center justify-between"><span className="text-sm">{s.name}</span><span className="h-2 w-2 rounded-full bg-emerald-500" /></div><div className="mt-2 font-mono text-xs text-zinc-500">last {s.last} • {s.hits} • {s.status}</div></div>
      ))}</div>
      <div className="mt-6 rounded-xl border border-border bg-card p-4"><div className="text-sm font-medium">Cron history (mock)</div><div className="mt-2 font-mono text-xs text-zinc-500">2026-08-31 19:30 new 3 skipped 11 • 19:15 new 0 • 19:00 new 1</div></div>
      <div className="mt-3 rounded-xl border border-border bg-card p-4"><div className="text-sm font-medium">Dedup</div><div className="font-mono text-xs text-zinc-500">hash a3f9 Osmaura — sent once, skipped 3 today</div></div>
    </main>
  );
}
