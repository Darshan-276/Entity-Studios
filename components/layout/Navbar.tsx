"use client";

import Link from "next/link";
import { AnimatePresence, motion } from "framer-motion";
import { ArrowUpRight, Menu, UserRound, X } from "lucide-react";
import { useEffect, useState } from "react";

const navigation = [
  { href: "/", label: "Home" },
  { href: "/bots", label: "Bots" },
  { href: "/store", label: "Store" },
  { href: "/discord", label: "Discord" },
  { href: "/patreon", label: "Patreon" },
  { href: "/about", label: "About" },
  { href: "/documentation", label: "Documentation" },
  { href: "/support", label: "Support" },
] as const;

const discordUrl = process.env.NEXT_PUBLIC_DISCORD_INVITE_URL ?? "https://discord.gg/entitystudios";

export function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [hasScrolled, setHasScrolled] = useState(false);

  useEffect(() => {
    const updateScrollState = () => setHasScrolled(window.scrollY > 12);

    updateScrollState();
    window.addEventListener("scroll", updateScrollState, { passive: true });
    return () => window.removeEventListener("scroll", updateScrollState);
  }, []);

  useEffect(() => {
    if (!isMenuOpen) return;

    const handleEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") setIsMenuOpen(false);
    };

    window.addEventListener("keydown", handleEscape);
    return () => window.removeEventListener("keydown", handleEscape);
  }, [isMenuOpen]);

  return (
    <header
      className={`sticky top-0 z-50 w-full transition-[background-color,border-color,box-shadow] duration-300 ${
        hasScrolled || isMenuOpen
          ? "border-b border-white/10 bg-ink/85 shadow-[0_12px_40px_rgba(0,0,0,0.18)] backdrop-blur-xl"
          : "border-b border-transparent bg-transparent"
      }`}
    >
      <div className="mx-auto flex h-[72px] max-w-7xl items-center justify-between px-5 sm:px-6 lg:px-8">
        <Link
          href="/"
          aria-label="Entity Studios home"
          className="group inline-flex items-center gap-2.5 rounded-md focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-entity focus-visible:ring-offset-2 focus-visible:ring-offset-ink"
          onClick={() => setIsMenuOpen(false)}
        >
          <span className="relative grid h-8 w-8 place-items-center overflow-hidden rounded-[10px] border border-white/15 bg-white/[0.06] shadow-aura">
            <span className="absolute h-4 w-4 rounded-full border border-entity/90" />
            <span className="absolute h-1.5 w-1.5 rounded-full bg-white shadow-[0_0_16px_rgba(255,255,255,0.9)]" />
          </span>
          <span className="text-sm font-semibold tracking-[0.18em] text-white sm:text-base">ENTITY</span>
          <span className="hidden text-[10px] font-medium tracking-[0.2em] text-mist sm:inline">STUDIOS</span>
        </Link>

        <nav className="hidden items-center gap-1 xl:flex" aria-label="Primary navigation">
          {navigation.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="rounded-md px-3 py-2 text-sm text-mist transition-colors hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-entity"
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <Link
            href="/bots"
            className="hidden items-center gap-1.5 rounded-full border border-entity/30 bg-entity/10 px-4 py-2 text-sm font-medium text-white transition-all hover:-translate-y-0.5 hover:border-entity/60 hover:bg-entity/20 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-entity sm:inline-flex"
          >
            Explore Bots <ArrowUpRight className="h-3.5 w-3.5" aria-hidden="true" />
          </Link>
          <Link
            href="/dashboard"
            aria-label="Account dashboard"
            className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-white/10 bg-white/[0.035] text-mist transition-colors hover:border-white/20 hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-entity"
          >
            <UserRound className="h-4 w-4" aria-hidden="true" />
          </Link>
          <button
            type="button"
            className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-white/10 bg-white/[0.035] text-white transition-colors hover:border-white/25 hover:bg-white/[0.08] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-entity xl:hidden"
            aria-label={isMenuOpen ? "Close navigation menu" : "Open navigation menu"}
            aria-expanded={isMenuOpen}
            aria-controls="mobile-navigation"
            onClick={() => setIsMenuOpen((open) => !open)}
          >
            {isMenuOpen ? <X className="h-4 w-4" aria-hidden="true" /> : <Menu className="h-4 w-4" aria-hidden="true" />}
          </button>
        </div>
      </div>

      <AnimatePresence>
        {isMenuOpen ? (
          <motion.div
            id="mobile-navigation"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.22, ease: [0.22, 1, 0.36, 1] }}
            className="overflow-hidden border-t border-white/10 bg-ink/95 backdrop-blur-xl xl:hidden"
          >
            <nav className="mx-auto grid max-w-7xl gap-1 px-5 py-5 sm:px-6" aria-label="Mobile navigation">
              {navigation.map((item, index) => (
                <motion.div
                  key={item.href}
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -6 }}
                  transition={{ delay: index * 0.025, duration: 0.18 }}
                >
                  <Link
                    href={item.href}
                    className="flex items-center justify-between rounded-lg px-3 py-3 text-base text-mist transition-colors hover:bg-white/[0.05] hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-entity"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {item.label}
                    <ArrowUpRight className="h-4 w-4 text-entity" aria-hidden="true" />
                  </Link>
                </motion.div>
              ))}
              <div className="mt-3 grid gap-2 border-t border-white/10 pt-4 sm:grid-cols-2">
                <Link
                  href="/bots"
                  className="inline-flex items-center justify-center gap-2 rounded-lg bg-entity px-4 py-3 text-sm font-semibold text-ink transition-transform hover:-translate-y-0.5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Explore bots <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
                </Link>
                <a
                  href={discordUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center justify-center rounded-lg border border-white/15 px-4 py-3 text-sm font-medium text-white transition-colors hover:border-white/30 hover:bg-white/[0.06] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-entity"
                >
                  Join Discord
                </a>
              </div>
            </nav>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </header>
  );
}
