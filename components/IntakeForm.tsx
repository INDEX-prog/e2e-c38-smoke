"use client";

import { useState, useEffect } from "react";

interface FormData {
  business_type: string;
  intake_url: string;
  pain_point: string;
}

interface FormErrors {
  business_type?: string;
  intake_url?: string;
  pain_point?: string;
}

type FormStatus = "idle" | "loading" | "success" | "error";

export default function IntakeForm() {
  const [formData, setFormData] = useState<FormData>({
    business_type: "",
    intake_url: "",
    pain_point: "",
  });
  const [errors, setErrors] = useState<FormErrors>({});
  const [status, setStatus] = useState<FormStatus>("idle");
  const [charCount, setCharCount] = useState<number>(0);

  useEffect(() => {
    setCharCount(formData.pain_point.length);
  }, [formData.pain_point]);

  const validateUrl = (url: string): boolean => {
    try {
      new URL(url);
      return true;
    } catch {
      return false;
    }
  };

  const validate = (): boolean => {
    const newErrors: FormErrors = {};

    if (!formData.business_type) {
      newErrors.business_type = "Please select a business type";
    }

    if (!formData.intake_url) {
      newErrors.intake_url = "URL is required";
    } else if (!validateUrl(formData.intake_url)) {
      newErrors.intake_url = "Please enter a valid URL (include https://)";
    }

    if (formData.pain_point.length > 500) {
      newErrors.pain_point = "Maximum 500 characters";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent): Promise<void> => {
    e.preventDefault();

    if (!validate()) return;

    setStatus("loading");

    try {
      const response = await fetch("/api/data", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (!response.ok) throw new Error("Failed to submit");

      setStatus("success");
      setFormData({ business_type: "", intake_url: "", pain_point: "" });
    } catch {
      setStatus("error");
    }
  };

  const handleInputChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement
    >
  ): void => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errors[name as keyof FormErrors]) {
      setErrors((prev) => ({ ...prev, [name]: undefined }));
    }
  };

  if (status === "success") {
    return (
      <section className="py-20 bg-navy-900">
        <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="w-16 h-16 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-6">
            <svg
              width="32"
              height="32"
              viewBox="0 0 24 24"
              fill="none"
              stroke="white"
              strokeWidth="2.5"
            >
              <path d="M20 6L9 17l-5-5" />
            </svg>
          </div>
          <h2 className="font-display font-bold text-white text-3xl mb-4">
            Test submitted successfully
          </h2>
          <p className="text-navy-200 text-lg mb-8">
            Proceed to checkout to start your smoke test. Results delivered in 5
            minutes.
          </p>
          <a
            href="/pricing"
            className="inline-flex items-center justify-center px-8 py-4 bg-accent text-white font-bold text-lg rounded-lg hover:bg-orange-600 transition-colors"
          >
            Continue to Payment
          </a>
        </div>
      </section>
    );
  }

  return (
    <section id="start-test" className="py-20 bg-navy-900">
      <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-10">
          <h2 className="font-display font-bold text-white text-3xl sm:text-4xl mb-4">
            Start your smoke test
          </h2>
          <p className="text-navy-200 text-lg">
            Three fields. Five minutes. Know if your launch is ready.
          </p>
        </div>

        <form
          onSubmit={handleSubmit}
          className="bg-white rounded-2xl p-6 sm:p-8 shadow-xl"
        >
          <div className="space-y-6">
            <div>
              <label
                htmlFor="business_type"
                className="block text-sm font-semibold text-navy-900 mb-2"
              >
                Business Type
              </label>
              <select
                id="business_type"
                name="business_type"
                value={formData.business_type}
                onChange={handleInputChange}
                className={`w-full px-4 py-3 rounded-lg border ${
                  errors.business_type
                    ? "border-red-500 focus:ring-red-500"
                    : "border-navy-200 focus:ring-accent"
                } focus:outline-none focus:ring-2 transition-colors bg-white text-navy-900`}
              >
                <option value="">Select your business type</option>
                <option value="saas">SaaS</option>
                <option value="ecommerce">E-commerce</option>
                <option value="marketplace">Marketplace</option>
                <option value="other">Other</option>
              </select>
              {errors.business_type && (
                <p className="mt-2 text-sm text-red-600">
                  {errors.business_type}
                </p>
              )}
            </div>

            <div>
              <label
                htmlFor="intake_url"
                className="block text-sm font-semibold text-navy-900 mb-2"
              >
                URL to Test
              </label>
              <input
                type="url"
                id="intake_url"
                name="intake_url"
                value={formData.intake_url}
                onChange={handleInputChange}
                placeholder="https://your-staging-site.com"
                className={`w-full px-4 py-3 rounded-lg border ${
                  errors.intake_url
                    ? "border-red-500 focus:ring-red-500"
                    : "border-navy-200 focus:ring-accent"
                } focus:outline-none focus:ring-2 transition-colors text-navy-900 placeholder:text-navy-400`}
              />
              {errors.intake_url && (
                <p className="mt-2 text-sm text-red-600">{errors.intake_url}</p>
              )}
            </div>

            <div>
              <label
                htmlFor="pain_point"
                className="block text-sm font-semibold text-navy-900 mb-2"
              >
                What's your biggest launch concern?{" "}
                <span className="font-normal text-muted">(optional)</span>
              </label>
              <textarea
                id="pain_point"
                name="pain_point"
                value={formData.pain_point}
                onChange={handleInputChange}
                rows={3}
                maxLength={500}
                placeholder="e.g., Worried about Stripe webhooks not firing..."
                className={`w-full px-4 py-3 rounded-lg border ${
                  errors.pain_point
                    ? "border-red-500 focus:ring-red-500"
                    : "border-navy-200 focus:ring-accent"
                } focus:outline-none focus:ring-2 transition-colors text-navy-900 placeholder:text-navy-400 resize-none`}
              />
              <div className="flex justify-between mt-2">
                {errors.pain_point && (
                  <p className="text-sm text-red-600">{errors.pain_point}</p>
                )}
                <p
                  className={`text-sm ml-auto ${
                    charCount > 450 ? "text-accent" : "text-muted"
                  }`}
                >
                  {charCount}/500
                </p>
              </div>
            </div>
          </div>

          {status === "error" && (
            <div className="mt-6 p-4 bg-red-50 border border-red-200 rounded-lg">
              <p className="text-sm text-red-800">
                Something went wrong. Please try again.
              </p>
            </div>
          )}

          <button
            type="submit"
            disabled={status === "loading"}
            className="w-full mt-8 px-8 py-4 bg-accent text-white font-bold text-lg rounded-lg hover:bg-orange-600 transition-colors disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
          >
            {status === "loading" ? (
              <>
                <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin" />
                Submitting...
              </>
            ) : (
              "Submit & Continue to Payment"
            )}
          </button>

          <p className="mt-4 text-center text-sm text-muted">
            Your test starts immediately after payment. Results in 5 minutes.
          </p>
        </form>
      </div>
    </section>
  );
}
