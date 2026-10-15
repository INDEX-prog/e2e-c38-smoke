"use client";

import { useState } from 'react';
import Link from 'next/link';

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState<boolean>(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-sm border-b border-navy-100">
      <nav className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <Link href="/" className="flex items-center gap-2">
            <div className="w-8 h-8 bg-accent rounded-lg flex items-center justify-center">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <polyline points="9 11 12 14 22 4" />
                <path d="M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11" />
              </svg>
            </div>
            <span className="font-display font-bold text-navy-900 text-lg">E2E Smoke</span>
          </Link>

          <div className="hidden md:flex items-center gap-8">
            <Link href="#how-it-works" className="text-muted hover:text-navy-900 transition-colors font-medium">
              How It Works
            </Link>
            <Link href="#pricing" className="text-muted hover:text-navy-900 transition-colors font-medium">
              Pricing
            </Link>
            <Link href="#get-started" className="btn-primary">
              Start Test — $99
            </Link>
          </div>

          <button
            type="button"
            className="md:hidden p-2 text-navy-900"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? (
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <line x1="18" y1="6" x2="6" y2="18" />
                <line x1="6" y1="6" x2="18" y2="18" />
              </svg>
            ) : (
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <line x1="3" y1="12" x2="21" y2="12" />
                <line x1="3" y1="6" x2="21" y2="6" />
                <line x1="3" y1="18" x2="21" y2="18" />
              </svg>
            )}
          </button>
        </div>

        {mobileMenuOpen && (
          <div className="md:hidden py-4 border-t border-navy-100">
            <div className="flex flex-col gap-4">
              <Link
                href="#how-it-works"
                className="text-muted hover:text-navy-900 transition-colors font-medium py-2"
                onClick={() => setMobileMenuOpen(false)}
              >
                How It Works
              </Link>
              <Link
                href="#pricing"
                className="text-muted hover:text-navy-900 transition-colors font-medium py-2"
                onClick={() => setMobileMenuOpen(false)}
              >
                Pricing
              </Link>
              <Link href="#get-started" className="btn-primary text-center" onClick={() => setMobileMenuOpen(false)}>
                Start Test — $99
              </Link>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}
