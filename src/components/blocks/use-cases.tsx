"use client";

import {
  ShieldHalf,
  Gavel,
  Building,
  Users,
  Globe,
  Server,
} from "lucide-react";
import dynamic from "next/dynamic";
import { GlowingEffect } from "@/components/ui/glowing-effect";
import { cn } from "@/lib/utils";
import React from "react";

const CobeGlobe = dynamic(() => import("@/components/ui/cobe-globe"), {
  ssr: false,
});

const useCases = [
  {
    icon: <ShieldHalf className="h-4 w-4" />,
    title: "Security Teams",
    description:
      "Get instant visibility into employee and corporate data leaks.",
    area: "md:[grid-area:1/1/2/7] xl:[grid-area:1/1/2/5]",
    svgicon: (
      <svg
        fill="none"
        viewBox="0 0 28 28"
        className="h-full w-full text-[#6b57ff] opacity-40"
        role="img"
      >
        <path
          fill="currentColor"
          d="M12 10a4 4 0 1 0 0-8a4 4 0 0 0 0 8m-6.5 3a2.5 2.5 0 1 0 0-5a2.5 2.5 0 0 0 0 5M21 10.5a2.5 2.5 0 1 1-5 0a2.5 2.5 0 0 1 5 0m-9 .5a5 5 0 0 1 5 5v6H7v-6a5 5 0 0 1 5-5m-7 5c0-.693.1-1.362.288-1.994l-.17.014A3.5 3.5 0 0 0 2 17.5V22h3zm17 6v-4.5a3.5 3.5 0 0 0-3.288-3.494c.187.632.288 1.301.288 1.994v6z"
        />
      </svg>
    ),
  },
  {
    icon: <Gavel className="h-4 w-4" />,
    title: "Compliance & Legal",
    description:
      "Demonstrate breach awareness and remediation actions for audits.",
    area: "md:[grid-area:1/7/2/13] xl:[grid-area:2/1/3/5]",
    svgicon: (
      <svg
        fill="none"
        viewBox="0 0 28 28"
        className="h-full w-full text-[#6b57ff] opacity-40"
        role="img"
      >
        <path 
          fill="currentColor" 
          d="m18.1 24.543l-9.204-5.19l3.199-5.61l9.206 5.187zm18.37 4.788l-15.552-8.76l-1.599 2.808l15.55 8.761zm1.888 1.065l-1.604 2.806l8.02 4.514l1.604-2.803zm-2.16 2.806c-.123.219-.459.271-.751.111c-.291-.164-.42-.475-.296-.697l1.875-3.285c.129-.223.465-.277.754-.111c.287.164.417.482.293.705zm11.832 1.799a2 2 0 0 0-1.011-.248l-2.051 3.592c.165.301.411.564.735.74c.904.512 2.041.217 2.538-.652l.526-.93c.498-.875.17-1.99-.737-2.502M22.191 17.849a.9.9 0 0 1-1.225.342l-8.056-4.542a.89.89 0 0 1-.339-1.223a.904.904 0 0 1 1.23-.334l8.054 4.536a.89.89 0 0 1 .336 1.221m1.129-1.972a.9.9 0 0 1-1.227.34l-8.059-4.541a.885.885 0 0 1-.337-1.217a.9.9 0 0 1 1.23-.341l8.056 4.537a.89.89 0 0 1 .337 1.222m-6.808 11.944a.907.907 0 0 1-1.229.334l-8.062-4.542a.894.894 0 0 1-.338-1.223a.91.91 0 0 1 1.229-.334l8.058 4.542a.9.9 0 0 1 .342 1.223m1.126-1.979a.9.9 0 0 1-1.234.335L8.348 21.64a.9.9 0 0 1-.339-1.223a.9.9 0 0 1 1.231-.335l8.055 4.537a.9.9 0 0 1 .343 1.223M4.119 33.921h14.204v1.633H4.119zm17.306 3.406a1.15 1.15 0 0 0-1.135-.963H2.156a1.15 1.15 0 0 0-1.135.963H1v2.674h20.446v-2.674z"
        />
      </svg>
    ),
  },
  {
    icon: <Building className="h-4 w-4" />,
    title: "Enterprises",
    description: "Monitor exposures affecting your domain and employee assets.",
    area: "md:[grid-area:2/1/3/7] xl:[grid-area:1/5/3/8]",
    svgicon: null
  },
  {
    icon: <Users className="h-4 w-4" />,
    title: "HR Departments",
    description: "Protect employee data and maintain workforce security.",
    area: "md:[grid-area:2/7/3/13] xl:[grid-area:1/8/2/13]",
    svgicon: null
  },
  {
    icon: <Globe className="h-4 w-4" />,
    title: "Global Organizations",
    description:
      "Manage data security across multiple regions and jurisdictions.",
    area: "md:[grid-area:3/1/4/13] xl:[grid-area:2/8/3/13]",
    svgicon: null
  },
  {
    icon: <Server className="h-4 w-4" />,
    title: "Data Centers",
    description: "Ensure comprehensive protection of stored data and systems.",
    area: "hidden",
    svgicon: null
  }, // Hide 6th card for 5-card layout
];

// Fixed interface to include svgicon
interface UseCaseCardProps {
  href: string;
  icon: React.ReactNode;
  title: string;
  description: React.ReactNode;
  svgicon?: React.ReactNode; // Made optional since some cards don't have icons
}

const UseCaseCard = ({
  icon,
  title,
  description,
  svgicon,
}: UseCaseCardProps) => (
  <div className="relative flex h-full flex-col justify-between gap-6 overflow-hidden rounded-xl border-[0.75px] bg-background p-6 shadow-sm dark:shadow-[0px_0px_27px_0px_rgba(45,45,45,0.3)] md:p-6">
    {title === "Enterprises" && (
      <div>
        <div
          className="absolute right-0 -bottom-10 md:-bottom-10"
          style={{
            width: "100%",
            maxWidth: "620px",
            height: "320px",
            transform: "translateX(50%)",
            pointerEvents: "none",
            zIndex: 0,
          }}
        >
          {/* Responsive Globe: smaller and more transparent on mobile */}
          <div className="block md:hidden">
            <CobeGlobe width={500} height={320} />
          </div>
          <div className="hidden md:block lg:hidden">
            <CobeGlobe width={620} height={680} />
          </div>
          <div className="hidden lg:block">
            <CobeGlobe width={400} height={450} />
          </div>
        </div>
        <div className="relative flex flex-1 flex-col justify-between gap-3">
          <div className="w-fit rounded-lg border-[0.75px] border-border bg-[#6b57ff] p-2">
            {icon}
          </div>
          <div className="space-y-3">
            <h3 className="pt-0.5 text-xl leading-[1.375rem] font-semibold font-sans tracking-[-0.04em] md:text-2xl md:leading-[1.875rem] text-balance text-foreground">
              {title}
            </h3>
            <h2 className="[&_b]:md:font-semibold [&_strong]:md:font-semibold font-sans text-sm leading-[1.125rem] md:text-base md:leading-[1.375rem] text-muted-foreground">
              {description}
            </h2>
          </div>
        </div>
      </div>
    )}

    {title !== "Enterprises" && (
      <div>
        {title === "Security Teams" && svgicon && (
          <div
            className="absolute -top-8 -right-10 size-38"
            style={{ transform: "scale(1) rotate(12deg)" }}
          >
            {svgicon}
          </div>
        )}
        {title === "Compliance & Legal" && svgicon && (
          <div
            className="absolute -top-4 -right-3 size-20"
            style={{ transform: "scale(1) rotate(16deg)" }}
          >
            {svgicon}
          </div>
        )}
        {title === "HR Departments" && svgicon && (
          <div
            className="absolute -top-8 -right-10 size-38"
            style={{ transform: "scale(1) rotate(12deg)" }}
          >
            {svgicon}
          </div>
        )}
        {title === "Global Organizations" && svgicon && (
          <div
            className="absolute -top-8 -right-10 size-38"
            style={{ transform: "scale(1) rotate(12deg)" }}
          >
            {svgicon}
          </div>
        )}
        <div className="relative flex flex-1 flex-col justify-between gap-3">
          <div className="w-fit rounded-lg border-[0.75px] border-border bg-[#6b57ff] p-2">
            {icon}
          </div>
          <div className="space-y-3">
            <h3 className="pt-0.5 text-xl leading-[1.375rem] font-semibold font-sans tracking-[-0.04em] md:text-2xl md:leading-[1.875rem] text-balance text-foreground">
              {title}
            </h3>
            <h2 className="[&_b]:md:font-semibold [&_strong]:md:font-semibold font-sans text-sm leading-[1.125rem] md:text-base md:leading-[1.375rem] text-muted-foreground">
              {description}
            </h2>
          </div>
        </div>
      </div>
    )}
  </div>
);

export function UseCases() {
  return (
    <section className="bg-muted/50 py-20">
      <div className="container mx-auto px-4">
        <div className="mb-12 text-center">
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-6 tracking-tight">
            <span className="text-foreground">Use</span>{" "}
            <span className="text-primary">Cases</span>
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">
            <span className="text-xl text-muted-foreground">
              See how different teams leverage Xposefinder to protect their
              organizations.
            </span>
          </p>
        </div>
        <ul className="grid grid-cols-1 grid-rows-none gap-4 md:grid-cols-12 md:grid-rows-3 lg:gap-4 xl:max-h-[34rem] xl:grid-rows-2">
          {useCases.map((useCase, index) =>
            useCase.area === "hidden" ? null : (
              <GridItem
                key={index}
                area={useCase.area}
                icon={useCase.icon}
                title={useCase.title}
                description={useCase.description}
                svgicon={useCase.svgicon}
              />
            )
          )}
        </ul>
      </div>
    </section>
  );
}

// Fixed interface to include svgicon
interface GridItemProps {
  area: string;
  icon: React.ReactNode;
  title: string;
  description: React.ReactNode;
  svgicon?: React.ReactNode; // Made optional
}

const GridItem = ({ area, icon, title, description, svgicon }: GridItemProps) => {
  return (
    <li className={cn("min-h-[14rem] list-none", area)}>
      <div className="relative h-full rounded-[1.25rem] border-[0.75px] border-border p-2 md:rounded-[1.5rem] md:p-3">
        <GlowingEffect
          spread={40}
          glow={true}
          disabled={false}
          proximity={64}
          inactiveZone={0.01}
          borderWidth={3}
        />
        <UseCaseCard
          href="https://discord.gg/expo"
          icon={icon}
          title={title}
          description={description}
          svgicon={svgicon}
        />
      </div>
    </li>
  );
};