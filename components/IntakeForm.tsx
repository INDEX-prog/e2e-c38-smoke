"use client";

import { useState, FormEvent } from 'react';

type PricingTier = 'single' | 'bundle';

interface FormData {
  businessType: string;
  intakeUrl: string;
  painPoint: string;
  tier: PricingTier;
}

interface FormErrors {
  businessType?: string;
  intakeUrl?: string;
  painPoint?: string;
}

export default function IntakeForm() {
  const [formData, setFormData] = useState<FormData>({
    businessType: '',
    intakeUrl: '',
    painPoint: '',
    tier: 'single',
  });
  const [errors, setErrors] = useState<FormErrors>({});
  const [isSubmitting, setIsSubmitting] = useState<boolean>(false);
  const [submitError, setSubmitError] = useState<string | null>(null);

  const validateForm = (): boolean => {
    const newErrors: FormErrors = {};
    
    if (!formData.businessType.trim()) {
      newErrors.businessType = 'Please select a business type';
    }
    
    if (!formData.intakeUrl.trim()) {
      newErrors.intakeUrl = 'Please enter your website URL';
    } else {
      try {
        new URL(formData.intakeUrl.startsWith('http') ? formData.intakeUrl : `https://${formData.intakeUrl}`);
      } catch {
        newErrors.intakeUrl = 'Please enter a valid URL';
      }
    }
    
    if (!formData.painPoint.trim()) {
      newErrors.painPoint = 'Please describe what you want tested';
    }
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSubmitError(null);
    
    if (!validateForm()) return;
    
    setIsSubmitting(true);
    
    try {
      const response = await fetch('/api/checkout', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });
      
      const data = await response.json();
      
      if (!response.ok) {
        throw new Error(data.error || 'Something went wrong');
      }
      
      if (data.url) {
        window.location.href = data.url;
      }
    } catch (err) {
      setSubmitError(err instanceof Error ? err.message : 'Failed to create checkout session');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="get-started" className="section-padding bg-navy-50">
      <div className="max-w-3xl mx-auto">
        <div className="text-center mb-10">
          <h2 className="font-display text-3xl sm:text-4xl font-bold text-navy-900 mb-4">
            Start your smoke test
          </h2>
          <p className="text-lg text-muted">
            Fill in 3 fields. We handle the rest.
          </p>
        </div>

        <form onSubmit={handleSubmit} className="bg-white rounded-2xl p-8 shadow-lg border border-navy-100">
          {/* Tier Selection */}
          <div className="mb-8">
            <label className="block text-sm font-semibold text-navy-900 mb-3">
              Select your package
            </label>
            <div className="grid sm:grid-cols-2 gap-4">
              <button
                type="button"
                onClick={() => setFormData({ ...formData, tier: 'single' })}
                className={`p-4 rounded-xl border-2 text-left transition-all ${
                  formData.tier === 'single'
                    ? 'border-accent bg-orange-50'
                    : 'border-navy-100 hover:border-navy-200'
                }`}
              >
                <div className="font-semibold text-navy-900">Single Test</div>
                <div className="text-2xl font-bold text-navy-900 mt-1">$99</div>
                <div className="text-sm text-muted mt-1">One-time</div>
              </button>
              <button
                type="button"
                onClick={() => setFormData({ ...formData, tier: 'bundle' })}
                className={`p-4 rounded-xl border-2 text-left transition-all relative ${
                  formData.tier === 'bundle'
                    ? 'border-accent bg-orange-50'
                    : 'border-navy-100 hover:border-navy-200'
                }`}
              >
                <div className="absolute top-2 right-2 bg-accent text-white text-xs font-bold px-2 py-0.5 rounded">
                  SAVE $196
                </div>
                <div className="font-semibold text-navy-900">5-Test Bundle</div>
                <div className="text-2xl font-bold text-navy-900 mt-1">$299</div>
                <div className="text-sm text-muted mt-1">$60/test</div>
              </button>
            </div>
          </div>

          {/* Business Type */}
          <div className="mb-6">
            <label htmlFor="businessType" className="block text-sm font-semibold text-navy-900 mb-2">
              Business type
            </label>
            <select
              id="businessType"
              value={formData.businessType}
              onChange={(e) => setFormData({ ...formData, businessType: e.target.value })}
              className={`w-full px-4 py-3 rounded-xl border-2 bg-white text-navy-900 focus:outline-none focus:ring-2 focus:ring-accent focus:border-transparent transition-all ${
                errors.businessType ? 'border-red-400' : 'border-navy-100'
              }`}
            >
              <option value="">Select your business type</option>
              <option value="saas">SaaS / Software</option>
              <option value="ecommerce">E-commerce</option>
              <option value="marketplace">Marketplace</option>
              <option value="subscription">Subscription Service</option>
              <option value="agency">Agency / Services</option>
              <option value="other">Other</option>
            </select>
            {errors.businessType && (
              <p className="mt-2 text-sm text-red-500">{errors.businessType}</p>
            )}
          </div>

          {/* Intake URL */}
          <div className="mb-6">
            <label htmlFor="intakeUrl" className="block text-sm font-semibold text-navy-900 mb-2">
              Website URL to test
            </label>
            <input
              type="text"
              id="intakeUrl"
              value={formData.intakeUrl}
              onChange={(e) => setFormData({ ...formData, intakeUrl: e.target.value })}
              placeholder="https://your-app.com"
              className={`w-full px-4 py-3 rounded-xl border-2 bg-white text-navy-900 placeholder:text-navy-300 focus:outline-none focus:ring-2 focus:ring-accent focus:border-transparent transition-all ${
                errors.intakeUrl ? 'border-red-400' : 'border-navy-100'
              }`}
            />
            {errors.intakeUrl && (
              <p className="mt-2 text-sm text-red-500">{errors.intakeUrl}</p>
            )}
          </div>

          {/* Pain Point */}
          <div className="mb-8">
            <label htmlFor="painPoint" className="block text-sm font-semibold text-navy-900 mb-2">
              What should we focus on?
            </label>
            <textarea
              id="painPoint"
              value={formData.painPoint}
              onChange={(e) => setFormData({ ...formData, painPoint: e.target.value })}
              placeholder="E.g., 'Test the signup to first payment flow' or 'Verify our onboarding completes correctly'"
              rows={3}
              className={`w-full px-4 py-3 rounded-xl border-2 bg-white text-navy-900 placeholder:text-navy-300 focus:outline-none focus:ring-2 focus:ring-accent focus:border-transparent transition-all resize-none ${
                errors.painPoint ? 'border-red-400' : 'border-navy-100'
              }`}
            />
            {errors.painPoint && (
              <p className="mt-2 text-sm text-red-500">{errors.painPoint}</p>
            )}
          </div>

          {submitError && (
            <div className="mb-6 p-4 bg-red-50 border border-red-200 rounded-xl text-red-700 text-sm">
              {submitError}
            </div>
          )}

          <button
            type="submit"
            disabled={isSubmitting}
            className="btn-primary w-full justify-center text-lg py-4 disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {isSubmitting ? (
              <span className="flex items-center gap-2">
                <svg className="animate-spin h-5 w-5" viewBox="0 0 24 24">
                  <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" fill="none" />
                  <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
                </svg>
                Processing...
              </span>
            ) : (
              `Continue to Checkout — ${formData.tier === 'single' ? '$99' : '$299'}`
            )}
          </button>

          <p className="text-center text-sm text-muted mt-4">
            Secure checkout powered by Stripe. Test mode: 4242 4242 4242 4242
          </p>
        </form>
      </div>
    </section>
  );
}
