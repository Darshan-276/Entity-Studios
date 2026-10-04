import type { Metadata } from "next";
import Link from "next/link";
import { ArrowDown, ArrowRight, Orbit, Sparkles } from "lucide-react";
import { BotFilters } from "@/components/bots/BotFilters";
import { Reveal } from "@/components/ui/Reveal";
import { getBots } from "@/lib/catalog";

export const metadata: Metadata = {
  title: "Explore the Bots",
  description: "Explore the Discord experiences, tools, and worlds built by Entity Studios.",
  openGraph: { title: "Explore the Bots | Entity Studios", description: "Find a new world for your Discord community." },
};

export default function BotsPage() {
  const bots = getBots();
  return (
    <>
      <section className="relative overflow-hidden border-b border-white/[.08] pb-16 pt-28 sm:pb-20 sm:pt-36" aria-labelledby="bots-title">
        <div className="grid-pattern" /><div className="noise" />
        <div aria-hidden="true" className="animate-pulse-orb absolute -right-20 top-4 h-[420px] w-[420px] rounded-full bg-[#8959e6]/15 blur-[120px]" />
        <div aria-hidden="true" className="absolute left-[42%] top-20 h-[320px] w-[320px] rounded-full border border-white/[.045]" />
        <div className="site-container relative">
          <Reveal><p className="eyebrow">The bot universe</p><h1 id="bots-title" className="display-title max-w-4xl text-[clamp(3.4rem,8.8vw,7rem)]">Meet the <span className="gradient-text">Bots.</span></h1><p className="mt-6 max-w-2xl text-base leading-7 text-mist sm:text-lg sm:leading-8">Explore the Discord experiences, tools, and worlds built by Entity Studios. Each one brings a different way to make your community feel more alive.</p></Reveal>
          <Reveal delay={.12} className="mt-9 flex flex-wrap items-center gap-3"><a href="#discover" className="button-primary">Explore experiences <ArrowDown className="h-4 w-4" /></a><Link href="/about" className="button-secondary">How we build <ArrowRight className="h-4 w-4" /></Link></Reveal>
          <div className="mt-14 flex flex-wrap items-center gap-x-7 gap-y-3 border-t border-white/10 pt-5 text-xs text-mist"><span className="inline-flex items-center gap-2"><Orbit className="h-3.5 w-3.5 text-[#c5a2ff]" />One studio, many worlds</span><span className="inline-flex items-center gap-2"><Sparkles className="h-3.5 w-3.5 text-[#c5a2ff]" />Built for Discord communities</span></div>
        </div>
      </section>
      <section id="discover" className="section" aria-labelledby="discover-title"><div className="site-container"><div className="mb-9"><Reveal><p className="eyebrow">Choose your experience</p><h2 id="discover-title" className="text-2xl font-semibold tracking-[-.04em] text-white sm:text-3xl">Find your next world</h2><p className="mt-3 max-w-xl text-sm leading-6 text-mist">Browse by experience and open a bot to see its features, community, and store.</p></Reveal></div><BotFilters bots={bots} /></div></section>
      <section className="border-t border-white/[.08] bg-[#0b0b10] py-14"><div className="site-container"><Reveal><div className="flex flex-col justify-between gap-6 rounded-[24px] border border-white/10 bg-white/[.025] p-6 sm:flex-row sm:items-center sm:p-8"><div><p className="eyebrow">Always in progress</p><h2 className="text-2xl font-semibold tracking-[-.04em] text-white">A new experience is always possible.</h2><p className="mt-2 max-w-xl text-sm leading-6 text-mist">Our catalog grows as new ideas become useful tools and worlds for the community.</p></div><Link href="/discord" className="button-secondary shrink-0">Meet the community <ArrowRight className="h-4 w-4" /></Link></div></Reveal></div></section>
    </>
  );
}
