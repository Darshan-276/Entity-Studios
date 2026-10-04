"use client";

import Image from "next/image";
import Link from "next/link";
import { motion, useReducedMotion, useScroll, useTransform } from "framer-motion";
import { ArrowDown, ArrowRight, MessageCircle, ShieldCheck, Sparkles } from "lucide-react";
import { useRef } from "react";
import type { Bot } from "@/lib/models";

export function BotHero({ bot, productCount }: { bot: Bot; productCount: number }) {
  const reduceMotion = useReducedMotion();
  const heroRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({ target: heroRef, offset: ["start start", "end start"] });
  const artY = useTransform(scrollYProgress, [0, 1], [0, reduceMotion ? 0 : 84]);
  const artScale = useTransform(scrollYProgress, [0, 1], [1, reduceMotion ? 1 : 1.07]);
  const art = bot.theme.heroBackground ?? bot.banner;
  const mobileArt = bot.theme.mobileBackgroundImage ?? art;
  const inviteUrl = bot.inviteUrl;
  const communityUrl = bot.discordUrl ?? process.env.NEXT_PUBLIC_DISCORD_INVITE_URL ?? "https://discord.gg/entitystudios";
  const storeUrl = `/store?bot=${encodeURIComponent(bot.name)}`;

  return (
    <section ref={heroRef} className="relative flex min-h-[680px] items-center overflow-hidden border-b border-white/[.08] py-20 sm:min-h-[760px] sm:py-24" aria-labelledby="bot-hero-title">
      <div className="absolute inset-0 bg-[var(--bot-bg)]" />
      {art ? (
        <motion.div aria-hidden="true" className="absolute inset-0" style={{ y: artY, scale: artScale }}>
          <Image src={art} alt="" fill priority sizes="100vw" className="bot-hero-art hidden object-cover object-[68%_center] sm:block" />
          <Image src={mobileArt ?? art} alt="" fill priority sizes="100vw" className="bot-hero-art object-cover object-[66%_center] sm:hidden" />
        </motion.div>
      ) : null}
      <div aria-hidden="true" className="absolute inset-0 bg-[var(--bot-overlay)]" />
      <div aria-hidden="true" className="absolute inset-0 bg-gradient-to-t from-[var(--bot-bg)] via-transparent to-[var(--bot-bg)]/35" />
      <div aria-hidden="true" className="absolute inset-0 opacity-25 [background-image:linear-gradient(rgba(255,255,255,.08)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,.08)_1px,transparent_1px)] [background-size:72px_72px] [mask-image:linear-gradient(to_right,black,transparent_92%)]" />
      <div aria-hidden="true" className="bot-hero-aurora absolute -right-36 top-16 h-[440px] w-[440px] rounded-full blur-[130px]" />
      <div className="site-container relative z-10">
        <div className="max-w-[650px]">
          <motion.div initial={reduceMotion ? false : { opacity: 0, y: 14 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: .65, ease: [0.22, 1, 0.36, 1] }} className="flex flex-wrap items-center gap-2.5">
            <span className="rounded-full border border-white/20 bg-black/25 px-3 py-1.5 text-[10px] font-bold uppercase tracking-[.16em] text-[var(--bot-accent)] backdrop-blur-md">{bot.category}</span>
            <span className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-black/25 px-3 py-1.5 text-[11px] font-semibold capitalize text-white/90 backdrop-blur-md"><span className={`status-dot ${bot.status === "beta" ? "beta" : ""}`} />{bot.status.replace("-", " ")}</span>
          </motion.div>
          <motion.div initial={reduceMotion ? false : { opacity: 0, y: 22, filter: "blur(8px)" }} animate={{ opacity: 1, y: 0, filter: "blur(0px)" }} transition={{ duration: .75, delay: .08, ease: [0.22, 1, 0.36, 1] }} className="mt-7 flex items-center gap-4 sm:gap-5">
            <span className="relative grid h-[62px] w-[62px] shrink-0 place-items-center overflow-hidden rounded-[18px] border border-white/20 bg-black/35 p-2.5 shadow-[0_12px_50px_var(--bot-glow)] backdrop-blur-md sm:h-[76px] sm:w-[76px]">
              <Image src={bot.logo} alt={`${bot.name} crest`} width={56} height={56} className="h-full w-full object-contain" priority />
            </span>
            <div><p className="text-[10px] font-bold uppercase tracking-[.23em] text-white/55">An Entity Studios world</p><h1 id="bot-hero-title" className="mt-1 text-3xl font-semibold tracking-[-.055em] text-white sm:text-5xl">{bot.name}</h1></div>
          </motion.div>
          <motion.h2 initial={reduceMotion ? false : { opacity: 0, y: 22 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: .7, delay: .2, ease: [0.22, 1, 0.36, 1] }} className="mt-8 max-w-[630px] text-[clamp(2.8rem,7.1vw,5.75rem)] font-semibold leading-[.98] tracking-[-.065em] text-white">
            {bot.heroHeadline ?? `${bot.name} for your community.`} {bot.heroAccent ? <span className="text-[var(--bot-accent)]">{bot.heroAccent}</span> : null}
          </motion.h2>
          <motion.p initial={reduceMotion ? false : { opacity: 0, y: 18 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: .65, delay: .31, ease: [0.22, 1, 0.36, 1] }} className="mt-6 max-w-xl text-base leading-7 text-white/70 sm:text-lg sm:leading-8">
            {bot.heroDescription ?? bot.description}
          </motion.p>
          <motion.div initial={reduceMotion ? false : { opacity: 0, y: 14 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: .6, delay: .43, ease: [0.22, 1, 0.36, 1] }} className="mt-8 flex flex-col gap-3 sm:flex-row">
            {inviteUrl ? <a href={inviteUrl} target="_blank" rel="noreferrer" className="button-primary px-5"><Sparkles className="h-4 w-4" />Invite to Discord</a> : <button type="button" disabled title="An invite URL will be available after the Discord application is configured" className="button-primary cursor-not-allowed px-5 opacity-65"><ShieldCheck className="h-4 w-4" />Invite link coming soon</button>}
            <Link href={storeUrl} className="button-secondary px-5">Explore the store <ArrowRight className="h-4 w-4" /></Link>
            <a href={communityUrl} target="_blank" rel="noreferrer" className="button-quiet px-4"><MessageCircle className="h-4 w-4" />Community</a>
          </motion.div>
          <motion.div initial={reduceMotion ? false : { opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: .55, delay: .62 }} className="mt-9 flex flex-wrap items-center gap-x-6 gap-y-2 text-xs text-white/55">
            <span className="inline-flex items-center gap-2"><span className="status-dot" />{bot.serverCount ? `${new Intl.NumberFormat("en-US", { notation: "compact" }).format(bot.serverCount)} servers` : "Community driven"}</span>
            <span className="inline-flex items-center gap-2"><Sparkles className="h-3.5 w-3.5 text-[var(--bot-accent)]" />{bot.features.length} ways to play</span>
            <span>{productCount} store {productCount === 1 ? "item" : "items"}</span>
          </motion.div>
        </div>
      </div>
      <a href="#bot-overview" aria-label="Scroll to the Anime Realms overview" className="absolute bottom-7 right-6 z-10 inline-flex items-center gap-2 text-[10px] font-semibold uppercase tracking-[.15em] text-white/55 hover:text-white sm:right-12"><span className="hidden sm:inline">Enter the realms</span><ArrowDown className="h-4 w-4" /></a>
    </section>
  );
}
