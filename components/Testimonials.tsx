import Image from "next/image";

interface Testimonial {
  quote: string;
  name: string;
  role: string;
  company: string;
  image: string;
}

export default function Testimonials() {
  const testimonials: Testimonial[] = [
    {
      quote:
        "Ran a test 3 hours before ProductHunt launch. Caught a Stripe webhook that wasn't configured for production. Would have lost every first customer.",
      name: "Sarah Chen",
      role: "Founder",
      company: "Taskflow.io",
      image: "https://picsum.photos/seed/sarah-chen/100/100",
    },
    {
      quote:
        "We thought we tested everything. The smoke test found our OAuth callback was returning 404 on mobile Safari. Fixed it in 20 minutes.",
      name: "Marcus Rivera",
      role: "CTO",
      company: "Vendorly",
      image: "https://picsum.photos/seed/marcus-rivera/100/100",
    },
    {
      quote:
        "Worth 10x the price. Our confirmation email wasn't sending due to a typo in the SendGrid API key. No way we'd have caught that manually.",
      name: "Jamie Park",
      role: "Solo Founder",
      company: "CalSync",
      image: "https://picsum.photos/seed/jamie-park/100/100",
    },
  ];

  return (
    <section className="py-20 bg-navy-50/50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="font-display font-bold text-navy-900 text-3xl sm:text-4xl mb-4">
            Founders who launched with confidence
          </h2>
          <p className="text-lg text-muted max-w-2xl mx-auto">
            They ran the test. They fixed what broke. They launched without
            breaking.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial) => (
            <div
              key={testimonial.name}
              className="bg-white rounded-xl p-6 border border-navy-100 hover:shadow-lg transition-shadow"
            >
              <div className="flex gap-1 mb-4">
                {[1, 2, 3, 4, 5].map((star) => (
                  <svg
                    key={star}
                    width="18"
                    height="18"
                    viewBox="0 0 24 24"
                    fill="#E85D04"
                    stroke="none"
                  >
                    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                  </svg>
                ))}
              </div>
              <p className="text-navy-700 leading-relaxed mb-6">
                "{testimonial.quote}"
              </p>
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-full overflow-hidden bg-navy-100">
                  <Image
                    src={testimonial.image}
                    alt={testimonial.name}
                    width={48}
                    height={48}
                    className="object-cover"
                  />
                </div>
                <div>
                  <p className="font-semibold text-navy-900">
                    {testimonial.name}
                  </p>
                  <p className="text-sm text-muted">
                    {testimonial.role}, {testimonial.company}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
