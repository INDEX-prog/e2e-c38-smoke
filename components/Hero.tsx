"use client";

import Link from "next/link";
import Image from "next/image";

export default function Hero() {
  return (
    <section className="pt-24 pb-16 lg:pt-32 lg:pb-24">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-accent/10 rounded-full mb-6">
              <span className="w-2 h-2 bg-accent rounded-full animate-pulse" />
              <span className="text-sm font-medium text-navy-800">
                72 hours to launch?
              </span>
            </div>

            <h1 className="font-display font-extrabold text-navy-900 text-4xl sm:text-5xl lg:text-[3.5rem] leading-[1.1] tracking-tight mb-6">
              Your payment flow{" "}
              <span className="text-accent">will break</span> on launch day.
            </h1>

            <p className="text-lg text-muted leading-relaxed mb-8 max-w-xl">
              Unless you test it like your first real customer would. 5-minute
              smoke test catches 90% of issues before they cost you.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                href="/pricing"
                className="inline-flex items-center justify-center px-8 py-4 bg-accent text-white font-bold text-lg rounded-lg hover:bg-orange-600 transition-colors shadow-lg shadow-accent/25"
              >
                Run Your Test — $99
              </Link>
              <Link
                href="/#how-it-works"
                className="inline-flex items-center justify-center px-8 py-4 bg-navy-50 text-navy-800 font-semibold text-lg rounded-lg hover:bg-navy-100 transition-colors"
              >
                See How It Works
              </Link>
            </div>

            <div className="mt-10 flex items-center gap-6">
              <div className="flex -space-x-3">
                {[1, 2, 3, 4].map((i) => (
                  <div
                    key={i}
                    className="w-10 h-10 rounded-full border-2 border-white bg-navy-100 overflow-hidden"
                  >
                    <Image
                      src={`https://picsum.photos/seed/founder${i}/80/80`}
                      alt="Founder"
                      width={40}
                      height={40}
                      className="object-cover"
                    />
                  </div>
                ))}
              </div>
              <p className="text-sm text-muted">
                <span className="font-semibold text-navy-800">47 founders</span>{" "}
                tested before launch this week
              </p>
            </div>
          </div>

          <div className="relative">
            <div className="absolute -top-4 -left-4 w-72 h-72 bg-accent/10 rounded-full blur-3xl" />
            <div className="relative bg-white border border-navy-100 rounded-2xl shadow-xl overflow-hidden">
              <div className="p-4 bg-navy-900 flex items-center gap-2">
                <div className="flex gap-1.5">
                  <span className="w-3 h-3 rounded-full bg-red-400" />
                  <span className="w-3 h-3 rounded-full bg-yellow-400" />
                  <span className="w-3 h-3 rounded-full bg-green-400" />
                </div>
                <span className="text-sm text-navy-300 font-mono ml-2">
                  smoke-test.run
                </span>
              </div>
              <div className="p-6 space-y-4">
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-lg bg-green-100 flex items-center justify-center">
                    <svg
                      width="16"
                      height="16"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="#16a34a"
                      strokeWidth="2.5"
                    >
                      <path d="M20 6L9 17l-5-5" />
                    </svg>
                  </div>
                  <div className="flex-1">
                    <div className="text-sm font-medium text-navy-900">
                      Landing Page Load
                    </div>
                    <div className="text-xs text-muted">1.2s response</div>
                  </div>
                  <span className="text-xs font-mono text-green-600 bg-green-50 px-2 py-1 rounded">
                    PASS
                  </span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-lg bg-green-100 flex items-center justify-center">
                    <svg
                      width="16"
                      height="16"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="#16a34a"
                      strokeWidth="2.5"
                    >
                      <path d="M20 6L9 17l-5-5" />
                    </svg>
                  </div>
                  <div className="flex-1">
                    <div className="text-sm font-medium text-navy-900">
                      Signup Flow
                    </div>
                    <div className="text-xs text-muted">Form validation OK</div>
                  </div>
                  <span className="text-xs font-mono text-green-600 bg-green-50 px-2 py-1 rounded">
                    PASS
                  </span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-lg bg-red-100 flex items-center justify-center">
                    <svg
                      width="16"
                      height="16"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="#dc2626"
                      strokeWidth="2.5"
                    >
                      <path d="M18 6L6 18M6 6l12 12" />
                    </svg>
                  </div>
                  <div className="flex-1">
                    <div className="text-sm font-medium text-navy-900">
                      Payment Flow
                    </div>
                    <div className="text-xs text-red-600">
                      Stripe webhook timeout
                    </div>
                  </div>
                  <span className="text-xs font-mono text-red-600 bg-red-50 px-2 py-1 rounded">
                    FAIL
                  </span>
                </div>
                <div className="flex items-center gap-3 opacity-50">
                  <div className="w-8 h-8 rounded-lg bg-navy-50 flex items-center justify-center">
                    <div className="w-4 h-4 border-2 border-navy-300 border-t-transparent rounded-full animate-spin" />
                  </div>
                  <div className="flex-1">
                    <div className="text-sm font-medium text-navy-900">
                      Confirmation Email
                    </div>
                    <div className="text-xs text-muted">Waiting...</div>
                  </div>
                  <span className="text-xs font-mono text-navy-400 bg-navy-50 px-2 py-1 rounded">
                    PENDING
                  </span>
                </div>
              </div>
              <div className="p-4 bg-red-50 border-t border-red-100">
                <p className="text-sm text-red-800 font-medium">
                  ⚠️ Critical issue found — fix before launch
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
