import Image from 'next/image';

export default function Testimonials() {
  const testimonials = [
    {
      quote: "Found a payment bug 2 days before launch. Would have lost our first 50 customers.",
      author: "Sarah Chen",
      role: "Founder, InvoiceKit",
      image: "https://picsum.photos/seed/sarah-founder/80/80",
    },
    {
      quote: "Replaced our 3-day manual QA process. Results in 24 hours, issues I never would have caught.",
      author: "Marcus Rivera",
      role: "CTO, Flowstate",
      image: "https://picsum.photos/seed/marcus-cto/80/80",
    },
  ];

  return (
    <section className="section-padding bg-navy-50">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="font-display text-3xl sm:text-4xl font-bold text-navy-900 mb-4">
            Founders trust us before launch
          </h2>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="bg-white rounded-2xl p-8 border border-navy-100">
              <svg width="32" height="32" viewBox="0 0 24 24" fill="none" className="text-accent mb-4">
                <path d="M3 21c3 0 7-1 7-8V5c0-1.25-.756-2.017-2-2H4c-1.25 0-2 .75-2 1.972V11c0 1.25.75 2 2 2 1 0 1 0 1 1v1c0 1-1 2-2 2s-1 .008-1 1.031V21z" fill="currentColor"/>
                <path d="M15 21c3 0 7-1 7-8V5c0-1.25-.757-2.017-2-2h-4c-1.25 0-2 .75-2 1.972V11c0 1.25.75 2 2 2h.75c0 2.25.25 4-2.75 4v3c0 1 0 1 1 1z" fill="currentColor"/>
              </svg>
              <p className="text-lg text-navy-900 mb-6 leading-relaxed">
                {testimonial.quote}
              </p>
              <div className="flex items-center gap-4">
                <Image
                  src={testimonial.image}
                  alt={testimonial.author}
                  width={48}
                  height={48}
                  className="rounded-full"
                />
                <div>
                  <p className="font-semibold text-navy-900">{testimonial.author}</p>
                  <p className="text-sm text-muted">{testimonial.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
