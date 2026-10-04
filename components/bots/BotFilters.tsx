"use client";

import { AnimatePresence, motion } from "framer-motion";
import { useMemo, useState } from "react";
import type { Bot } from "@/lib/models";
import { BotCard } from "@/components/ui/BotCard";

const standardCategories = ["RPG", "Gaming", "Utility", "Community", "Entertainment"] as const;

export function BotFilters({ bots }: { bots: readonly Bot[] }) {
  const [activeCategory, setActiveCategory] = useState("All");
  const categories = useMemo(() => {
    const found = bots.map((bot) => bot.discoveryCategory ?? "Entertainment");
    return ["All", ...new Set([...standardCategories, ...found])];
  }, [bots]);
  const filteredBots = bots.filter((bot) =>
    activeCategory === "All" || (bot.discoveryCategory ?? "Entertainment") === activeCategory,
  );

  return (
    <>
      <div className="filter-scroll -mx-1 flex gap-2 overflow-x-auto px-1 pb-2" role="group" aria-label="Filter bots by category">
        {categories.map((category) => {
          const selected = category === activeCategory;
          const count = category === "All"
            ? bots.length
            : bots.filter((bot) => (bot.discoveryCategory ?? "Entertainment") === category).length;
          return (
            <button
              key={category}
              type="button"
              aria-pressed={selected}
              onClick={() => setActiveCategory(category)}
              className={`inline-flex shrink-0 items-center gap-2 rounded-full border px-4 py-2.5 text-sm font-semibold transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-entity ${selected ? "border-[#bd9aff]/45 bg-[#8e5bec]/20 text-white" : "border-white/10 bg-white/[.025] text-mist hover:border-white/20 hover:text-white"}`}
            >
              {category}<span className={`text-[11px] ${selected ? "text-[#d9c5ff]" : "text-mist/70"}`}>{count}</span>
            </button>
          );
        })}
      </div>
      <div className="mt-7 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
        <AnimatePresence mode="popLayout">
          {filteredBots.map((bot, index) => (
            <motion.div key={bot.id} layout initial={{ opacity: 0, y: 14 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: 8 }} transition={{ duration: .28, delay: Math.min(index * .035, .16) }}>
              <BotCard bot={bot} />
            </motion.div>
          ))}
        </AnimatePresence>
      </div>
      {filteredBots.length === 0 ? (
        <div className="mt-7 rounded-2xl border border-dashed border-white/15 bg-white/[.02] px-6 py-10 text-center">
          <p className="text-base font-semibold text-white">More experiences are on the way.</p>
          <p className="mt-2 text-sm text-mist">We&apos;re building new worlds for the Entity Studios ecosystem.</p>
        </div>
      ) : null}
    </>
  );
}
