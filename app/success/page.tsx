import Link from 'next/link';
import { Suspense } from 'react';

function SuccessContent() {
  return (
    <div className="min-h-screen bg-white flex items-center justify-center px-4">
      <div className="max-w-lg w-full text-center">
        <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
          <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="#22C55E" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
            <polyline points="20 6 9 17 4 12" />
          </svg>
        </div>
        
        <h1 className="font-display text-3xl sm:text-4xl font-bold text-navy-900 mb-4">
          Payment successful!
        </h1>
        
        <p className="text-lg text-muted mb-8 leading-relaxed">
          Your smoke test is queued. We&apos;ll send results to your email within 24 hours.
        </p>
        
        <div className="bg-navy-50 rounded-xl p-6 mb-8 text-left">
          <h2 className="font-semibold text-navy-900 mb-4">What happens next?</h2>
          <ul className="space-y-3">
            <li className="flex items-start gap-3 text-sm">
              <span className="w-6 h-6 bg-accent text-white rounded-full flex items-center justify-center flex-shrink-0 text-xs font-bold">1</span>
              <span className="text-muted">We access your URL and begin the 5-step test</span>
            </li>
            <li className="flex items-start gap-3 text-sm">
              <span className="w-6 h-6 bg-accent text-white rounded-full flex items-center justify-center flex-shrink-0 text-xs font-bold">2</span>
              <span className="text-muted">We simulate your first real customer journey</span>
            </li>
            <li className="flex items-start gap-3 text-sm">
              <span className="w-6 h-6 bg-accent text-white rounded-full flex items-center justify-center flex-shrink-0 text-xs font-bold">3</span>
              <span className="text-muted">You receive a detailed pass/fail report via email</span>
            </li>
          </ul>
        </div>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link href="/dashboard" className="btn-primary">
            View Dashboard
          </Link>
          <Link href="/" className="btn-secondary">
            Back to Home
          </Link>
        </div>
        
        <p className="text-sm text-muted mt-8">
          Questions? Email us at support@e2e-smoke.com
        </p>
      </div>
    </div>
  );
}

export default function SuccessPage() {
  return (
    <Suspense fallback={
      <div className="min-h-screen bg-white flex items-center justify-center">
        <div className="animate-spin h-8 w-8 border-4 border-accent border-t-transparent rounded-full" />
      </div>
    }>
      <SuccessContent />
    </Suspense>
  );
}
