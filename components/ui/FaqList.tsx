"use client";

import { AnimatePresence, motion } from "framer-motion";
import { Minus, Plus } from "lucide-react";
import { useState } from "react";
import type { BotFaq } from "@/lib/models";

export function FaqList({ items }: { items: readonly BotFaq[] }) {
  const [openIndex, setOpenIndex] = useState<number | null>(0);
  return <div className="divide-y divide-white/10 border-y border-white/10">{items.map((item, index) => {
    const isOpen = openIndex === index;
    return <div key={item.question}><button type="button" aria-expanded={isOpen} onClick={() => setOpenIndex(isOpen ? null : index)} className="flex w-full items-center justify-between gap-6 py-5 text-left text-base font-semibold text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-entity focus-visible:ring-inset"><span>{item.question}</span>{isOpen ? <Minus className="h-4 w-4 shrink-0 text-[#c6a7ff]" /> : <Plus className="h-4 w-4 shrink-0 text-mist" />}</button><AnimatePresence initial={false}>{isOpen ? <motion.div initial={{ height: 0, opacity: 0 }} animate={{ height: "auto", opacity: 1 }} exit={{ height: 0, opacity: 0 }} transition={{ duration: .2 }} className="overflow-hidden"><p className="max-w-2xl pb-5 text-sm leading-6 text-mist">{item.answer}</p></motion.div> : null}</AnimatePresence></div>;
  })}</div>;
}
