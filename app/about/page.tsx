import type { Metadata } from "next";
import Link from "next/link";
import {
  ArrowRight,
  ArrowUpRight,
  Compass,
  Gamepad2,
  Layers3,
  Rocket,
  Sparkles,
  UsersRound,
} from "lucide-react";

export const metadata: Metadata = {
  title: "About",
  description:
    "Learn how Entity Studios builds Discord bots, digital products, and connected community experiences.",
  openGraph: {
    title: "About Entity Studios",
    description: "Building communities, one experience at a time.",
  },
};

const pillars = [
  {
    icon: Gamepad2,
    title: "Discord experiences",
    description: "Bots with depth, character, and a reason for a community to return tomorrow.",
  },
  {
    icon: Layers3,
    title: "Digital worlds",
    description: "Progression systems, collectibles, and products that make every experience feel personal.",
  },
  {
    icon: UsersRound,
    title: "Community tools",
    description: "Useful systems that help moderators and members spend more time together, not configuring.",
  },
  {
    icon: Sparkles,
    title: "Experiments worth sharing",
    description: "New formats, mechanics, and ideas shaped in the open with the people who use them.",
  },
] as const;

const roadmap = [
  ["Now", "A stronger foundation", "Refining the first generation of Entity experiences and the studio hub around them."],
  ["Next", "More worlds to enter", "New bot concepts, seasonal content, and richer ways for communities to connect."],
  ["Beyond", "One connected account", "A unified place for profiles, purchases, licenses, and the experiences you call home."],
] as const;

export default function AboutPage() {
  return (
    <main className="overflow-hidden">
      <section className="relative isolate border-b border-white/10 px-5 pb-20 pt-16 sm:px-6 sm:pb-28 sm:pt-24 lg:px-8">
        <div className="pointer-events-none absolute inset-0 -z-10 overflow-hidden" aria-hidden="true">
          <div className="absolute left-[12%] top-[-20rem] h-[38rem] w-[38rem] rounded-full bg-entity/20 blur-[130px]" />
          <div className="absolute bottom-[-22rem] right-[-8rem] h-[35rem] w-[35rem] rounded-full bg-indigo-500/15 blur-[120px]" />
          <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.035)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.035)_1px,transparent_1px)] bg-[size:52px_52px] [mask-image:linear-gradient(to_bottom,black,transparent_82%)]" />
        </div>

        <div className="mx-auto max-w-7xl">
          <div className="max-w-4xl">
            <p className="mb-5 inline-flex items-center gap-2 rounded-full border border-entity/25 bg-entity/10 px-3 py-1.5 text-xs font-semibold uppercase tracking-[0.18em] text-[#d9c4ff]">
              <span className="h-1.5 w-1.5 rounded-full bg-entity shadow-[0_0_14px_rgba(169,121,255,1)]" />
              The studio behind the worlds
            </p>
            <h1 className="max-w-4xl text-4xl font-semibold tracking-[-0.055em] text-white sm:text-6xl lg:text-7xl">
              Building communities, one <span className="text-[#c8a8ff]">experience</span> at a time.
            </h1>
            <p className="mt-7 max-w-2xl text-base leading-8 text-mist sm:text-lg">
              Entity Studios is an independent digital studio creating Discord bots, game-like systems, digital
              products, and thoughtful tools for the communities that gather around them.
            </p>
            <div className="mt-9 flex flex-col gap-3 sm:flex-row">
              <Link
                href="/bots"
                className="inline-flex items-center justify-center gap-2 rounded-full bg-white px-5 py-3 text-sm font-semibold text-ink transition-transform hover:-translate-y-0.5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-ink"
              >
                Explore our bots <ArrowRight className="h-4 w-4" aria-hidden="true" />
              </Link>
              <Link
                href="/discord"
                className="inline-flex items-center justify-center gap-2 rounded-full border border-white/15 bg-white/[0.035] px-5 py-3 text-sm font-medium text-white transition-colors hover:border-white/30 hover:bg-white/[0.08] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-entity"
              >
                Meet the community <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
              </Link>
            </div>
          </div>

          <dl className="mt-16 grid max-w-4xl gap-px overflow-hidden rounded-2xl border border-white/10 bg-white/10 sm:grid-cols-3">
            {[
              ["A studio", "not a single bot"],
              ["One ecosystem", "built to grow"],
              ["Community first", "from the start"],
            ].map(([title, description]) => (
              <div key={title} className="bg-ink/80 px-5 py-5 backdrop-blur-sm">
                <dt className="text-sm font-semibold text-white">{title}</dt>
                <dd className="mt-1 text-sm text-mist">{description}</dd>
              </div>
            ))}
          </dl>
        </div>
      </section>

      <section className="px-5 py-20 sm:px-6 sm:py-28 lg:px-8" aria-labelledby="mission-heading">
        <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-[0.85fr_1.15fr] lg:items-start">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-entity">Our point of view</p>
            <h2 id="mission-heading" className="mt-4 text-3xl font-semibold tracking-[-0.04em] text-white sm:text-4xl">
              Technology is more memorable when it gives people something to do together.
            </h2>
          </div>
          <div className="grid gap-4 sm:grid-cols-2">
            <article className="rounded-2xl border border-white/10 bg-panel/70 p-6 shadow-aura">
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#c8a8ff]">Mission</p>
              <p className="mt-4 text-lg leading-8 text-white">
                Make online communities feel more alive through playful, dependable, and human-centered experiences.
              </p>
            </article>
            <article className="rounded-2xl border border-white/10 bg-white/[0.035] p-6">
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#c8a8ff]">Vision</p>
              <p className="mt-4 text-lg leading-8 text-white">
                Build an ecosystem where every new bot, product, and interaction adds to a larger sense of belonging.
              </p>
            </article>
          </div>
        </div>
      </section>

      <section className="border-y border-white/10 bg-white/[0.018] px-5 py-20 sm:px-6 sm:py-28 lg:px-8" aria-labelledby="build-heading">
        <div className="mx-auto max-w-7xl">
          <div className="max-w-2xl">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-entity">What we build</p>
            <h2 id="build-heading" className="mt-4 text-3xl font-semibold tracking-[-0.04em] text-white sm:text-4xl">
              A connected toolkit for the next great server.
            </h2>
          </div>
          <div className="mt-10 grid gap-4 md:grid-cols-2 xl:grid-cols-4">
            {pillars.map(({ icon: Icon, title, description }, index) => (
              <article
                key={title}
                className="group rounded-2xl border border-white/10 bg-panel/60 p-6 transition duration-300 hover:-translate-y-1 hover:border-entity/35 hover:bg-panel"
              >
                <div className="flex h-10 w-10 items-center justify-center rounded-xl border border-entity/25 bg-entity/10 text-[#c8a8ff] transition-transform duration-300 group-hover:scale-110">
                  <Icon className="h-5 w-5" aria-hidden="true" />
                </div>
                <p className="mt-8 text-xs font-semibold tracking-[0.18em] text-mist">0{index + 1}</p>
                <h3 className="mt-2 text-lg font-semibold text-white">{title}</h3>
                <p className="mt-3 text-sm leading-6 text-mist">{description}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="px-5 py-20 sm:px-6 sm:py-28 lg:px-8" aria-labelledby="roadmap-heading">
        <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[0.85fr_1.15fr]">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-entity">Where we are going</p>
            <h2 id="roadmap-heading" className="mt-4 text-3xl font-semibold tracking-[-0.04em] text-white sm:text-4xl">
              A roadmap with room for surprise.
            </h2>
            <p className="mt-5 max-w-md leading-7 text-mist">
              We are building patiently: a platform that can grow without losing the distinctive feeling of each world
              inside it.
            </p>
          </div>
          <ol className="relative space-y-0 border-l border-white/10">
            {roadmap.map(([phase, title, description]) => (
              <li key={phase} className="relative pb-9 pl-8 last:pb-0">
                <span className="absolute -left-[5px] top-1 h-2.5 w-2.5 rounded-full border-2 border-ink bg-entity shadow-[0_0_18px_rgba(169,121,255,0.85)]" />
                <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#c8a8ff]">{phase}</p>
                <h3 className="mt-2 text-xl font-semibold text-white">{title}</h3>
                <p className="mt-2 max-w-xl text-sm leading-6 text-mist">{description}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section className="px-5 pb-20 sm:px-6 sm:pb-28 lg:px-8">
        <div className="relative mx-auto max-w-7xl overflow-hidden rounded-3xl border border-entity/25 bg-[linear-gradient(120deg,rgba(169,121,255,0.18),rgba(71,48,145,0.10)_48%,rgba(255,255,255,0.025))] px-6 py-10 sm:px-10 sm:py-14">
          <div className="pointer-events-none absolute -right-24 -top-32 h-72 w-72 rounded-full bg-entity/25 blur-[85px]" aria-hidden="true" />
          <div className="relative flex flex-col justify-between gap-8 lg:flex-row lg:items-end">
            <div className="max-w-2xl">
              <Compass className="h-6 w-6 text-[#d9c4ff]" aria-hidden="true" />
              <h2 className="mt-5 text-3xl font-semibold tracking-[-0.04em] text-white sm:text-4xl">
                Find your next community ritual.
              </h2>
              <p className="mt-4 leading-7 text-mist">Start with the worlds we are building today, then help shape what comes after.</p>
            </div>
            <Link
              href="/bots"
              className="inline-flex shrink-0 items-center justify-center gap-2 rounded-full bg-white px-5 py-3 text-sm font-semibold text-ink transition-transform hover:-translate-y-0.5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white"
            >
              Discover Entity Studios <Rocket className="h-4 w-4" aria-hidden="true" />
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
