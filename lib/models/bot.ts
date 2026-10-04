/**
 * A visual identity owned by a bot, rather than by a page component. Keeping
 * this configuration in data lets every bot have a distinct experience while
 * the route and its UI remain reusable.
 */
export interface BotTheme {
  primaryColor: string;
  secondaryColor: string;
  accentColor: string;
  backgroundColor: string;
  cardBackground?: string;
  textColor?: string;
  mutedTextColor?: string;
  gradient?: string;
  glowColor?: string;
  backgroundImage?: string;
  mobileBackgroundImage?: string;
  heroBackground?: string;
  overlay?: string;
  layeredBackgrounds?: readonly string[];
  effects?: {
    animatedBackground?: boolean;
    particles?: boolean;
    parallax?: boolean;
  };
}

export type BotStatus = "online" | "maintenance" | "beta" | "coming-soon";
export type BotDiscoveryCategory = "RPG" | "Gaming" | "Utility" | "Community" | "Entertainment" | (string & {});

export type BotIconName =
  | "swords"
  | "sparkles"
  | "trophy"
  | "users"
  | "shield"
  | "shopping-bag"
  | "gamepad-2";

export interface BotFeature {
  title: string;
  description: string;
  icon?: BotIconName;
}

export interface BotCommand {
  command: string;
  description: string;
  category?: string;
}

export interface BotStat {
  label: string;
  value: string;
  description?: string;
}

export interface BotFaq {
  question: string;
  answer: string;
}

export interface BotJourneyStep {
  title: string;
  description: string;
}

export interface BotShowcase {
  characterName: string;
  characterClass: string;
  characterRarity: string;
  level: number;
  experience: number;
  nextLevelExperience: number;
  stats: readonly { label: string; value: string }[];
  abilities: readonly string[];
  inventory: readonly { name: string; detail: string }[];
  reward: string;
}

export interface BotCollection {
  eyebrow: string;
  headline: string;
  description: string;
  artworkCaption: string;
  items: readonly { title: string; description: string }[];
}

export interface Bot {
  id: string;
  slug: string;
  name: string;
  description: string;
  shortDescription: string;
  heroHeadline?: string;
  heroAccent?: string;
  heroDescription?: string;
  category: string;
  discoveryCategory?: BotDiscoveryCategory;
  logo: string;
  banner?: string;
  inviteUrl: string;
  discordUrl?: string;
  websiteUrl?: string;
  status: BotStatus;
  serverCount?: number;
  featureHighlights: readonly string[];
  features: readonly BotFeature[];
  commands?: readonly BotCommand[];
  commandStatus?: "verified" | "representative";
  premiumFeatures?: readonly string[];
  screenshots?: readonly string[];
  stats?: readonly BotStat[];
  faq?: readonly BotFaq[];
  journey?: readonly BotJourneyStep[];
  showcase?: BotShowcase;
  collection?: BotCollection;
  theme: BotTheme;
}
