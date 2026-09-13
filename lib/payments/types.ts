import type { CurrencyCode, ProductDeliveryType } from "@/lib/models";

export type PaymentProviderName = "stripe" | (string & {});
export type CheckoutStatus = "open" | "complete" | "expired";
export type PaymentStatus = "pending" | "paid" | "failed" | "refunded";
export type SubscriptionStatus = "active" | "past-due" | "canceled" | "paused";

/** Store money in minor units at the payment boundary (for example, $4.99 = 499). */
export interface Money {
  amount: number;
  currency: CurrencyCode;
}

export interface CheckoutLineItem {
  productId: string;
  quantity: number;
  unitAmount: Money;
  deliveryType: ProductDeliveryType;
}

export interface CheckoutRequest {
  customerId?: string;
  lineItems: readonly CheckoutLineItem[];
  successUrl: string;
  cancelUrl: string;
  idempotencyKey: string;
  metadata?: Record<string, string>;
}

export interface CheckoutSession {
  id: string;
  provider: PaymentProviderName;
  url: string;
  status: CheckoutStatus;
}

export interface PaymentRecord {
  id: string;
  provider: PaymentProviderName;
  providerPaymentId: string;
  orderId: string;
  amount: Money;
  status: PaymentStatus;
  createdAt: string;
}

export interface OrderRecord {
  id: string;
  userId: string;
  lineItems: readonly CheckoutLineItem[];
  total: Money;
  status: PaymentStatus;
  paymentId?: string;
  createdAt: string;
}

export interface SubscriptionRecord {
  id: string;
  userId: string;
  productId: string;
  provider: PaymentProviderName;
  providerSubscriptionId: string;
  status: SubscriptionStatus;
  currentPeriodEnd?: string;
}

export interface LicenseRecord {
  id: string;
  userId: string;
  productId: string;
  botId: string;
  grantedAt: string;
  expiresAt?: string;
}

export interface RefundRequest {
  paymentId: string;
  amount?: Money;
  reason?: string;
}

export interface VerifiedWebhookEvent {
  id: string;
  type: string;
  createdAt: string;
  payload: Record<string, unknown>;
}

/**
 * Implement this in a server-only Stripe adapter later. It deliberately owns
 * provider credentials and webhooks, so no browser component receives secrets.
 */
export interface PaymentProvider {
  readonly name: PaymentProviderName;
  createCheckoutSession(request: CheckoutRequest): Promise<CheckoutSession>;
  verifyWebhook(payload: string, signature: string): Promise<VerifiedWebhookEvent>;
  refund(request: RefundRequest): Promise<PaymentRecord>;
}
