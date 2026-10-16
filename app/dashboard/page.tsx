"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

interface SmokeTest {
  id: number;
  business_type: string;
  intake_url: string;
  pain_point: string | null;
  status: string;
  created_at: string;
  completed_at: string | null;
  result: string | null;
}

type FetchStatus = "loading" | "success" | "error" | "empty";

export default function DashboardPage() {
  const [tests, setTests] = useState<SmokeTest[]>([]);
  const [status, setStatus] = useState<FetchStatus>("loading");

  useEffect(() => {
    const fetchTests = async (): Promise<void> => {
      try {
        const response = await fetch("/api/data");
        const data = await response.json();

        if (data.success) {
          if (data.tests && data.tests.length > 0) {
            setTests(data.tests as SmokeTest[]);
            setStatus("success");
          } else {
            setStatus("empty");
          }
        } else {
          setStatus("error");
        }
      } catch {
        setStatus("error");
      }
    };

    fetchTests();
  }, []);

  const getStatusBadge = (testStatus: string): JSX.Element => {
    const statusConfig: Record<string, { bg: string; text: string; label: string }> = {
      pending: { bg: "bg-yellow-50", text: "text-yellow-700", label: "Pending" },
      running: { bg: "bg-blue-50", text: "text-blue-700", label: "Running" },
      passed: { bg: "bg-green-50", text: "text-green-700", label: "Passed" },
      failed: { bg: "bg-red-50", text: "text-red-700", label: "Failed" },
    };

    const config = statusConfig[testStatus] || statusConfig.pending;

    return (
      <span
        className={`inline-flex items-center px-2.5 py-1 rounded-full text-xs font-medium ${config.bg} ${config.text}`}
      >
        {config.label}
      </span>
    );
  };

  const formatDate = (dateString: string): string => {
    const date = new Date(dateString);
    return date.toLocaleDateString("en-US", {
      month: "short",
      day: "numeric",
      hour: "2-digit",
      minute: "2-digit",
    });
  };

  const formatBusinessType = (type: string): string => {
    const types: Record<string, string> = {
      saas: "SaaS",
      ecommerce: "E-commerce",
      marketplace: "Marketplace",
      other: "Other",
    };
    return types[type] || type;
  };

  return (
    <main className="min-h-screen bg-navy-50/30">
      <Header />

      <section className="pt-28 pb-12">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-8">
            <div>
              <h1 className="font-display font-bold text-navy-900 text-3xl mb-2">
                Test Dashboard
              </h1>
              <p className="text-muted">
                View your smoke test history and results
              </p>
            </div>
            <Link
              href="/#start-test"
              className="inline-flex items-center justify-center px-5 py-2.5 bg-accent text-white font-semibold rounded-lg hover:bg-orange-600 transition-colors"
            >
              Run New Test
            </Link>
          </div>

          {/* Loading State */}
          {status === "loading" && (
            <div className="bg-white rounded-xl border border-navy-100 p-8">
              <div className="space-y-4">
                {[1, 2, 3].map((i) => (
                  <div key={i} className="animate-pulse flex items-center gap-4">
                    <div className="w-24 h-6 bg-navy-100 rounded" />
                    <div className="flex-1 h-4 bg-navy-100 rounded" />
                    <div className="w-16 h-6 bg-navy-100 rounded-full" />
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Error State */}
          {status === "error" && (
            <div className="bg-white rounded-xl border border-red-200 p-8 text-center">
              <div className="w-12 h-12 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="#dc2626"
                  strokeWidth="2"
                >
                  <circle cx="12" cy="12" r="10" />
                  <line x1="12" y1="8" x2="12" y2="12" />
                  <line x1="12" y1="16" x2="12.01" y2="16" />
                </svg>
              </div>
              <h3 className="font-semibold text-navy-900 mb-2">
                Failed to load tests
              </h3>
              <p className="text-muted mb-4">
                There was an error loading your test history.
              </p>
              <button
                type="button"
                onClick={() => window.location.reload()}
                className="text-accent font-semibold hover:underline"
              >
                Try again
              </button>
            </div>
          )}

          {/* Empty State */}
          {status === "empty" && (
            <div className="bg-white rounded-xl border border-navy-100 p-12 text-center">
              <div className="w-16 h-16 bg-navy-50 rounded-full flex items-center justify-center mx-auto mb-6">
                <svg
                  width="32"
                  height="32"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="#5B6573"
                  strokeWidth="2"
                >
                  <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
                  <polyline points="14 2 14 8 20 8" />
                  <line x1="12" y1="18" x2="12" y2="12" />
                  <line x1="9" y1="15" x2="15" y2="15" />
                </svg>
              </div>
              <h3 className="font-display font-bold text-navy-900 text-xl mb-2">
                No tests yet
              </h3>
              <p className="text-muted mb-6 max-w-sm mx-auto">
                Submit your first URL to run a smoke test. Results show up here
                in 5 minutes.
              </p>
              <Link
                href="/#start-test"
                className="inline-flex items-center justify-center px-6 py-3 bg-accent text-white font-semibold rounded-lg hover:bg-orange-600 transition-colors"
              >
                Run Your First Test
              </Link>
            </div>
          )}

          {/* Success State with Data */}
          {status === "success" && tests.length > 0 && (
            <div className="bg-white rounded-xl border border-navy-100 overflow-hidden">
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead>
                    <tr className="border-b border-navy-100 bg-navy-50/50">
                      <th className="text-left px-6 py-4 text-sm font-semibold text-navy-900">
                        Type
                      </th>
                      <th className="text-left px-6 py-4 text-sm font-semibold text-navy-900">
                        URL
                      </th>
                      <th className="text-left px-6 py-4 text-sm font-semibold text-navy-900">
                        Date
                      </th>
                      <th className="text-left px-6 py-4 text-sm font-semibold text-navy-900">
                        Status
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    {tests.map((test) => (
                      <tr
                        key={test.id}
                        className="border-b border-navy-50 last:border-0 hover:bg-navy-50/30 transition-colors"
                      >
                        <td className="px-6 py-4">
                          <span className="text-sm font-medium text-navy-800">
                            {formatBusinessType(test.business_type)}
                          </span>
                        </td>
                        <td className="px-6 py-4">
                          <a
                            href={test.intake_url}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-sm text-accent hover:underline truncate block max-w-xs"
                          >
                            {test.intake_url}
                          </a>
                        </td>
                        <td className="px-6 py-4">
                          <span className="text-sm text-muted">
                            {formatDate(test.created_at)}
                          </span>
                        </td>
                        <td className="px-6 py-4">
                          {getStatusBadge(test.status)}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          )}

          {/* Stats Summary */}
          {status === "success" && tests.length > 0 && (
            <div className="grid sm:grid-cols-3 gap-6 mt-8">
              <div className="bg-white rounded-xl border border-navy-100 p-6">
                <p className="text-sm text-muted mb-1">Total Tests</p>
                <p className="font-display font-bold text-navy-900 text-3xl">
                  {tests.length}
                </p>
              </div>
              <div className="bg-white rounded-xl border border-navy-100 p-6">
                <p className="text-sm text-muted mb-1">Passed</p>
                <p className="font-display font-bold text-green-600 text-3xl">
                  {tests.filter((t) => t.status === "passed").length}
                </p>
              </div>
              <div className="bg-white rounded-xl border border-navy-100 p-6">
                <p className="text-sm text-muted mb-1">Issues Found</p>
                <p className="font-display font-bold text-red-600 text-3xl">
                  {tests.filter((t) => t.status === "failed").length}
                </p>
              </div>
            </div>
          )}
        </div>
      </section>

      <div className="flex-1" />
      <Footer />
    </main>
  );
}
