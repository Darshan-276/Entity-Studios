import Link from "next/link";
import { ArrowRight, Boxes, Crown, Gamepad2, HeartHandshake, MessageCircle, Orbit, ShoppingBag, Sparkles, UsersRound } from "lucide-react";
import { HomeHero } from "@/components/home/HomeHero";
import { BotCard } from "@/components/ui/BotCard";
import { ProductCard } from "@/components/ui/ProductCard";
import { Reveal } from "@/components/ui/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { getBotById, getFeaturedBots, getFeaturedProducts } from "@/lib/catalog";

const ecosystem = [
  { icon: Gamepad2, title: "Powerful bots", copy: "Custom-built Discord bots with distinct systems, personalities, and experiences." },
  { icon: ShoppingBag, title: "Digital marketplace", copy: "Premium upgrades, cosmetics, memberships, and products that make your experience yours." },
  { icon: UsersRound, title: "Community first", copy: "A home for support, events, collaboration, and the people building alongside us." },
  { icon: Orbit, title: "Always growing", copy: "New worlds, features, releases, and experiments are already in motion." },
] as const;

export default function HomePage() {
  const bots = getFeaturedBots();
  const products = getFeaturedProducts().slice(0, 3);
  return (
    <>
      <HomeHero />
      <section id="ecosystem" className="section border-y border-white/[.08] bg-[#0b0b10]" aria-labelledby="ecosystem-heading">
        <div className="site-container">
          <SectionHeading eyebrow="The Entity ecosystem" title={<>More than a bot.<br /><span className="gradient-text">A place to build.</span></>} copy="Entity Studios connects useful tools, rewarding experiences, and a community that keeps each world moving forward." />
          <div className="mt-14 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
            {ecosystem.map(({ icon: Icon, title, copy }, index) => <Reveal key={title} delay={index * .07}><article className="card-hover h-full rounded-[20px] border border-white/[.09] bg-white/[.025] p-6"><span className="grid h-11 w-11 place-items-center rounded-xl border border-[#c9adff]/20 bg-[#9f70ff]/10 text-[#c9adff]"><Icon className="h-5 w-5" /></span><h3 className="mt-6 text-lg font-semibold tracking-[-.03em] text-white">{title}</h3><p className="mt-3 text-sm leading-6 text-mist">{copy}</p></article></Reveal>)}
          </div>
        </div>
      </section>
      <section className="section overflow-hidden" aria-labelledby="bots-heading">
        <div className="pointer-events-none absolute right-[-160px] top-0 h-[480px] w-[480px] rounded-full bg-[#7a54e0]/[.11] blur-[120px]" />
        <div className="site-container relative">
          <div className="flex flex-col justify-between gap-8 md:flex-row md:items-end"><SectionHeading eyebrow="The bot universe" title={<>Meet the <span className="gradient-text">Bots</span></>} copy="Explore Discord experiences made to give your community more reasons to return." /><Reveal><Link href="/bots" className="button-secondary">View all bots <ArrowRight className="h-4 w-4" /></Link></Reveal></div>
          <div className="mt-12 grid gap-5 lg:grid-cols-2">{bots.map((bot, index) => <Reveal key={bot.id} delay={index * .09}><BotCard bot={bot} featured /></Reveal>)}</div>
          <div className="mt-7 flex flex-wrap items-center gap-3 rounded-[19px] border border-dashed border-white/15 bg-white/[.018] px-5 py-4 text-sm text-mist"><Sparkles className="h-4 w-4 text-[#bf9aff]" /><span>More worlds are in development.</span><Link href="/about" className="ml-auto font-semibold text-[#d8c5ff] hover:text-white">See what we&apos;re building <ArrowRight className="inline h-3.5 w-3.5" /></Link></div>
        </div>
      </section>
      <section className="section border-y border-white/[.08] bg-[#0c0b12]" aria-labelledby="store-heading">
        <div className="site-container"><div className="flex flex-col justify-between gap-8 md:flex-row md:items-end"><SectionHeading eyebrow="The marketplace" title={<>Make it <span className="gradient-text">yours.</span></>} copy="Curated upgrades and collectibles from the worlds you already play in." /><Reveal><Link href="/store" className="button-secondary">Visit the store <ShoppingBag className="h-4 w-4" /></Link></Reveal></div><div className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-3">{products.map((product, index) => <Reveal key={product.id} delay={index * .08}><ProductCard product={product} bot={getBotById(product.botId)} /></Reveal>)}</div></div>
      </section>
      <section className="section" aria-labelledby="community-heading">
        <div className="site-container"><Reveal><div className="relative overflow-hidden rounded-[30px] border border-white/10 bg-[#12101d] px-7 py-10 sm:px-11 sm:py-14"><div className="grid-pattern opacity-[.16]" /><div className="pointer-events-none absolute -right-20 -top-24 h-80 w-80 rounded-full bg-[#9d70ff]/20 blur-[95px]" /><div className="pointer-events-none absolute -bottom-28 left-[38%] h-64 w-64 rounded-full bg-blue-500/10 blur-[80px]" /><div className="relative grid items-center gap-8 lg:grid-cols-[1fr_auto]"><div><p className="eyebrow">The community is open</p><h2 id="community-heading" className="max-w-2xl text-[clamp(2rem,4vw,3.75rem)] font-semibold leading-[1.02] tracking-[-.055em]">Every experience is better <span className="gradient-text">together.</span></h2><p className="mt-5 max-w-xl text-base leading-7 text-mist">Get support, meet fellow players, hear about new releases first, and find your place inside Entity Studios.</p></div><div className="flex flex-col gap-3 sm:flex-row lg:flex-col"><a href={process.env.NEXT_PUBLIC_DISCORD_INVITE_URL ?? "https://discord.gg/entitystudios"} target="_blank" rel="noreferrer" className="button-primary"><MessageCircle className="h-4 w-4" />Join our Discord</a><Link href="/patreon" className="button-secondary"><HeartHandshake className="h-4 w-4" />Support the studio</Link></div></div></div></Reveal></div>
      </section>
      <section className="border-t border-white/[.08] py-8"><div className="site-container flex flex-col items-center justify-between gap-4 text-center sm:flex-row sm:text-left"><p className="text-sm text-mist">Built thoughtfully for the communities that make Discord feel alive.</p><Link href="/about" className="inline-flex items-center gap-2 text-sm font-semibold text-white hover:text-[#d3b8ff]">Our mission <ArrowRight className="h-4 w-4" /></Link></div></section>
    </>
  );
}
