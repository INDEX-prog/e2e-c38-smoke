"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import type { TestSubmission } from "@/lib/db";

type LoadingState = "loading" | "success" | "error" | "empty";

export default function DashboardView(): JSX.Element {
  const [submissions, setSubmissions] = useState<TestSubmission[]>([]);
  const [loadingState, setLoadingState] = useState<LoadingState>("loading");

  useEffect(() => {
    const fetchData = async (): Promise<void> => {
      try {
        const response = await fetch("/api/data");
        if (!response.ok) throw new Error("Failed to fetch");
        const data = await response.json();
        setSubmissions(data.submissions || []);
        setLoadingState(data.submissions?.length > 0 ? "success" : "empty");
      } catch {
        setLoadingState("error");
      }
    };

    fetchData();
  }, []);

  const statusBadge = (status: string): JSX.Element => {
    const colors: Record<string, string> = {
      pending: "bg-yellow-500/20 text-yellow-400",
      paid: "bg-blue-500/20 text-blue-400",
      running: "bg-purple-500/20 text-purple-400",
      completed: "bg-green-500/20 text-green-400",
      failed: "bg-red-500/20 text-red-400",
    };
    return (
      <span className={`px-2 py-1 rounded text-xs font-medium ${colors[status] || colors.pending}`}>
        {status}
      </span>
    );
  };

  if (loadingState === "loading") {
    return (
      <div className="space-y-4">
        {[1, 2, 3].map((i) => (
          <div key={i} className="bg-surface border border-muted-dark/50 rounded-xl p-6">
            <div className="flex items-center gap-4">
              <div className="skeleton w-20 h-6 rounded" />
              <div className="skeleton flex-1 h-4 rounded" />
              <div className="skeleton w-24 h-8 rounded" />
            </div>
          </div>
        ))}
      </div>
    );
  }

  if (loadingState === "error") {
    return (
      <div className="bg-surface border border-red-500/30 rounded-xl p-8 text-center">
        <div className="w-12 h-12 bg-red-500/20 rounded-full flex items-center justify-center mx-auto mb-4">
          <svg className="w-6 h-6 text-red-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
          </svg>
        </div>
        <h3 className="font-display text-lg font-semibold text-foreground mb-2">
          Unable to load tests
        </h3>
        <p className="text-muted text-sm mb-4">
          There was a problem connecting to the database.
        </p>
        <button
          onClick={() => window.location.reload()}
          className="btn-secondary text-sm"
        >
          Try Again
        </button>
      </div>
    );
  }

  if (loadingState === "empty") {
    return (
      <div className="bg-surface border border-muted-dark/50 rounded-xl p-8 text-center">
        <div className="w-12 h-12 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-4">
          <svg className="w-6 h-6 text-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
          </svg>
        </div>
        <h3 className="font-display text-lg font-semibold text-foreground mb-2">
          No tests yet
        </h3>
        <p className="text-muted text-sm mb-4">
          Run your first smoke test to see results here.
        </p>
        <Link href="/intake" className="btn-primary text-sm">
          Start Your First Test
        </Link>
      </div>
    );
  }

  return (
    <div className="space-y-4">
      {submissions.map((submission) => (
        <div
          key={submission.id}
          className="bg-surface border border-muted-dark/50 rounded-xl p-6 hover:border-muted-dark transition-colors"
        >
          <div className="flex flex-col sm:flex-row sm:items-center gap-4">
            <div className="flex-1 min-w-0">
              <div className="flex items-center gap-3 mb-2">
                <span className="font-mono text-sm text-muted">#{submission.id}</span>
                {statusBadge(submission.status)}
              </div>
              <p className="text-foreground font-medium truncate mb-1">
                {submission.intake_url}
              </p>
              <p className="text-sm text-muted">
                {submission.business_type} • {new Date(submission.created_at).toLocaleDateString()}
              </p>
            </div>
            <div className="flex gap-2">
              {submission.status === "completed" && (
                <Link
                  href={`/results/${submission.id}`}
                  className="btn-primary text-sm py-2"
                >
                  View Results
                </Link>
              )}
              {submission.status === "pending" && (
                <span className="text-sm text-muted py-2">Awaiting payment</span>
              )}
              {submission.status === "paid" && (
                <span className="text-sm text-accent py-2">Test queued</span>
              )}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
