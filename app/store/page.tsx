import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, LockKeyhole, Sparkles, Store } from "lucide-react";
import { ProductFilters } from "@/components/store/ProductFilters";
import { Reveal } from "@/components/ui/Reveal";
import { getBots, getProducts } from "@/lib/catalog";

export const metadata: Metadata = {
  title: "Digital Store",
  description: "Explore premium upgrades, cosmetics, memberships, and digital products from the Entity Studios ecosystem.",
  openGraph: { title: "Digital Store | Entity Studios", description: "Find a thoughtful upgrade for the worlds you play in." },
};

type StorePageProps = { searchParams: Promise<{ bot?: string | string[] }> };

export default async function StorePage({ searchParams }: StorePageProps) {
  const query = await searchParams;
  const requestedBot = Array.isArray(query.bot) ? query.bot[0] : query.bot;
  const bots = getBots();
  const initialBot = bots.find((bot) => bot.id === requestedBot || bot.name === requestedBot)?.name ?? "All";
  const products = getProducts();
  return (
    <>
      <section className="relative overflow-hidden border-b border-white/[.08] pb-16 pt-28 sm:pb-20 sm:pt-36" aria-labelledby="store-title">
        <div className="grid-pattern" /><div className="noise" /><div aria-hidden="true" className="absolute -right-12 top-0 h-[420px] w-[420px] rounded-full bg-[#8255e2]/[.16] blur-[125px]" />
        <div className="site-container relative"><Reveal><p className="eyebrow">Entity Studios marketplace</p><h1 id="store-title" className="display-title max-w-4xl text-[clamp(3.4rem,8.5vw,7rem)]">Make your <span className="gradient-text">world yours.</span></h1><p className="mt-6 max-w-2xl text-base leading-7 text-mist sm:text-lg sm:leading-8">Explore premium upgrades, cosmetics, memberships, and digital products from the Entity Studios ecosystem.</p></Reveal><Reveal delay={.12} className="mt-8 flex flex-wrap gap-3"><Link href="/bots" className="button-secondary">Explore the bots <ArrowRight className="h-4 w-4" /></Link><span className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[.025] px-4 py-3 text-xs text-mist"><LockKeyhole className="h-3.5 w-3.5 text-[#c6a4ff]" />Checkout is not connected yet</span></Reveal></div>
      </section>
      <section className="section" aria-labelledby="catalog-title"><div className="site-container"><Reveal className="mb-8"><div className="flex items-end justify-between gap-5"><div><p className="eyebrow">The catalog</p><h2 id="catalog-title" className="text-2xl font-semibold tracking-[-.04em] text-white sm:text-3xl">Digital goods with a home</h2><p className="mt-3 max-w-xl text-sm leading-6 text-mist">Each item belongs to a bot. Filter the catalog by world or by the kind of upgrade you&apos;re after.</p></div><span className="hidden items-center gap-2 text-xs text-mist sm:inline-flex"><Store className="h-4 w-4 text-[#c6a4ff]" />{products.length} items</span></div></Reveal><ProductFilters products={products} bots={bots} initialBot={initialBot} /></div></section>
      <section className="border-t border-white/[.08] bg-[#0b0b10] py-14"><div className="site-container"><Reveal><div className="flex flex-col justify-between gap-5 sm:flex-row sm:items-center"><div><p className="eyebrow">A connected ecosystem</p><h2 className="text-xl font-semibold tracking-[-.035em] text-white">Not sure where to start?</h2><p className="mt-2 text-sm text-mist">Visit a bot page to see its experience and matching products together.</p></div><Link href="/bots/anime-realms" className="button-secondary">Discover Anime Realms <Sparkles className="h-4 w-4" /></Link></div></Reveal></div></section>
    </>
  );
}
