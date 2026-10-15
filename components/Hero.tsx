import Link from "next/link";
import Image from "next/image";

export default function Hero(): JSX.Element {
  return (
    <section className="min-h-screen pt-16 flex items-center">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-20">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <div className="order-2 lg:order-1">
            <p className="text-accent font-semibold text-sm tracking-wide uppercase mb-4">
              Pre-Launch Testing
            </p>
            <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl font-bold text-foreground leading-tight mb-6">
              Your payment flow{" "}
              <span className="text-accent">will break</span> on launch day
            </h1>
            <p className="text-muted text-lg leading-relaxed mb-8 max-w-[50ch]">
              Unless you test it like your first real customer would. 
              5-minute smoke test catches issues before they cost you sales.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link href="/intake" className="btn-primary text-center">
                Run Your First Test — $99
              </Link>
              <Link href="/#how-it-works" className="btn-secondary text-center">
                See How It Works
              </Link>
            </div>
            <div className="mt-8 flex items-center gap-6 text-sm text-muted">
              <div className="flex items-center gap-2">
                <svg className="w-5 h-5 text-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <span>5 minutes</span>
              </div>
              <div className="flex items-center gap-2">
                <svg className="w-5 h-5 text-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <span>90% issue detection</span>
              </div>
            </div>
          </div>
          <div className="order-1 lg:order-2 relative">
            <div className="relative aspect-[4/3] rounded-2xl overflow-hidden border border-muted-dark/50">
              <Image
                src="https://picsum.photos/seed/smoke-test-dashboard/800/600"
                alt="Smoke test results dashboard"
                fill
                className="object-cover"
                priority
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background/60 to-transparent" />
              <div className="absolute bottom-6 left-6 right-6">
                <div className="bg-surface/95 backdrop-blur border border-muted-dark/50 rounded-lg p-4">
                  <div className="flex items-center gap-3 mb-2">
                    <div className="w-3 h-3 bg-green-500 rounded-full" />
                    <span className="text-sm font-medium text-foreground">All tests passed</span>
                  </div>
                  <p className="text-xs text-muted">Payment flow verified in 4m 32s</p>
                </div>
              </div>
            </div>
            <div className="absolute -z-10 -top-4 -right-4 w-full h-full bg-accent/10 rounded-2xl" />
          </div>
        </div>
      </div>
    </section>
  );
}
