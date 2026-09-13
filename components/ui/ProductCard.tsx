import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight, Sparkles } from "lucide-react";
import type { Bot, Product } from "@/lib/models";

export function formatPrice(price: number, currency: string) {
  return new Intl.NumberFormat("en-US", { style: "currency", currency, minimumFractionDigits: 2 }).format(price);
}

type ProductCardProps = { product: Product; bot?: Bot; compact?: boolean };

export function ProductCard({ product, bot, compact = false }: ProductCardProps) {
  return (
    <article className={`group relative overflow-hidden rounded-[22px] border border-white/10 bg-[#111018] card-hover ${compact ? "" : ""}`}>
      <div className={`relative overflow-hidden ${compact ? "h-36" : "h-44"}`}>
        <Image src={product.image} alt="" fill sizes="(max-width: 700px) 100vw, 33vw" className="object-cover object-[72%_center] opacity-60 transition-transform duration-700 group-hover:scale-[1.06]" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#111018] via-[#111018]/30 to-transparent" />
        {product.featured ? <span className="absolute left-4 top-4 inline-flex items-center gap-1.5 rounded-full border border-[#dac3ff]/20 bg-[#301c58]/70 px-2.5 py-1 text-[10px] font-bold uppercase tracking-[.12em] text-[#e1d3ff] backdrop-blur-md"><Sparkles className="h-3 w-3" />Featured</span> : null}
      </div>
      <div className="p-5">
        <p className="text-[11px] font-semibold uppercase tracking-[.15em] text-[#bd9af5]">{bot?.name ?? "Entity Studios"} · {product.category}</p>
        <h3 className="mt-2 text-lg font-semibold tracking-[-.035em] text-white">{product.name}</h3>
        <p className="mt-2 min-h-11 text-sm leading-5 text-mist">{product.description}</p>
        <div className="mt-5 flex items-center justify-between border-t border-white/10 pt-4"><span className="text-base font-semibold text-white">{formatPrice(product.price, product.currency)}</span><Link href={`/store/${product.slug}`} className="inline-flex items-center gap-1 text-sm font-semibold text-[#dfceff] transition-colors hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-entity">Details <ArrowUpRight className="h-3.5 w-3.5" /></Link></div>
      </div>
    </article>
  );
}
