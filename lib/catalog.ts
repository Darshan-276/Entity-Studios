import { bots, featuredBotSlugs } from "@/data/bots";
import { products } from "@/data/products";
import type { Bot, Product, ProductCategory } from "@/lib/models";

export interface ProductFilter {
  botId?: string;
  category?: ProductCategory;
  featured?: boolean;
  includeUnavailable?: boolean;
}

/** Read-only selectors keep route components independent from the data source. */
export function getBots(): readonly Bot[] {
  return bots;
}

export function getFeaturedBots(): readonly Bot[] {
  return featuredBotSlugs
    .map((slug) => getBotBySlug(slug))
    .filter((bot): bot is Bot => Boolean(bot));
}

export function getBotById(id: string): Bot | undefined {
  return bots.find((bot) => bot.id === id);
}

export function getBotBySlug(slug: string): Bot | undefined {
  return bots.find((bot) => bot.slug === slug);
}

export function getProducts(filter: ProductFilter = {}): readonly Product[] {
  return products.filter((product) => {
    if (filter.botId && product.botId !== filter.botId) return false;
    if (filter.category && product.category !== filter.category) return false;
    if (filter.featured !== undefined && Boolean(product.featured) !== filter.featured) return false;
    if (!filter.includeUnavailable && product.status && product.status !== "active") return false;

    return true;
  });
}

export function getFeaturedProducts(): readonly Product[] {
  return getProducts({ featured: true });
}

export function getProductsForBot(botId: string): readonly Product[] {
  return getProducts({ botId });
}

export function getProductBySlug(slug: string): Product | undefined {
  return products.find((product) => product.slug === slug);
}

export function getRelatedProducts(product: Product, limit = 3): readonly Product[] {
  return getProductsForBot(product.botId)
    .filter((candidate) => candidate.id !== product.id)
    .slice(0, limit);
}
