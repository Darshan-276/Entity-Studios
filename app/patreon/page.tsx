import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, ArrowUpRight, Heart, Rocket, Server, Sparkles, UsersRound, Wrench } from "lucide-react";

export const metadata: Metadata = {
  title: "Support the Studio",
  description: "Support Entity Studios on Patreon and help fund better bots, bigger worlds, and new community experiences.",
  openGraph: {
    title: "Support Entity Studios",
    description: "Help us build bigger worlds, better bots, and new experiences.",
  },
};

const patreonUrl = process.env.NEXT_PUBLIC_PATREON_URL ?? "https://www.patreon.com/entitystudios";

const impactAreas = [
  {
    icon: Server,
    title: "Reliable worlds",
    description: "The infrastructure that keeps communities and their favorite commands available when they need them.",
  },
  {
    icon: Wrench,
    title: "Better every week",
    description: "Time for polish, fixes, quality-of-life improvements, and features that earn their place.",
  },
  {
    icon: Rocket,
    title: "New things to explore",
    description: "Fresh bot concepts, seasonal content, and experiments that may become the next big world.",
  },
  {
    icon: UsersRound,
    title: "Moments for the community",
    description: "Giveaways, events, creator collaborations, and the shared rituals that bring people back.",
  },
] as const;

const values = [
  ["Support what you use", "Choose a level that feels right, or simply follow along. Every bit of momentum matters."],
  ["See the work taking shape", "Patrons help make room for more thoughtful releases, not just more releases."],
  ["Keep it community-led", "The studio stays independent, listens closely, and reinvests in the worlds people care about."],
] as const;

export default function PatreonPage() {
  return (
    <main className="overflow-hidden">
      <section className="relative isolate border-b border-white/10 px-5 pb-20 pt-16 sm:px-6 sm:pb-28 sm:pt-24 lg:px-8">
        <div className="pointer-events-none absolute inset-0 -z-10 overflow-hidden" aria-hidden="true">
          <div className="absolute left-[12%] top-[-15rem] h-[32rem] w-[32rem] rounded-full bg-[#ff5f5f]/20 blur-[120px]" />
          <div className="absolute bottom-[-18rem] right-[4%] h-[32rem] w-[32rem] rounded-full bg-entity/20 blur-[110px]" />
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(255,255,255,0.05),transparent_58%)]" />
        </div>

        <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-[1fr_0.95fr] lg:items-center">
          <div className="max-w-2xl">
            <p className="inline-flex items-center gap-2 rounded-full border border-[#ff8d8d]/25 bg-[#ff6464]/10 px-3 py-1.5 text-xs font-semibold uppercase tracking-[0.18em] text-[#ffc1c1]">
              <Heart className="h-3.5 w-3.5 fill-current" aria-hidden="true" />
              Independent by design
            </p>
            <h1 className="mt-6 text-4xl font-semibold tracking-[-0.055em] text-white sm:text-6xl lg:text-7xl">
              Support the studio behind your <span className="text-[#ffc0c0]">next favorite world.</span>
            </h1>
            <p className="mt-7 max-w-xl text-base leading-8 text-mist sm:text-lg">
              Help us build bigger worlds, better bots, and new experiences. Patron support gives Entity Studios room
              to keep making the thoughtful details that turn a tool into a place people love.
            </p>
            <div className="mt-9 flex flex-col gap-3 sm:flex-row">
              <a
                href={patreonUrl}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center justify-center gap-2 rounded-full bg-[#ff5f5f] px-5 py-3 text-sm font-semibold text-white shadow-[0_14px_42px_rgba(255,95,95,0.24)] transition-all hover:-translate-y-0.5 hover:bg-[#ff7171] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#ffc0c0] focus-visible:ring-offset-2 focus-visible:ring-offset-ink"
              >
                Support us on Patreon <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
              </a>
              <Link
                href="/bots"
                className="inline-flex items-center justify-center gap-2 rounded-full border border-white/15 bg-white/[0.035] px-5 py-3 text-sm font-medium text-white transition-colors hover:border-white/30 hover:bg-white/[0.08] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-entity"
              >
                Explore what we build <ArrowRight className="h-4 w-4" aria-hidden="true" />
              </Link>
            </div>
          </div>

          <aside className="relative mx-auto w-full max-w-md rounded-[1.65rem] border border-white/15 bg-panel/80 p-2 shadow-[0_28px_100px_rgba(69,22,42,0.32)] backdrop-blur-xl" aria-label="Support impact summary">
            <div className="overflow-hidden rounded-[1.35rem] border border-white/10 bg-[linear-gradient(145deg,rgba(255,95,95,0.21),rgba(169,121,255,0.12)_52%,rgba(255,255,255,0.025))] p-6 sm:p-7">
              <div className="flex items-start justify-between gap-4">
                <div className="grid h-12 w-12 place-items-center rounded-2xl border border-[#ffb2b2]/25 bg-[#ff5f5f]/15 text-[#ffc5c5]"><Heart className="h-5 w-5 fill-current" aria-hidden="true" /></div>
                <span className="rounded-full border border-white/10 bg-black/15 px-3 py-1 text-xs font-medium text-mist">Patron-powered</span>
              </div>
              <h2 className="mt-9 text-2xl font-semibold tracking-[-0.035em] text-white">More room to make the good stuff.</h2>
              <p className="mt-3 text-sm leading-6 text-mist">Support helps protect time for the work users may not see immediately, but absolutely feel.</p>
              <dl className="mt-7 grid grid-cols-2 gap-3">
                <div className="rounded-xl border border-white/10 bg-black/15 p-4"><dt className="text-xs text-mist">Keeps moving</dt><dd className="mt-2 text-sm font-semibold text-white">Development</dd></div>
                <div className="rounded-xl border border-white/10 bg-black/15 p-4"><dt className="text-xs text-mist">Makes space for</dt><dd className="mt-2 text-sm font-semibold text-white">Experiments</dd></div>
                <div className="rounded-xl border border-white/10 bg-black/15 p-4"><dt className="text-xs text-mist">Strengthens</dt><dd className="mt-2 text-sm font-semibold text-white">Community</dd></div>
                <div className="rounded-xl border border-white/10 bg-black/15 p-4"><dt className="text-xs text-mist">Helps maintain</dt><dd className="mt-2 text-sm font-semibold text-white">Reliability</dd></div>
              </dl>
            </div>
          </aside>
        </div>
      </section>

      <section className="px-5 py-20 sm:px-6 sm:py-28 lg:px-8" aria-labelledby="impact-heading">
        <div className="mx-auto max-w-7xl">
          <div className="max-w-2xl">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#ffabab]">What support unlocks</p>
            <h2 id="impact-heading" className="mt-4 text-3xl font-semibold tracking-[-0.04em] text-white sm:text-4xl">A little more runway goes a long way.</h2>
          </div>
          <div className="mt-10 grid gap-4 md:grid-cols-2 xl:grid-cols-4">
            {impactAreas.map(({ icon: Icon, title, description }) => (
              <article key={title} className="group rounded-2xl border border-white/10 bg-panel/60 p-6 transition duration-300 hover:-translate-y-1 hover:border-[#ff8d8d]/30 hover:bg-panel">
                <div className="flex h-10 w-10 items-center justify-center rounded-xl border border-[#ff8d8d]/25 bg-[#ff5f5f]/10 text-[#ffb5b5] transition-transform duration-300 group-hover:scale-110"><Icon className="h-5 w-5" aria-hidden="true" /></div>
                <h3 className="mt-7 text-lg font-semibold text-white">{title}</h3>
                <p className="mt-3 text-sm leading-6 text-mist">{description}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="border-y border-white/10 bg-white/[0.018] px-5 py-20 sm:px-6 sm:py-28 lg:px-8" aria-labelledby="support-approach-heading">
        <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[0.8fr_1.2fr]">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-entity">A transparent kind of support</p>
            <h2 id="support-approach-heading" className="mt-4 text-3xl font-semibold tracking-[-0.04em] text-white sm:text-4xl">No pressure. Just momentum.</h2>
            <p className="mt-5 max-w-md leading-7 text-mist">You do not need to pledge to belong here. If you choose to support, it is a vote for the long-term quality of the ecosystem.</p>
          </div>
          <ol className="divide-y divide-white/10 rounded-2xl border border-white/10 bg-panel/50 px-6">
            {values.map(([title, description], index) => (
              <li key={title} className="flex gap-5 py-6 first:pt-6 last:pb-6">
                <span className="pt-0.5 text-xs font-bold tracking-[0.16em] text-[#ffabab]">0{index + 1}</span>
                <div>
                  <h3 className="font-semibold text-white">{title}</h3>
                  <p className="mt-2 text-sm leading-6 text-mist">{description}</p>
                </div>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section className="px-5 pb-20 sm:px-6 sm:pb-28 lg:px-8">
        <div className="mx-auto flex max-w-7xl flex-col justify-between gap-7 rounded-3xl border border-[#ff8d8d]/25 bg-[linear-gradient(115deg,rgba(255,95,95,0.16),rgba(169,121,255,0.1),rgba(255,255,255,0.025))] px-6 py-9 sm:px-10 sm:py-11 lg:flex-row lg:items-center">
          <div className="flex gap-4">
            <div className="grid h-11 w-11 shrink-0 place-items-center rounded-xl bg-[#ff5f5f]/15 text-[#ffc5c5]"><Sparkles className="h-5 w-5" aria-hidden="true" /></div>
            <div>
              <h2 className="text-xl font-semibold text-white">Help make the next chapter possible.</h2>
              <p className="mt-2 max-w-xl text-sm leading-6 text-mist">Whether you pledge, share the work, or simply show up, thank you for being part of this studio.</p>
            </div>
          </div>
          <a href={patreonUrl} target="_blank" rel="noreferrer" className="inline-flex shrink-0 items-center justify-center gap-2 rounded-full bg-white px-5 py-3 text-sm font-semibold text-[#632f3b] transition-transform hover:-translate-y-0.5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white">
            Visit Patreon <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
          </a>
        </div>
      </section>
    </main>
  );
}
