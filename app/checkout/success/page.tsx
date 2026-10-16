"use client";

import { useEffect, useState, Suspense } from "react";
import { useSearchParams } from "next/navigation";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

function SuccessContent() {
  const searchParams = useSearchParams();
  const sessionId = searchParams.get("session_id");
  const tier = searchParams.get("tier");

  const [countdown, setCountdown] = useState<number>(5);

  useEffect(() => {
    const timer = setInterval(() => {
      setCountdown((prev) => {
        if (prev <= 1) {
          clearInterval(timer);
          return 0;
        }
        return prev - 1;
      });
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const tierDetails: Record<string, { name: string; price: number; tests: number }> = {
    single: { name: "Single Smoke Test", price: 99, tests: 1 },
    bundle: { name: "5-Test Bundle", price: 299, tests: 5 },
  };

  const selectedTier = tier ? tierDetails[tier] : tierDetails.single;

  return (
    <section className="pt-32 pb-20">
      <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-8">
          <svg
            width="40"
            height="40"
            viewBox="0 0 24 24"
            fill="none"
            stroke="#16a34a"
            strokeWidth="2.5"
          >
            <path d="M20 6L9 17l-5-5" />
          </svg>
        </div>

        <h1 className="font-display font-extrabold text-navy-900 text-4xl sm:text-5xl mb-4">
          Payment successful!
        </h1>

        <p className="text-lg text-muted mb-8">
          Your smoke test is starting now. Results will be ready in approximately 5 minutes.
        </p>

        <div className="bg-white rounded-xl border border-navy-100 p-6 mb-8 text-left">
          <h2 className="font-semibold text-navy-900 mb-4">Order Summary</h2>
          <div className="space-y-3">
            <div className="flex justify-between">
              <span className="text-muted">Product</span>
              <span className="font-medium text-navy-900">
                {selectedTier.name}
              </span>
            </div>
            <div className="flex justify-between">
              <span className="text-muted">Tests Included</span>
              <span className="font-medium text-navy-900">
                {selectedTier.tests}
              </span>
            </div>
            <div className="flex justify-between">
              <span className="text-muted">Amount Paid</span>
              <span className="font-medium text-navy-900">
                ${selectedTier.price} USD
              </span>
            </div>
            {sessionId && (
              <div className="flex justify-between pt-3 border-t border-navy-100">
                <span className="text-muted text-sm">Session ID</span>
                <span className="text-sm font-mono text-navy-600 truncate max-w-[200px]">
                  {sessionId}
                </span>
              </div>
            )}
          </div>
        </div>

        <div className="bg-accent/5 border border-accent/20 rounded-xl p-6 mb-8">
          <div className="flex items-center justify-center gap-3 mb-2">
            <div className="w-3 h-3 bg-accent rounded-full animate-pulse" />
            <span className="font-semibold text-navy-900">
              Test in progress
            </span>
          </div>
          <p className="text-sm text-navy-700">
            We're running through your customer flow right now. Check your
            dashboard for real-time updates.
          </p>
        </div>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            href="/dashboard"
            className="inline-flex items-center justify-center px-8 py-4 bg-accent text-white font-bold text-lg rounded-lg hover:bg-orange-600 transition-colors"
          >
            View Dashboard
          </Link>
          <Link
            href="/"
            className="inline-flex items-center justify-center px-8 py-4 bg-navy-100 text-navy-800 font-semibold text-lg rounded-lg hover:bg-navy-200 transition-colors"
          >
            Back to Home
          </Link>
        </div>

        {countdown > 0 && (
          <p className="mt-6 text-sm text-muted">
            Redirecting to dashboard in {countdown} seconds...
          </p>
        )}
      </div>
    </section>
  );
}

function LoadingFallback() {
  return (
    <section className="pt-32 pb-20">
      <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="animate-pulse">
          <div className="w-20 h-20 bg-navy-100 rounded-full mx-auto mb-8" />
          <div className="h-12 bg-navy-100 rounded w-3/4 mx-auto mb-4" />
          <div className="h-6 bg-navy-100 rounded w-1/2 mx-auto mb-8" />
          <div className="h-40 bg-navy-100 rounded-xl mb-8" />
        </div>
      </div>
    </section>
  );
}

export default function CheckoutSuccessPage() {
  return (
    <main className="min-h-screen bg-background">
      <Header />
      <Suspense fallback={<LoadingFallback />}>
        <SuccessContent />
      </Suspense>
      <Footer />
    </main>
  );
}
