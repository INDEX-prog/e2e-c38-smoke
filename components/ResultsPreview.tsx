export default function ResultsPreview() {
  const testResults = [
    { step: 'Discovery', status: 'pass', detail: 'Homepage loads in 1.2s, clear CTA visible' },
    { step: 'Signup', status: 'pass', detail: 'Form validation works, confirmation email sent' },
    { step: 'Payment', status: 'fail', detail: 'Stripe checkout fails on mobile Safari' },
    { step: 'Confirmation', status: 'warning', detail: 'Success page loads but no receipt email' },
    { step: 'First Action', status: 'pass', detail: 'User can access dashboard after payment' },
  ];

  return (
    <section className="section-padding bg-white">
      <div className="max-w-6xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-start">
          <div>
            <h2 className="font-display text-3xl sm:text-4xl font-bold text-navy-900 mb-6">
              Get a clear pass/fail report
            </h2>
            <p className="text-lg text-muted mb-8 leading-relaxed max-w-[50ch]">
              No vague feedback. Each step shows exactly what broke and how to fix it.
            </p>
            
            <div className="space-y-4">
              <div className="flex items-start gap-4 p-4 bg-navy-50 rounded-xl">
                <div className="w-10 h-10 bg-accent rounded-lg flex items-center justify-center flex-shrink-0">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <circle cx="12" cy="12" r="10" />
                    <polyline points="12 6 12 12 16 14" />
                  </svg>
                </div>
                <div>
                  <h3 className="font-semibold text-navy-900">24-hour turnaround</h3>
                  <p className="text-sm text-muted">Results in your inbox before end of next business day</p>
                </div>
              </div>
              
              <div className="flex items-start gap-4 p-4 bg-navy-50 rounded-xl">
                <div className="w-10 h-10 bg-accent rounded-lg flex items-center justify-center flex-shrink-0">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
                    <polyline points="14 2 14 8 20 8" />
                    <line x1="12" y1="18" x2="12" y2="12" />
                    <line x1="9" y1="15" x2="15" y2="15" />
                  </svg>
                </div>
                <div>
                  <h3 className="font-semibold text-navy-900">Actionable fixes</h3>
                  <p className="text-sm text-muted">Each issue comes with a specific recommendation</p>
                </div>
              </div>
              
              <div className="flex items-start gap-4 p-4 bg-navy-50 rounded-xl">
                <div className="w-10 h-10 bg-accent rounded-lg flex items-center justify-center flex-shrink-0">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
                  </svg>
                </div>
                <div>
                  <h3 className="font-semibold text-navy-900">Email support</h3>
                  <p className="text-sm text-muted">Questions about your report? We respond within 4 hours</p>
                </div>
              </div>
            </div>
          </div>
          
          <div className="bg-navy-900 rounded-2xl p-6 text-white shadow-xl">
            <div className="flex items-center justify-between mb-6">
              <h3 className="font-display text-lg font-bold">Smoke Test Report</h3>
              <span className="text-xs bg-yellow-500 text-navy-900 px-2 py-1 rounded font-semibold">
                3/5 PASSED
              </span>
            </div>
            
            <div className="space-y-3">
              {testResults.map((result, index) => (
                <div key={index} className="flex items-center justify-between p-3 bg-navy-800 rounded-lg">
                  <div className="flex items-center gap-3">
                    <div className={`w-8 h-8 rounded-full flex items-center justify-center ${
                      result.status === 'pass' ? 'bg-green-500/20' :
                      result.status === 'fail' ? 'bg-red-500/20' : 'bg-yellow-500/20'
                    }`}>
                      {result.status === 'pass' && (
                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#22C55E" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                          <polyline points="20 6 9 17 4 12" />
                        </svg>
                      )}
                      {result.status === 'fail' && (
                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#EF4444" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                          <line x1="18" y1="6" x2="6" y2="18" />
                          <line x1="6" y1="6" x2="18" y2="18" />
                        </svg>
                      )}
                      {result.status === 'warning' && (
                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#EAB308" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                          <path d="M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z" />
                          <line x1="12" y1="9" x2="12" y2="13" />
                          <line x1="12" y1="17" x2="12.01" y2="17" />
                        </svg>
                      )}
                    </div>
                    <span className="font-medium text-sm">{result.step}</span>
                  </div>
                  <span className={`text-xs px-2 py-0.5 rounded ${
                    result.status === 'pass' ? 'bg-green-500/20 text-green-400' :
                    result.status === 'fail' ? 'bg-red-500/20 text-red-400' : 'bg-yellow-500/20 text-yellow-400'
                  }`}>
                    {result.status.toUpperCase()}
                  </span>
                </div>
              ))}
            </div>
            
            <div className="mt-6 p-4 bg-red-500/10 border border-red-500/30 rounded-lg">
              <div className="flex items-start gap-3">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#EF4444" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="flex-shrink-0 mt-0.5">
                  <circle cx="12" cy="12" r="10" />
                  <line x1="12" y1="8" x2="12" y2="12" />
                  <line x1="12" y1="16" x2="12.01" y2="16" />
                </svg>
                <div>
                  <p className="text-sm font-semibold text-red-400">Critical Issue Found</p>
                  <p className="text-xs text-navy-300 mt-1">Stripe checkout fails on mobile Safari. The Stripe.js library isn't loading correctly on iOS 16+.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
