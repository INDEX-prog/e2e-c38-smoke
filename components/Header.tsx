"use client";

import { useState } from "react";
import Link from "next/link";

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState<boolean>(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-sm border-b border-navy-100">
      <nav className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <Link href="/" className="flex items-center gap-2">
            <div className="w-8 h-8 bg-navy-900 rounded flex items-center justify-center">
              <svg
                width="18"
                height="18"
                viewBox="0 0 24 24"
                fill="none"
                stroke="#E85D04"
                strokeWidth="2.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M12 2v4M12 18v4M4.93 4.93l2.83 2.83M16.24 16.24l2.83 2.83M2 12h4M18 12h4M4.93 19.07l2.83-2.83M16.24 7.76l2.83-2.83" />
              </svg>
            </div>
            <span className="font-display font-bold text-navy-900 text-lg">
              _E2E_C38
            </span>
          </Link>

          <div className="hidden md:flex items-center gap-8">
            <Link
              href="/#how-it-works"
              className="text-navy-700 hover:text-navy-900 font-medium text-sm transition-colors"
            >
              How It Works
            </Link>
            <Link
              href="/pricing"
              className="text-navy-700 hover:text-navy-900 font-medium text-sm transition-colors"
            >
              Pricing
            </Link>
            <Link
              href="/dashboard"
              className="text-navy-700 hover:text-navy-900 font-medium text-sm transition-colors"
            >
              Dashboard
            </Link>
            <Link
              href="/pricing"
              className="inline-flex items-center justify-center px-5 py-2.5 bg-accent text-white font-semibold text-sm rounded-lg hover:bg-orange-600 transition-colors"
            >
              Get Started — $99
            </Link>
          </div>

          <button
            type="button"
            className="md:hidden p-2 text-navy-700"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? (
              <svg width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M6 6l12 12M6 18L18 6" />
              </svg>
            ) : (
              <svg width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            )}
          </button>
        </div>

        {mobileMenuOpen && (
          <div className="md:hidden py-4 border-t border-navy-100">
            <div className="flex flex-col gap-4">
              <Link
                href="/#how-it-works"
                className="text-navy-700 hover:text-navy-900 font-medium"
                onClick={() => setMobileMenuOpen(false)}
              >
                How It Works
              </Link>
              <Link
                href="/pricing"
                className="text-navy-700 hover:text-navy-900 font-medium"
                onClick={() => setMobileMenuOpen(false)}
              >
                Pricing
              </Link>
              <Link
                href="/dashboard"
                className="text-navy-700 hover:text-navy-900 font-medium"
                onClick={() => setMobileMenuOpen(false)}
              >
                Dashboard
              </Link>
              <Link
                href="/pricing"
                className="inline-flex items-center justify-center px-5 py-2.5 bg-accent text-white font-semibold rounded-lg"
                onClick={() => setMobileMenuOpen(false)}
              >
                Get Started — $99
              </Link>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}
