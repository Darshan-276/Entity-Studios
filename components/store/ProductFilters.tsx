"use client";

import { AnimatePresence, motion } from "framer-motion";
import { useMemo, useState } from "react";
import type { Bot, Product } from "@/lib/models";
import { ProductCard } from "@/components/ui/ProductCard";

const botFilters = ["All", "Anime Realms", "Future Bots"] as const;
const categoryFilters = [
  { id: "all", label: "All categories" },
  { id: "membership", label: "Memberships" },
  { id: "cosmetic", label: "Cosmetics" },
  { id: "currency", label: "Currency" },
  { id: "boost", label: "Boosts" },
  { id: "profile", label: "Profiles" },
  { id: "bundle", label: "Bundles" },
  { id: "upgrade", label: "Upgrades" },
] as const;

export function ProductFilters({ products, bots, initialBot = "All" }: { products: readonly Product[]; bots: readonly Bot[]; initialBot?: string }) {
  const [activeBot, setActiveBot] = useState<string>(initialBot);
  const [activeCategory, setActiveCategory] = useState<string>("all");
  const filtered = useMemo(() => products.filter((product) => {
    const botMatches = activeBot === "All"
      || (activeBot === "Future Bots" ? !bots.some((bot) => bot.id === product.botId) : bots.find((bot) => bot.id === product.botId)?.name === activeBot);
    const categoryMatches = activeCategory === "all" || product.category === activeCategory;
    return botMatches && categoryMatches;
  }), [activeBot, activeCategory, bots, products]);

  return (
    <>
      <div className="space-y-5">
        <div className="filter-scroll -mx-1 flex gap-2 overflow-x-auto px-1 pb-1" role="group" aria-label="Filter products by bot">
          {botFilters.map((filter) => (
            <button key={filter} type="button" aria-pressed={activeBot === filter} onClick={() => setActiveBot(filter)} className={`shrink-0 rounded-full border px-4 py-2.5 text-sm font-semibold transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-entity ${activeBot === filter ? "border-[#bd9aff]/45 bg-[#8e5bec]/20 text-white" : "border-white/10 bg-white/[.025] text-mist hover:border-white/20 hover:text-white"}`}>{filter}</button>
          ))}
        </div>
        <div className="filter-scroll -mx-1 flex gap-2 overflow-x-auto px-1 pb-2" role="group" aria-label="Filter products by category">
          {categoryFilters.map((filter) => (
            <button key={filter.id} type="button" aria-pressed={activeCategory === filter.id} onClick={() => setActiveCategory(filter.id)} className={`shrink-0 rounded-lg px-3.5 py-2 text-xs font-semibold transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-entity ${activeCategory === filter.id ? "bg-white/[.11] text-white" : "text-mist hover:bg-white/[.05] hover:text-white"}`}>{filter.label}</button>
          ))}
        </div>
      </div>
      {filtered.length ? (
        <div className="mt-5 grid gap-5 sm:grid-cols-2 xl:grid-cols-3">
          <AnimatePresence mode="popLayout">
            {filtered.map((product, index) => (
              <motion.div key={product.id} layout initial={{ opacity: 0, y: 14 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: 8 }} transition={{ duration: .28, delay: Math.min(index * .035, .16) }}>
                <ProductCard product={product} bot={bots.find((bot) => bot.id === product.botId)} />
              </motion.div>
            ))}
          </AnimatePresence>
        </div>
      ) : (
        <div className="mt-5 rounded-2xl border border-dashed border-white/15 bg-white/[.02] px-6 py-12 text-center">
          <p className="text-base font-semibold text-white">{activeBot === "Future Bots" ? "New bot stores are on the way." : "No products in this collection yet."}</p>
          <p className="mt-2 text-sm text-mist">{activeBot === "Future Bots" ? "This marketplace is ready to grow as new Entity Studios bots launch." : "Try another filter to explore the current catalog."}</p>
        </div>
      )}
    </>
  );
}
