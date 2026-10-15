"use client";

import { useState } from 'react';

interface FAQItem {
  question: string;
  answer: string;
}

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqs: FAQItem[] = [
    {
      question: "How long does the smoke test take?",
      answer: "We complete the test within 24 hours of receiving your submission. For bundle customers, you get priority 12-hour turnaround.",
    },
    {
      question: "Do you actually make a real payment?",
      answer: "Yes, we use test cards in test/sandbox mode, or make a real $1 payment that we immediately refund. We test the actual flow your customers will experience.",
    },
    {
      question: "What if my product isn't live yet?",
      answer: "Perfect—that's when you need us most. We can test staging environments as long as they're accessible via URL. Just share credentials if needed.",
    },
    {
      question: "What do I get in the report?",
      answer: "A step-by-step breakdown of the 5 test phases with pass/fail status, screenshots of any issues, and specific recommendations for fixes.",
    },
    {
      question: "Can I use the bundle tests for multiple products?",
      answer: "Yes. The 5-test bundle can be used across different URLs or for retesting the same product after you make fixes.",
    },
    {
      question: "What if everything passes?",
      answer: "Great! You'll get confirmation that your first-customer flow is solid. Most tests catch at least 1-2 minor issues worth fixing.",
    },
  ];

  return (
    <section className="section-padding bg-white">
      <div className="max-w-3xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="font-display text-3xl sm:text-4xl font-bold text-navy-900 mb-4">
            Questions answered
          </h2>
        </div>

        <div className="space-y-3">
          {faqs.map((faq, index) => (
            <div key={index} className="border border-navy-100 rounded-xl overflow-hidden">
              <button
                type="button"
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="w-full flex items-center justify-between p-5 text-left hover:bg-navy-50 transition-colors"
              >
                <span className="font-semibold text-navy-900 pr-4">{faq.question}</span>
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className={`flex-shrink-0 text-muted transition-transform ${
                    openIndex === index ? 'rotate-180' : ''
                  }`}
                >
                  <polyline points="6 9 12 15 18 9" />
                </svg>
              </button>
              {openIndex === index && (
                <div className="px-5 pb-5">
                  <p className="text-muted leading-relaxed">{faq.answer}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
