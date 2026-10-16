"use client";

import { useEffect, useState } from "react";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import HowItWorks from "@/components/HowItWorks";
import WhatWeCatch from "@/components/WhatWeCatch";
import IntakeForm from "@/components/IntakeForm";
import Testimonials from "@/components/Testimonials";
import FAQ from "@/components/FAQ";
import CTABanner from "@/components/CTABanner";
import Footer from "@/components/Footer";

interface SmokeTest {
  id: number;
  business_type: string;
  intake_url: string;
  pain_point: string | null;
  status: string;
  created_at: string;
}

interface ApiResponse {
  success: boolean;
  tests: SmokeTest[];
}

export default function Home() {
  const [tests, setTests] = useState<SmokeTest[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(true);

  useEffect(() => {
    const fetchTests = async (): Promise<void> => {
      try {
        const response = await fetch("/api/data");
        const data: ApiResponse = await response.json();
        if (data.success) {
          setTests(data.tests);
        }
      } catch (error) {
        console.error("Failed to fetch tests:", error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchTests();
  }, []);

  return (
    <main className="min-h-screen bg-background">
      <Header />
      <Hero />
      <HowItWorks />
      <WhatWeCatch />
      <Testimonials />
      <IntakeForm />
      <FAQ />
      <CTABanner />
      <Footer />

      {/* Hidden debug: show test count for verification */}
      {!isLoading && tests.length > 0 && (
        <div className="hidden">
          Tests loaded: {tests.length}
        </div>
      )}
    </main>
  );
}
