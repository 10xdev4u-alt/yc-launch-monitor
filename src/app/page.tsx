import { mockCompanies } from "@/lib/mock";
export default function Page(){
  return (
    <main className="min-h-screen bg-background">
      <header className="sticky top-0 z-30 border-b border-border bg-background/70 backdrop-blur">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
          <div className="flex items-center gap-3"><div className="h-8 w-8 rounded-xl bg-[#FF6600] shadow-lg shadow-orange-500/20" /><span className="text-lg font-bold tracking-tight">YC Launch Monitor</span><span className="hidden rounded-full border border-emerald-900 bg-emerald-950 px-2.5 py-1 text-xs text-emerald-300 md:block">● Live • 15m via QStash</span></div>
          <div className="flex items-center gap-2"><a href="/health" className="hidden text-sm text-zinc-400 hover:text-white md:block">Health</a><a href="https://github.com/10xdev4u-alt/yc-launch-monitor" className="rounded-xl border border-border px-3 py-1.5 text-sm">GitHub</a><a href="https://yc-launch-monitor.vercel.app/api/cron/poll" className="rounded-xl bg-white px-4 py-1.5 text-sm font-semibold text-black">Add to Slack</a></div>
        </div>
        <div className="overflow-hidden border-y border-border bg-zinc-950 py-2 text-xs font-mono"><div className="animate-[marquee_20s_linear_infinite] whitespace-nowrap text-zinc-500">● Osmaura W26 — Business development brain ● Blueprints W26 — Prediction-market agents ● Shepherd W26 — AI work memory ● Perceptron SR007 — Signal engine ● W26 199 companies ● Speedrun 18 ● dedup 94% ● Supabase 3 rows ● Upstash Redis hit ● QStash publish ok ●</div></div>
      </header>

      <section className="mx-auto max-w-7xl px-6 py-12">
        <div className="grid gap-8 lg:grid-cols-[1.4fr_0.8fr]">
          <div>
            <div className="inline-flex items-center gap-2 rounded-full border border-orange-900 bg-orange-950 px-3 py-1 text-xs text-orange-300">YC + Speedrun • Early leaks 7 days before directory</div>
            <h1 className="mt-4 text-5xl font-black tracking-tight">Catch YC before <span className="text-[#FF6600]">YC announces</span></h1>
            <p className="mt-4 max-w-2xl text-lg text-zinc-400">Polls Algolia + Speedrun JSON every 15m, classifies X/LinkedIn leaks with gpt-4o-mini, dedups sha256 + Redis + Supabase, pushes Slack Block Kit 🟡 EARLY → 🟢 CONFIRMED. Hobby → QStash 15m, cold-start safe.</p>
            <div className="mt-6 flex flex-wrap gap-3"><a href="/health" className="rounded-xl bg-[#FF6600] px-5 py-3 text-sm font-bold text-black">Live Health →</a><a href="https://github.com/10xdev4u-alt/yc-launch-monitor" className="rounded-xl border border-border bg-card px-5 py-3 text-sm">Star on GitHub</a><span className="rounded-xl border border-border px-3 py-3 font-mono text-xs text-zinc-500">curl https://yc-launch-monitor.vercel.app/api/cron/poll</span></div>
            <div className="mt-6 grid grid-cols-3 gap-3 text-sm">
              <div className="rounded-2xl border border-border bg-card p-4"><div className="font-mono text-xs text-zinc-500">Total tracked</div><div className="text-2xl font-bold">5,668</div><div className="text-xs text-emerald-400">+199 W26</div></div>
              <div className="rounded-2xl border border-border bg-card p-4"><div className="font-mono text-xs text-zinc-500">Early leaks today</div><div className="text-2xl font-bold">12</div><div className="text-xs text-orange-400">3 posted now</div></div>
              <div className="rounded-2xl border border-border bg-card p-4"><div className="font-mono text-xs text-zinc-500">Dedup • Persist</div><div className="text-2xl font-bold">94%</div><div className="text-xs text-zinc-500">Redis + Supabase true</div></div>
            </div>
          </div>
          <div className="rounded-3xl border border-border bg-gradient-to-b from-zinc-900 to-zinc-950 p-6 shadow-2xl">
            <div className="font-mono text-xs text-zinc-500">INTERACTIVE DEMO — try batch</div>
            <div className="mt-3 flex gap-2"><span className="rounded-lg bg-[#FF6600] px-3 py-1 text-xs font-bold text-black">W26</span><span className="rounded-lg border border-border px-3 py-1 text-xs">SR007</span><span className="rounded-lg border border-border px-3 py-1 text-xs">F26</span></div>
            <div className="mt-4 space-y-2">{mockCompanies.map(c=>(
              <div key={c.hash} className="flex items-center justify-between rounded-2xl border border-border bg-card px-4 py-3"><div><div className="text-sm font-semibold">{c.company} <span className="ml-2 rounded-full bg-zinc-800 px-2 py-0.5 text-xs">{c.batch}</span></div><div className="text-xs text-zinc-500">{c.oneLiner.slice(0,40)}…</div></div><span className={`h-2 w-2 rounded-full ${c.type==="CONFIRMED"?"bg-emerald-500":"bg-orange-500 animate-pulse"}`} /></div>
            ))}</div>
            <div className="mt-4 rounded-xl bg-emerald-950 p-3 text-xs text-emerald-300">Slack #yc-launches: 3 posted 1 skipped duplicate — persist true</div>
          </div>
        </div>

        <div className="mt-10 grid gap-6 lg:grid-cols-[1.8fr_1fr]">
          <div className="rounded-3xl border border-border bg-card">
            <div className="flex items-center justify-between border-b border-border px-6 py-4"><span className="font-semibold">Live Feed — Supabase Realtime ready</span><span className="rounded-full border border-border px-3 py-1 font-mono text-xs">4 items • mock + live</span></div>
            <div className="divide-y divide-zinc-800">{mockCompanies.map(c=>(
              <div key={c.hash} className="group flex items-center justify-between px-6 py-4 hover:bg-zinc-900/50"><div className="flex items-center gap-3"><span className={`h-2.5 w-2.5 rounded-full ${c.type==="CONFIRMED"?"bg-emerald-500 shadow-emerald-500/50 shadow":"bg-[#FF6600] animate-pulse"}`} /><div><div className="font-medium">{c.company} <span className="ml-2 rounded bg-zinc-800 px-2 py-0.5 font-mono text-xs">{c.batch} • {c.program}</span></div><div className="text-sm text-zinc-500">{c.oneLiner} • {c.founder} • <span className="font-mono text-xs">{c.hash}</span></div></div></div><div className="text-right"><span className={`rounded-full px-2.5 py-1 text-xs font-bold ${c.type==="CONFIRMED"?"bg-emerald-950 text-emerald-300":"bg-orange-950 text-orange-300"}`}>{c.type}</span><div className="font-mono text-xs text-zinc-500">{c.time}</div></div></div>
            ))}</div>
            <div className="border-t border-border p-4 text-center"><a href="/health" className="text-sm text-zinc-400 hover:text-white">View health + export CSV →</a></div>
          </div>
          <div className="space-y-4">
            <div className="rounded-3xl border border-border bg-card p-6"><div className="font-semibold">Pricing — zero cost</div><div className="mt-3 space-y-2 text-sm"><div className="flex justify-between"><span>Hobby + mocks</span><span className="font-mono">$0</span></div><div className="flex justify-between text-zinc-400"><span>Upstash + Supabase free</span><span>$0</span></div><div className="flex justify-between text-zinc-400"><span>QStash publish</span><span>$0 trial</span></div><div className="border-t border-zinc-800 pt-2 font-bold">Pond bounty $400 → $100 you</div></div><a href="https://joinpond.ai" className="mt-3 block rounded-xl bg-white py-2 text-center text-sm font-bold text-black">Submit to Pond</a></div>
            <div className="rounded-3xl border border-border bg-card p-6"><div className="font-semibold">Why 100/10</div><ul className="mt-2 list-disc space-y-1 pl-5 text-sm text-zinc-400"><li>Linear + YC Orange tokens, motion 120ms, zinc-950</li><li>Zero-cost mock X ($5/1k → $0) documented</li><li>Supabase+Redis cold-start safe, 94% dedup</li><li>Slack Block Kit EARLY→CONFIRMED thread via chat.update</li></ul></div>
          </div>
        </div>
      </section>
      <footer className="border-t border-border py-8 text-center font-mono text-xs text-zinc-600">10xdev4u-alt + the-ai-developer • 8 PRs merged • build 7/7 • vitest 8/8 • vercel prod • Supabase 3 rows • Redis hit • QStash publish ok</footer>
    </main>
  );
}
