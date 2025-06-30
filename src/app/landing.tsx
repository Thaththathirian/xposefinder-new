'use client';

import dynamic from 'next/dynamic';
import { useState, useEffect } from 'react';

// Load HeroSection with immediate priority
const HeroSection = dynamic(() => import('@/components/blocks/hero-section-1').then(m => m.HeroSection), { 
  ssr: true,
  loading: () => (
    <div className="min-h-screen flex items-center justify-center bg-background">
      <div className="text-center">
        <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-primary mx-auto mb-4"></div>
        <p className="text-muted-foreground">Loading Xposefinder...</p>
      </div>
    </div>
  )
});

// Load other components progressively with loading states
const HowItWorks = dynamic(() => import('@/components/blocks/how-it-works').then(m => m.HowItWorks), { 
  ssr: false,
  loading: () => (
    <div className="py-20 flex items-center justify-center">
      <div className="animate-pulse bg-muted/20 rounded-lg w-full max-w-6xl h-96 mx-4"></div>
    </div>
  )
});

const KeyFeatures = dynamic(() => import('@/components/blocks/key-features').then(m => m.KeyFeatures), { 
  ssr: false,
  loading: () => (
    <div className="py-20 flex items-center justify-center">
      <div className="animate-pulse bg-muted/20 rounded-lg w-full max-w-6xl h-96 mx-4"></div>
    </div>
  )
});

const UseCases = dynamic(() => import('@/components/blocks/use-cases').then(m => m.UseCases), { 
  ssr: false,
  loading: () => (
    <div className="py-20 flex items-center justify-center">
      <div className="animate-pulse bg-muted/20 rounded-lg w-full max-w-6xl h-96 mx-4"></div>
    </div>
  )
});

const Faq = dynamic(() => import('@/components/blocks/faq').then(m => m.Faq), { 
  ssr: false,
  loading: () => (
    <div className="py-20 flex items-center justify-center">
      <div className="animate-pulse bg-muted/20 rounded-lg w-full max-w-6xl h-96 mx-4"></div>
    </div>
  )
});

const ContactForm = dynamic(() => import('@/components/ui/contact-form').then(m => m.ContactForm), { 
  ssr: false,
  loading: () => (
    <div className="py-20 flex items-center justify-center">
      <div className="animate-pulse bg-muted/20 rounded-lg w-full max-w-2xl h-96 mx-4"></div>
    </div>
  )
});

const Footer = dynamic(() => import('@/components/ui/footer-section'), { 
  ssr: false,
  loading: () => (
    <div className="h-48 bg-muted/10 animate-pulse"></div>
  )
});

export default function LandingPage() {
  const [heroLoaded, setHeroLoaded] = useState(false);
  const [componentsVisible, setComponentsVisible] = useState({
    howItWorks: false,
    keyFeatures: false,
    useCases: false,
    faq: false,
    contactForm: false,
    footer: false
  });

  useEffect(() => {
    // Mark hero as loaded immediately to prevent loading state flashing
    const heroTimer = setTimeout(() => {
      setHeroLoaded(true);
    }, 50);

    // Progressively load other components with staggered delays
    const timers = [
      setTimeout(() => setComponentsVisible(prev => ({ ...prev, howItWorks: true })), 200),
      setTimeout(() => setComponentsVisible(prev => ({ ...prev, keyFeatures: true })), 400),
      setTimeout(() => setComponentsVisible(prev => ({ ...prev, useCases: true })), 600),
      setTimeout(() => setComponentsVisible(prev => ({ ...prev, faq: true })), 800),
      setTimeout(() => setComponentsVisible(prev => ({ ...prev, contactForm: true })), 1000),
      setTimeout(() => setComponentsVisible(prev => ({ ...prev, footer: true })), 1200),
    ];

    return () => {
      clearTimeout(heroTimer);
      timers.forEach(timer => clearTimeout(timer));
    };
  }, []);

  return (
    <div className="flex flex-col min-h-screen">
      <main className="flex-grow">
        {/* Hero Section loads first with highest priority */}
        <HeroSection />
        
        {/* Other sections load progressively after hero */}
        {heroLoaded && componentsVisible.howItWorks && <HowItWorks />}
        {heroLoaded && componentsVisible.keyFeatures && <KeyFeatures />}
        {heroLoaded && componentsVisible.useCases && <UseCases />}
        {heroLoaded && componentsVisible.faq && <Faq />}
        {heroLoaded && componentsVisible.contactForm && <ContactForm />}
      </main>
      
      {/* Footer loads last */}
      {heroLoaded && componentsVisible.footer && <Footer />}
    </div>
  );
}