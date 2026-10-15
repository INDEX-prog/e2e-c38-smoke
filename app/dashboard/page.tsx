import Link from 'next/link';

interface TestResult {
  id: string;
  url: string;
  date: string;
  status: 'completed' | 'in_progress' | 'pending';
  score: string;
}

export default function DashboardPage() {
  // Mock data for MVP demonstration
  const mockTests: TestResult[] = [
    {
      id: 'test_001',
      url: 'https://yourapp.com',
      date: '2024-01-15',
      status: 'completed',
      score: '4/5 passed',
    },
    {
      id: 'test_002',
      url: 'https://yourapp.com',
      date: '2024-01-14',
      status: 'completed',
      score: '5/5 passed',
    },
  ];

  return (
    <div className="min-h-screen bg-navy-50">
      {/* Header */}
      <header className="bg-white border-b border-navy-100">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex items-center justify-between">
            <Link href="/" className="flex items-center gap-2">
              <div className="w-8 h-8 bg-accent rounded-lg flex items-center justify-center">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <polyline points="9 11 12 14 22 4" />
                  <path d="M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11" />
                </svg>
              </div>
              <span className="font-display font-bold text-navy-900 text-lg">E2E Smoke</span>
            </Link>
            <Link href="/#get-started" className="btn-primary text-sm px-4 py-2">
              New Test
            </Link>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="mb-8">
          <h1 className="font-display text-2xl sm:text-3xl font-bold text-navy-900 mb-2">
            Your Test History
          </h1>
          <p className="text-muted">View results and track your smoke test progress.</p>
        </div>

        {/* Stats Cards */}
        <div className="grid sm:grid-cols-3 gap-6 mb-8">
          <div className="bg-white rounded-xl p-6 border border-navy-100">
            <div className="text-3xl font-bold text-navy-900 mb-1">2</div>
            <div className="text-sm text-muted">Tests Completed</div>
          </div>
          <div className="bg-white rounded-xl p-6 border border-navy-100">
            <div className="text-3xl font-bold text-green-600 mb-1">9/10</div>
            <div className="text-sm text-muted">Steps Passed</div>
          </div>
          <div className="bg-white rounded-xl p-6 border border-navy-100">
            <div className="text-3xl font-bold text-accent mb-1">3</div>
            <div className="text-sm text-muted">Tests Remaining</div>
          </div>
        </div>

        {/* Test History */}
        <div className="bg-white rounded-xl border border-navy-100 overflow-hidden">
          <div className="p-6 border-b border-navy-100">
            <h2 className="font-display text-lg font-bold text-navy-900">Recent Tests</h2>
          </div>
          
          {mockTests.length > 0 ? (
            <div className="divide-y divide-navy-100">
              {mockTests.map((test) => (
                <div key={test.id} className="p-6 flex items-center justify-between hover:bg-navy-50 transition-colors">
                  <div className="flex items-center gap-4">
                    <div className={`w-10 h-10 rounded-full flex items-center justify-center ${
                      test.status === 'completed' ? 'bg-green-100' : 
                      test.status === 'in_progress' ? 'bg-yellow-100' : 'bg-navy-100'
                    }`}>
                      {test.status === 'completed' && (
                        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#22C55E" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                          <polyline points="20 6 9 17 4 12" />
                        </svg>
                      )}
                      {test.status === 'in_progress' && (
                        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#EAB308" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="animate-spin">
                          <circle cx="12" cy="12" r="10" />
                          <polyline points="12 6 12 12 16 14" />
                        </svg>
                      )}
                      {test.status === 'pending' && (
                        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#5B6573" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                          <circle cx="12" cy="12" r="10" />
                          <polyline points="12 6 12 12 16 14" />
                        </svg>
                      )}
                    </div>
                    <div>
                      <p className="font-semibold text-navy-900">{test.url}</p>
                      <p className="text-sm text-muted">{test.date}</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-4">
                    <span className={`text-sm font-medium px-3 py-1 rounded-full ${
                      test.status === 'completed' ? 'bg-green-100 text-green-700' :
                      test.status === 'in_progress' ? 'bg-yellow-100 text-yellow-700' :
                      'bg-navy-100 text-navy-600'
                    }`}>
                      {test.score}
                    </span>
                    <Link href="/report" className="text-accent hover:text-orange-600 font-medium text-sm">
                      View Report →
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div className="p-12 text-center">
              <div className="w-16 h-16 bg-navy-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="#5B6573" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
                  <polyline points="14 2 14 8 20 8" />
                </svg>
              </div>
              <h3 className="font-semibold text-navy-900 mb-2">No tests yet</h3>
              <p className="text-muted text-sm mb-4">Run your first smoke test to see results here.</p>
              <Link href="/#get-started" className="btn-primary">
                Start First Test
              </Link>
            </div>
          )}
        </div>
      </main>
    </div>
  );
}
