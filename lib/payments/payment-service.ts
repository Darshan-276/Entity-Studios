import type {
  CheckoutRequest,
  CheckoutSession,
  PaymentProvider,
  PaymentProviderName,
  PaymentRecord,
  RefundRequest,
  VerifiedWebhookEvent,
} from "@/lib/payments/types";

export class PaymentProviderUnavailableError extends Error {
  constructor(providerName?: PaymentProviderName) {
    super(
      providerName
        ? `The ${providerName} payment provider is not configured.`
        : "No payment provider is configured.",
    );
    this.name = "PaymentProviderUnavailableError";
  }
}

/**
 * A provider-neutral facade for server routes/actions. It deliberately does
 * not create placeholder checkouts or simulate successful payments.
 */
export class PaymentService {
  constructor(private readonly provider?: PaymentProvider) {}

  get providerName(): PaymentProviderName | undefined {
    return this.provider?.name;
  }

  async createCheckoutSession(request: CheckoutRequest): Promise<CheckoutSession> {
    return this.requireProvider().createCheckoutSession(request);
  }

  async verifyWebhook(payload: string, signature: string): Promise<VerifiedWebhookEvent> {
    return this.requireProvider().verifyWebhook(payload, signature);
  }

  async refund(request: RefundRequest): Promise<PaymentRecord> {
    return this.requireProvider().refund(request);
  }

  private requireProvider(): PaymentProvider {
    if (!this.provider) {
      throw new PaymentProviderUnavailableError();
    }

    return this.provider;
  }
}

/**
 * Routes may import this before Stripe is connected; requests fail safely until
 * a concrete provider instance is supplied during backend integration.
 */
export const payments = new PaymentService();
