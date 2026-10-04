import Image from "next/image";
import Link from "next/link";
import type { CSSProperties } from "react";
import {
  ArrowRight, Backpack, BookOpen, Check, Coins, Crown, Gamepad2, Gem,
  MessageCircle, Shield, ShoppingBag, Sparkles, Swords, Trophy, UsersRound,
} from "lucide-react";
import type { LucideIcon } from "lucide-react";
import type { Bot } from "@/lib/models";
import { getBotById, getProductsForBot } from "@/lib/catalog";
import { BotGallery } from "@/components/bots/BotGallery";
import { BotHero } from "@/components/bots/BotHero";
import { RpgShowcase } from "@/components/bots/RpgShowcase";
import { ProductCard } from "@/components/ui/ProductCard";
import { BotThemeLayer } from "@/components/ui/BotThemeLayer";
import { FaqList } from "@/components/ui/FaqList";
import { Reveal } from "@/components/ui/Reveal";

const featureIcons: Record<string, LucideIcon> = {
  sparkles: Sparkles, swords: Swords, trophy: Trophy, users: UsersRound,
  shield: Shield, "shopping-bag": ShoppingBag, "gamepad-2": Gamepad2,
};

export function BotExperience({ bot }: { bot: Bot }) {
  const products = getProductsForBot(bot.id);
  const communityUrl = bot.discordUrl ?? process.env.NEXT_PUBLIC_DISCORD_INVITE_URL ?? "https://discord.gg/entitystudios";
  const themeStyle = {
    "--bot-bg": bot.theme.backgroundColor,
    "--bot-primary": bot.theme.primaryColor,
    "--bot-secondary": bot.theme.secondaryColor,
    "--bot-accent": bot.theme.accentColor,
    "--bot-glow": bot.theme.glowColor ?? bot.theme.primaryColor,
    "--bot-overlay": bot.theme.overlay ?? "linear-gradient(90deg, rgba(8,7,13,.96) 0%, rgba(8,7,13,.73) 44%, rgba(8,7,13,.2) 100%)",
    "--bot-card": bot.theme.cardBackground ?? "rgba(20,17,29,.76)",
  } as CSSProperties;
  const gallery = (bot.screenshots ?? []).map((src, index) => ({
    src,
    alt: bot.name + " representative interface preview " + (index + 1),
    title: ["Character profile", "Quest journal", "Realm inventory"][index] ?? "Interface preview " + (index + 1),
    label: ["Character", "Adventure", "Collectibles"][index] ?? "Preview",
  }));

  return (
    <div className="bot-world relative isolate overflow-clip" style={themeStyle}>
      <BotThemeLayer theme={bot.theme} />
      <div className="relative z-10">
        <BotHero bot={bot} productCount={products.length} />

        <section id="bot-overview" className="section" aria-labelledby="bot-overview-title">
          <div className="site-container grid items-start gap-10 lg:grid-cols-[.85fr_1.15fr] lg:gap-20">
            <Reveal>
              <p className="eyebrow">What is {bot.name}?</p>
              <h2 id="bot-overview-title" className="section-title">An experience built around <span className="text-[var(--bot-accent)]">{bot.name}.</span></h2>
              <p className="section-copy">{bot.description}</p>
            </Reveal>
            <Reveal delay={0.1}>
              <div className="relative overflow-hidden rounded-[26px] border border-white/10 bg-[var(--bot-card)] p-6 backdrop-blur-xl sm:p-8">
                <div className="pointer-events-none absolute -right-20 -top-24 h-64 w-64 rounded-full bg-[var(--bot-primary)]/15 blur-[90px]" />
                <div className="relative flex items-center justify-between gap-5">
                  <div><p className="text-[10px] font-bold uppercase tracking-[.18em] text-[var(--bot-accent)]">The idea</p><h3 className="mt-2 text-2xl font-semibold tracking-[-.04em] text-white">A reason to return.</h3></div>
                  <span className="grid h-12 w-12 place-items-center rounded-2xl border border-[var(--bot-accent)]/20 bg-[var(--bot-primary)]/10 text-[var(--bot-accent)]"><Sparkles className="h-5 w-5" /></span>
                </div>
                <p className="relative mt-5 text-sm leading-7 text-white/65">{bot.shortDescription} Build momentum through small wins, meaningful choices, and shared community moments.</p>
                <div className="relative mt-6 flex flex-wrap gap-2">{bot.featureHighlights.map((highlight) => <span key={highlight} className="rounded-full border border-white/10 bg-white/[.035] px-3 py-1.5 text-[10px] font-medium text-white/70">{highlight}</span>)}</div>
              </div>
            </Reveal>
          </div>
        </section>

        {bot.stats?.length ? (
          <section className="border-y border-white/[.08] bg-black/15 py-7" aria-label={bot.name + " at a glance"}>
            <div className="site-container grid gap-5 sm:grid-cols-3">
              {bot.stats.map((stat, index) => (
                <Reveal key={stat.label} delay={index * 0.05}>
                  <div className="flex items-center gap-4 sm:justify-center">
                    <span className="text-2xl font-semibold tracking-[-.05em] text-white">{stat.value}</span>
                    <span className="border-l border-white/10 pl-4"><span className="block text-[10px] font-bold uppercase tracking-[.14em] text-[var(--bot-accent)]">{stat.label}</span>{stat.description ? <span className="mt-1 block text-[10px] text-white/45">{stat.description}</span> : null}</span>
                  </div>
                </Reveal>
              ))}
            </div>
          </section>
        ) : null}

        <section className="section" aria-labelledby="features-title">
          <div className="site-container">
            <Reveal><p className="eyebrow">Core features</p><h2 id="features-title" className="section-title max-w-3xl">Explore what <span className="text-[var(--bot-accent)]">{bot.name} can do.</span></h2><p className="section-copy">Discover the systems and tools that make this experience useful to your community.</p></Reveal>
            <div className="mt-12 grid gap-4 sm:grid-cols-2 xl:grid-cols-3">
              {bot.features.map((feature, index) => {
                const Icon = featureIcons[feature.icon ?? "sparkles"] ?? Sparkles;
                return <Reveal key={feature.title} delay={Math.min(index * 0.04, 0.2)}><article className="group h-full rounded-[21px] border border-white/10 bg-[var(--bot-card)] p-5 backdrop-blur-md transition duration-300 hover:-translate-y-1 hover:border-[var(--bot-accent)]/35 hover:shadow-[0_20px_55px_rgba(0,0,0,.22)] sm:p-6"><span className="grid h-11 w-11 place-items-center rounded-xl border border-[var(--bot-accent)]/20 bg-[var(--bot-primary)]/10 text-[var(--bot-accent)] transition-transform duration-300 group-hover:scale-105"><Icon className="h-5 w-5" /></span><h3 className="mt-5 text-lg font-semibold tracking-[-.03em] text-white">{feature.title}</h3><p className="mt-2 text-sm leading-6 text-white/55">{feature.description}</p></article></Reveal>;
              })}
            </div>
          </div>
        </section>

        {bot.journey?.length ? (
          <section className="section border-y border-white/[.08] bg-black/20" aria-labelledby="journey-title">
            <div className="site-container grid gap-12 lg:grid-cols-[.8fr_1.2fr]">
              <Reveal><p className="eyebrow">How it works</p><h2 id="journey-title" className="section-title">Start simply. <span className="text-[var(--bot-accent)]">Go further.</span></h2><p className="section-copy">An easy first step opens the way to more of what {bot.name} offers.</p></Reveal>
              <div className="space-y-3">{bot.journey.map((step, index) => <Reveal key={step.title} delay={index * 0.07}><article className="flex gap-4 rounded-[19px] border border-white/[.08] bg-white/[.025] p-5"><span className="grid h-9 w-9 shrink-0 place-items-center rounded-full border border-[var(--bot-accent)]/25 bg-[var(--bot-bg)] font-mono text-xs text-[var(--bot-accent)]">0{index + 1}</span><span><h3 className="text-base font-semibold text-white">{step.title}</h3><p className="mt-1.5 text-sm leading-6 text-white/55">{step.description}</p></span></article></Reveal>)}</div>
            </div>
          </section>
        ) : null}

        {bot.showcase ? (
          <section className="section" aria-labelledby="rpg-showcase-title">
            <div className="site-container grid items-end gap-8 lg:grid-cols-[.7fr_1.3fr]">
              <Reveal><p className="eyebrow">A look inside</p><h2 id="rpg-showcase-title" className="section-title">See the experience <span className="text-[var(--bot-accent)]">in context.</span></h2><p className="section-copy">This representative interface concept shows how a player&apos;s profile, progress, inventory, and rewards could come together.</p><ul className="mt-6 space-y-3" role="list">{["See progress at a glance", "Explore abilities and inventory", "Understand how rewards connect to activity"].map((item) => <li key={item} className="flex items-center gap-2.5 text-sm text-white/70"><Check className="h-4 w-4 text-[var(--bot-accent)]" />{item}</li>)}</ul></Reveal>
              <Reveal delay={0.12}><RpgShowcase showcase={bot.showcase} /></Reveal>
            </div>
          </section>
        ) : null}

        {bot.collection ? <section className="section border-y border-white/[.08] bg-black/20" aria-labelledby="character-title">
          <div className="site-container grid items-center gap-10 lg:grid-cols-2 lg:gap-20">
            <Reveal>
              <div className="relative mx-auto max-w-md"><div className="absolute inset-8 rounded-full bg-[var(--bot-primary)]/20 blur-[80px]" />
                <div className="relative overflow-hidden rounded-[28px] border border-white/10 bg-gradient-to-br from-[var(--bot-primary)]/30 via-[#17131f] to-[var(--bot-bg)] p-6 sm:p-8">
                  <div className="relative flex aspect-[4/3] items-center justify-center overflow-hidden rounded-[22px] border border-white/10 bg-black/15"><Image src={bot.banner ?? bot.logo} alt={bot.name + " world artwork"} fill sizes="(max-width: 1024px) 90vw, 40vw" className="object-cover opacity-80 mix-blend-screen" /><span className="absolute inset-0 bg-gradient-to-t from-[#100d19]/80 via-transparent to-transparent" /><span className="absolute bottom-5 left-5"><span className="block text-[9px] font-bold uppercase tracking-[.18em] text-[var(--bot-accent)]">{bot.collection.eyebrow}</span><span className="mt-1 block text-xl font-semibold text-white">{bot.collection.artworkCaption}</span></span></div>
                  <div className="mt-4 flex items-center justify-between rounded-2xl border border-white/10 bg-black/20 px-4 py-3"><span className="inline-flex items-center gap-2 text-xs font-medium text-white/75"><Trophy className="h-4 w-4 text-[var(--bot-accent)]" />Milestones worth keeping</span><span className="text-[10px] text-white/40">PROFILE PREVIEW</span></div>
                </div>
              </div>
            </Reveal>
            <Reveal delay={0.1}>
              <p className="eyebrow">{bot.collection.eyebrow}</p><h2 id="character-title" className="section-title">{bot.collection.headline}</h2><p className="section-copy">{bot.collection.description}</p>
              <div className="mt-7 grid gap-3 sm:grid-cols-2">{bot.collection.items.map((item) => <div key={item.title} className="rounded-2xl border border-white/[.08] bg-white/[.025] p-4"><h3 className="text-sm font-semibold text-white">{item.title}</h3><p className="mt-1.5 text-xs leading-5 text-white/50">{item.description}</p></div>)}</div>
            </Reveal>
          </div>
        </section> : null}

        {gallery.length ? (
          <section className="section" aria-labelledby="gallery-title">
            <div className="site-container"><div className="mb-10 flex flex-col justify-between gap-5 sm:flex-row sm:items-end">
              <Reveal><p className="eyebrow">The showcase</p><h2 id="gallery-title" className="section-title">A glimpse of the <span className="text-[var(--bot-accent)]">realms.</span></h2><p className="section-copy">These interface concepts are easy to replace with captured product screens as they become available.</p></Reveal>
              <Reveal><span className="rounded-full border border-white/10 bg-white/[.03] px-3 py-2 text-[10px] font-semibold uppercase tracking-[.13em] text-white/45">Preview artwork</span></Reveal>
            </div><BotGallery images={gallery} /></div>
          </section>
        ) : null}

        {bot.commands?.length ? (
          <section className="section border-y border-white/[.08] bg-black/20" aria-labelledby="commands-title">
            <div className="site-container grid gap-10 lg:grid-cols-[.8fr_1.2fr]">
              <Reveal><p className="eyebrow">Command guide</p><h2 id="commands-title" className="section-title">Simple ways to <span className="text-[var(--bot-accent)]">begin.</span></h2><p className="section-copy">A few familiar entry points can help players explore the core loops.</p>{bot.commandStatus === "representative" ? <p className="mt-5 inline-flex max-w-md items-start gap-2 rounded-xl border border-amber-200/15 bg-amber-200/[.04] p-3 text-xs leading-5 text-amber-100/70"><BookOpen className="mt-0.5 h-4 w-4 shrink-0" />Representative command examples. Confirm the live commands before publishing this guide.</p> : null}</Reveal>
              <div className="overflow-hidden rounded-[23px] border border-white/10 bg-[#0d0b13]">{bot.commands.map((command, index) => <div key={command.command} className={"flex flex-col gap-2 px-5 py-4 sm:flex-row sm:items-center sm:justify-between sm:gap-6 " + (index > 0 ? "border-t border-white/[.08]" : "")}><span className="flex items-center gap-3"><span className="grid h-8 w-8 place-items-center rounded-lg bg-[var(--bot-primary)]/15 text-[var(--bot-accent)]"><span className="font-mono text-xs">/</span></span><span><code className="text-sm font-semibold text-white">{command.command}</code>{command.category ? <span className="ml-2 text-[9px] uppercase tracking-[.11em] text-white/35">{command.category}</span> : null}</span></span><span className="text-xs leading-5 text-white/50 sm:max-w-[310px] sm:text-right">{command.description}</span></div>)}</div>
            </div>
          </section>
        ) : null}

        {bot.premiumFeatures?.length ? (
          <section id="products" className="section" aria-labelledby="premium-title">
            <div className="site-container">
              <div className="flex flex-col justify-between gap-7 md:flex-row md:items-end">
                <Reveal><p className="eyebrow">Optional upgrades</p><h2 id="premium-title" className="section-title">A little extra <span className="text-[var(--bot-accent)]">magic.</span></h2><p className="section-copy">Enhance customization and progression with optional digital products. Core play stays at the center.</p></Reveal>
                <Reveal><Link href={"/store?bot=" + encodeURIComponent(bot.name)} className="button-secondary">Open {bot.name} store <ArrowRight className="h-4 w-4" /></Link></Reveal>
              </div>
              <div className="mt-8 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">{bot.premiumFeatures.map((feature) => <div key={feature} className="flex items-start gap-3 rounded-2xl border border-white/[.08] bg-white/[.025] p-4"><span className="grid h-7 w-7 shrink-0 place-items-center rounded-lg bg-[var(--bot-primary)]/15 text-[var(--bot-accent)]"><Check className="h-4 w-4" /></span><p className="text-sm leading-5 text-white/70">{feature}</p></div>)}</div>
              {products.length ? <div className="mt-10 grid gap-4 sm:grid-cols-2 xl:grid-cols-3">{products.map((product, index) => <Reveal key={product.id} delay={Math.min(index * 0.04, 0.2)}><ProductCard product={product} bot={getBotById(product.botId)} compact /></Reveal>)}</div> : <p className="mt-8 text-sm text-white/50">Products for this bot will appear here as they are added to the catalog.</p>}
            </div>
          </section>
        ) : null}

        {bot.faq?.length ? (
          <section className="section border-y border-white/[.08] bg-black/20" aria-labelledby="faq-title">
            <div className="site-container grid gap-10 lg:grid-cols-[.7fr_1.3fr]"><Reveal><p className="eyebrow">Good to know</p><h2 id="faq-title" className="section-title">Questions before <span className="text-[var(--bot-accent)]">you begin?</span></h2><p className="section-copy">A few quick answers about {bot.name} and getting started.</p></Reveal><Reveal delay={0.1}><FaqList items={bot.faq} /></Reveal></div>
          </section>
        ) : null}

        <section className="section" aria-labelledby="bot-community-title">
          <div className="site-container"><Reveal><div className="relative overflow-hidden rounded-[30px] border border-white/10 bg-[var(--bot-card)] px-7 py-10 backdrop-blur-xl sm:px-11 sm:py-14">
            <div className="pointer-events-none absolute -right-20 -top-24 h-80 w-80 rounded-full bg-[var(--bot-primary)]/20 blur-[95px]" />
            <div className="relative grid items-center gap-8 lg:grid-cols-[1fr_auto]">
              <div><p className="eyebrow">The journey is better together</p><h2 id="bot-community-title" className="max-w-2xl text-[clamp(2rem,4.4vw,3.75rem)] font-semibold leading-[1.02] tracking-[-.055em] text-white">Find your people in <span className="text-[var(--bot-accent)]">the community.</span></h2><p className="mt-5 max-w-xl text-base leading-7 text-white/60">Meet other players, hear about events, ask for help, and follow what&apos;s coming next in {bot.name}.</p></div>
              <div className="flex flex-col gap-3 sm:flex-row lg:flex-col"><a href={communityUrl} target="_blank" rel="noreferrer" className="button-primary"><MessageCircle className="h-4 w-4" />Join the community</a><Link href={"/store?bot=" + encodeURIComponent(bot.name)} className="button-secondary"><Crown className="h-4 w-4" />Explore the store</Link></div>
            </div>
          </div></Reveal></div>
        </section>
      </div>
    </div>
  );
}
