export default function HowItWorks() {
  const steps = [
    {
      number: '01',
      title: 'Discovery',
      description: 'We land on your site as a new visitor and evaluate first impressions.',
      icon: (
        <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <circle cx="11" cy="11" r="8" />
          <line x1="21" y1="21" x2="16.65" y2="16.65" />
        </svg>
      ),
    },
    {
      number: '02',
      title: 'Signup',
      description: 'We complete your onboarding flow and catch friction points.',
      icon: (
        <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M16 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
          <circle cx="8.5" cy="7" r="4" />
          <line x1="20" y1="8" x2="20" y2="14" />
          <line x1="23" y1="11" x2="17" y2="11" />
        </svg>
      ),
    },
    {
      number: '03',
      title: 'Payment',
      description: 'We attempt a real test payment through your checkout.',
      icon: (
        <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <rect x="1" y="4" width="22" height="16" rx="2" ry="2" />
          <line x1="1" y1="10" x2="23" y2="10" />
        </svg>
      ),
    },
    {
      number: '04',
      title: 'Confirmation',
      description: 'We verify emails, receipts, and post-purchase experience.',
      icon: (
        <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
          <polyline points="22 4 12 14.01 9 11.01" />
        </svg>
      ),
    },
    {
      number: '05',
      title: 'Results',
      description: 'Get a pass/fail report with specific fixes within 24 hours.',
      icon: (
        <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
          <polyline points="14 2 14 8 20 8" />
          <line x1="16" y1="13" x2="8" y2="13" />
          <line x1="16" y1="17" x2="8" y2="17" />
          <polyline points="10 9 9 9 8 9" />
        </svg>
      ),
    },
  ];

  return (
    <section id="how-it-works" className="section-padding bg-navy-50">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="font-display text-3xl sm:text-4xl font-bold text-navy-900 mb-4">
            How the smoke test works
          </h2>
          <p className="text-lg text-muted max-w-2xl mx-auto">
            We simulate your first real customer in 5 critical steps.
          </p>
        </div>

        <div className="relative">
          {/* Connection line - desktop only */}
          <div className="hidden lg:block absolute top-16 left-[10%] right-[10%] h-0.5 bg-navy-200" />
          
          <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-8 lg:gap-4">
            {steps.map((step, index) => (
              <div key={step.number} className="relative">
                <div className="bg-white rounded-xl p-6 h-full border border-navy-100 hover:border-accent transition-colors group">
                  <div className="w-14 h-14 bg-navy-900 rounded-xl flex items-center justify-center text-white mb-5 group-hover:bg-accent transition-colors">
                    {step.icon}
                  </div>
                  <div className="text-xs font-bold text-accent uppercase tracking-wider mb-2">
                    Step {step.number}
                  </div>
                  <h3 className="font-display text-xl font-bold text-navy-900 mb-2">
                    {step.title}
                  </h3>
                  <p className="text-muted text-sm leading-relaxed">
                    {step.description}
                  </p>
                </div>
                {index < steps.length - 1 && (
                  <div className="hidden lg:flex absolute top-14 -right-4 w-8 h-8 bg-white rounded-full items-center justify-center z-10 border-2 border-navy-200">
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#0A1628" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <polyline points="9 18 15 12 9 6" />
                    </svg>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
