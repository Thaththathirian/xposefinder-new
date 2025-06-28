"use client";

import { BentoGrid, BentoItem } from "../ui/bento-grid";
import { 
  Target, 
  Eye, 
  LayoutDashboard, 
  ShieldCheck, 
  DatabaseZap,
  BellRing
} from "lucide-react";
import { useEffect, useState } from "react";

const features: BentoItem[] = [
  {
    icon: <Target className="h-6 w-6 text-primary" />,
    title: "Laser-Focused Accuracy",
    description: "",
    items: [
      "99.9% accuracy rate",
      "Real-time scanning",
      "Automated verification",
      "Custom matching rules"
    ],
    colSpan: 1,
  },
  {
    icon: <Eye className="h-6 w-6 text-primary" />,
    title: "Breach Source Transparency",
    description: "",
    items: [
      "Detailed breach timeline",
      "Source verification",
      "Impact assessment",
      "Risk scoring"
    ],
    colSpan: 1,
  },
  {
    icon: <LayoutDashboard className="h-6 w-6 text-primary" />,
    title: "Dashboard Actions",
    description: "",
    items: [
      "Custom workflows",
      "Team collaboration",
      "Audit trails",
      "Analytics dashboard"
    ],
    colSpan: 1,
  },
  {
    icon: <ShieldCheck className="h-6 w-6 text-primary" />,
    title: "Proactive Protection",
    description: "",
    items: [
      "24/7 monitoring",
      "Instant alerts",
      "Threat intelligence",
      "Predictive analysis"
    ],
    colSpan: 1
  },
  {
    icon: <DatabaseZap className="h-6 w-6 text-primary" />,
    title: "Enterprise Security",
    description: "",
    items: [
      "End-to-end encryption",
      "Access controls",
      "Data sovereignty",
      "Compliance ready"
    ],
    colSpan: 1,
  },
  {
    icon: <BellRing className="h-6 w-6 text-primary" />,
    title: "Smart Notifications",
    description: "",
    items: [
      "Custom triggers",
      "Multi-channel alerts",
      "Priority levels",
      "Smart grouping"
    ],
    colSpan: 1,
  },
];

export function KeyFeatures() {
  const [isDesktop, setIsDesktop] = useState(false);
  const [reduceMotion, setReduceMotion] = useState(false);
  useEffect(() => {
    setIsDesktop(window.innerWidth >= 1024);
    setReduceMotion(window.matchMedia('(prefers-reduced-motion: reduce)').matches);
    const handleResize = () => setIsDesktop(window.innerWidth >= 1024);
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);
  return (
    <section id="key-features" className="py-20 scroll-mt-20">
      <div className="container mx-auto px-4">
        <div className="mb-12 text-center">
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-6 tracking-tight">
            <span className="text-foreground">Key</span> <span className="text-primary">Features</span>
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">
            <span className="text-xl text-muted-foreground">Powerful tools to help you protect your data and respond to breaches effectively.</span>
          </p>
        </div>
        {/* If you have any background effects, render them only on desktop and if not reduced motion */}
        {/* {isDesktop && !reduceMotion && <BackgroundEffectComponent />} */}
        <BentoGrid items={features} />
      </div>
    </section>
  );
} 