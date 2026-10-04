import { Backpack, Bolt, CircleDot, Compass, Gem, Shield, Sparkles, Swords, Trophy } from "lucide-react";
import type { BotShowcase } from "@/lib/models";

export function RpgShowcase({ showcase }: { showcase: BotShowcase }) {
  const progress = Math.max(0, Math.min(100, (showcase.experience / showcase.nextLevelExperience) * 100));
  return (
    <div className="relative overflow-hidden rounded-[26px] border border-white/10 bg-[#100d19]/90 p-4 shadow-2xl backdrop-blur-xl sm:p-6">
      <div className="pointer-events-none absolute -right-20 -top-24 h-64 w-64 rounded-full bg-[var(--bot-primary)]/20 blur-[90px]" />
      <div className="relative flex items-center justify-between border-b border-white/10 pb-4">
        <div><p className="text-[10px] font-bold uppercase tracking-[.17em] text-white/40">Player profile · demo</p><h3 className="mt-1 text-lg font-semibold text-white">The Adventurer&apos;s Ledger</h3></div>
        <span className="inline-flex items-center gap-1.5 rounded-full border border-[var(--bot-primary)]/30 bg-[var(--bot-primary)]/10 px-2.5 py-1 text-[10px] font-semibold uppercase tracking-[.1em] text-[var(--bot-accent)]"><Sparkles className="h-3 w-3" />Preview</span>
      </div>
      <div className="relative mt-5 grid gap-4 lg:grid-cols-[1.12fr_.88fr]">
        <section className="rounded-[20px] border border-white/10 bg-gradient-to-br from-[var(--bot-primary)]/15 via-[#181321] to-[#0d0c13] p-5" aria-label="Representative character profile">
          <div className="flex items-start gap-4">
            <div className="relative grid h-[76px] w-[76px] shrink-0 place-items-center overflow-hidden rounded-2xl border border-[var(--bot-accent)]/30 bg-[var(--bot-primary)]/20 text-[var(--bot-accent)]"><div className="absolute inset-0 bg-gradient-to-br from-white/15 to-transparent" /><Sparkles className="relative h-8 w-8" /></div>
            <div className="min-w-0 flex-1"><p className="text-[10px] font-semibold uppercase tracking-[.14em] text-[var(--bot-accent)]">{showcase.characterRarity} · {showcase.characterClass}</p><h4 className="mt-1 text-xl font-semibold tracking-[-.035em] text-white">{showcase.characterName}</h4><p className="mt-1 text-xs text-white/50">Level {showcase.level} <span aria-hidden="true">·</span> Adventure rank</p></div>
            <div className="grid h-10 w-10 place-items-center rounded-xl border border-white/10 bg-white/[.04] text-white/70"><Shield className="h-4 w-4" /></div>
          </div>
          <div className="mt-6"><div className="flex justify-between text-[10px] font-semibold text-white/55"><span>EXPERIENCE</span><span>{showcase.experience.toLocaleString()} / {showcase.nextLevelExperience.toLocaleString()} XP</span></div><div className="mt-2 h-2 overflow-hidden rounded-full bg-white/10"><div className="h-full rounded-full bg-gradient-to-r from-[var(--bot-primary)] to-[var(--bot-accent)]" style={{ width: `${progress}%` }} /></div></div>
          <div className="mt-5 grid grid-cols-3 gap-2">{showcase.stats.map((stat) => <div key={stat.label} className="rounded-xl border border-white/[.07] bg-black/20 p-3"><p className="text-[9px] font-semibold uppercase tracking-[.12em] text-white/40">{stat.label}</p><p className="mt-1 text-base font-semibold text-white">{stat.value}</p></div>)}</div>
          <div className="mt-5"><p className="text-[9px] font-semibold uppercase tracking-[.15em] text-white/40">Known abilities</p><div className="mt-2 flex flex-wrap gap-2">{showcase.abilities.map((ability) => <span key={ability} className="inline-flex items-center gap-1.5 rounded-full border border-white/10 bg-white/[.04] px-2.5 py-1.5 text-[10px] font-medium text-white/75"><Bolt className="h-3 w-3 text-[var(--bot-accent)]" />{ability}</span>)}</div></div>
        </section>
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-1">
          <section className="rounded-[20px] border border-white/10 bg-[#17131f]/75 p-5" aria-label="Representative inventory">
            <div className="flex items-center justify-between"><h4 className="inline-flex items-center gap-2 text-sm font-semibold text-white"><Backpack className="h-4 w-4 text-[var(--bot-accent)]" /> Field inventory</h4><span className="text-[10px] text-white/40">DEMO</span></div>
            <ul className="mt-4 space-y-2" role="list">{showcase.inventory.map((item, index) => <li key={item.name} className="flex items-center gap-3 rounded-xl border border-white/[.07] bg-black/15 px-3 py-2.5"><span className="grid h-9 w-9 place-items-center rounded-lg bg-[var(--bot-primary)]/15 text-[var(--bot-accent)]">{index === 0 ? <Gem className="h-4 w-4" /> : index === 1 ? <Swords className="h-4 w-4" /> : <CircleDot className="h-4 w-4" />}</span><span className="min-w-0 flex-1"><span className="block truncate text-xs font-medium text-white/85">{item.name}</span><span className="mt-0.5 block text-[10px] text-white/40">{item.detail}</span></span></li>)}</ul>
          </section>
          <section className="relative flex flex-col justify-between overflow-hidden rounded-[20px] border border-[var(--bot-accent)]/20 bg-gradient-to-br from-[var(--bot-primary)]/20 to-[#17131f] p-5" aria-label="Representative quest reward">
            <div className="pointer-events-none absolute -bottom-10 -right-10 h-28 w-28 rounded-full border border-white/10" /><div className="pointer-events-none absolute -bottom-6 -right-6 h-16 w-16 rounded-full border border-white/[.08]" />
            <div className="relative"><p className="inline-flex items-center gap-1.5 text-[9px] font-bold uppercase tracking-[.15em] text-[var(--bot-accent)]"><Trophy className="h-3 w-3" />Quest cleared · demo</p><h4 className="mt-3 text-lg font-semibold leading-tight text-white">The road always opens forward.</h4><p className="mt-2 text-xs leading-5 text-white/55">A representative reward moment from a possible quest flow.</p></div>
            <div className="relative mt-5 flex items-center gap-2 rounded-xl border border-white/10 bg-black/20 px-3 py-2.5 text-xs font-medium text-white/80"><Compass className="h-4 w-4 text-[var(--bot-accent)]" />{showcase.reward}</div>
          </section>
        </div>
      </div>
      <p className="relative mt-4 text-[10px] leading-4 text-white/40">Representative interface concept only. Final bot systems, balance, commands, and rewards depend on the live Anime Realms implementation.</p>
    </div>
  );
}
