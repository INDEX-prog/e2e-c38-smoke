export default function Differentiator(): JSX.Element {
  const comparisons = [
    {
      alternative: "Manual testing",
      problem: "Slow, incomplete, you miss what you don't know to look for",
    },
    {
      alternative: "Generic QA tools",
      problem: "Don't simulate first-customer friction or real user journeys",
    },
    {
      alternative: "QA consultants",
      problem: "Expensive, slow turnaround, overkill for pre-launch",
    },
  ];

  return (
    <section className="py-20 lg:py-28 bg-surface">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20">
          <div>
            <h2 className="font-display text-3xl sm:text-4xl font-bold text-foreground mb-6">
              We test what others miss
            </h2>
            <p className="text-muted text-lg leading-relaxed mb-8">
              Generic testing tools check if buttons exist. We verify the entire 
              intake-to-value sequence works for a real first customer.
            </p>
            <div className="space-y-6">
              {comparisons.map((item) => (
                <div key={item.alternative} className="flex gap-4">
                  <div className="flex-shrink-0 mt-1">
                    <div className="w-5 h-5 bg-muted-dark/30 rounded-full flex items-center justify-center">
                      <svg className="w-3 h-3 text-muted" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                      </svg>
                    </div>
                  </div>
                  <div>
                    <p className="font-medium text-foreground">{item.alternative}</p>
                    <p className="text-sm text-muted">{item.problem}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="bg-background border border-accent/30 rounded-xl p-8">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 bg-accent rounded-lg flex items-center justify-center">
                <svg className="w-6 h-6 text-background" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <span className="font-display font-bold text-xl text-foreground">C38 Smoke</span>
            </div>
            <ul className="space-y-4">
              {[
                "Simulates actual first-customer behavior",
                "Tests intake to confirmation sequence",
                "Results in under 5 minutes",
                "Specific bottleneck identification",
                "Actionable fix recommendations",
              ].map((benefit) => (
                <li key={benefit} className="flex items-start gap-3">
                  <div className="flex-shrink-0 mt-0.5">
                    <svg className="w-5 h-5 text-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <span className="text-foreground">{benefit}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
