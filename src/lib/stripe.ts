import Stripe from "stripe";

export const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!, {
  apiVersion: "2026-01-28.clover",
  typescript: true,
});

export const PLANS = {
  starter: {
    name: "Starter",
    priceId: process.env.STRIPE_STARTER_PRICE_ID,
    price: 29,
    features: [
      "5 landing pages",
      "Basic templates",
      "Lead capture forms",
      "Email support",
    ],
  },
  pro: {
    name: "Pro",
    priceId: process.env.STRIPE_PRO_PRICE_ID,
    price: 79,
    features: [
      "Unlimited landing pages",
      "Premium templates",
      "Custom domains",
      "A/B testing",
      "Analytics dashboard",
      "Priority support",
    ],
  },
  agency: {
    name: "Agency",
    priceId: process.env.STRIPE_AGENCY_PRICE_ID,
    price: 199,
    features: [
      "Everything in Pro",
      "White-label branding",
      "Client management",
      "Team collaboration",
      "API access",
      "Dedicated support",
    ],
  },
} as const;

export async function createCheckoutSession(
  priceId: string,
  userId: string,
  successUrl: string,
  cancelUrl: string
): Promise<Stripe.Checkout.Session> {
  return stripe.checkout.sessions.create({
    mode: "subscription",
    payment_method_types: ["card"],
    line_items: [
      {
        price: priceId,
        quantity: 1,
      },
    ],
    success_url: successUrl,
    cancel_url: cancelUrl,
    client_reference_id: userId,
    metadata: {
      userId,
    },
  });
}

export async function createPortalSession(
  customerId: string,
  returnUrl: string
): Promise<Stripe.BillingPortal.Session> {
  return stripe.billingPortal.sessions.create({
    customer: customerId,
    return_url: returnUrl,
  });
}

export default stripe;
