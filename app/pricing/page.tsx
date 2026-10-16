"use client";

import { useState } from "react";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

type Tier = "single" | "bundle";
type CheckoutStatus = "idle" | "loading" | "error";

interface PricingTier {
  id: Tier;
  name: string;
  price: number;
  description: string;
  features: string[];
  popular?: boolean;
}

export default function PricingPage() {
  const [selectedTier, setSelectedTier] = useState<Tier | null>(null);
  const [checkoutStatus, setCheckoutStatus] = useState<CheckoutStatus>("idle");

  const tiers: PricingTier[] = [
    {
      id: "single",
      name: "Single Smoke Test",
      price: 99,
      description: "One-time test for urgent founders",
      features: [
        "Full 5-step customer flow test",
        "Desktop + mobile testing",
        "Screenshot evidence of issues",
        "Results in 5 minutes",
        "One URL, one test",
      ],
    },
    {
      id: "bundle",
      name: "5-Test Bundle",
      price: 299,
      description: "Pre-launch validation cycle",
      features: [
        "5 smoke tests over 2 weeks",
        "Full 5-step customer flow test",
        "Desktop + mobile testing",
        "Screenshot evidence of issues",
        "Results in 5 minutes each",
        "Test, fix, re-test workflow",
      ],
      popular: true,
    },
  ];

  const handleCheckout = async (tier: Tier): Promise<void> => {
    setSelectedTier(tier);
    setCheckoutStatus("loading");

    try {
      const response = await fetch("/api/create-checkout", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ tier }),
      });

      const data = await response.json();

      if (data.success && data.url) {
        window.location.href = data.url;
      } else {
        throw new Error("Failed to create checkout");
      }
    } catch {
      setCheckoutStatus("error");
      setSelectedTier(null);
    }
  };

  return (
    <main className="min-h-screen bg-background">
      <Header />

      <section className="pt-32 pb-20">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h1 className="font-display font-extrabold text-navy-900 text-4xl sm:text-5xl mb-4">
              Simple pricing. No surprises.
            </h1>
            <p className="text-lg text-muted max-w-2xl mx-auto">
              Pay once, get your results. No subscriptions, no hidden fees.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {tiers.map((tier) => (
              <div
                key={tier.id}
                className={`relative bg-white rounded-2xl p-8 border-2 transition-all ${
                  tier.popular
                    ? "border-accent shadow-xl scale-105"
                    : "border-navy-100 hover:border-navy-200"
                }`}
              >
                {tier.popular && (
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                    <span className="px-4 py-1.5 bg-accent text-white text-sm font-semibold rounded-full">
                      Most Popular
                    </span>
                  </div>
                )}

                <div className="mb-6">
                  <h2 className="font-display font-bold text-navy-900 text-2xl mb-2">
                    {tier.name}
                  </h2>
                  <p className="text-muted">{tier.description}</p>
                </div>

                <div className="mb-8">
                  <span className="font-display font-extrabold text-navy-900 text-5xl">
                    ${tier.price}
                  </span>
                  <span className="text-muted ml-2">USD</span>
                </div>

                <ul className="space-y-4 mb-8">
                  {tier.features.map((feature) => (
                    <li key={feature} className="flex items-start gap-3">
                      <svg
                        width="20"
                        height="20"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="#E85D04"
                        strokeWidth="2.5"
                        className="shrink-0 mt-0.5"
                      >
                        <path d="M20 6L9 17l-5-5" />
                      </svg>
                      <span className="text-navy-700">{feature}</span>
                    </li>
                  ))}
                </ul>

                <button
                  type="button"
                  onClick={() => handleCheckout(tier.id)}
                  disabled={checkoutStatus === "loading"}
                  className={`w-full py-4 font-bold text-lg rounded-lg transition-colors disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2 ${
                    tier.popular
                      ? "bg-accent text-white hover:bg-orange-600"
                      : "bg-navy-900 text-white hover:bg-navy-800"
                  }`}
                >
                  {checkoutStatus === "loading" && selectedTier === tier.id ? (
                    <>
                      <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin" />
                      Processing...
                    </>
                  ) : (
                    `Get Started — $${tier.price}`
                  )}
                </button>
              </div>
            ))}
          </div>

          {checkoutStatus === "error" && (
            <div className="max-w-md mx-auto mt-8 p-4 bg-red-50 border border-red-200 rounded-lg text-center">
              <p className="text-red-800">
                Something went wrong. Please try again.
              </p>
            </div>
          )}

          <div className="mt-16 text-center">
            <p className="text-muted mb-4">
              Questions? Need a custom volume?
            </p>
            <a
              href="mailto:support@e2e-c38-smoke.com"
              className="text-accent font-semibold hover:underline"
            >
              Contact us →
            </a>
          </div>

          <div className="mt-16 max-w-2xl mx-auto">
            <div className="bg-navy-50 rounded-xl p-6">
              <h3 className="font-display font-bold text-navy-900 text-lg mb-4">
                What's included in every test
              </h3>
              <div className="grid sm:grid-cols-2 gap-4">
                {[
                  "Discovery → landing page load",
                  "Signup → registration flow",
                  "Payment → Stripe checkout",
                  "Confirmation → post-purchase",
                  "Mobile Safari + Chrome",
                  "Screenshot evidence",
                ].map((item) => (
                  <div
                    key={item}
                    className="flex items-center gap-2 text-sm text-navy-700"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-accent" />
                    {item}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-navy-900">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-display font-bold text-white text-2xl sm:text-3xl mb-4">
            Not sure which to pick?
          </h2>
          <p className="text-navy-200 mb-6">
            If you're launching in the next 48 hours, start with Single. If
            you're iterating before a big launch, get the Bundle.
          </p>
          <Link
            href="/#start-test"
            className="inline-flex items-center justify-center px-6 py-3 bg-accent text-white font-semibold rounded-lg hover:bg-orange-600 transition-colors"
          >
            Submit Your URL First →
          </Link>
        </div>
      </section>

      <Footer />
    </main>
  );
}
