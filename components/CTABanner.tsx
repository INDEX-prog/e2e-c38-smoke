import Link from "next/link";

export default function CTABanner() {
  return (
    <section className="py-16 bg-accent">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="font-display font-bold text-white text-3xl sm:text-4xl mb-4">
          72 hours to launch?
        </h2>
        <p className="text-white/90 text-lg mb-8 max-w-2xl mx-auto">
          Run your smoke test now. Know what breaks before your customers do.
        </p>
        <Link
          href="/pricing"
          className="inline-flex items-center justify-center px-8 py-4 bg-white text-navy-900 font-bold text-lg rounded-lg hover:bg-navy-50 transition-colors shadow-lg"
        >
          Start Your Test — $99
        </Link>
      </div>
    </section>
  );
}
