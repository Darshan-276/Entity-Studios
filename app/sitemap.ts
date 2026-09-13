import type { MetadataRoute } from "next";
import { getBots, getProducts } from "@/lib/catalog";

const baseUrl = "https://entitystudios.example";

export default function sitemap(): MetadataRoute.Sitemap {
  const staticPaths = ["", "/bots", "/store", "/discord", "/patreon", "/about", "/documentation", "/support", "/dashboard"];
  return [
    ...staticPaths.map((path) => ({ url: `${baseUrl}${path}`, lastModified: new Date(), changeFrequency: "weekly" as const, priority: path === "" ? 1 : 0.7 })),
    ...getBots().map((bot) => ({ url: `${baseUrl}/bots/${bot.slug}`, lastModified: new Date(), changeFrequency: "weekly" as const, priority: 0.8 })),
    ...getProducts().map((product) => ({ url: `${baseUrl}/store/${product.slug}`, lastModified: new Date(), changeFrequency: "weekly" as const, priority: 0.6 })),
  ];
}
