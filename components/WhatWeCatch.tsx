import Image from "next/image";

export default function WhatWeCatch() {
  const issues = [
    {
      category: "Payment",
      items: [
        "Stripe webhook failures",
        "Price ID mismatches",
        "Checkout redirect loops",
        "Missing success pages",
      ],
    },
    {
      category: "Signup",
      items: [
        "Email validation errors",
        "OAuth callback bugs",
        "Session timeout issues",
        "CORS blocking forms",
      ],
    },
    {
      category: "UX Breaks",
      items: [
        "Mobile layout failures",
        "Loading state glitches",
        "404 on critical paths",
        "JS errors blocking flow",
      ],
    },
  ];

  return (
    <section className="py-20">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-5 gap-12 items-start">
          <div className="lg:col-span-2">
            <h2 className="font-display font-bold text-navy-900 text-3xl sm:text-4xl mb-4">
              We catch what you miss at 2am
            </h2>
            <p className="text-lg text-muted mb-6">
              These are real issues we've caught in the last 30 days. Each one
              would have cost founders their first customers.
            </p>
            <div className="relative aspect-[4/3] rounded-xl overflow-hidden">
              <Image
                src="https://picsum.photos/seed/dashboard-smoke/600/450"
                alt="Dashboard showing caught issues"
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-navy-900/60 to-transparent" />
              <div className="absolute bottom-4 left-4 right-4">
                <p className="text-white text-sm font-medium">
                  Real-time test monitoring
                </p>
              </div>
            </div>
          </div>

          <div className="lg:col-span-3 space-y-6">
            {issues.map((group) => (
              <div
                key={group.category}
                className="bg-white border border-navy-100 rounded-xl p-6"
              >
                <h3 className="font-display font-bold text-navy-900 text-lg mb-4 flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-accent" />
                  {group.category} Issues
                </h3>
                <div className="grid sm:grid-cols-2 gap-3">
                  {group.items.map((item) => (
                    <div
                      key={item}
                      className="flex items-center gap-3 text-sm text-navy-700"
                    >
                      <svg
                        width="16"
                        height="16"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="#E85D04"
                        strokeWidth="2.5"
                        className="shrink-0"
                      >
                        <path d="M20 6L9 17l-5-5" />
                      </svg>
                      {item}
                    </div>
                  ))}
                </div>
              </div>
            ))}

            <div className="bg-accent/5 border border-accent/20 rounded-xl p-6">
              <p className="text-navy-800 font-medium">
                <span className="text-accent font-bold">47%</span> of tests we
                run find at least one critical issue that would have blocked a
                first customer.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
