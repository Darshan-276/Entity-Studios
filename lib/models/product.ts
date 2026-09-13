export type CurrencyCode = "USD" | "EUR" | "GBP" | (string & {});

export type ProductCategory =
  | "membership"
  | "boost"
  | "currency"
  | "cosmetic"
  | "bundle"
  | "upgrade"
  | "license"
  | (string & {});

export type ProductDeliveryType =
  | "entitlement"
  | "subscription"
  | "license"
  | "manual";

export type ProductStatus = "active" | "draft" | "archived" | "coming-soon";

/**
 * Prices are stored in major currency units for display. A future payment
 * adapter can convert this to its provider's minor-unit representation at the
 * boundary, avoiding provider-specific values in the catalog.
 */
export interface Product {
  id: string;
  slug: string;
  name: string;
  description: string;
  longDescription?: string;
  price: number;
  currency: CurrencyCode;
  botId: string;
  category: ProductCategory;
  image: string;
  featured?: boolean;
  status?: ProductStatus;
  deliveryType?: ProductDeliveryType;
  features?: readonly string[];
  stripePriceId?: string;
  metadata?: Record<string, unknown>;
}
