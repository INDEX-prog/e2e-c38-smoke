"use client";

import { useState } from "react";

interface FAQItem {
  question: string;
  answer: string;
}

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqs: FAQItem[] = [
    {
      question: "How long does a smoke test take?",
      answer:
        "5 minutes from submission to results. Our automated system runs through your entire first-customer flow immediately after you submit.",
    },
    {
      question: "What exactly do you test?",
      answer:
        "We simulate a real first customer: landing page load, signup/registration flow, payment processing (including Stripe webhooks), and confirmation/post-purchase experience. Each step is tested on desktop and mobile.",
    },
    {
      question: "Can I test a staging environment?",
      answer:
        "Yes, absolutely. In fact, we recommend testing staging first. Just make sure your staging URL is publicly accessible (or send us temporary credentials).",
    },
    {
      question: "What's the difference between single and bundle?",
      answer:
        "Single is one test, one URL, one time — perfect for a final pre-launch check. The 5-test bundle gives you 2 weeks of access to run tests as you fix issues, ideal for iterating before a big launch.",
    },
    {
      question: "Do you support test mode Stripe keys?",
      answer:
        "Yes. We can run through your payment flow using Stripe test mode. We'll use test card numbers and verify the entire webhook chain works correctly.",
    },
    {
      question: "What if my test passes but something still breaks?",
      answer:
        "We test the most common failure points based on thousands of launches. If something slips through, we'll run a free follow-up test to diagnose the issue.",
    },
  ];

  const toggleFAQ = (index: number): void => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="py-20">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="font-display font-bold text-navy-900 text-3xl sm:text-4xl mb-4">
            Questions before you test
          </h2>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="border border-navy-100 rounded-xl overflow-hidden"
            >
              <button
                type="button"
                onClick={() => toggleFAQ(index)}
                className="w-full flex items-center justify-between p-5 text-left bg-white hover:bg-navy-50/50 transition-colors"
                aria-expanded={openIndex === index}
              >
                <span className="font-semibold text-navy-900 pr-4">
                  {faq.question}
                </span>
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  className={`shrink-0 text-muted transition-transform ${
                    openIndex === index ? "rotate-180" : ""
                  }`}
                >
                  <path d="M6 9l6 6 6-6" />
                </svg>
              </button>
              {openIndex === index && (
                <div className="px-5 pb-5 bg-white">
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
