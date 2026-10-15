import Image from "next/image";

export default function Problem(): JSX.Element {
  const problems = [
    "Payment form breaks on mobile",
    "Confirmation email never arrives", 
    "Signup flow times out silently",
    "First user can't complete checkout",
  ];

  return (
    <section className="py-20 lg:py-28 bg-surface">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-5 gap-12 lg:gap-16 items-center">
          <div className="lg:col-span-2 relative aspect-square lg:aspect-auto lg:h-[400px] rounded-xl overflow-hidden">
            <Image
              src="https://picsum.photos/seed/frustrated-founder/600/600"
              alt="Founder dealing with launch issues"
              fill
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-background/40 to-transparent" />
          </div>
          <div className="lg:col-span-3">
            <h2 className="font-display text-3xl sm:text-4xl font-bold text-foreground mb-6">
              Launch day surprises cost real money
            </h2>
            <p className="text-muted text-lg leading-relaxed mb-8 max-w-[55ch]">
              Your first customers are your most valuable. When something breaks, 
              they don't file a bug report — they leave and never come back.
            </p>
            <ul className="space-y-4">
              {problems.map((problem) => (
                <li key={problem} className="flex items-center gap-3">
                  <div className="flex-shrink-0 w-6 h-6 bg-red-500/20 rounded-full flex items-center justify-center">
                    <svg className="w-4 h-4 text-red-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                    </svg>
                  </div>
                  <span className="text-foreground">{problem}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
