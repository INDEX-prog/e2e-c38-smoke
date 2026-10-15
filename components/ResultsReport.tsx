interface TestStep {
  name: string;
  status: "pass" | "fail" | "warning";
  duration: string;
  details: string;
}

interface ReportData {
  id: string;
  url: string;
  businessType: string;
  testDate: string;
  overallStatus: "pass" | "fail" | "partial";
  steps: TestStep[];
  recommendations: string[];
}

interface ResultsReportProps {
  data?: ReportData;
}

const sampleData: ReportData = {
  id: "SMOKE-001",
  url: "https://example.com/signup",
  businessType: "SaaS",
  testDate: new Date().toISOString().split("T")[0],
  overallStatus: "partial",
  steps: [
    {
      name: "Discovery",
      status: "pass",
      duration: "1.2s",
      details: "Landing page loads correctly, CTA visible above fold",
    },
    {
      name: "Signup",
      status: "pass",
      duration: "2.8s",
      details: "Form submission successful, validation works",
    },
    {
      name: "Payment",
      status: "warning",
      duration: "4.1s",
      details: "Payment form loads slowly on mobile (3G simulation)",
    },
    {
      name: "Confirmation",
      status: "fail",
      duration: "N/A",
      details: "Confirmation email not received within 60s timeout",
    },
    {
      name: "First Value",
      status: "pass",
      duration: "0.8s",
      details: "Dashboard accessible after payment",
    },
  ],
  recommendations: [
    "Optimize payment form load time for mobile users",
    "Check email delivery configuration - confirmation emails timing out",
    "Consider adding a backup notification method (in-app or SMS)",
  ],
};

export default function ResultsReport({ data = sampleData }: ResultsReportProps): JSX.Element {
  const statusColors = {
    pass: "bg-green-500/20 text-green-400 border-green-500/30",
    fail: "bg-red-500/20 text-red-400 border-red-500/30",
    warning: "bg-yellow-500/20 text-yellow-400 border-yellow-500/30",
    partial: "bg-yellow-500/20 text-yellow-400 border-yellow-500/30",
  };

  const statusIcons = {
    pass: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
      </svg>
    ),
    fail: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
      </svg>
    ),
    warning: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
      </svg>
    ),
  };

  const passCount = data.steps.filter((s) => s.status === "pass").length;
  const totalSteps = data.steps.length;

  return (
    <div className="bg-surface border border-muted-dark/50 rounded-2xl overflow-hidden">
      <div className="p-6 sm:p-8 border-b border-muted-dark/30">
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-6">
          <div>
            <p className="text-sm text-muted mb-1">Test ID: {data.id}</p>
            <h2 className="font-display text-2xl font-bold text-foreground">
              Smoke Test Results
            </h2>
          </div>
          <div className={`px-4 py-2 rounded-lg border ${statusColors[data.overallStatus]}`}>
            <span className="font-semibold capitalize">
              {data.overallStatus === "partial" ? "Partial Pass" : data.overallStatus}
            </span>
          </div>
        </div>
        <div className="grid sm:grid-cols-3 gap-4 text-sm">
          <div>
            <p className="text-muted">URL Tested</p>
            <p className="text-foreground font-medium truncate">{data.url}</p>
          </div>
          <div>
            <p className="text-muted">Business Type</p>
            <p className="text-foreground font-medium">{data.businessType}</p>
          </div>
          <div>
            <p className="text-muted">Test Date</p>
            <p className="text-foreground font-medium">{data.testDate}</p>
          </div>
        </div>
      </div>

      <div className="p-6 sm:p-8 border-b border-muted-dark/30">
        <div className="flex items-center justify-between mb-6">
          <h3 className="font-display text-lg font-semibold text-foreground">
            Test Sequence
          </h3>
          <span className="text-sm text-muted">
            {passCount}/{totalSteps} passed
          </span>
        </div>
        <div className="space-y-4">
          {data.steps.map((step, index) => (
            <div
              key={step.name}
              className="flex items-start gap-4 p-4 bg-background/50 rounded-lg"
            >
              <div className={`flex-shrink-0 w-10 h-10 rounded-lg flex items-center justify-center ${statusColors[step.status]}`}>
                {statusIcons[step.status]}
              </div>
              <div className="flex-1 min-w-0">
                <div className="flex items-center gap-2 mb-1">
                  <span className="text-xs text-muted">Step {index + 1}</span>
                  <span className="text-xs text-muted-dark">•</span>
                  <span className="text-xs text-muted">{step.duration}</span>
                </div>
                <h4 className="font-medium text-foreground mb-1">{step.name}</h4>
                <p className="text-sm text-muted">{step.details}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="p-6 sm:p-8">
        <h3 className="font-display text-lg font-semibold text-foreground mb-4">
          Recommendations
        </h3>
        <ul className="space-y-3">
          {data.recommendations.map((rec, index) => (
            <li key={index} className="flex items-start gap-3">
              <div className="flex-shrink-0 w-6 h-6 bg-accent/10 rounded-full flex items-center justify-center mt-0.5">
                <span className="text-xs font-semibold text-accent">{index + 1}</span>
              </div>
              <p className="text-foreground">{rec}</p>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
