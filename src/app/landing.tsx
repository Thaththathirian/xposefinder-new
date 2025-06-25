'use client';

import { HeroSection } from '@/components/blocks/hero-section-1';
import { HowItWorks } from '@/components/blocks/how-it-works';
import { KeyFeatures } from '@/components/blocks/key-features';
import { UseCases } from '@/components/blocks/use-cases';
import { Faq } from '@/components/blocks/faq';
import Footer from '@/components/ui/footer-section';
import { ContactForm } from '@/components/ui/contact-form';

export default function LandingPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <main className="flex-grow">
        <HeroSection />
        <HowItWorks />
        <KeyFeatures />
        <UseCases />
        <Faq />
        <ContactForm />
      </main>
      <Footer />
    </div>
  );
} 