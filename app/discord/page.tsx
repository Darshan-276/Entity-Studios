import type { Metadata } from "next";
import Link from "next/link";
import {
  ArrowRight,
  ArrowUpRight,
  BellRing,
  CalendarDays,
  HeartHandshake,
  MessageCircle,
  ShieldCheck,
  Sparkles,
  UsersRound,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Discord Community",
  description: "Join the Entity Studios Discord community for support, events, announcements, and new releases.",
  openGraph: {
    title: "Join the Entity Studios Community",
    description: "Support, events, new releases, and the people behind the worlds.",
  },
};

const discordUrl = process.env.NEXT_PUBLIC_DISCORD_INVITE_URL ?? "https://discord.gg/entitystudios";

const reasons = [
  {
    icon: HeartHandshake,
    title: "Get help that feels human",
    description: "Ask questions, find answers, and reach the people who know the experiences best.",
  },
  {
    icon: BellRing,
    title: "Catch every new chapter",
    description: "Announcements, launches, patch notes, and early looks arrive where the community already gathers.",
  },
  {
    icon: CalendarDays,
    title: "Show up for the moments",
    description: "Giveaways, community events, seasonal challenges, and conversations that make a server feel alive.",
  },
] as const;

export default function DiscordPage() {
  return (
    <main className="overflow-hidden">
      <section className="relative isolate px-5 pb-20 pt-16 sm:px-6 sm:pb-28 sm:pt-24 lg:px-8">
        <div className="pointer-events-none absolute inset-0 -z-10 overflow-hidden" aria-hidden="true">
          <div className="absolute left-[4%] top-[-12rem] h-[32rem] w-[32rem] rounded-full bg-[#5865f2]/25 blur-[120px]" />
          <div className="absolute bottom-[-16rem] right-[6%] h-[28rem] w-[28rem] rounded-full bg-entity/20 blur-[120px]" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_0%,rgba(255,255,255,0.06),transparent_38%)]" />
        </div>

        <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-[1.05fr_0.95fr] lg:items-center">
          <div className="max-w-2xl">
            <p className="inline-flex items-center gap-2 rounded-full border border-[#8490ff]/30 bg-[#5865f2]/15 px-3 py-1.5 text-xs font-semibold uppercase tracking-[0.18em] text-[#c7cbff]">
              <span className="h-1.5 w-1.5 rounded-full bg-[#8790ff] shadow-[0_0_14px_rgba(135,144,255,0.95)]" />
              The Entity Studios community
            </p>
            <h1 className="mt-6 text-4xl font-semibold tracking-[-0.055em] text-white sm:text-6xl lg:text-7xl">
              Join the place where every <span className="text-[#aeb4ff]">world connects.</span>
            </h1>
            <p className="mt-7 max-w-xl text-base leading-8 text-mist sm:text-lg">
              Find support, meet other players, discover new releases, and take part in the stories unfolding across
              Entity Studios.
            </p>
            <div className="mt-9 flex flex-col gap-3 sm:flex-row">
              <a
                href={discordUrl}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center justify-center gap-2 rounded-full bg-[#6873ff] px-5 py-3 text-sm font-semibold text-white shadow-[0_14px_40px_rgba(88,101,242,0.28)] transition-all hover:-translate-y-0.5 hover:bg-[#7781ff] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#aeb4ff] focus-visible:ring-offset-2 focus-visible:ring-offset-ink"
              >
                Join our Discord <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
              </a>
              <Link
                href="/support"
                className="inline-flex items-center justify-center gap-2 rounded-full border border-white/15 bg-white/[0.035] px-5 py-3 text-sm font-medium text-white transition-colors hover:border-white/30 hover:bg-white/[0.08] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-entity"
              >
                Visit support <ArrowRight className="h-4 w-4" aria-hidden="true" />
              </Link>
            </div>
            <p className="mt-5 text-sm text-mist">A welcoming space for questions, ideas, and shared wins.</p>
          </div>

          <aside className="relative mx-auto w-full max-w-md overflow-hidden rounded-[1.6rem] border border-white/15 bg-[#171829]/90 p-3 shadow-[0_28px_100px_rgba(30,34,94,0.34)] backdrop-blur-xl" aria-label="Community preview">
            <div className="absolute inset-x-0 top-0 h-24 bg-[linear-gradient(115deg,rgba(88,101,242,0.9),rgba(122,77,255,0.7))]" aria-hidden="true" />
            <div className="relative pt-12">
              <div className="flex h-16 w-16 items-center justify-center rounded-2xl border-4 border-[#171829] bg-[linear-gradient(135deg,#8e95ff,#5d49e4)] text-xl font-bold text-white shadow-lg">E</div>
              <div className="mt-3 flex items-start justify-between gap-4 px-1">
                <div>
                  <h2 className="text-lg font-semibold text-white">Entity Studios</h2>
                  <p className="mt-1 text-sm text-[#b7bad5]">Every bot. One community.</p>
                </div>
                <span className="inline-flex items-center gap-1.5 rounded-full bg-emerald-400/10 px-2.5 py-1 text-xs font-medium text-emerald-300">
                  <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" /> Online
                </span>
              </div>
              <div className="mt-5 rounded-xl border border-white/10 bg-black/20 p-3">
                <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-[#969ab9]">Happening now</p>
                <div className="mt-3 flex items-center gap-3">
                  <div className="grid h-9 w-9 place-items-center rounded-full bg-[#5865f2]/25 text-[#aeb4ff]"><UsersRound className="h-4 w-4" aria-hidden="true" /></div>
                  <div>
                    <p className="text-sm font-medium text-white">Community lounge</p>
                    <p className="text-xs text-[#aaadc5]">Players swapping guides and discoveries</p>
                  </div>
                </div>
                <div className="mt-3 flex items-center gap-3">
                  <div className="grid h-9 w-9 place-items-center rounded-full bg-entity/15 text-[#c8a8ff]"><Sparkles className="h-4 w-4" aria-hidden="true" /></div>
                  <div>
                    <p className="text-sm font-medium text-white">Release radar</p>
                    <p className="text-xs text-[#aaadc5]">The latest from Entity Studios</p>
                  </div>
                </div>
              </div>
              <a href={discordUrl} target="_blank" rel="noreferrer" className="mt-3 flex items-center justify-center gap-2 rounded-xl bg-white px-4 py-3 text-sm font-semibold text-[#24263d] transition-colors hover:bg-[#eef0ff] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#aeb4ff]">
                Open Discord <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
              </a>
            </div>
          </aside>
        </div>
      </section>

      <section className="border-y border-white/10 bg-white/[0.018] px-5 py-20 sm:px-6 sm:py-28 lg:px-8" aria-labelledby="community-benefits-heading">
        <div className="mx-auto max-w-7xl">
          <div className="max-w-2xl">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#aeb4ff]">More than an invite</p>
            <h2 id="community-benefits-heading" className="mt-4 text-3xl font-semibold tracking-[-0.04em] text-white sm:text-4xl">
              The shared home for every Entity experience.
            </h2>
          </div>
          <div className="mt-10 grid gap-4 md:grid-cols-3">
            {reasons.map(({ icon: Icon, title, description }) => (
              <article key={title} className="rounded-2xl border border-white/10 bg-panel/65 p-6 transition-colors hover:border-[#8490ff]/35 hover:bg-panel">
                <div className="flex h-10 w-10 items-center justify-center rounded-xl border border-[#8490ff]/25 bg-[#5865f2]/15 text-[#aeb4ff]">
                  <Icon className="h-5 w-5" aria-hidden="true" />
                </div>
                <h3 className="mt-7 text-lg font-semibold text-white">{title}</h3>
                <p className="mt-3 text-sm leading-6 text-mist">{description}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="px-5 py-20 sm:px-6 sm:py-28 lg:px-8" aria-labelledby="first-steps-heading">
        <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[0.85fr_1.15fr] lg:items-center">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-entity">Your first five minutes</p>
            <h2 id="first-steps-heading" className="mt-4 text-3xl font-semibold tracking-[-0.04em] text-white sm:text-4xl">
              Arrive, orient yourself, make it yours.
            </h2>
            <p className="mt-5 max-w-md leading-7 text-mist">No pressure to be an expert. Start wherever curiosity takes you and the community will meet you there.</p>
          </div>
          <ol className="grid gap-4 sm:grid-cols-3">
            {[
              ["01", "Choose your role", "Get the updates and spaces most relevant to you."],
              ["02", "Say hello", "Introduce yourself, your server, or the bot world you are exploring."],
              ["03", "Find your lane", "Jump into guides, events, support, or the latest release notes."],
            ].map(([number, title, copy]) => (
              <li key={number} className="rounded-2xl border border-white/10 bg-white/[0.025] p-5">
                <span className="text-xs font-bold tracking-[0.18em] text-[#aeb4ff]">{number}</span>
                <h3 className="mt-8 text-base font-semibold text-white">{title}</h3>
                <p className="mt-2 text-sm leading-6 text-mist">{copy}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section className="px-5 pb-20 sm:px-6 sm:pb-28 lg:px-8">
        <div className="mx-auto flex max-w-7xl flex-col justify-between gap-7 rounded-3xl border border-[#8490ff]/25 bg-[linear-gradient(115deg,rgba(88,101,242,0.2),rgba(169,121,255,0.12),rgba(255,255,255,0.03))] px-6 py-9 sm:px-10 sm:py-11 lg:flex-row lg:items-center">
          <div className="flex gap-4">
            <div className="grid h-11 w-11 shrink-0 place-items-center rounded-xl bg-[#5865f2]/20 text-[#c7cbff]"><MessageCircle className="h-5 w-5" aria-hidden="true" /></div>
            <div>
              <h2 className="text-xl font-semibold text-white">A good community changes the experience.</h2>
              <p className="mt-2 max-w-xl text-sm leading-6 text-mist">Come for a bot, stay for the people who make every new feature feel like a shared discovery.</p>
            </div>
          </div>
          <a href={discordUrl} target="_blank" rel="noreferrer" className="inline-flex shrink-0 items-center justify-center gap-2 rounded-full bg-white px-5 py-3 text-sm font-semibold text-[#292b45] transition-transform hover:-translate-y-0.5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white">
            Join the community <ShieldCheck className="h-4 w-4" aria-hidden="true" />
          </a>
        </div>
      </section>
    </main>
  );
}
