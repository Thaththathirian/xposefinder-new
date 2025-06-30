"use client";

import { ScanSearch, ShieldAlert, Wrench } from "lucide-react";
import { EvervaultCard, Icon } from "@/components/ui/evervault-card";
import { useEffect, useState } from "react";

const steps = [
  {
    icon: <ScanSearch className="h-8 w-8 text-primary" />,
    title: "Search",
    description: "Enter your domain or email to scan billions of records instantly.",
    area: "md:[grid-area:1/1/2/5]",
  },
  {
    icon: <ShieldAlert className="h-8 w-8 text-primary" />,
    title: "Detect",
    description: "Get instant alerts about any exposed data with detailed breach information.",
    area: "md:[grid-area:1/5/2/9]",
  },
  {
    icon: <Wrench className="h-8 w-8 text-primary" />,
    title: "Fix",
    description: "Take immediate action with our automated remediation tools.",
    area: "md:[grid-area:1/9/2/13]",
  },
];

export function HowItWorks() {
  const [isDesktop, setIsDesktop] = useState(false);
  const [reduceMotion, setReduceMotion] = useState(false);
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    // Immediate loading state to prevent flashing
    setIsLoaded(true);
    
    setIsDesktop(window.innerWidth >= 1024);
    setReduceMotion(window.matchMedia('(prefers-reduced-motion: reduce)').matches);
    const handleResize = () => setIsDesktop(window.innerWidth >= 1024);
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  if (!isLoaded) {
    return (
      <div className="py-20 flex items-center justify-center">
        <div className="animate-pulse bg-muted/20 rounded-lg w-full max-w-6xl h-96 mx-4"></div>
      </div>
    );
  }

  return (
    <section id="how-xposefinder-works" className="scroll-mt-20 relative py-20 bg-gradient-to-br from-background via-secondary/20 to-background overflow-hidden">
      {/* Background Effects - Only on desktop and if not reduced motion */}
      {isDesktop && !reduceMotion && (
        <div className="absolute inset-0">
          <div 
            className="absolute inset-0 bg-gradient-to-br from-primary/5 via-secondary/5 to-accent/5"
            style={{ backgroundSize: '400% 400%' }}
          />
          <div
            className="absolute top-1/4 left-1/6 w-64 h-64 bg-primary/10 rounded-full blur-3xl"
          />
          <div
            className="absolute bottom-1/4 right-1/6 w-48 h-48 bg-accent/10 rounded-full blur-3xl"
          />
        </div>
      )}
      <div className="relative z-10 container mx-auto px-4">
        <div className="mb-12 text-center">
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-6 tracking-tight">
            <span className="text-foreground">How</span> <span className="text-primary">Xposefinder Works</span>
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">
            <span className="text-xl text-muted-foreground">Our powerful platform makes it easy to find and fix data exposures before they become problems.</span>
          </p>
        </div>
        <div className="flex flex-col md:flex-row justify-center items-center gap-12 mb-12">
          {steps.map((step, index) => (
            <div
              key={index}
              className="relative flex flex-col items-center justify-center border border-black/[0.2] dark:border-white/[0.2] max-w-xs w-full p-6 h-[26rem] bg-transparent"
            >
              {/* Corner icons */}
              <Icon className="absolute h-6 w-6 -top-3 -left-3 dark:text-white text-black" />
              <Icon className="absolute h-6 w-6 -bottom-3 -left-3 dark:text-white text-black" />
              <Icon className="absolute h-6 w-6 -top-3 -right-3 dark:text-white text-black" />
              <Icon className="absolute h-6 w-6 -bottom-3 -right-3 dark:text-white text-black" />

              {/* Card title in EvervaultCard */}
              <EvervaultCard text={
                <div className="flex flex-col items-center justify-center gap-4 py-6">
                  <div>{step.icon}</div>
                  <h3 className="text-xl md:text-2xl font-bold text-center text-foreground">{step.title}</h3>
                </div>
              } />
              {/* Description */}
              <h2 className="dark:text-white text-black mt-2 text-center text-base font-light">
                {step.description}
              </h2>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}