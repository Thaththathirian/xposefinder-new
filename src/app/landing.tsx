'use client';

import dynamic from 'next/dynamic';

const HeroSection = dynamic(() => import('@/components/blocks/hero-section-1').then(m => m.HeroSection), { ssr: false });
const HowItWorks = dynamic(() => import('@/components/blocks/how-it-works').then(m => m.HowItWorks), { ssr: false });
const KeyFeatures = dynamic(() => import('@/components/blocks/key-features').then(m => m.KeyFeatures), { ssr: false });
const UseCases = dynamic(() => import('@/components/blocks/use-cases').then(m => m.UseCases), { ssr: false });
const Faq = dynamic(() => import('@/components/blocks/faq').then(m => m.Faq), { ssr: false });
const ContactForm = dynamic(() => import('@/components/ui/contact-form').then(m => m.ContactForm), { ssr: false });
const Footer = dynamic(() => import('@/components/ui/footer-section'), { ssr: false });

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