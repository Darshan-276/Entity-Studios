import type { Metadata } from "next";
import Link from "next/link";
import {
  ArrowRight,
  BookOpen,
  Bot,
  CircleHelp,
  Code2,
  Compass,
  FileQuestion,
  LifeBuoy,
  Search,
  Sparkles,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Documentation",
  description: "Guides, commands, features, troubleshooting, and frequently asked questions for Entity Studios bots.",
  openGraph: {
    title: "Entity Studios Documentation",
    description: "Everything you need to get more from every Entity experience.",
  },
};

const categories = [
  {
    icon: Compass,
    title: "Getting started",
    description: "Invite a bot, set up your server, and learn the basics without getting lost in the details.",
    count: "Start here",
  },
  {
    icon: Code2,
    title: "Bot commands",
    description: "A growing command reference, organized around the moments players and administrators care about.",
    count: "Command guide",
  },
  {
    icon: Sparkles,
    title: "Features & guides",
    description: "Go deeper on progression, profiles, economies, events, and the systems behind each bot.",
    count: "Explore guides",
  },
  {
    icon: CircleHelp,
    title: "FAQs",
    description: "Short, clear answers to the questions that come up most often across the ecosystem.",
    count: "Quick answers",
  },
  {
    icon: LifeBuoy,
    title: "Troubleshooting",
    description: "Practical next steps for permissions, missing responses, account questions, and other common issues.",
    count: "Get unstuck",
  },
  {
    icon: Bot,
    title: "Bot spaces",
    description: "Focused entry points for each Entity bot, designed to grow as new worlds arrive.",
    count: "Browse bots",
  },
] as const;

const paths = [
  ["New to Entity Studios", "Meet the bots, choose a world, and bring it into your server.", "/bots", "Explore bots"],
  ["Playing Anime Realms", "Start your profile, learn core commands, and find the next quest.", "/bots/anime-realms", "Open Anime Realms"],
  ["Need a hand right now", "Visit the support center or ask the community directly.", "/support", "Get support"],
] as const;

export default function DocumentationPage() {
  return (
    <main className="overflow-hidden">
      <section className="relative isolate border-b border-white/10 px-5 pb-20 pt-16 sm:px-6 sm:pb-28 sm:pt-24 lg:px-8">
        <div className="pointer-events-none absolute inset-0 -z-10 overflow-hidden" aria-hidden="true">
          <div className="absolute left-[14%] top-[-20rem] h-[37rem] w-[37rem] rounded-full bg-cyan-500/12 blur-[130px]" />
          <div className="absolute right-[-8%] top-10 h-[28rem] w-[28rem] rounded-full bg-entity/19 blur-[120px]" />
          <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.035)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.035)_1px,transparent_1px)] bg-[size:48px_48px] [mask-image:radial-gradient(ellipse_at_top,black,transparent_70%)]" />
        </div>
        <div className="mx-auto max-w-7xl">
          <div className="max-w-3xl">
            <p className="inline-flex items-center gap-2 rounded-full border border-cyan-300/20 bg-cyan-300/10 px-3 py-1.5 text-xs font-semibold uppercase tracking-[0.18em] text-cyan-100">
              <BookOpen className="h-3.5 w-3.5" aria-hidden="true" />
              Entity knowledge base
            </p>
            <h1 className="mt-6 text-4xl font-semibold tracking-[-0.055em] text-white sm:text-6xl lg:text-7xl">Clear paths into every <span className="text-cyan-100">world.</span></h1>
            <p className="mt-7 max-w-2xl text-base leading-8 text-mist sm:text-lg">Guides, commands, answers, and practical help for getting more out of the Entity Studios ecosystem.</p>
          </div>

          <div className="mt-10 max-w-3xl rounded-2xl border border-white/10 bg-panel/75 p-2 shadow-aura backdrop-blur-xl">
            <div className="flex items-center gap-3 rounded-xl bg-black/20 px-4 py-3 text-sm text-mist">
              <Search className="h-4 w-4 shrink-0 text-cyan-100" aria-hidden="true" />
              <span>Search documentation — coming soon</span>
              <kbd className="ml-auto hidden rounded border border-white/10 bg-white/[0.04] px-1.5 py-0.5 text-[11px] text-mist sm:inline">⌘ K</kbd>
            </div>
          </div>
        </div>
      </section>

      <section className="px-5 py-20 sm:px-6 sm:py-28 lg:px-8" aria-labelledby="browse-heading">
        <div className="mx-auto max-w-7xl">
          <div className="flex flex-col justify-between gap-4 sm:flex-row sm:items-end">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-cyan-200">Browse by topic</p>
              <h2 id="browse-heading" className="mt-4 text-3xl font-semibold tracking-[-0.04em] text-white sm:text-4xl">Start exactly where you are.</h2>
            </div>
            <p className="max-w-md text-sm leading-6 text-mist">This is the foundation of a documentation system that will expand as the Entity ecosystem does.</p>
          </div>
          <div className="mt-10 grid gap-4 md:grid-cols-2 xl:grid-cols-3">
            {categories.map(({ icon: Icon, title, description, count }) => (
              <article key={title} className="group rounded-2xl border border-white/10 bg-panel/55 p-6 transition duration-300 hover:-translate-y-1 hover:border-cyan-200/30 hover:bg-panel">
                <div className="flex items-start justify-between gap-4">
                  <div className="flex h-10 w-10 items-center justify-center rounded-xl border border-cyan-200/20 bg-cyan-300/10 text-cyan-100"><Icon className="h-5 w-5" aria-hidden="true" /></div>
                  <span className="text-xs font-medium text-mist">{count}</span>
                </div>
                <h3 className="mt-8 text-lg font-semibold text-white">{title}</h3>
                <p className="mt-3 text-sm leading-6 text-mist">{description}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="border-y border-white/10 bg-white/[0.018] px-5 py-20 sm:px-6 sm:py-28 lg:px-8" aria-labelledby="popular-paths-heading">
        <div className="mx-auto max-w-7xl">
          <div className="max-w-xl">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-entity">Popular paths</p>
            <h2 id="popular-paths-heading" className="mt-4 text-3xl font-semibold tracking-[-0.04em] text-white sm:text-4xl">Follow the thread that fits.</h2>
          </div>
          <ol className="mt-10 grid gap-4 lg:grid-cols-3">
            {paths.map(([title, description, href, label], index) => (
              <li key={title} className="flex flex-col rounded-2xl border border-white/10 bg-panel/55 p-6">
                <span className="text-xs font-bold tracking-[0.18em] text-cyan-100">0{index + 1}</span>
                <h3 className="mt-8 text-lg font-semibold text-white">{title}</h3>
                <p className="mt-3 flex-1 text-sm leading-6 text-mist">{description}</p>
                <Link href={href} className="mt-7 inline-flex items-center gap-2 text-sm font-semibold text-cyan-100 transition-colors hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-entity">{label} <ArrowRight className="h-4 w-4" aria-hidden="true" /></Link>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section className="px-5 pb-20 sm:px-6 sm:pb-28 lg:px-8">
        <div className="mx-auto flex max-w-7xl flex-col justify-between gap-7 rounded-3xl border border-cyan-200/20 bg-[linear-gradient(115deg,rgba(34,211,238,0.12),rgba(169,121,255,0.13),rgba(255,255,255,0.025))] px-6 py-9 sm:px-10 sm:py-11 lg:flex-row lg:items-center">
          <div className="flex gap-4">
            <div className="grid h-11 w-11 shrink-0 place-items-center rounded-xl bg-cyan-300/10 text-cyan-100"><FileQuestion className="h-5 w-5" aria-hidden="true" /></div>
            <div>
              <h2 className="text-xl font-semibold text-white">Can&apos;t find the answer you need?</h2>
              <p className="mt-2 max-w-xl text-sm leading-6 text-mist">The support center and Entity Studios Discord are always the next best place to ask.</p>
            </div>
          </div>
          <Link href="/support" className="inline-flex shrink-0 items-center justify-center gap-2 rounded-full bg-white px-5 py-3 text-sm font-semibold text-[#14383f] transition-transform hover:-translate-y-0.5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white">Open support <ArrowRight className="h-4 w-4" aria-hidden="true" /></Link>
        </div>
      </section>
    </main>
  );
}
