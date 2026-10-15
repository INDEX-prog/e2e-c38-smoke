import Link from "next/link";

export default function Footer(): JSX.Element {
  return (
    <footer className="py-12 border-t border-muted-dark/30">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          <div className="sm:col-span-2 lg:col-span-1">
            <Link href="/" className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 bg-accent rounded-lg flex items-center justify-center">
                <svg 
                  className="w-5 h-5 text-background" 
                  fill="none" 
                  stroke="currentColor" 
                  viewBox="0 0 24 24"
                  strokeWidth={2}
                >
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <span className="font-display font-bold text-lg text-foreground">
                C38 Smoke
              </span>
            </Link>
            <p className="text-sm text-muted max-w-xs">
              Pre-launch smoke testing for startups. 
              Test your payment flow before your first customer does.
            </p>
          </div>
          
          <div>
            <h4 className="font-semibold text-foreground mb-4">Product</h4>
            <ul className="space-y-2">
              <li>
                <Link href="/#how-it-works" className="text-sm text-muted hover:text-foreground transition-colors">
                  How it Works
                </Link>
              </li>
              <li>
                <Link href="/pricing" className="text-sm text-muted hover:text-foreground transition-colors">
                  Pricing
                </Link>
              </li>
              <li>
                <Link href="/intake" className="text-sm text-muted hover:text-foreground transition-colors">
                  Start a Test
                </Link>
              </li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-semibold text-foreground mb-4">Resources</h4>
            <ul className="space-y-2">
              <li>
                <Link href="/dashboard" className="text-sm text-muted hover:text-foreground transition-colors">
                  Dashboard
                </Link>
              </li>
              <li>
                <Link href="/results/sample" className="text-sm text-muted hover:text-foreground transition-colors">
                  Sample Report
                </Link>
              </li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-semibold text-foreground mb-4">Links</h4>
            <ul className="space-y-2">
              <li>
                <a 
                  href="https://github.com/INDEX-prog/e2e-c38-smoke" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-sm text-muted hover:text-foreground transition-colors"
                >
                  GitHub
                </a>
              </li>
              <li>
                <a 
                  href="https://e2e-c38-smoke.vercel.app" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-sm text-muted hover:text-foreground transition-colors"
                >
                  Vercel
                </a>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="pt-8 border-t border-muted-dark/30 flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="text-sm text-muted">
            © {new Date().getFullYear()} E2E C38 Smoke. All rights reserved.
          </p>
          <p className="text-sm text-muted">
            Built for founders who ship.
          </p>
        </div>
      </div>
    </footer>
  );
}
