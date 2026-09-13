import type { Metadata } from "next";
import Link from "next/link";
import {
  ArrowRight,
  BadgeCheck,
  Bot,
  Boxes,
  CreditCard,
  KeyRound,
  LayoutDashboard,
  LockKeyhole,
  PackageCheck,
  Settings2,
  UserRound,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Dashboard",
  description: "The future home for your Entity Studios profile, bot products, purchases, and connected Discord account.",
  robots: { index: false, follow: false },
};

const dashboardAreas = [
  {
    icon: UserRound,
    title: "Profile",
    description: "Your Entity identity, preferences, and connected Discord account.",
  },
  {
    icon: PackageCheck,
    title: "Library",
    description: "Products, cosmetics, boosts, and account-linked entitlements in one place.",
  },
  {
    icon: CreditCard,
    title: "Orders & subscriptions",
    description: "A clear record of purchases, recurring support, invoices, and renewal details.",
  },
  {
    icon: KeyRound,
    title: "Licenses & connections",
    description: "Manage bot access, server licenses, and the integrations that power your experience.",
  },
] as const;

export default function DashboardPage() {
  return (
    <main className="overflow-hidden">
      <section className="relative isolate border-b border-white/10 px-5 pb-20 pt-16 sm:px-6 sm:pb-28 sm:pt-24 lg:px-8">
        <div className="pointer-events-none absolute inset-0 -z-10 overflow-hidden" aria-hidden="true">
          <div className="absolute left-[10%] top-[-18rem] h-[37rem] w-[37rem] rounded-full bg-entity/22 blur-[130px]" />
          <div className="absolute bottom-[-19rem] right-[4%] h-[31rem] w-[31rem] rounded-full bg-blue-500/14 blur-[120px]" />
          <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.035)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.035)_1px,transparent_1px)] bg-[size:56px_56px] [mask-image:linear-gradient(to_bottom,black,transparent_85%)]" />
        </div>
        <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-[1fr_0.95fr] lg:items-center">
          <div className="max-w-2xl">
            <p className="inline-flex items-center gap-2 rounded-full border border-entity/25 bg-entity/10 px-3 py-1.5 text-xs font-semibold uppercase tracking-[0.18em] text-[#d9c4ff]"><LayoutDashboard className="h-3.5 w-3.5" aria-hidden="true" /> Account hub — in progress</p>
            <h1 className="mt-6 text-4xl font-semibold tracking-[-0.055em] text-white sm:text-6xl lg:text-7xl">One account for every <span className="text-[#c8a8ff]">Entity world.</span></h1>
            <p className="mt-7 max-w-xl text-base leading-8 text-mist sm:text-lg">Your dashboard is being designed as the secure home for your profile, purchases, subscriptions, licenses, and Discord connections — without making today&apos;s experience wait on it.</p>
            <div className="mt-9 flex flex-col gap-3 sm:flex-row">
              <Link href="/bots" className="inline-flex items-center justify-center gap-2 rounded-full bg-white px-5 py-3 text-sm font-semibold text-ink transition-transform hover:-translate-y-0.5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-ink">Explore the ecosystem <ArrowRight className="h-4 w-4" aria-hidden="true" /></Link>
              <Link href="/documentation" className="inline-flex items-center justify-center gap-2 rounded-full border border-white/15 bg-white/[0.035] px-5 py-3 text-sm font-medium text-white transition-colors hover:border-white/30 hover:bg-white/[0.08] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-entity">Read the guides <ArrowRight className="h-4 w-4" aria-hidden="true" /></Link>
            </div>
            <p className="mt-5 text-sm text-mist">Discord sign-in will appear here when secure OAuth is ready to launch.</p>
          </div>

          <aside className="mx-auto w-full max-w-md rounded-[1.65rem] border border-white/15 bg-panel/80 p-3 shadow-aura backdrop-blur-xl" aria-label="Dashboard preview">
            <div className="overflow-hidden rounded-[1.35rem] border border-white/10 bg-[linear-gradient(145deg,rgba(169,121,255,0.16),rgba(62,83,188,0.12)_58%,rgba(255,255,255,0.025))]">
              <div className="flex items-center justify-between border-b border-white/10 px-5 py-4">
                <div className="flex items-center gap-2 text-sm font-semibold text-white"><span className="grid h-7 w-7 place-items-center rounded-lg bg-entity/15 text-[#d9c4ff]"><LayoutDashboard className="h-3.5 w-3.5" aria-hidden="true" /></span> Entity account</div>
                <span className="rounded-full border border-white/10 bg-black/15 px-2.5 py-1 text-[11px] font-medium text-mist">Preview</span>
              </div>
              <div className="p-5">
                <div className="flex items-center gap-3 rounded-xl border border-white/10 bg-black/15 p-3">
                  <div className="grid h-10 w-10 place-items-center rounded-full bg-white/[0.06] text-[#d9c4ff]"><UserRound className="h-5 w-5" aria-hidden="true" /></div>
                  <div><p className="text-sm font-medium text-white">Your Entity profile</p><p className="mt-0.5 text-xs text-mist">Connect Discord when launch opens</p></div>
                </div>
                <div className="mt-4 grid grid-cols-2 gap-3">
                  <div className="rounded-xl border border-white/10 bg-black/15 p-4"><Boxes className="h-4 w-4 text-[#c8a8ff]" aria-hidden="true" /><p className="mt-5 text-xs text-mist">Your library</p><p className="mt-1 text-sm font-semibold text-white">Ready soon</p></div>
                  <div className="rounded-xl border border-white/10 bg-black/15 p-4"><BadgeCheck className="h-4 w-4 text-[#c8a8ff]" aria-hidden="true" /><p className="mt-5 text-xs text-mist">Connections</p><p className="mt-1 text-sm font-semibold text-white">Secure by design</p></div>
                </div>
                <div className="mt-4 rounded-xl border border-dashed border-entity/30 bg-entity/[0.06] px-4 py-3 text-center text-xs font-medium text-[#d9c4ff]">Account access is preparing for launch</div>
              </div>
            </div>
          </aside>
        </div>
      </section>

      <section className="px-5 py-20 sm:px-6 sm:py-28 lg:px-8" aria-labelledby="dashboard-future-heading">
        <div className="mx-auto max-w-7xl">
          <div className="max-w-2xl"><p className="text-xs font-semibold uppercase tracking-[0.2em] text-entity">Built for what comes next</p><h2 id="dashboard-future-heading" className="mt-4 text-3xl font-semibold tracking-[-0.04em] text-white sm:text-4xl">A platform layer, not a placeholder.</h2><p className="mt-5 leading-7 text-mist">The future dashboard is being kept deliberately simple at the surface and thoughtfully structured underneath, ready for the next pieces of the Entity ecosystem.</p></div>
          <div className="mt-10 grid gap-4 md:grid-cols-2 xl:grid-cols-4">
            {dashboardAreas.map(({ icon: Icon, title, description }) => (
              <article key={title} className="rounded-2xl border border-white/10 bg-panel/60 p-6 transition duration-300 hover:-translate-y-1 hover:border-entity/35 hover:bg-panel"><div className="flex h-10 w-10 items-center justify-center rounded-xl border border-entity/25 bg-entity/10 text-[#d9c4ff]"><Icon className="h-5 w-5" aria-hidden="true" /></div><h3 className="mt-7 text-lg font-semibold text-white">{title}</h3><p className="mt-3 text-sm leading-6 text-mist">{description}</p><span className="mt-6 inline-flex rounded-full border border-white/10 bg-white/[0.03] px-2.5 py-1 text-[11px] font-medium text-mist">Planned</span></article>
            ))}
          </div>
        </div>
      </section>

      <section className="border-y border-white/10 bg-white/[0.018] px-5 py-20 sm:px-6 sm:py-28 lg:px-8" aria-labelledby="launch-principles-heading">
        <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[0.8fr_1.2fr]">
          <div><p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#c8a8ff]">Launch principles</p><h2 id="launch-principles-heading" className="mt-4 text-3xl font-semibold tracking-[-0.04em] text-white sm:text-4xl">Worth waiting for.</h2></div>
          <div className="grid gap-4 sm:grid-cols-3">
            {[
              ["Private by default", "Connection data and purchases should be understandable, controlled, and handled with care."],
              ["Useful from day one", "The account space should answer real questions, not merely add another login."],
              ["Connected, not tangled", "Each bot can grow independently while your Entity identity stays coherent."],
            ].map(([title, copy], index) => (
              <article key={title} className="rounded-2xl border border-white/10 bg-panel/55 p-5"><span className="text-xs font-bold tracking-[0.18em] text-[#c8a8ff]">0{index + 1}</span><h3 className="mt-7 font-semibold text-white">{title}</h3><p className="mt-3 text-sm leading-6 text-mist">{copy}</p></article>
            ))}
          </div>
        </div>
      </section>

      <section className="px-5 pb-20 sm:px-6 sm:pb-28 lg:px-8">
        <div className="mx-auto flex max-w-7xl flex-col justify-between gap-7 rounded-3xl border border-entity/25 bg-[linear-gradient(115deg,rgba(169,121,255,0.18),rgba(80,99,224,0.11),rgba(255,255,255,0.025))] px-6 py-9 sm:px-10 sm:py-11 lg:flex-row lg:items-center">
          <div className="flex gap-4"><div className="grid h-11 w-11 shrink-0 place-items-center rounded-xl bg-entity/15 text-[#d9c4ff]"><LockKeyhole className="h-5 w-5" aria-hidden="true" /></div><div><h2 className="text-xl font-semibold text-white">Accounts are coming. The worlds are already open.</h2><p className="mt-2 max-w-xl text-sm leading-6 text-mist">Until dashboard access launches, explore bots, products, guides, and the community without a gate.</p></div></div>
          <Link href="/bots" className="inline-flex shrink-0 items-center justify-center gap-2 rounded-full bg-white px-5 py-3 text-sm font-semibold text-ink transition-transform hover:-translate-y-0.5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white">Explore bots <Bot className="h-4 w-4" aria-hidden="true" /></Link>
        </div>
      </section>
    </main>
  );
}
