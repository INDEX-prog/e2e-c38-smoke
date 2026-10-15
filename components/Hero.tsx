import Link from 'next/link';
import Image from 'next/image';

export default function Hero() {
  return (
    <section className="pt-24 pb-16 lg:pt-28 lg:pb-20 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <div className="max-w-xl">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-navy-50 rounded-full mb-6">
              <span className="w-2 h-2 bg-accent rounded-full animate-pulse" />
              <span className="text-sm font-medium text-navy-700">Pre-launch panic button</span>
            </div>
            
            <h1 className="font-display text-4xl sm:text-5xl lg:text-[3.25rem] font-bold text-navy-900 leading-[1.1] tracking-tight mb-6">
              Your payment flow will break on launch day.
            </h1>
            
            <p className="text-lg text-muted leading-relaxed mb-8 max-w-[50ch]">
              Test it like your first real customer would. 5-minute smoke test, $99, catches 90% of issues before they happen.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <Link href="#get-started" className="btn-primary text-lg px-8 py-4">
                Run Smoke Test — $99
              </Link>
              <Link href="#how-it-works" className="btn-secondary text-lg px-8 py-4">
                See How It Works
              </Link>
            </div>
            
            <div className="mt-10 flex items-center gap-6 text-sm text-muted">
              <div className="flex items-center gap-2">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#F26419" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <circle cx="12" cy="12" r="10" />
                  <polyline points="12 6 12 12 16 14" />
                </svg>
                <span>5 min test</span>
              </div>
              <div className="flex items-center gap-2">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#F26419" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
                  <polyline points="22 4 12 14.01 9 11.01" />
                </svg>
                <span>Results in 24h</span>
              </div>
              <div className="flex items-center gap-2">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#F26419" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <rect x="1" y="4" width="22" height="16" rx="2" ry="2" />
                  <line x1="1" y1="10" x2="23" y2="10" />
                </svg>
                <span>One-time $99</span>
              </div>
            </div>
          </div>
          
          <div className="relative">
            <div className="relative rounded-2xl overflow-hidden shadow-2xl shadow-navy-900/10">
              <Image
                src="https://picsum.photos/seed/smoke-test-dashboard/640/480"
                alt="E2E Smoke Test Dashboard showing test results"
                width={640}
                height={480}
                className="w-full h-auto"
                priority
              />
              <div className="absolute inset-0 bg-gradient-to-t from-navy-900/20 to-transparent" />
            </div>
            <div className="absolute -bottom-6 -left-6 bg-white rounded-xl shadow-lg p-4 border border-navy-100">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-green-100 rounded-full flex items-center justify-center">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#22C55E" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                    <polyline points="20 6 9 17 4 12" />
                  </svg>
                </div>
                <div>
                  <p className="font-semibold text-navy-900 text-sm">Payment flow verified</p>
                  <p className="text-xs text-muted">All 5 steps passed</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
