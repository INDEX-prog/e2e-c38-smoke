import Header from '@/components/Header';
import Hero from '@/components/Hero';
import HowItWorks from '@/components/HowItWorks';
import ProblemSection from '@/components/ProblemSection';
import Pricing from '@/components/Pricing';
import IntakeForm from '@/components/IntakeForm';
import ResultsPreview from '@/components/ResultsPreview';
import Testimonials from '@/components/Testimonials';
import FAQ from '@/components/FAQ';
import Footer from '@/components/Footer';

export default function HomePage() {
  return (
    <main className="min-h-screen">
      <Header />
      <Hero />
      <HowItWorks />
      <ProblemSection />
      <ResultsPreview />
      <Pricing />
      <Testimonials />
      <IntakeForm />
      <FAQ />
      <Footer />
    </main>
  );
}
