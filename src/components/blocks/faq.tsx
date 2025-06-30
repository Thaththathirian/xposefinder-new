"use client";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
// import { cn } from "@/lib/utils";
import { useEffect, useState } from "react";

const faqs = [
  {
    question: "What makes Xposefinder different from other security tools?",
    answer: "Xposefinder stands out with its real-time scanning capabilities, comprehensive breach database, and advanced matching algorithms. We provide actionable insights with detailed source information and integrate seamlessly with existing security workflows."
  },
  {
    question: "What can I search for?",
    answer: "You can search for domains (e.g., company.com) to find all associated email breaches, or search for individual email addresses. Our scans cover billions of records from public and dark web sources."
  },
  {
    question: "How accurate are the results?",
    answer: "Our platform has a 99.9% accuracy rate. We use automated verification and custom matching rules to ensure that you only get alerts for verified exposures, eliminating false positives."
  },
  {
    question: "How do I get started?",
    answer: "Getting started is easy! Simply sign up for a demo or schedule a call with our team. We'll walk you through the platform and help you get set up in minutes."
  },
  {
    question: "Do you offer API access?",
    answer: "Yes, we offer a comprehensive API that allows you to integrate Xposefinder's capabilities into your own applications and security workflows. Check our documentation for more details."
  },
  {
    question: "What kind of support do you provide?",
    answer: "We offer 24/7 premium support via email, chat, and phone. Our dedicated security experts are always available to help you with any questions or issues."
  },
  {
    question: "How do you handle data privacy?",
    answer: "Data privacy is our top priority. We use end-to-end encryption and adhere to strict data sovereignty policies. Your search queries and data are always confidential."
  },
  {
    question: "Can Xposefinder integrate with our existing tools?",
    answer: "Absolutely. Xposefinder is designed to integrate with popular security tools and platforms, including SIEMs, SOARs, and ticketing systems, to streamline your remediation process."
  },
];

export function Faq() {
  const [isDesktop, setIsDesktop] = useState(false);
  const [reduceMotion, setReduceMotion] = useState(false);
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    // Immediate loading to prevent flashing
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
        <div className="animate-pulse bg-muted/20 rounded-lg w-full max-w-3xl h-96 mx-4"></div>
      </div>
    );
  }

  return (
    <section id="faq" className="py-20 scroll-mt-20">
      <div className="container mx-auto px-4">
        <div className="mb-12 text-center">
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-6 tracking-tight">
            <span className="text-foreground">Frequently</span> <span className="text-primary">Asked Questions</span>
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">
            <span className="text-xl text-muted-foreground">Find answers to the most common questions about Xposefinder.</span>
          </p>
        </div>
        {/* Background effects only on desktop and if not reduced motion */}
        {/* {isDesktop && !reduceMotion && <BackgroundEffectComponent />} */}
        <div className="mx-auto max-w-3xl">
          <Accordion type="single" collapsible className="w-full">
            {faqs.map((faq, index) => (
              <AccordionItem key={index} value={`item-${index}`}>
                <AccordionTrigger>{faq.question}</AccordionTrigger>
                <AccordionContent>{faq.answer}</AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
}