"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

type FormStatus = "idle" | "loading" | "error" | "success";

interface FormData {
  business_type: string;
  intake_url: string;
  pain_point: string;
  email: string;
}

interface IntakeFormProps {
  priceType?: "single" | "bundle";
}

export default function IntakeForm({ priceType = "single" }: IntakeFormProps): JSX.Element {
  const router = useRouter();
  const [status, setStatus] = useState<FormStatus>("idle");
  const [error, setError] = useState<string>("");
  const [formData, setFormData] = useState<FormData>({
    business_type: "",
    intake_url: "",
    pain_point: "",
    email: "",
  });

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>): Promise<void> => {
    e.preventDefault();
    setStatus("loading");
    setError("");

    try {
      // First, save the submission
      const submitResponse = await fetch("/api/data", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (!submitResponse.ok) {
        throw new Error("Failed to save submission");
      }

      const { id } = await submitResponse.json();

      // Then create Stripe checkout session
      const checkoutResponse = await fetch("/api/create-checkout", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          priceType,
          submissionId: id,
          email: formData.email,
        }),
      });

      if (!checkoutResponse.ok) {
        throw new Error("Failed to create checkout session");
      }

      const { url } = await checkoutResponse.json();

      if (url) {
        setStatus("success");
        window.location.href = url;
      } else {
        // Fallback for development without Stripe keys
        router.push(`/success?submission_id=${id}&demo=true`);
      }
    } catch (err) {
      setStatus("error");
      setError(err instanceof Error ? err.message : "Something went wrong");
    }
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ): void => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const price = priceType === "single" ? "$99" : "$299";
  const productName = priceType === "single" ? "Single Smoke Test" : "5-Test Bundle";

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div>
        <label htmlFor="email" className="block text-sm font-medium text-foreground mb-2">
          Your email
        </label>
        <input
          type="email"
          id="email"
          name="email"
          required
          value={formData.email}
          onChange={handleChange}
          placeholder="founder@yourcompany.com"
          className="input-field"
          disabled={status === "loading"}
        />
      </div>

      <div>
        <label htmlFor="business_type" className="block text-sm font-medium text-foreground mb-2">
          Business type
        </label>
        <select
          id="business_type"
          name="business_type"
          required
          value={formData.business_type}
          onChange={handleChange}
          className="input-field"
          disabled={status === "loading"}
        >
          <option value="">Select your business type</option>
          <option value="saas">SaaS / Software</option>
          <option value="ecommerce">E-commerce</option>
          <option value="marketplace">Marketplace</option>
          <option value="subscription">Subscription Service</option>
          <option value="b2b">B2B Service</option>
          <option value="other">Other</option>
        </select>
      </div>

      <div>
        <label htmlFor="intake_url" className="block text-sm font-medium text-foreground mb-2">
          Your intake/landing URL
        </label>
        <input
          type="url"
          id="intake_url"
          name="intake_url"
          required
          value={formData.intake_url}
          onChange={handleChange}
          placeholder="https://yourproduct.com/signup"
          className="input-field"
          disabled={status === "loading"}
        />
        <p className="mt-1 text-xs text-muted">
          The URL where new customers start their journey
        </p>
      </div>

      <div>
        <label htmlFor="pain_point" className="block text-sm font-medium text-foreground mb-2">
          What are you worried about?
        </label>
        <textarea
          id="pain_point"
          name="pain_point"
          required
          value={formData.pain_point}
          onChange={handleChange}
          placeholder="e.g., Payment flow on mobile, signup confirmation emails, checkout redirects..."
          rows={3}
          className="input-field resize-none"
          disabled={status === "loading"}
        />
      </div>

      {error && (
        <div className="p-4 bg-red-500/10 border border-red-500/30 rounded-lg">
          <p className="text-sm text-red-400">{error}</p>
        </div>
      )}

      <button
        type="submit"
        disabled={status === "loading"}
        className="btn-primary w-full flex items-center justify-center gap-2"
      >
        {status === "loading" ? (
          <>
            <svg className="animate-spin w-5 h-5" fill="none" viewBox="0 0 24 24">
              <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
              <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" />
            </svg>
            Processing...
          </>
        ) : (
          <>
            Pay {price} for {productName}
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </>
        )}
      </button>

      <p className="text-xs text-center text-muted">
        Secure payment via Stripe. Results delivered within 24 hours.
      </p>
    </form>
  );
}
