import Image from 'next/image';

export default function ProblemSection() {
  const problems = [
    {
      title: 'Manual testing is incomplete',
      description: 'You test your own flow. But you already know how it works.',
    },
    {
      title: 'Generic QA tools miss context',
      description: 'They check if buttons work, not if your customer converts.',
    },
    {
      title: 'Consultants are slow and expensive',
      description: 'You need answers before launch, not a 2-week engagement.',
    },
  ];

  return (
    <section className="section-padding bg-white">
      <div className="max-w-6xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          <div className="order-2 lg:order-1">
            <Image
              src="https://picsum.photos/seed/founder-stress/560/420"
              alt="Founder working late before launch"
              width={560}
              height={420}
              className="rounded-2xl shadow-lg"
            />
          </div>
          
          <div className="order-1 lg:order-2">
            <h2 className="font-display text-3xl sm:text-4xl font-bold text-navy-900 mb-6">
              Launch day breaks are expensive
            </h2>
            <p className="text-lg text-muted mb-8 leading-relaxed max-w-[55ch]">
              First impressions matter. A broken payment flow costs you more than money—it costs trust.
            </p>
            
            <div className="space-y-6">
              {problems.map((problem, index) => (
                <div key={index} className="flex gap-4">
                  <div className="flex-shrink-0 w-6 h-6 rounded-full bg-red-100 flex items-center justify-center mt-0.5">
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#EF4444" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                      <line x1="18" y1="6" x2="6" y2="18" />
                      <line x1="6" y1="6" x2="18" y2="18" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-semibold text-navy-900 mb-1">{problem.title}</h3>
                    <p className="text-muted text-sm">{problem.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
