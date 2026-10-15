export default function HowItWorks(): JSX.Element {
  const steps = [
    {
      number: "01",
      title: "Submit your URL",
      description: "Tell us your intake URL and what you're worried about. Takes 30 seconds.",
    },
    {
      number: "02",
      title: "We simulate a customer",
      description: "Our system runs through discovery, signup, payment, and confirmation.",
    },
    {
      number: "03",
      title: "Get actionable results",
      description: "Receive a clear pass/fail report with specific bottlenecks and fixes.",
    },
  ];

  return (
    <section id="how-it-works" className="py-20 lg:py-28">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl mb-16">
          <h2 className="font-display text-3xl sm:text-4xl font-bold text-foreground mb-4">
            Test like your first customer
          </h2>
          <p className="text-muted text-lg leading-relaxed">
            We run the exact flow a new customer would experience. No shortcuts, no assumptions.
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8">
          {steps.map((step, index) => (
            <div key={step.number} className="relative">
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-12 h-12 bg-accent/10 border border-accent/30 rounded-lg flex items-center justify-center">
                  <span className="font-display font-bold text-accent">{step.number}</span>
                </div>
                <div className="flex-1 pt-1">
                  <h3 className="font-display text-xl font-semibold text-foreground mb-2">
                    {step.title}
                  </h3>
                  <p className="text-muted leading-relaxed">
                    {step.description}
                  </p>
                </div>
              </div>
              {index < steps.length - 1 && (
                <div className="hidden md:block absolute top-6 left-[calc(3rem+2rem)] w-[calc(100%-6rem)] h-px bg-gradient-to-r from-accent/30 to-transparent" />
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
