"use client";

import Link from "next/link";
import { useState } from "react";

export default function Header(): JSX.Element {
  const [mobileMenuOpen, setMobileMenuOpen] = useState<boolean>(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-sm border-b border-muted-dark/30">
      <nav className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <Link href="/" className="flex items-center gap-2">
            <div className="w-8 h-8 bg-accent rounded-lg flex items-center justify-center">
              <svg 
                className="w-5 h-5 text-background" 
                fill="none" 
                stroke="currentColor" 
                viewBox="0 0 24 24"
                strokeWidth={2}
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <span className="font-display font-bold text-lg text-foreground">
              C38 Smoke
            </span>
          </Link>

          <div className="hidden md:flex items-center gap-8">
            <Link 
              href="/#how-it-works" 
              className="text-muted hover:text-foreground transition-colors text-sm font-medium"
            >
              How it Works
            </Link>
            <Link 
              href="/pricing" 
              className="text-muted hover:text-foreground transition-colors text-sm font-medium"
            >
              Pricing
            </Link>
            <Link 
              href="/dashboard" 
              className="text-muted hover:text-foreground transition-colors text-sm font-medium"
            >
              Dashboard
            </Link>
            <Link href="/intake" className="btn-primary text-sm">
              Start Test
            </Link>
          </div>

          <button
            type="button"
            className="md:hidden p-2 text-muted hover:text-foreground"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle menu"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2}>
              {mobileMenuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>

        {mobileMenuOpen && (
          <div className="md:hidden py-4 border-t border-muted-dark/30">
            <div className="flex flex-col gap-4">
              <Link 
                href="/#how-it-works" 
                className="text-muted hover:text-foreground transition-colors text-sm font-medium"
                onClick={() => setMobileMenuOpen(false)}
              >
                How it Works
              </Link>
              <Link 
                href="/pricing" 
                className="text-muted hover:text-foreground transition-colors text-sm font-medium"
                onClick={() => setMobileMenuOpen(false)}
              >
                Pricing
              </Link>
              <Link 
                href="/dashboard" 
                className="text-muted hover:text-foreground transition-colors text-sm font-medium"
                onClick={() => setMobileMenuOpen(false)}
              >
                Dashboard
              </Link>
              <Link 
                href="/intake" 
                className="btn-primary text-sm text-center"
                onClick={() => setMobileMenuOpen(false)}
              >
                Start Test
              </Link>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}
