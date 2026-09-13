"use client";

import Link from "next/link";
import { motion, useReducedMotion } from "framer-motion";
import { ArrowRight, MessageCircle, MoveDown } from "lucide-react";

const discordUrl = process.env.NEXT_PUBLIC_DISCORD_INVITE_URL ?? "https://discord.gg/entitystudios";

const word = (text: string, delay: number) => ({
  initial: { opacity: 0, y: 34, filter: "blur(8px)" },
  animate: { opacity: 1, y: 0, filter: "blur(0px)" },
  transition: { duration: 0.8, delay, ease: [0.22, 1, 0.36, 1] },
  children: text,
});

export function HomeHero() {
  const reducedMotion = useReducedMotion();
  const transition = (delay: number) => reducedMotion ? { duration: 0 } : { duration: 0.8, delay, ease: [0.22, 1, 0.36, 1] as const };
  return (
    <section className="relative flex min-h-[min(810px,calc(100svh-72px))] items-center overflow-hidden pb-24 pt-16 sm:pt-20" aria-labelledby="hero-heading">
      <div className="grid-pattern" />
      <div className="noise" />
      <motion.div aria-hidden="true" animate={reducedMotion ? {} : { y: [0, -16, 0], rotate: [0, 3, 0] }} transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }} className="absolute left-[8%] top-[17%] h-36 w-36 rounded-full border border-[#c5a1ff]/20 bg-[#a979ff]/10 blur-[1px]" />
      <motion.div aria-hidden="true" animate={reducedMotion ? {} : { y: [0, 24, 0], x: [0, -14, 0] }} transition={{ duration: 16, repeat: Infinity, ease: "easeInOut" }} className="absolute right-[7%] top-[19%] h-64 w-64 rounded-full bg-[#6352ef]/15 blur-[55px]" />
      <div aria-hidden="true" className="absolute left-1/2 top-1/2 h-[600px] w-[600px] -translate-x-1/2 -translate-y-1/2 rounded-full border border-white/[.055]" />
      <div aria-hidden="true" className="absolute left-1/2 top-1/2 h-[420px] w-[420px] -translate-x-1/2 -translate-y-1/2 rounded-full border border-white/[.045]" />
      <div aria-hidden="true" className="absolute left-1/2 top-1/2 h-[780px] w-[780px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#7f59e9]/[.09] blur-[110px]" />

      <div className="site-container relative z-10 pt-6 text-center">
        <motion.p initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={transition(.1)} className="mx-auto inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[.035] px-3.5 py-2 text-[11px] font-semibold tracking-[.12em] text-[#d8c5ff] uppercase">
          <span className="status-dot" /> Built for Discord communities
        </motion.p>
        <h1 id="hero-heading" className="display-title mx-auto mt-7 max-w-5xl text-[clamp(3.45rem,9vw,8rem)]">
          <motion.span {...word("One Studio.", .2)} className="block">One Studio.</motion.span>
          <motion.span {...word("Infinite Possibilities.", .34)} className="gradient-text block">Infinite Possibilities.</motion.span>
        </h1>
        <motion.p initial={{ opacity: 0, y: 18 }} animate={{ opacity: 1, y: 0 }} transition={transition(.52)} className="mx-auto mt-7 max-w-2xl text-[1.05rem] leading-7 text-mist sm:text-lg">
          Entity Studios builds powerful Discord bots, communities, and digital experiences designed to make your server better.
        </motion.p>
        <motion.div initial={{ opacity: 0, y: 14 }} animate={{ opacity: 1, y: 0 }} transition={transition(.64)} className="mt-9 flex flex-col justify-center gap-3 sm:flex-row">
          <Link href="/bots" className="button-primary px-6">Explore our bots <ArrowRight className="h-4 w-4" /></Link>
          <a href={discordUrl} target="_blank" rel="noreferrer" className="button-secondary px-6"><MessageCircle className="h-4 w-4" />Join Discord</a>
        </motion.div>
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={transition(.86)} className="mt-16 flex justify-center gap-8 text-left sm:mt-20">
          {[['01', 'Discover'], ['02', 'Invite'], ['03', 'Belong']].map(([number, label], index) => <div key={number} className="relative flex items-center gap-2.5 text-xs text-mist"><span className="font-mono text-[10px] text-[#b795f0]">{number}</span><span className="font-semibold text-[#ded9e8]">{label}</span>{index < 2 ? <span className="absolute -right-5 hidden h-px w-3 bg-white/20 sm:block" /> : null}</div>)}
        </motion.div>
      </div>
      <a href="#ecosystem" aria-label="Scroll to the Entity Studios ecosystem" className="absolute bottom-7 left-1/2 inline-flex -translate-x-1/2 flex-col items-center gap-2 text-[10px] font-semibold uppercase tracking-[.15em] text-mist transition-colors hover:text-white"><span>Scroll to explore</span><MoveDown className="h-4 w-4 animate-bounce" /></a>
    </section>
  );
}
