import Link from 'next/link';

interface StepResult {
  step: string;
  status: 'pass' | 'fail' | 'warning';
  detail: string;
  recommendation?: string;
  screenshot?: string;
}

export default function ReportPage() {
  // Mock report data for MVP demonstration
  const report = {
    id: 'test_001',
    url: 'https://yourapp.com',
    date: '2024-01-15',
    overallStatus: 'issues_found' as const,
    passedSteps: 4,
    totalSteps: 5,
    results: [
      {
        step: 'Discovery',
        status: 'pass' as const,
        detail: 'Homepage loads in 1.2 seconds. Clear value proposition visible above the fold. Primary CTA is visible and clickable.',
        recommendation: undefined,
      },
      {
        step: 'Signup',
        status: 'pass' as const,
        detail: 'Registration form works correctly. Email validation functions. Confirmation email received within 30 seconds.',
        recommendation: undefined,
      },
      {
        step: 'Payment',
        status: 'fail' as const,
        detail: 'Stripe checkout fails on mobile Safari (iOS 16+). The Stripe.js library throws an error when initializing on Safari mobile.',
        recommendation: 'Update stripe-js to version 2.x and ensure you are loading it asynchronously. Add the recommended CSP headers for Stripe.',
      },
      {
        step: 'Confirmation',
        status: 'warning' as const,
        detail: 'Success page loads correctly, but no receipt email was sent within 5 minutes of payment.',
        recommendation: 'Check your Stripe webhook configuration. Ensure the payment_intent.succeeded event is triggering your email service.',
      },
      {
        step: 'First Action',
        status: 'pass' as const,
        detail: 'User can access the dashboard after payment. All expected features are available and functional.',
        recommendation: undefined,
      },
    ] as StepResult[],
  };

  const getStatusColor = (status: StepResult['status']) => {
    switch (status) {
      case 'pass': return { bg: 'bg-green-100', text: 'text-green-700', icon: '#22C55E' };
      case 'fail': return { bg: 'bg-red-100', text: 'text-red-700', icon: '#EF4444' };
      case 'warning': return { bg: 'bg-yellow-100', text: 'text-yellow-700', icon: '#EAB308' };
    }
  };

  return (
    <div className="min-h-screen bg-navy-50">
      {/* Header */}
      <header className="bg-white border-b border-navy-100">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex items-center justify-between">
            <Link href="/dashboard" className="flex items-center gap-2 text-muted hover:text-navy-900 transition-colors">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <polyline points="15 18 9 12 15 6" />
              </svg>
              <span>Back to Dashboard</span>
            </Link>
            <button type="button" className="btn-secondary text-sm px-4 py-2">
              Download PDF
            </button>
          </div>
        </div>
      </header>

      {/* Report Content */}
      <main className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Report Header */}
        <div className="bg-white rounded-xl border border-navy-100 p-6 mb-6">
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-6">
            <div>
              <h1 className="font-display text-2xl font-bold text-navy-900 mb-1">Smoke Test Report</h1>
              <p className="text-muted">{report.url} • {report.date}</p>
            </div>
            <div className={`px-4 py-2 rounded-lg font-semibold text-sm ${
              report.overallStatus === 'issues_found' 
                ? 'bg-yellow-100 text-yellow-700' 
                : 'bg-green-100 text-green-700'
            }`}>
              {report.passedSteps}/{report.totalSteps} Steps Passed
            </div>
          </div>

          {/* Summary Cards */}
          <div className="grid sm:grid-cols-3 gap-4">
            <div className="bg-green-50 rounded-lg p-4 text-center">
              <div className="text-2xl font-bold text-green-700">{report.results.filter(r => r.status === 'pass').length}</div>
              <div className="text-sm text-green-600">Passed</div>
            </div>
            <div className="bg-red-50 rounded-lg p-4 text-center">
              <div className="text-2xl font-bold text-red-700">{report.results.filter(r => r.status === 'fail').length}</div>
              <div className="text-sm text-red-600">Failed</div>
            </div>
            <div className="bg-yellow-50 rounded-lg p-4 text-center">
              <div className="text-2xl font-bold text-yellow-700">{report.results.filter(r => r.status === 'warning').length}</div>
              <div className="text-sm text-yellow-600">Warnings</div>
            </div>
          </div>
        </div>

        {/* Detailed Results */}
        <div className="bg-white rounded-xl border border-navy-100 overflow-hidden">
          <div className="p-6 border-b border-navy-100">
            <h2 className="font-display text-lg font-bold text-navy-900">Step-by-Step Results</h2>
          </div>
          
          <div className="divide-y divide-navy-100">
            {report.results.map((result, index) => {
              const colors = getStatusColor(result.status);
              return (
                <div key={index} className="p-6">
                  <div className="flex items-start gap-4">
                    <div className={`w-10 h-10 rounded-full flex items-center justify-center flex-shrink-0 ${colors.bg}`}>
                      {result.status === 'pass' && (
                        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke={colors.icon} strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                          <polyline points="20 6 9 17 4 12" />
                        </svg>
                      )}
                      {result.status === 'fail' && (
                        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke={colors.icon} strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                          <line x1="18" y1="6" x2="6" y2="18" />
                          <line x1="6" y1="6" x2="18" y2="18" />
                        </svg>
                      )}
                      {result.status === 'warning' && (
                        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke={colors.icon} strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                          <path d="M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z" />
                          <line x1="12" y1="9" x2="12" y2="13" />
                          <line x1="12" y1="17" x2="12.01" y2="17" />
                        </svg>
                      )}
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center justify-between mb-2">
                        <h3 className="font-semibold text-navy-900">Step {index + 1}: {result.step}</h3>
                        <span className={`text-xs font-semibold px-2 py-1 rounded ${colors.bg} ${colors.text}`}>
                          {result.status.toUpperCase()}
                        </span>
                      </div>
                      <p className="text-muted text-sm leading-relaxed mb-3">
                        {result.detail}
                      </p>
                      {result.recommendation && (
                        <div className="bg-navy-50 rounded-lg p-4">
                          <div className="flex items-start gap-2">
                            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#F26419" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="flex-shrink-0 mt-0.5">
                              <circle cx="12" cy="12" r="10" />
                              <line x1="12" y1="16" x2="12" y2="12" />
                              <line x1="12" y1="8" x2="12.01" y2="8" />
                            </svg>
                            <div>
                              <p className="text-sm font-semibold text-navy-900 mb-1">Recommendation</p>
                              <p className="text-sm text-muted">{result.recommendation}</p>
                            </div>
                          </div>
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Next Steps */}
        <div className="bg-accent/10 rounded-xl p-6 mt-6 border border-accent/20">
          <h2 className="font-display text-lg font-bold text-navy-900 mb-4">Next Steps</h2>
          <ol className="space-y-3">
            <li className="flex items-start gap-3 text-sm">
              <span className="w-6 h-6 bg-accent text-white rounded-full flex items-center justify-center flex-shrink-0 text-xs font-bold">1</span>
              <span className="text-navy-800">Fix the Stripe.js mobile Safari issue before launch</span>
            </li>
            <li className="flex items-start gap-3 text-sm">
              <span className="w-6 h-6 bg-accent text-white rounded-full flex items-center justify-center flex-shrink-0 text-xs font-bold">2</span>
              <span className="text-navy-800">Check your webhook configuration for receipt emails</span>
            </li>
            <li className="flex items-start gap-3 text-sm">
              <span className="w-6 h-6 bg-accent text-white rounded-full flex items-center justify-center flex-shrink-0 text-xs font-bold">3</span>
              <span className="text-navy-800">Run another smoke test to verify fixes</span>
            </li>
          </ol>
          <div className="mt-6">
            <Link href="/#get-started" className="btn-primary">
              Run Another Test
            </Link>
          </div>
        </div>

        {/* Support */}
        <div className="text-center mt-8 text-sm text-muted">
          Questions about this report? Email us at support@e2e-smoke.com
        </div>
      </main>
    </div>
  );
}
