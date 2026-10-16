"use client";

import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default function CheckoutCancelPage() {
  return (
    <main className="min-h-screen bg-background">
      <Header />

      <section className="pt-32 pb-20">
        <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="w-20 h-20 bg-navy-100 rounded-full flex items-center justify-center mx-auto mb-8">
            <svg
              width="40"
              height="40"
              viewBox="0 0 24 24"
              fill="none"
              stroke="#5B6573"
              strokeWidth="2"
            >
              <circle cx="12" cy="12" r="10" />
              <line x1="15" y1="9" x2="9" y2="15" />
              <line x1="9" y1="9" x2="15" y2="15" />
            </svg>
          </div>

          <h1 className="font-display font-extrabold text-navy-900 text-4xl sm:text-5xl mb-4">
            Payment cancelled
          </h1>

          <p className="text-lg text-muted mb-8">
            No worries. Your card wasn't charged. You can try again when you're
            ready.
          </p>

          <div className="bg-navy-50 rounded-xl p-6 mb-8">
            <h2 className="font-semibold text-navy-900 mb-3">
              Still have questions?
            </h2>
            <p className="text-muted text-sm mb-4">
              If you're unsure about which plan to choose or want to see a demo
              first, reach out and we'll help.
            </p>
            <a
              href="mailto:support@e2e-c38-smoke.com"
              className="text-accent font-semibold hover:underline"
            >
              Contact Support →
            </a>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/pricing"
              className="inline-flex items-center justify-center px-8 py-4 bg-accent text-white font-bold text-lg rounded-lg hover:bg-orange-600 transition-colors"
            >
              Try Again
            </Link>
            <Link
              href="/"
              className="inline-flex items-center justify-center px-8 py-4 bg-navy-100 text-navy-800 font-semibold text-lg rounded-lg hover:bg-navy-200 transition-colors"
            >
              Back to Home
            </Link>
          </div>

          <div className="mt-12 pt-8 border-t border-navy-100">
            <p className="text-sm text-muted mb-4">
              Common reasons for cancelling:
            </p>
            <div className="grid sm:grid-cols-3 gap-4 text-left">
              <div className="bg-white rounded-lg p-4 border border-navy-100">
                <p className="font-semibold text-navy-900 text-sm mb-1">
                  Need more info?
                </p>
                <p className="text-xs text-muted">
                  Check our{" "}
                  <Link href="/#how-it-works" className="text-accent">
                    How It Works
                  </Link>{" "}
                  section.
                </p>
              </div>
              <div className="bg-white rounded-lg p-4 border border-navy-100">
                <p className="font-semibold text-navy-900 text-sm mb-1">
                  Budget concerns?
                </p>
                <p className="text-xs text-muted">
                  Start with the{" "}
                  <Link href="/pricing" className="text-accent">
                    $99 single test
                  </Link>
                  .
                </p>
              </div>
              <div className="bg-white rounded-lg p-4 border border-navy-100">
                <p className="font-semibold text-navy-900 text-sm mb-1">
                  Technical issues?
                </p>
                <p className="text-xs text-muted">
                  <a
                    href="mailto:support@e2e-c38-smoke.com"
                    className="text-accent"
                  >
                    Let us know
                  </a>{" "}
                  and we'll fix it.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
