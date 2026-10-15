import Link from "next/link";

export default function CTA(): JSX.Element {
  return (
    <section className="py-20 lg:py-28">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-surface border border-accent/20 rounded-2xl p-8 sm:p-12 lg:p-16 text-center relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-accent/5 to-transparent" />
          <div className="relative">
            <h2 className="font-display text-3xl sm:text-4xl font-bold text-foreground mb-4">
              Launch with confidence
            </h2>
            <p className="text-muted text-lg max-w-xl mx-auto mb-8">
              Don't let your first customer discover what's broken. 
              Run a smoke test before they do.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Link href="/intake" className="btn-primary">
                Start Your Test — $99
              </Link>
              <Link href="/pricing" className="btn-secondary">
                View Pricing
              </Link>
            </div>
            <p className="mt-6 text-sm text-muted">
              No subscription required. Pay per test.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
