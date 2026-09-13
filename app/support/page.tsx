import type { Metadata } from "next";
import Link from "next/link";
import {
  ArrowRight,
  ArrowUpRight,
  BadgeCheck,
  BookOpen,
  CircleHelp,
  ExternalLink,
  LifeBuoy,
  MessageCircle,
  ShieldAlert,
  Wrench,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Support Center",
  description: "Get help with Entity Studios bots, account questions, permissions, purchases, and common issues.",
  openGraph: {
    title: "Entity Studios Support",
    description: "Clear answers and a direct route to the community when you need help.",
  },
};

const discordUrl = process.env.NEXT_PUBLIC_DISCORD_INVITE_URL ?? "https://discord.gg/entitystudios";

const helpOptions = [
  {
    icon: BookOpen,
    title: "Read the guides",
    description: "Get oriented with commands, features, setup notes, and frequently asked questions.",
    href: "/documentation",
    label: "Open documentation",
  },
  {
    icon: MessageCircle,
    title: "Ask in Discord",
    description: "Reach the Entity community for real-time support, helpful context, and updates.",
    href: discordUrl,
    label: "Join Discord",
    external: true,
  },
  {
    icon: Wrench,
    title: "Check the basics",
    description: "Most issues begin with permissions, a missing invite scope, or a command context mismatch.",
    href: "#common-issues",
    label: "See common fixes",
  },
] as const;

const faqs = [
  {
    question: "The bot does not respond in my server. What should I check first?",
    answer: "Confirm that the bot is online, can view the channel, and has permission to send messages and use application commands. If it was just invited, allow Discord a moment to finish syncing commands.",
  },
  {
    question: "How do I invite an Entity Studios bot?",
    answer: "Open the relevant bot page, choose Invite, then select a server where you have permission to manage applications. You can find every current bot from the Bots page.",
  },
  {
    question: "I have a question about a product or purchase. Where should I go?",
    answer: "Bring the order or product context to the Entity Studios Discord support space. The support flow is being prepared for account-linked orders and licenses as the platform grows.",
  },
  {
    question: "Where can I find updates and known issues?",
    answer: "The Entity Studios Discord is the best live source for announcements, status notes, and community help. Documentation will continue to expand with dedicated troubleshooting guides.",
  },
] as const;

export default function SupportPage() {
  return (
    <main className="overflow-hidden">
      <section className="relative isolate border-b border-white/10 px-5 pb-20 pt-16 sm:px-6 sm:pb-28 sm:pt-24 lg:px-8">
        <div className="pointer-events-none absolute inset-0 -z-10 overflow-hidden" aria-hidden="true">
          <div className="absolute left-[6%] top-[-15rem] h-[34rem] w-[34rem] rounded-full bg-amber-400/12 blur-[130px]" />
          <div className="absolute right-[5%] top-[-10rem] h-[29rem] w-[29rem] rounded-full bg-entity/20 blur-[120px]" />
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(255,255,255,0.06),transparent_56%)]" />
        </div>
        <div className="mx-auto max-w-7xl">
          <div className="max-w-3xl">
            <p className="inline-flex items-center gap-2 rounded-full border border-amber-200/20 bg-amber-200/10 px-3 py-1.5 text-xs font-semibold uppercase tracking-[0.18em] text-amber-100"><LifeBuoy className="h-3.5 w-3.5" aria-hidden="true" /> Support center</p>
            <h1 className="mt-6 text-4xl font-semibold tracking-[-0.055em] text-white sm:text-6xl lg:text-7xl">Let&apos;s get you back to <span className="text-amber-100">what matters.</span></h1>
            <p className="mt-7 max-w-2xl text-base leading-8 text-mist sm:text-lg">Clear answers, practical checks, and a direct route to the Entity Studios community when you need another set of eyes.</p>
            <div className="mt-9 flex flex-col gap-3 sm:flex-row">
              <a href={discordUrl} target="_blank" rel="noreferrer" className="inline-flex items-center justify-center gap-2 rounded-full bg-white px-5 py-3 text-sm font-semibold text-[#3e321c] transition-transform hover:-translate-y-0.5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-ink">Ask in Discord <ArrowUpRight className="h-4 w-4" aria-hidden="true" /></a>
              <Link href="/documentation" className="inline-flex items-center justify-center gap-2 rounded-full border border-white/15 bg-white/[0.035] px-5 py-3 text-sm font-medium text-white transition-colors hover:border-white/30 hover:bg-white/[0.08] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-entity">Browse documentation <ArrowRight className="h-4 w-4" aria-hidden="true" /></Link>
            </div>
          </div>

          <dl className="mt-14 grid max-w-3xl gap-px overflow-hidden rounded-2xl border border-white/10 bg-white/10 sm:grid-cols-3">
            {[
              ["Start with", "the quick checks"],
              ["Then ask", "the community"],
              ["Stay current", "with announcements"],
            ].map(([title, description]) => (
              <div key={title} className="bg-ink/75 px-5 py-5 backdrop-blur-sm"><dt className="text-sm font-semibold text-white">{title}</dt><dd className="mt-1 text-sm text-mist">{description}</dd></div>
            ))}
          </dl>
        </div>
      </section>

      <section className="px-5 py-20 sm:px-6 sm:py-28 lg:px-8" aria-labelledby="help-heading">
        <div className="mx-auto max-w-7xl">
          <div className="max-w-xl"><p className="text-xs font-semibold uppercase tracking-[0.2em] text-amber-100">Choose a route</p><h2 id="help-heading" className="mt-4 text-3xl font-semibold tracking-[-0.04em] text-white sm:text-4xl">The right kind of help, right away.</h2></div>
          <div className="mt-10 grid gap-4 md:grid-cols-3">
            {helpOptions.map(({ icon: Icon, title, description, href, label, external }) => (
              <article key={title} className="flex flex-col rounded-2xl border border-white/10 bg-panel/60 p-6 transition duration-300 hover:-translate-y-1 hover:border-amber-200/25 hover:bg-panel">
                <div className="flex h-10 w-10 items-center justify-center rounded-xl border border-amber-200/20 bg-amber-200/10 text-amber-100"><Icon className="h-5 w-5" aria-hidden="true" /></div>
                <h3 className="mt-7 text-lg font-semibold text-white">{title}</h3>
                <p className="mt-3 flex-1 text-sm leading-6 text-mist">{description}</p>
                {external ? (
                  <a href={href} target="_blank" rel="noreferrer" className="mt-7 inline-flex items-center gap-2 text-sm font-semibold text-amber-100 transition-colors hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-entity">{label} <ExternalLink className="h-4 w-4" aria-hidden="true" /></a>
                ) : (
                  <Link href={href} className="mt-7 inline-flex items-center gap-2 text-sm font-semibold text-amber-100 transition-colors hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-entity">{label} <ArrowRight className="h-4 w-4" aria-hidden="true" /></Link>
                )}
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="common-issues" className="scroll-mt-24 border-y border-white/10 bg-white/[0.018] px-5 py-20 sm:px-6 sm:py-28 lg:px-8" aria-labelledby="issues-heading">
        <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[0.8fr_1.2fr]">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-entity">Common issues</p>
            <h2 id="issues-heading" className="mt-4 text-3xl font-semibold tracking-[-0.04em] text-white sm:text-4xl">A few good places to begin.</h2>
            <p className="mt-5 max-w-md leading-7 text-mist">Small details often solve the biggest roadblocks. Run through these before you escalate a problem.</p>
          </div>
          <div className="grid gap-3 sm:grid-cols-2">
            {[
              ["Permissions", "Can the bot view the channel, send messages, and use application commands?"],
              ["Invite scope", "Was the bot installed with the right server and application-command permissions?"],
              ["Command context", "Some commands need a server channel, account profile, or a specific role to work."],
              ["Service updates", "Check Discord announcements for known issues, maintenance, and recent changes."],
            ].map(([title, copy]) => (
              <article key={title} className="rounded-xl border border-white/10 bg-panel/55 p-5"><BadgeCheck className="h-5 w-5 text-amber-100" aria-hidden="true" /><h3 className="mt-5 font-semibold text-white">{title}</h3><p className="mt-2 text-sm leading-6 text-mist">{copy}</p></article>
            ))}
          </div>
        </div>
      </section>

      <section className="px-5 py-20 sm:px-6 sm:py-28 lg:px-8" aria-labelledby="faq-heading">
        <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[0.8fr_1.2fr]">
          <div><p className="text-xs font-semibold uppercase tracking-[0.2em] text-amber-100">FAQ</p><h2 id="faq-heading" className="mt-4 text-3xl font-semibold tracking-[-0.04em] text-white sm:text-4xl">Answers without the runaround.</h2></div>
          <div className="divide-y divide-white/10 rounded-2xl border border-white/10 bg-panel/55 px-6">
            {faqs.map(({ question, answer }) => (
              <details key={question} className="group py-5">
                <summary className="flex cursor-pointer list-none items-start justify-between gap-5 text-left font-semibold text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-entity"><span>{question}</span><CircleHelp className="mt-0.5 h-4 w-4 shrink-0 text-amber-100 transition-transform group-open:rotate-45" aria-hidden="true" /></summary>
                <p className="pr-7 pt-3 text-sm leading-6 text-mist">{answer}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      <section className="px-5 pb-20 sm:px-6 sm:pb-28 lg:px-8">
        <div className="mx-auto flex max-w-7xl flex-col justify-between gap-7 rounded-3xl border border-amber-200/20 bg-[linear-gradient(115deg,rgba(251,191,36,0.11),rgba(169,121,255,0.13),rgba(255,255,255,0.025))] px-6 py-9 sm:px-10 sm:py-11 lg:flex-row lg:items-center">
          <div className="flex gap-4"><div className="grid h-11 w-11 shrink-0 place-items-center rounded-xl bg-amber-200/10 text-amber-100"><ShieldAlert className="h-5 w-5" aria-hidden="true" /></div><div><h2 className="text-xl font-semibold text-white">Still stuck? Bring us the context.</h2><p className="mt-2 max-w-xl text-sm leading-6 text-mist">Tell us what you expected, what happened, and the bot or command involved. It helps everyone move faster.</p></div></div>
          <a href={discordUrl} target="_blank" rel="noreferrer" className="inline-flex shrink-0 items-center justify-center gap-2 rounded-full bg-white px-5 py-3 text-sm font-semibold text-[#3e321c] transition-transform hover:-translate-y-0.5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white">Open Discord support <ArrowUpRight className="h-4 w-4" aria-hidden="true" /></a>
        </div>
      </section>
    </main>
  );
}
