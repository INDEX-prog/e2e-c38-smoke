import Link from 'next/link';

export default function Pricing() {
  return (
    <section id="pricing" className="section-padding bg-white">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="font-display text-3xl sm:text-4xl font-bold text-navy-900 mb-4">
            Simple pricing. No subscriptions.
          </h2>
          <p className="text-lg text-muted max-w-xl mx-auto">
            Pay per test. Get results. Ship with confidence.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {/* Single Test */}
          <div className="bg-white rounded-2xl border-2 border-navy-100 p-8 hover:border-navy-200 transition-colors">
            <div className="mb-6">
              <h3 className="font-display text-xl font-bold text-navy-900 mb-2">Single Smoke Test</h3>
              <p className="text-muted text-sm">Perfect for urgent launch validation</p>
            </div>
            
            <div className="mb-6">
              <div className="flex items-baseline gap-1">
                <span className="font-display text-5xl font-bold text-navy-900">$99</span>
                <span className="text-muted">USD</span>
              </div>
              <p className="text-sm text-muted mt-1">One-time payment</p>
            </div>
            
            <ul className="space-y-3 mb-8">
              {[
                'Complete 5-step flow test',
                'Real customer simulation',
                'Pass/fail report in 24h',
                'Specific fix recommendations',
                'Email support included',
              ].map((feature, index) => (
                <li key={index} className="flex items-start gap-3 text-sm">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#F26419" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="flex-shrink-0 mt-0.5">
                    <polyline points="20 6 9 17 4 12" />
                  </svg>
                  <span className="text-navy-800">{feature}</span>
                </li>
              ))}
            </ul>
            
            <Link href="#get-started" className="btn-secondary w-full justify-center">
              Get Started
            </Link>
          </div>

          {/* Bundle */}
          <div className="bg-navy-900 rounded-2xl p-8 text-white relative overflow-hidden">
            <div className="absolute top-4 right-4 bg-accent text-white text-xs font-bold px-3 py-1 rounded-full">
              BEST VALUE
            </div>
            
            <div className="mb-6">
              <h3 className="font-display text-xl font-bold mb-2">5-Test Bundle</h3>
              <p className="text-navy-300 text-sm">Pre-launch validation cycle</p>
            </div>
            
            <div className="mb-6">
              <div className="flex items-baseline gap-1">
                <span className="font-display text-5xl font-bold">$299</span>
                <span className="text-navy-300">USD</span>
              </div>
              <p className="text-sm text-navy-300 mt-1">$60 per test • Save $196</p>
            </div>
            
            <ul className="space-y-3 mb-8">
              {[
                '5 complete smoke tests',
                'Use over 2 weeks pre-launch',
                'Test after each iteration',
                'Priority 12h turnaround',
                'Detailed comparison reports',
                'Slack support channel',
              ].map((feature, index) => (
                <li key={index} className="flex items-start gap-3 text-sm">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#F26419" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="flex-shrink-0 mt-0.5">
                    <polyline points="20 6 9 17 4 12" />
                  </svg>
                  <span className="text-navy-100">{feature}</span>
                </li>
              ))}
            </ul>
            
            <Link href="#get-started" className="btn-primary w-full justify-center bg-accent hover:bg-orange-500">
              Get Bundle
            </Link>
          </div>
        </div>

        <p className="text-center text-sm text-muted mt-8">
          No subscriptions. No hidden fees. Test cards accepted: 4242 4242 4242 4242
        </p>
      </div>
    </section>
  );
}
