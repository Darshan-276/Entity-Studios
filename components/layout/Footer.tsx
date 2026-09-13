import Link from "next/link";
import { ArrowUpRight, Github, Heart, Instagram, MessageCircle, Twitter, Youtube } from "lucide-react";

const discordUrl = process.env.NEXT_PUBLIC_DISCORD_INVITE_URL ?? "https://discord.gg/entitystudios";
const patreonUrl = process.env.NEXT_PUBLIC_PATREON_URL ?? "https://www.patreon.com/entitystudios";

const footerGroups = [
  {
    label: "Explore",
    links: [
      { href: "/", label: "Home" },
      { href: "/bots", label: "Bots" },
      { href: "/store", label: "Store" },
      { href: "/about", label: "About" },
    ],
  },
  {
    label: "Resources",
    links: [
      { href: "/documentation", label: "Documentation" },
      { href: "/support", label: "Support" },
      { href: "/dashboard", label: "Dashboard" },
    ],
  },
  {
    label: "Connect",
    links: [
      { href: "/discord", label: "Discord" },
      { href: "/patreon", label: "Patreon" },
    ],
  },
] as const;

const socialLinks = [
  { href: discordUrl, label: "Discord", icon: MessageCircle },
  { href: patreonUrl, label: "Patreon", icon: Heart },
  { href: "https://github.com", label: "GitHub", icon: Github },
  { href: "https://x.com", label: "X / Twitter", icon: Twitter },
  { href: "https://instagram.com", label: "Instagram", icon: Instagram },
  { href: "https://youtube.com", label: "YouTube", icon: Youtube },
] as const;

const legalLinks = [
  { href: "/privacy", label: "Privacy Policy" },
  { href: "/terms", label: "Terms of Service" },
  { href: "/refunds", label: "Refund Policy" },
] as const;

export function Footer() {
  return (
    <footer className="relative overflow-hidden border-t border-white/10 bg-[#09090e]" aria-labelledby="footer-heading">
      <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-entity/70 to-transparent" />
      <div className="pointer-events-none absolute -left-32 top-20 h-72 w-72 rounded-full bg-entity/10 blur-[110px]" />
      <div className="pointer-events-none absolute -right-32 bottom-0 h-72 w-72 rounded-full bg-indigo-500/10 blur-[110px]" />

      <div className="relative mx-auto max-w-7xl px-5 pb-8 pt-16 sm:px-6 sm:pt-20 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-[1.35fr_2fr] lg:gap-16">
          <div className="max-w-sm">
            <Link
              href="/"
              className="inline-flex items-center gap-2.5 rounded-md focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-entity focus-visible:ring-offset-2 focus-visible:ring-offset-[#09090e]"
            >
              <span className="relative grid h-9 w-9 place-items-center overflow-hidden rounded-[11px] border border-white/15 bg-white/[0.06] shadow-aura">
                <span className="absolute h-[18px] w-[18px] rounded-full border border-entity/90" />
                <span className="absolute h-1.5 w-1.5 rounded-full bg-white shadow-[0_0_16px_rgba(255,255,255,0.9)]" />
              </span>
              <span>
                <span id="footer-heading" className="block text-sm font-semibold tracking-[0.2em] text-white">
                  ENTITY
                </span>
                <span className="block text-[10px] font-medium tracking-[0.24em] text-mist">STUDIOS</span>
              </span>
            </Link>
            <p className="mt-5 text-sm leading-6 text-mist">
              Building powerful Discord bots, communities, and digital experiences for the worlds people create together.
            </p>
            <a
              href={discordUrl}
              target="_blank"
              rel="noreferrer"
              className="mt-6 inline-flex items-center gap-2 text-sm font-medium text-white transition-colors hover:text-entity focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-entity"
            >
              Join the community <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
            </a>
          </div>

          <div className="grid grid-cols-2 gap-8 sm:grid-cols-3">
            {footerGroups.map((group) => (
              <div key={group.label}>
                <h2 className="text-xs font-semibold uppercase tracking-[0.18em] text-white">{group.label}</h2>
                <ul className="mt-4 space-y-3" role="list">
                  {group.links.map((link) => (
                    <li key={link.href}>
                      <Link
                        href={link.href}
                        className="text-sm text-mist transition-colors hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-entity"
                      >
                        {link.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-14 flex flex-col gap-6 border-t border-white/10 pt-7 lg:flex-row lg:items-center lg:justify-between">
          <div className="flex flex-wrap items-center gap-x-5 gap-y-2">
            {legalLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-xs text-mist transition-colors hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-entity"
              >
                {link.label}
              </Link>
            ))}
          </div>

          <div className="flex items-center gap-2" aria-label="Entity Studios social links">
            {socialLinks.map(({ href, label, icon: Icon }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noreferrer"
                aria-label={label}
                className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-white/10 bg-white/[0.035] text-mist transition-all hover:-translate-y-0.5 hover:border-white/25 hover:bg-white/[0.08] hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-entity"
              >
                <Icon className="h-4 w-4" aria-hidden="true" />
              </a>
            ))}
          </div>
        </div>

        <p className="mt-7 text-xs text-mist/75">© 2026 Entity Studios. All rights reserved.</p>
      </div>
    </footer>
  );
}
