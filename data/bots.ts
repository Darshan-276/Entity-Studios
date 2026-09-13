import type { Bot } from "../lib/models";

/**
 * The catalog is deliberately data-first: adding a bot should only require an
 * entry here, its assets, and any matching products in `data/products.ts`.
 */
export const bots: readonly Bot[] = [
  {
    id: "anime-realms",
    slug: "anime-realms",
    name: "Anime Realms",
    description:
      "Build your legend in a living anime RPG for Discord. Recruit iconic heroes, master your realm through quests and battles, collect rare rewards, and rise through a community-driven world that is always expanding.",
    shortDescription:
      "An anime RPG for Discord built around progression, battles, collecting, and community events.",
    category: "Anime RPG",
    logo: "/assets/bots/anime-realms/logo.svg",
    banner: "/assets/bots/anime-realms/hero.png",
    inviteUrl: "https://discord.com/oauth2/authorize",
    discordUrl: process.env.NEXT_PUBLIC_DISCORD_INVITE_URL,
    status: "online",
    serverCount: 12480,
    featureHighlights: ["Character collection", "RPG progression", "Guild events"],
    features: [
      {
        title: "Build your roster",
        description:
          "Discover, collect, and evolve characters with distinct rarities, abilities, and progression paths.",
        icon: "sparkles",
      },
      {
        title: "Quest through the realms",
        description:
          "Take on story quests, daily challenges, and limited-time events built for solo players and servers.",
        icon: "swords",
      },
      {
        title: "Battle for the leaderboard",
        description:
          "Put your strategy to the test in PvE encounters, competitive rankings, and cooperative guild goals.",
        icon: "trophy",
      },
      {
        title: "Make the profile yours",
        description:
          "Earn titles, profile cards, cosmetics, and achievements that make every collection feel personal.",
        icon: "users",
      },
    ],
    commands: [
      {
        command: "/start",
        description: "Create your profile and begin your adventure.",
        category: "Getting started",
      },
      {
        command: "/quest",
        description: "Take on available quests and claim their rewards.",
        category: "Progression",
      },
      {
        command: "/battle",
        description: "Challenge enemies using your current roster.",
        category: "Combat",
      },
      {
        command: "/profile",
        description: "View your collection, rank, achievements, and cosmetics.",
        category: "Profile",
      },
    ],
    premiumFeatures: [
      "Daily premium reward track",
      "Exclusive profile cosmetics and titles",
      "Expanded inventory and collection tools",
      "Priority access to select seasonal content",
    ],
    screenshots: [
      "/assets/bots/anime-realms/screenshot-1.svg",
      "/assets/bots/anime-realms/screenshot-2.svg",
      "/assets/bots/anime-realms/screenshot-3.svg",
    ],
    stats: [
      { label: "Active servers", value: "12K+", description: "Communities exploring the realms" },
      { label: "Characters", value: "150+", description: "Collectible heroes and variants" },
      { label: "Community events", value: "Weekly", description: "Fresh ways to compete together" },
    ],
    faq: [
      {
        question: "Is Anime Realms free to play?",
        answer:
          "Yes. The core RPG experience is free to use, with optional digital products that enhance customization and progression.",
      },
      {
        question: "How do I add the bot to my server?",
        answer:
          "Use the invite button and select a Discord server where you have permission to manage applications.",
      },
      {
        question: "Where can I get help?",
        answer:
          "Join the Entity Studios Discord community for guides, announcements, and support from the team and players.",
      },
    ],
    theme: {
      primaryColor: "#9B5CFF",
      secondaryColor: "#5E4AE3",
      accentColor: "#E2C2FF",
      backgroundColor: "#0C0818",
      cardBackground: "rgba(25, 16, 48, 0.78)",
      textColor: "#F8F5FF",
      mutedTextColor: "#BDB3D6",
      gradient: "linear-gradient(135deg, #9B5CFF 0%, #5E4AE3 48%, #D58CFF 100%)",
      glowColor: "rgba(155, 92, 255, 0.42)",
      backgroundImage: "/assets/bots/anime-realms/hero.png",
      mobileBackgroundImage: "/assets/bots/anime-realms/hero.png",
      heroBackground: "/assets/bots/anime-realms/hero.png",
      overlay:
        "linear-gradient(90deg, rgba(12, 8, 24, 0.96) 0%, rgba(12, 8, 24, 0.68) 45%, rgba(12, 8, 24, 0.28) 100%)",
      effects: {
        animatedBackground: true,
        particles: true,
        parallax: true,
      },
    },
  },
];

export const featuredBotSlugs = ["anime-realms"] as const;
