import { mockCompanies } from "@/lib/mock";
export default function Page() {
  return (
    <main className="min-h-screen">
      <header className="sticky top-0 z-20 border-b border-border bg-background/80 backdrop-blur">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
          <div className="flex items-center gap-3"><div className="h-7 w-7 rounded bg-[#FF6600]" /><span className="font-semibold">YC Launch Monitor</span><span className="rounded-full border border-border px-2 py-0.5 text-xs text-zinc-400">Live • 15m</span></div>
          <div className="flex items-center gap-2"><span className="hidden text-xs text-zinc-500 md:block">Health 15m ago ✓</span><a href="/health" className="rounded-lg bg-white px-3 py-1.5 text-sm font-medium text-black">Add to Slack</a></div>
        </div>
      </header>

      <section className="mx-auto max-w-6xl px-6 py-10">
        <div className="grid gap-6 md:grid-cols-2">
          <div>
            <h1 className="text-4xl font-bold tracking-tight">Catch YC before YC announces</h1>
            <p className="mt-3 max-w-xl text-zinc-400">Polls YC Directory + Speedrun every 15m, listens to X and LinkedIn leaks, dedups by hash, pushes Slack Block Kit alerts. Elite infra, zero fetish.</p>
            <div className="mt-6 flex gap-3"><a href="https://github.com/10xdev4u-alt/yc-launch-monitor" className="rounded-lg bg-[#FF6600] px-4 py-2 text-sm font-semibold text-black">View GitHub</a><a href="/health" className="rounded-lg border border-border px-4 py-2 text-sm">Health</a></div>
            <div className="mt-4 font-mono text-xs text-zinc-500">⌘K filter • 5,668 tracked • W26 199 • dedup 94% • verified Slack #yc-launches</div>
          </div>
          <div className="rounded-xl border border-border bg-card p-4">
            <div className="mb-3 text-xs font-mono text-zinc-400">LIVE TICKER</div>
            <div className="space-y-2">{mockCompanies.map(c=>(
              <div key={c.hash} className="flex items-center justify-between rounded-lg border border-border px-3 py-2 text-sm"><span className="flex items-center gap-2"><span className={`h-2 w-2 rounded-full ${c.type==="CONFIRMED"?"bg-emerald-500":"bg-[#FF6600] animate-pulse"}`} />{c.company} <span className="text-zinc-500">{c.batch}</span></span><span className="font-mono text-xs text-zinc-500">{c.hash}</span></div>
            ))}</div>
          </div>
        </div>

        <div className="mt-6 grid grid-cols-2 gap-3 md:grid-cols-4">
          {[{k:"Total tracked",v:"5,668"},{k:"W26 new",v:"199"},{k:"Early leaks today",v:"12"},{k:"Dedup rate",v:"94%"}].map(s=>(
            <div key={s.k} className="rounded-xl border border-border bg-card p-4"><div className="text-xs text-zinc-500">{s.k}</div><div className="text-2xl font-semibold">{s.v}</div></div>
          ))}
        </div>

        <div className="mt-8 grid gap-6 lg:grid-cols-[1.7fr_1fr]">
          <div className="rounded-xl border border-border bg-card">
            <div className="flex items-center justify-between border-b border-border px-4 py-3"><span className="text-sm font-medium">Feed — mock W26</span><span className="rounded-full bg-border px-2 py-1 font-mono text-xs">{mockCompanies.length} items</span></div>
            <div className="divide-y divide-border">{mockCompanies.map(c=>(
              <div key={c.hash} className="flex items-center justify-between px-4 py-3 hover:bg-zinc-900">
                <div className="flex items-center gap-3"><span className={`h-2 w-2 rounded-full ${c.type==="CONFIRMED"?"bg-emerald-500":"bg-[#FF6600]"}`} /><div><div className="text-sm font-medium">{c.company} <span className="ml-2 rounded bg-border px-1.5 py-0.5 font-mono text-xs">{c.batch}</span> <span className="ml-1 text-xs text-zinc-500">{c.program}</span></div><div className="text-xs text-zinc-500">{c.oneLiner} • {c.founder}</div></div></div>
                <div className="text-right"><div className={`inline rounded px-1.5 py-0.5 text-xs ${c.type==="CONFIRMED"?"bg-emerald-500/20 text-emerald-400":"bg-[#FF6600]/20 text-orange-400"}`}>{c.type}</div><div className="font-mono text-xs text-zinc-500">{c.time}</div></div>
              </div>
            ))}</div>
          </div>
          <div className="rounded-xl border border-border bg-card p-4">
            <div className="text-sm font-medium">Inspector</div><div className="mt-3 rounded-lg border border-border bg-background p-3"><div className="text-sm font-semibold">Osmaura — W26 • YC</div><div className="text-xs text-zinc-500">Business development brain for law firms</div><div className="mt-3 flex gap-2"><span className="rounded bg-border px-2 py-1 text-xs">Jon Xu</span><span className="font-mono text-xs text-zinc-500">hash a3f9 • conf 0.94</span></div><div className="mt-3 text-xs text-zinc-400">Timeline: X post → LinkedIn → Directory (vertical on real data)</div><div className="mt-3 flex gap-2"><a className="rounded bg-white px-3 py-1 text-xs font-medium text-black" href="#">Open Slack</a><a className="rounded border border-border px-3 py-1 text-xs" href="#">Copy hash</a></div></div>
            <div className="mt-3 rounded border border-amber-900 bg-amber-950 p-2 text-xs text-amber-300">Real inspector shows raw payload collapsed.</div>
          </div>
        </div>
      </section>

      <footer className="border-t border-border py-6 text-center font-mono text-xs text-zinc-500">Elite crew • 10xdev4u-alt • co-authored the-ai-developer • Vercel Cron 15m</footer>
    </main>
  );
}
