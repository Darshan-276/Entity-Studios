"use client";

import { motion, useReducedMotion, useScroll, useTransform } from "framer-motion";
import type { BotTheme } from "@/lib/models";

export function BotThemeLayer({ theme }: { theme: BotTheme }) {
  const reduceMotion = useReducedMotion();
  const { scrollY } = useScroll();
  const offset = useTransform(scrollY, [0, 900], [0, reduceMotion ? 0 : 100]);
  return <div aria-hidden="true" className="pointer-events-none absolute inset-0 -z-10 overflow-hidden" style={{ background: theme.backgroundColor }}>
    {theme.backgroundImage ? <motion.div style={{ y: offset, backgroundImage: `linear-gradient(180deg, ${theme.backgroundColor} 0%, rgba(8,7,13,.4) 28%, ${theme.backgroundColor} 72%), url(${theme.backgroundImage})`, backgroundSize: "cover", backgroundPosition: "70% top" }} className="absolute inset-x-0 top-0 h-[1080px] opacity-35" /> : null}
    <div className="absolute -left-[25%] top-28 h-[550px] w-[550px] rounded-full blur-[130px]" style={{ background: theme.glowColor }} />
    <div className="absolute -right-[16%] top-[630px] h-[480px] w-[480px] rounded-full blur-[150px]" style={{ background: theme.secondaryColor, opacity: .16 }} />
    {theme.effects?.particles ? <div className="absolute inset-x-0 top-0 h-[1100px] opacity-45" style={{ backgroundImage: `radial-gradient(${theme.accentColor} 1px, transparent 1.7px)`, backgroundSize: "46px 46px", maskImage: "linear-gradient(to bottom, black, transparent 84%)" }} /> : null}
  </div>;
}
