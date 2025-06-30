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
import React, { useEffect, useState } from "react";

// Load CobeGlobe with better loading state
const CobeGlobe = dynamic(() => import("@/components/ui/cobe-globe"), {
  ssr: false,
  loading: () => (
    <div className="absolute right-0 -bottom-10 md:-bottom-10" 
         style={{
           width: "100%",
           maxWidth: "620px", 
           height: "320px",
           transform: "translateX(50%)",
           pointerEvents: "none",
           zIndex: 0,
         }}
    >
      <div className="w-full h-full bg-gradient-to-r from-primary/10 to-accent/10 rounded-full animate-pulse" />
    </div>
  )
});

const useCases = [
  {
    icon: <ShieldHalf className="h-4 w-4 text-white" />,
    title: "Security Teams",
    description:
      "Get instant visibility into employee and corporate data leaks.",
    area: "md:[grid-area:1/1/2/7] xl:[grid-area:1/1/2/5]",
    svgicon: (
      <svg width="192" height="201" viewBox="0 0 192 201" fill="none" xmlns="http://www.w3.org/2000/svg" className="h-full w-full text-[#6b57ff] opacity-40" role="img">
        <path fillRule="evenodd" clipRule="evenodd" d="M94.2034 0C126.832 20.6813 156.308 30.4656 181.606 28.1526C186.024 117.51 153.023 170.282 94.5415 192.306C38.0659 171.692 4.66109 121.191 7.13859 26.7973C36.8358 28.3513 65.9711 21.9317 94.2034 0ZM71.8933 88.4343H74.1439V83.2213C74.1439 77.4481 76.4195 72.1866 80.0865 68.3633C83.7816 64.5103 88.8853 62.1175 94.507 62.1175C100.129 62.1175 105.234 64.5103 108.928 68.3633C112.595 72.1866 114.87 77.4481 114.87 83.2213V88.4343H117.121C118.947 88.4343 120.443 89.9289 120.443 91.7568V126.866C120.443 128.694 118.947 130.188 117.121 130.188H71.8933C70.0653 130.188 68.5707 128.694 68.5707 126.866V91.7568C68.5691 89.9289 70.0653 88.4343 71.8933 88.4343ZM91.7791 111.562L88.1935 120.952H100.817L97.4963 111.433C99.6045 110.349 101.046 108.152 101.046 105.618C101.046 102.006 98.1176 99.0778 94.5055 99.0778C90.8933 99.0778 87.9666 102.006 87.9666 105.618C87.9666 108.255 89.5285 110.527 91.7791 111.562ZM80.4355 88.4343H108.577V83.2213C108.577 79.1164 106.979 75.398 104.405 72.7125C101.858 70.0567 98.354 68.4072 94.5055 68.4072C90.6585 68.4072 87.1528 70.0567 84.608 72.7125C82.0319 75.398 80.4355 79.1164 80.4355 83.2213V88.4343Z" fill="currentColor"/>
      </svg>
    ),
  },
  {
    icon: <Gavel className="h-4 w-4 text-white" />,
    title: "Compliance & Legal",
    description:
      "Demonstrate breach awareness and remediation actions for audits.",
    area: "md:[grid-area:1/7/2/13] xl:[grid-area:2/1/3/5]",
    svgicon: (
      <svg width="300" height="300" viewBox="0 0 300 300" fill="none" xmlns="http://www.w3.org/2000/svg" className="h-full w-full text-[#6b57ff] opacity-40" role="img">
        <path d="M230 180C196.277 180 170 206.277 170 240C170 273.721 196.277 300 230 300C263.723 300 290 273.721 290 240C290 206.277 263.723 180 230 180ZM266.869 225.868L228.202 264.535C226.226 266.512 223.947 267 221.667 267C219.388 267 217.109 266.512 215.132 264.535L194.799 244.202C191.846 241.249 191.846 236.084 194.799 233.131C197.752 230.178 202.916 230.178 205.869 233.131L221.667 248.929L261.799 208.798C264.752 205.845 269.916 205.845 272.869 208.798C275.822 211.751 275.822 216.915 272.869 219.868Z" fill="currentColor"/>
        <path d="M221.962 6H37.7063C22.5517 6 10.334 18.2177 10.334 33.3665V257.367C10.334 272.481 22.5517 284.666 37.7063 284.666H162.351C155.008 272.346 151.536 258.829 151.536 243.712C151.536 202.162 185.984 168.803 230.642 168.803C236.651 168.803 242.593 169.269 248.334 170.2V33.3665C248.334 18.2177 236.117 6 221.962 6ZM119.153 234.394H68.7489C64.9826 234.394 62.7382 232.158 62.7382 229.403C62.7382 226.647 64.9826 224.412 68.7489 224.412H119.153C122.919 224.412 125.164 226.647 125.164 229.403C125.164 232.158 122.919 234.394 119.153 234.394ZM119.153 193.776H68.7489C64.9826 193.776 62.7382 191.54 62.7382 188.785C62.7382 186.029 64.9826 183.794 68.7489 183.794H119.153C122.919 183.794 125.164 186.029 125.164 188.785C125.164 191.54 122.919 193.776 119.153 193.776ZM190.919 153.157H68.7489C64.9826 153.157 62.7382 150.922 62.7382 148.166C62.7382 145.411 64.9826 143.176 68.7489 143.176H190.919C194.685 143.176 196.93 145.411 196.93 148.166C196.93 150.922 194.685 153.157 190.919 153.157ZM190.919 112.539H68.7489C64.9826 112.539 62.7382 110.304 62.7382 107.548C62.7382 104.793 64.9826 102.557 68.7489 102.557H190.919C194.685 102.557 196.93 104.793 196.93 107.548C196.93 110.304 194.685 112.539 190.919 112.539ZM190.919 71.921H68.7489C64.9826 71.921 62.7382 69.6855 62.7382 66.9301C62.7382 64.1748 64.9826 61.9392 68.7489 61.9392H190.919C194.685 61.9392 196.30 64.1748 196.93 66.9301C196.93 69.6855 194.685 71.921 190.919 71.921Z" fill="currentColor"/>
      </svg>
    ),
  },
  {
    icon: <Globe className="h-4 w-4 text-white" />,
    title: "Global Organizations",
    description:
      "Manage data security across multiple regions and jurisdictions.",
    area: "md:[grid-area:2/1/3/7] xl:[grid-area:1/5/3/8]",
    svgicon: (
      <svg
        width="300"
        height="300"
        viewBox="0 0 208 206"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="h-full w-full text-[#6b57ff] opacity-40"
        role="img"
      >
        <path
          d="M96.4583 6H32.125C25.7267 6 19.5904 8.54173 15.066 13.066C10.5417 17.5904 8 23.7267 8 30.125L8 199H120.583V30.125C120.583 23.7267 118.042 17.5904 113.517 13.066C108.993 8.54173 102.857 6 96.4583 6ZM56.25 158.792H32.125V142.708H56.25V158.792ZM56.25 126.625H32.125V110.542H56.25V126.625ZM56.25 94.4583H32.125V78.375H56.25V94.4583ZM56.25 62.2917H32.125V46.2083H56.25V62.2917ZM96.4583 158.792H72.3333V142.708H96.4583V158.792ZM96.4583 126.625H72.3333V110.542H96.4583V126.625ZM96.4583 94.4583H72.3333V78.375H96.4583V94.4583ZM96.4583 62.2917H72.3333V46.2083H96.4583V62.2917ZM176.875 46.2083H136.667V199H201V70.3333C201 63.935 198.458 57.7987 193.934 53.2744C189.41 48.7501 183.273 46.2083 176.875 46.2083ZM176.875 158.792H160.792V142.708H176.875V158.792ZM176.875 126.625H160.792V110.542H176.875V126.625ZM176.875 94.4583H160.792V78.375H176.875V94.4583Z"
          fill="currentColor"
        />
      </svg>
    ),
  },
  {
    icon: <Users className="h-4 w-4 text-white" />,
    title: "HR Departments",
    description: "Protect employee data and maintain workforce security.",
    area: "md:[grid-area:2/7/3/13] xl:[grid-area:1/8/2/13]",
    svgicon: (
      <svg
        width="300"
        height="300"
        viewBox="0 0 330 196"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="h-full w-full text-[#6b57ff] opacity-40"
        role="img"
      >
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M231.076 44.4547C230.594 59.8804 242.714 72.7737 258.151 73.2559C273.587 73.7381 286.489 61.6264 286.971 46.2008C287.452 30.7751 275.332 17.8818 259.896 17.3996C244.459 16.9174 231.558 29.0291 231.076 44.4547ZM164.214 90.6976C129.413 90.1322 99.714 115.292 93.7382 148.715C92.5412 155.411 95.1007 161.787 100.606 165.801C118.81 179.075 146.075 184.848 161.258 185.322C176.44 185.797 204.02 181.737 223.01 169.625C228.747 165.969 231.707 159.758 230.931 153C227.052 119.276 198.989 92.3127 164.214 90.6976ZM133.181 45.8526C132.622 63.7365 146.675 78.6855 164.571 79.2446C182.468 79.8036 197.426 65.7609 197.985 47.877C198.544 29.9931 184.491 15.0441 166.594 14.485C148.698 13.926 133.74 27.9687 133.181 45.8526ZM71.2316 76.209C89.521 77.0552 105.658 86.0341 116.23 99.5136C101.183 110.966 90.3196 127.83 86.8061 147.476C86.2587 150.547 86.2905 153.594 86.8489 156.495C79.9359 157.583 73.5667 157.977 68.6892 157.824C55.593 157.415 32.0707 152.436 16.3704 140.982C11.6244 137.52 9.41849 132.022 10.4527 126.245C15.6075 97.4209 41.2191 75.7226 71.2387 76.2092L71.2316 76.209ZM257.876 82.0394C287.868 83.4275 312.075 106.689 315.421 135.771C316.092 141.602 313.541 146.951 308.595 150.11C292.211 160.555 268.423 164.064 255.327 163.654C250.456 163.502 244.145 162.72 237.328 161.203C238.066 158.335 238.288 155.296 237.933 152.197C235.653 132.356 225.85 114.839 211.533 102.47C222.925 89.6903 239.584 81.75 257.876 82.0464L257.876 82.0394ZM44.4311 38.6243C43.9492 54.0499 56.0698 66.9433 71.506 67.4255C86.9423 67.9077 99.8439 55.796 100.326 40.3703C100.808 24.9447 88.6871 12.0513 73.2509 11.5691C57.8146 11.0869 44.9129 23.1986 44.4311 38.6243Z"
          fill="currentColor"
        />
      </svg>
    ),
  },
  {
    icon: <Building className="h-4 w-4 text-white" />,
    title: "Enterprises",
    description: "Monitor exposures affecting your domain and employee assets.",
    area: "md:[grid-area:3/1/4/13] xl:[grid-area:2/8/3/13]",
    svgicon: (
      <svg
        width="300"
        height="300"
        viewBox="0 0 208 206"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="h-full w-full text-[#6b57ff] opacity-40"
        role="img"
      >
        <path
          d="M96.4583 6H32.125C25.7267 6 19.5904 8.54173 15.066 13.066C10.5417 17.5904 8 23.7267 8 30.125L8 199H120.583V30.125C120.583 23.7267 118.042 17.5904 113.517 13.066C108.993 8.54173 102.857 6 96.4583 6ZM56.25 158.792H32.125V142.708H56.25V158.792ZM56.25 126.625H32.125V110.542H56.25V126.625ZM56.25 94.4583H32.125V78.375H56.25V94.4583ZM56.25 62.2917H32.125V46.2083H56.25V62.2917ZM96.4583 158.792H72.3333V142.708H96.4583V158.792ZM96.4583 126.625H72.3333V110.542H96.4583V126.625ZM96.4583 94.4583H72.3333V78.375H96.4583V94.4583ZM96.4583 62.2917H72.3333V46.2083H96.4583V62.2917ZM176.875 46.2083H136.667V199H201V70.3333C201 63.935 198.458 57.7987 193.934 53.2744C189.410 48.7501 183.273 46.2083 176.875 46.2083ZM176.875 158.792H160.792V142.708H176.875V158.792ZM176.875 126.625H160.792V110.542H176.875V126.625ZM176.875 94.4583H160.792V78.375H176.875V94.4583Z"
          fill="currentColor"
        />
      </svg>
    ),
  },
  {
    icon: <Server className="h-4 w-4" />,
    title: "Data Centers",
    description: "Ensure comprehensive protection of stored data and systems.",
    area: "hidden",
    svgicon: null,
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
    {title === "Global Organizations" && (
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
            <CobeGlobe width={500} height={320} globeColor={[0.42,0.34,0.97]} />
          </div>
          <div className="hidden md:block lg:hidden">
            <CobeGlobe width={620} height={680} globeColor={[0.42,0.34,0.97]} />
          </div>
          <div className="hidden lg:block">
            <CobeGlobe width={400} height={450} globeColor={[0.42,0.34,0.97]} />
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

    {title !== "Global Organizations" && (
      <div>
        {title === "Security Teams" && svgicon && (
          <div className="absolute top-2 right-2 flex items-center justify-center size-16 md:size-20">
            {svgicon}
          </div>
        )}
        {title === "Compliance & Legal" && svgicon && (
          <div className="absolute top-2 right-2 flex items-center justify-center size-16 md:size-20">
            {svgicon}
          </div>
        )}
        {title === "HR Departments" && svgicon && (
          <div className="absolute top-2 right-2 flex items-center justify-center size-16 md:size-20">
            {svgicon}
          </div>
        )}
        {title === "Enterprises" && svgicon && (
          <div className="absolute top-2 right-2 flex items-center justify-center size-16 md:size-20">
            {svgicon}
          </div>
        )}
        {title === "Global Organizations" && svgicon && (
          <div className="absolute -top-8 -right-10 size-38">
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
        <div className="animate-pulse bg-muted/20 rounded-lg w-full max-w-6xl h-96 mx-4"></div>
      </div>
    );
  }

  return (
    <section id="use-cases" className="relative py-20 bg-gradient-to-br from-background via-secondary/20 to-background overflow-hidden scroll-mt-20">
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

const GridItem = ({
  area,
  icon,
  title,
  description,
  svgicon,
}: GridItemProps) => {
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