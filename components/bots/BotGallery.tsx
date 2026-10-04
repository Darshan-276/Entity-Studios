"use client";

import Image from "next/image";
import { AnimatePresence, motion } from "framer-motion";
import { ArrowLeft, ArrowRight, Expand, X } from "lucide-react";
import { useCallback, useEffect, useState } from "react";

export type GalleryImage = { src: string; alt: string; title: string; label: string };

export function BotGallery({ images }: { images: readonly GalleryImage[] }) {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);
  const close = useCallback(() => setActiveIndex(null), []);
  const step = useCallback((direction: number) => {
    setActiveIndex((current) => current === null ? null : (current + direction + images.length) % images.length);
  }, [images.length]);

  useEffect(() => {
    if (activeIndex === null) return;
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") close();
      if (event.key === "ArrowRight") step(1);
      if (event.key === "ArrowLeft") step(-1);
    };
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [activeIndex, close, step]);

  return (
    <>
      <div className="grid gap-4 md:grid-cols-3">
        {images.map((image, index) => (
          <motion.button key={image.src} type="button" layout onClick={() => setActiveIndex(index)} aria-label={`View ${image.title} screenshot`} className={`group relative overflow-hidden rounded-[20px] border border-white/10 bg-[#14111b] text-left focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-entity ${index === 0 ? "md:col-span-2" : ""}`}>
            <span className={`relative block ${index === 0 ? "aspect-[1.75]" : "aspect-[1.15]"}`}>
              <Image src={image.src} alt={image.alt} fill sizes="(max-width: 700px) 100vw, 50vw" className="object-cover transition-transform duration-700 group-hover:scale-[1.035]" />
              <span className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-black/10" />
              <span className="absolute bottom-4 left-4 right-4 flex items-end justify-between gap-3"><span><span className="block text-[9px] font-bold uppercase tracking-[.17em] text-[var(--bot-accent)]">{image.label}</span><span className="mt-1 block text-sm font-semibold text-white">{image.title}</span></span><span className="grid h-9 w-9 shrink-0 place-items-center rounded-full border border-white/20 bg-black/30 text-white/80 backdrop-blur-md"><Expand className="h-4 w-4" /></span></span>
            </span>
          </motion.button>
        ))}
      </div>
      <AnimatePresence>
        {activeIndex !== null ? (
          <motion.div className="fixed inset-0 z-[100] flex items-center justify-center bg-black/90 p-4 backdrop-blur-xl sm:p-8" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} role="dialog" aria-modal="true" aria-label="Screenshot viewer" onClick={close}>
            <button type="button" onClick={close} aria-label="Close screenshot viewer" className="absolute right-4 top-4 z-10 grid h-11 w-11 place-items-center rounded-full border border-white/15 bg-white/[.07] text-white hover:bg-white/[.12] sm:right-8 sm:top-8"><X className="h-5 w-5" /></button>
            <button type="button" onClick={(event) => { event.stopPropagation(); step(-1); }} aria-label="Previous screenshot" className="absolute left-3 z-10 grid h-11 w-11 place-items-center rounded-full border border-white/15 bg-white/[.07] text-white hover:bg-white/[.12] sm:left-8"><ArrowLeft className="h-5 w-5" /></button>
            <motion.figure key={images[activeIndex].src} className="relative w-full max-w-5xl" initial={{ opacity: 0, scale: .97 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0, scale: .98 }} transition={{ duration: .22 }} onClick={(event) => event.stopPropagation()}>
              <div className="relative aspect-[16/9] overflow-hidden rounded-2xl border border-white/15 bg-[#121018] shadow-2xl"><Image src={images[activeIndex].src} alt={images[activeIndex].alt} fill sizes="90vw" className="object-contain" priority /></div>
              <figcaption className="mt-4 text-center"><span className="text-[10px] font-bold uppercase tracking-[.17em] text-[var(--bot-accent)]">{images[activeIndex].label}</span><span className="mt-1 block text-sm font-medium text-white">{images[activeIndex].title}</span></figcaption>
            </motion.figure>
            <button type="button" onClick={(event) => { event.stopPropagation(); step(1); }} aria-label="Next screenshot" className="absolute right-3 z-10 grid h-11 w-11 place-items-center rounded-full border border-white/15 bg-white/[.07] text-white hover:bg-white/[.12] sm:right-8"><ArrowRight className="h-5 w-5" /></button>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </>
  );
}
