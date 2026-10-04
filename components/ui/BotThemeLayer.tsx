"use client";

import { motion, useReducedMotion, useScroll, useTransform } from "framer-motion";
import type { BotTheme } from "@/lib/models";

export function BotThemeLayer({ theme }: { theme: BotTheme }) {
  const reduceMotion = useReducedMotion();
  const { scrollY } = useScroll();
  const offset = useTransform(scrollY, [0, 900], [0, reduceMotion ? 0 : 100]);
  const desktopBackground = theme.backgroundImage ?? theme.heroBackground;
  const mobileBackground = theme.mobileBackgroundImage ?? desktopBackground;
  return <div aria-hidden="true" className="pointer-events-none absolute inset-0 z-0 overflow-hidden" style={{ background: theme.backgroundColor }}>
    {desktopBackground ? <motion.div style={{ y: offset, backgroundImage: `linear-gradient(180deg, ${theme.backgroundColor} 0%, rgba(8,7,13,.62) 30%, ${theme.backgroundColor} 100%), url(${desktopBackground})`, backgroundSize: "cover", backgroundPosition: "70% top" }} className="bot-theme-desktop absolute inset-x-0 top-0 h-[1000px] opacity-30" /> : null}
    {mobileBackground ? <motion.div style={{ y: offset, backgroundImage: `linear-gradient(180deg, ${theme.backgroundColor} 0%, rgba(8,7,13,.58) 24%, ${theme.backgroundColor} 100%), url(${mobileBackground})`, backgroundSize: "cover", backgroundPosition: "66% top" }} className="bot-theme-mobile absolute inset-x-0 top-0 hidden h-[850px] opacity-28" /> : null}
    <div className="absolute -left-[25%] top-28 h-[550px] w-[550px] rounded-full blur-[130px]" style={{ background: theme.glowColor }} />
    <div className="absolute -right-[16%] top-[630px] h-[480px] w-[480px] rounded-full blur-[150px]" style={{ background: theme.secondaryColor, opacity: .16 }} />
    {theme.effects?.particles ? <div className={`bot-theme-particles absolute inset-x-0 top-0 h-[1100px] opacity-45 ${theme.effects.animatedBackground ? "animate-drift" : ""}`} style={{ backgroundImage: `radial-gradient(${theme.accentColor} 1px, transparent 1.7px)`, backgroundSize: "46px 46px", maskImage: "linear-gradient(to bottom, black, transparent 84%)" }} /> : null}
  </div>;
}
