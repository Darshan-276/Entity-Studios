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
    heroHeadline: "Your anime adventure",
    heroAccent: "starts in Discord.",
    heroDescription:
      "Battle, collect, progress, and build your story with Anime Realms. A community RPG that gives every session another step toward your next chapter.",
    category: "Anime RPG",
    discoveryCategory: "RPG",
    logo: "/assets/bots/anime-realms/logo.svg",
    banner: "/assets/bots/anime-realms/hero.png",
    inviteUrl: process.env.NEXT_PUBLIC_ANIME_REALMS_INVITE_URL ?? "",
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
      {
        title: "Take on daily quests",
        description:
          "Turn short visits into steady progress with objectives designed to give each session a clear next step.",
        icon: "sparkles",
      },
      {
        title: "Grow with your guild",
        description:
          "Work toward shared milestones, compare progress, and take part in seasonal community events.",
        icon: "users",
      },
      {
        title: "Manage your realm economy",
        description:
          "Earn and spend in-game currency through play, then decide which upgrades matter most to your build.",
        icon: "shopping-bag",
      },
      {
        title: "Track every achievement",
        description:
          "Mark important milestones and build a visible record of the challenges you have completed.",
        icon: "trophy",
      },
      {
        title: "Shape your strategy",
        description:
          "Pair character abilities and equipment to prepare for different encounters and reward paths.",
        icon: "shield",
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
    commandStatus: "representative",
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
    journey: [
      { title: "Create your profile", description: "Set up a player profile and get a first look at the realms, your roster, and the next available objective." },
      { title: "Choose a path", description: "Follow quests, collect rewards, and decide how to build up your characters and inventory." },
      { title: "Take on encounters", description: "Prepare a roster, use its abilities, and work through battles at a pace that suits your server." },
      { title: "Progress together", description: "Bring your community into events, shared goals, and the next chapter of your adventure." },
    ],
    showcase: {
      characterName: "Astra, Dawnkeeper",
      characterClass: "Astral Vanguard",
      characterRarity: "Legendary",
      level: 28,
      experience: 6840,
      nextLevelExperience: 9000,
      stats: [
        { label: "Power", value: "1,248" },
        { label: "Vitality", value: "936" },
        { label: "Focus", value: "82" },
      ],
      abilities: ["Starfall", "Aegis Bloom", "Dawn Pulse"],
      inventory: [
        { name: "Moonlit Sigil", detail: "Relic · Rare" },
        { name: "Phoenix Thread", detail: "Material · Epic" },
        { name: "Starlight Shard", detail: "Currency · 240" },
      ],
      reward: "A new chapter and 320 realm XP",
    },
    collection: {
      eyebrow: "Characters & collectibles",
      headline: "Find a favorite. Make it yours.",
      description:
        "Build out a collection, chase rare finds, and shape a profile that tells your story. Cosmetic details and achievements make progress feel personal.",
      artworkCaption: "A roster that feels like yours.",
      items: [
        { title: "Character collection", description: "A growing roster to discover and develop." },
        { title: "Rare collectibles", description: "Items, variants, and rewards with their own place in your inventory." },
        { title: "Achievements", description: "Keep track of the moments and milestones you earn." },
        { title: "Profile style", description: "Titles and visual details that make your profile recognizable." },
      ],
    },
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
