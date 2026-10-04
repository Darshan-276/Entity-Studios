import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { ArrowLeft, ArrowRight, Check, CircleHelp, ShieldCheck, Sparkles } from "lucide-react";
import { CheckoutNotice } from "@/components/store/CheckoutNotice";
import { ProductCard } from "@/components/ui/ProductCard";
import { Reveal } from "@/components/ui/Reveal";
import { getBotById, getProductBySlug, getProducts, getRelatedProducts } from "@/lib/catalog";
import { formatPrice } from "@/components/ui/ProductCard";

type ProductPageProps = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return getProducts().map((product) => ({ slug: product.slug }));
}

export async function generateMetadata({ params }: ProductPageProps): Promise<Metadata> {
  const { slug } = await params;
  const product = getProductBySlug(slug);
  if (!product) return { title: "Product not found" };
  const bot = getBotById(product.botId);
  return {
    title: product.name,
    description: product.description,
    openGraph: {
      title: product.name + " | Entity Studios Store",
      description: product.description,
      images: [{ url: product.image, alt: product.name + " artwork" }],
    },
    keywords: [product.name, bot?.name ?? "Entity Studios", product.category, "digital product"],
  };
}

export default async function ProductPage({ params }: ProductPageProps) {
  const { slug } = await params;
  const product = getProductBySlug(slug);
  if (!product) notFound();
  const bot = getBotById(product.botId);
  const related = getRelatedProducts(product, 3);
  const category = product.category.replaceAll("-", " ");

  return (
    <>
      <section className="relative overflow-hidden pb-14 pt-12 sm:pb-20 sm:pt-16">
        <div aria-hidden="true" className="absolute -right-24 top-0 h-[500px] w-[500px] rounded-full bg-[#8255e2]/[.13] blur-[130px]" />
        <div className="site-container relative">
          <Link href="/store" className="inline-flex items-center gap-2 text-sm font-medium text-mist transition-colors hover:text-white"><ArrowLeft className="h-4 w-4" />Back to store</Link>
          <div className="mt-8 grid items-start gap-8 lg:grid-cols-[1.08fr_.92fr] lg:gap-14">
            <Reveal>
              <div className="group relative aspect-[1.2] overflow-hidden rounded-[26px] border border-white/10 bg-[#17131f] sm:aspect-[1.35]">
                <Image src={product.image} alt={product.name + " product artwork"} fill priority sizes="(max-width: 1024px) 100vw, 55vw" className="object-cover object-[70%_center] opacity-75 transition-transform duration-700 group-hover:scale-[1.025]" />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0e0c14]/90 via-[#0e0c14]/10 to-transparent" />
                <span className="absolute left-5 top-5 inline-flex items-center gap-1.5 rounded-full border border-white/15 bg-black/35 px-3 py-1.5 text-[10px] font-semibold uppercase tracking-[.12em] text-white/85 backdrop-blur-md"><Sparkles className="h-3 w-3 text-[#d3b9ff]" />{category}</span>
                <div className="absolute bottom-5 left-5 right-5 flex items-end justify-between gap-4"><div><p className="text-[10px] font-bold uppercase tracking-[.16em] text-[#d7bdff]">{bot?.name ?? "Entity Studios"}</p><p className="mt-1 text-2xl font-semibold tracking-[-.04em] text-white">{product.name}</p></div><span className="hidden rounded-full border border-white/15 bg-black/35 px-3 py-1.5 text-[10px] text-white/55 backdrop-blur-md sm:inline-flex">Digital product</span></div>
              </div>
            </Reveal>
            <Reveal delay={0.08}>
              <div className="lg:pt-3">
                <p className="eyebrow">{bot?.name ?? "Entity Studios"} store</p>
                <h1 className="text-[clamp(2.3rem,5vw,4.25rem)] font-semibold leading-[1.02] tracking-[-.06em] text-white">{product.name}</h1>
                <p className="mt-5 text-base leading-7 text-mist">{product.longDescription ?? product.description}</p>
                <div className="mt-7 flex items-end justify-between gap-5 border-y border-white/10 py-5"><div><p className="text-[10px] font-bold uppercase tracking-[.14em] text-mist/70">Price</p><p className="mt-1 text-3xl font-semibold tracking-[-.05em] text-white">{formatPrice(product.price, product.currency)}{product.deliveryType === "subscription" ? <span className="ml-1 text-sm font-medium text-mist">/ month</span> : null}</p></div><span className="rounded-full border border-white/10 bg-white/[.035] px-3 py-1.5 text-[10px] font-medium capitalize text-white/55">{product.deliveryType === "subscription" ? "Subscription" : "One-time"}</span></div>
                <div className="mt-6"><CheckoutNotice /></div>
                <p className="mt-3 text-center text-[10px] leading-5 text-mist/70">No payment is processed on this preview. Checkout and delivery require a connected payment provider.</p>
                {bot ? <Link href={"/bots/" + bot.slug} className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-[#dbc7ff] transition-colors hover:text-white">View {bot.name} <ArrowRight className="h-4 w-4" /></Link> : null}
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      <section className="section border-y border-white/[.08] bg-[#0b0b10]" aria-labelledby="benefits-title">
        <div className="site-container grid gap-12 lg:grid-cols-[.8fr_1.2fr]">
          <Reveal><p className="eyebrow">What&apos;s included</p><h2 id="benefits-title" className="section-title">A thoughtful upgrade.</h2><p className="section-copy">Digital items are tied to their bot experience and are intended for use in that community.</p></Reveal>
          <Reveal delay={0.08}>
            <ul className="space-y-3" role="list">{(product.features ?? [product.description]).map((feature) => <li key={feature} className="flex items-start gap-3 rounded-2xl border border-white/[.08] bg-white/[.025] p-4"><span className="grid h-7 w-7 shrink-0 place-items-center rounded-lg border border-[#c6a4ff]/20 bg-[#8e5bec]/10 text-[#d7bdff]"><Check className="h-4 w-4" /></span><span className="pt-1 text-sm leading-5 text-white/75">{feature}</span></li>)}</ul>
            <div className="mt-5 rounded-2xl border border-white/[.08] bg-white/[.02] p-4"><div className="flex items-start gap-3"><ShieldCheck className="mt-0.5 h-4 w-4 shrink-0 text-[#b99aff]" /><p className="text-xs leading-5 text-mist">Purchases, account entitlements, and delivery are not active yet. Product details and checkout must be connected to the live bot and payment systems before launch.</p></div></div>
          </Reveal>
        </div>
      </section>

      <section className="section" aria-labelledby="purchase-info-title"><div className="site-container grid gap-10 lg:grid-cols-[.7fr_1.3fr]"><Reveal><p className="eyebrow">Purchase information</p><h2 id="purchase-info-title" className="section-title">Clear by design.</h2><p className="section-copy">We&apos;ll provide specific delivery and refund details before enabling checkout.</p></Reveal><div className="grid gap-3 sm:grid-cols-2"><Reveal><article className="h-full rounded-[20px] border border-white/10 bg-white/[.025] p-5"><CircleHelp className="h-5 w-5 text-[#c6a4ff]" /><h3 className="mt-4 text-base font-semibold text-white">How does delivery work?</h3><p className="mt-2 text-sm leading-6 text-mist">Digital delivery will connect to your bot account after checkout is implemented. No delivery is triggered from this preview.</p></article></Reveal><Reveal delay={0.06}><article className="h-full rounded-[20px] border border-white/10 bg-white/[.025] p-5"><ShieldCheck className="h-5 w-5 text-[#c6a4ff]" /><h3 className="mt-4 text-base font-semibold text-white">What about refunds?</h3><p className="mt-2 text-sm leading-6 text-mist">Review the published refund policy and product terms before purchase. Support links are available in the footer.</p><Link href="/support" className="mt-3 inline-flex items-center gap-1 text-xs font-semibold text-[#d8c5ff] hover:text-white">Visit support <ArrowRight className="h-3.5 w-3.5" /></Link></article></Reveal></div></div></section>

      {related.length ? <section className="section border-t border-white/[.08] bg-[#0b0b10]" aria-labelledby="related-title"><div className="site-container"><Reveal><p className="eyebrow">Keep exploring</p><h2 id="related-title" className="section-title">More from {bot?.name ?? "this collection"}.</h2></Reveal><div className="mt-9 grid gap-4 sm:grid-cols-2 xl:grid-cols-3">{related.map((item, index) => <Reveal key={item.id} delay={index * 0.05}><ProductCard product={item} bot={bot} compact /></Reveal>)}</div></div></section> : null}
    </>
  );
}
