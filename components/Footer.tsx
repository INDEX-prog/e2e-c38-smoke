import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="bg-navy-900 text-white py-12">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          <div className="md:col-span-2">
            <Link href="/" className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 bg-accent rounded-lg flex items-center justify-center">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <polyline points="9 11 12 14 22 4" />
                  <path d="M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11" />
                </svg>
              </div>
              <span className="font-display font-bold text-lg">E2E Smoke</span>
            </Link>
            <p className="text-navy-300 text-sm max-w-xs leading-relaxed">
              Pre-launch smoke testing for founders. We test your first-customer flow so you ship with confidence.
            </p>
          </div>
          
          <div>
            <h4 className="font-semibold mb-4">Product</h4>
            <ul className="space-y-2 text-sm text-navy-300">
              <li><Link href="#how-it-works" className="hover:text-white transition-colors">How It Works</Link></li>
              <li><Link href="#pricing" className="hover:text-white transition-colors">Pricing</Link></li>
              <li><Link href="#get-started" className="hover:text-white transition-colors">Get Started</Link></li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-semibold mb-4">Resources</h4>
            <ul className="space-y-2 text-sm text-navy-300">
              <li><Link href="https://github.com/INDEX-prog/e2e-c38-smoke" className="hover:text-white transition-colors" target="_blank" rel="noopener noreferrer">GitHub</Link></li>
              <li><Link href="/dashboard" className="hover:text-white transition-colors">Dashboard</Link></li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-navy-700 pt-8 flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="text-navy-400 text-sm">
            © {new Date().getFullYear()} E2E Smoke Test. All rights reserved.
          </p>
          <div className="flex items-center gap-6 text-sm text-navy-400">
            <span>Test card: 4242 4242 4242 4242</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
