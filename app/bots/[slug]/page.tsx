import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { BotExperience } from "@/components/bots/BotExperience";
import { getBotBySlug, getBots } from "@/lib/catalog";

type BotPageProps = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return getBots().map((bot) => ({ slug: bot.slug }));
}

export async function generateMetadata({ params }: BotPageProps): Promise<Metadata> {
  const { slug } = await params;
  const bot = getBotBySlug(slug);
  if (!bot) return { title: "Bot not found" };
  return {
    title: bot.name,
    description: bot.shortDescription,
    openGraph: {
      title: bot.name + " | Entity Studios",
      description: bot.shortDescription,
      images: bot.banner ? [{ url: bot.banner, alt: bot.name + " artwork" }] : undefined,
    },
  };
}

export default async function BotPage({ params }: BotPageProps) {
  const { slug } = await params;
  const bot = getBotBySlug(slug);
  if (!bot) notFound();
  return <BotExperience bot={bot} />;
}
