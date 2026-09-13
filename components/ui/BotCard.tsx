import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight, Check, Server } from "lucide-react";
import type { Bot } from "@/lib/models";

type BotCardProps = { bot: Bot; featured?: boolean };

export function BotCard({ bot, featured = false }: BotCardProps) {
  return (
    <article className={`group relative overflow-hidden rounded-[25px] border border-white/10 bg-[#111018] ${featured ? "min-h-[440px]" : ""} card-hover`}>
      <div className={`relative overflow-hidden ${featured ? "h-[218px]" : "h-[184px]"}`}>
        {bot.banner ? <Image src={bot.banner} alt="" fill sizes="(max-width: 700px) 100vw, 50vw" className="object-cover object-[70%_center] opacity-80 transition-transform duration-700 group-hover:scale-[1.055]" /> : null}
        <div className="absolute inset-0 bg-gradient-to-t from-[#111018] via-[#111018]/25 to-transparent" />
        <div className="absolute left-5 top-5 flex items-center gap-2 rounded-full border border-white/15 bg-black/35 px-3 py-1.5 text-[11px] font-semibold text-white backdrop-blur-md">
          <span className={`status-dot ${bot.status === "beta" ? "beta" : ""}`} /> {bot.status === "online" ? "Online" : bot.status}
        </div>
        <div className="absolute bottom-[-22px] left-6 grid h-16 w-16 place-items-center rounded-2xl border border-white/20 bg-[#171122] p-2 shadow-2xl">
          <Image src={bot.logo} alt={`${bot.name} logo`} width={48} height={48} className="h-12 w-12" />
        </div>
      </div>
      <div className="p-6 pt-9">
        <div className="flex items-start justify-between gap-4">
          <div><p className="text-xs font-semibold uppercase tracking-[.16em] text-[#c9adff]">{bot.category}</p><h3 className="mt-2 text-xl font-semibold tracking-[-.04em] text-white">{bot.name}</h3></div>
          {bot.serverCount ? <span className="inline-flex shrink-0 items-center gap-1.5 text-xs text-mist"><Server className="h-3.5 w-3.5" />{new Intl.NumberFormat("en-US", { notation: "compact" }).format(bot.serverCount)}</span> : null}
        </div>
        <p className="mt-3 line-clamp-2 text-sm leading-6 text-mist">{bot.shortDescription}</p>
        <ul className="mt-5 flex flex-wrap gap-x-4 gap-y-2" role="list">
          {bot.featureHighlights.slice(0, 3).map((feature) => <li key={feature} className="inline-flex items-center gap-1.5 text-[11px] font-medium text-[#d9d2e7]"><Check className="h-3 w-3 text-[#bd91ff]" />{feature}</li>)}
        </ul>
        <div className="mt-6 flex items-center gap-3">
          <Link href={`/bots/${bot.slug}`} className="inline-flex items-center gap-1.5 text-sm font-semibold text-white transition-colors hover:text-[#c9adff] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-entity">View bot <ArrowUpRight className="h-4 w-4" /></Link>
          <a href={bot.inviteUrl} target="_blank" rel="noreferrer" className="ml-auto rounded-full border border-white/15 px-3.5 py-2 text-xs font-semibold text-white transition-colors hover:border-[#c9adff]/60 hover:bg-white/[.06] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-entity">Invite</a>
        </div>
      </div>
    </article>
  );
}
