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
        width="300"
        height="300"
        viewBox="0 0 166 207"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="h-full w-full text-[#6b57ff] opacity-40"
        role="img"
      >
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M81.1997 201.287C121.561 189.779 141.763 166.328 151.535 137.046C161.36 107.603 160.93 71.9314 159.643 36.3965L85.0792 6.04283L9.36818 33.4106C6.67041 68.8662 4.82377 104.493 13.4719 134.303C22.0728 163.95 41.3275 188.185 81.1997 201.287ZM58.0237 102.978C57.0931 102.01 56.5852 100.711 56.6119 99.3684C56.6386 98.0255 57.1976 96.7483 58.166 95.8176C59.1344 94.887 60.4328 94.3791 61.7756 94.4058C63.1185 94.4325 64.3957 94.9915 65.3264 95.9599L77.8731 109.016L120.628 67.9257C121.597 66.995 122.895 66.4872 124.238 66.5139C125.581 66.5405 126.858 67.0996 127.789 68.068C128.719 69.0364 129.227 70.3348 129.201 71.6776C129.174 73.0204 128.615 74.2977 127.647 75.2283L81.2397 119.827C80.2713 120.757 78.9729 121.265 77.6301 121.239C76.2872 121.212 75.01 120.653 74.0793 119.685L58.0237 102.978Z"
          fill="currentColor"
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
        width="300"
        height="300"
        viewBox="0 0 200 200"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="h-full w-full text-[#6b57ff] opacity-40"
        role="img"
      >
        <path
          d="M195.918 165.213C195.792 166.329 195.367 167.39 194.687 168.285L182.272 184.218C181.939 184.634 181.551 185.004 181.119 185.317C180.229 186.01 179.164 186.444 178.042 186.572C177.816 186.572 177.6 186.615 177.374 186.615C175.926 186.61 174.526 186.102 173.412 185.179L81.1504 108.967L69.2037 124.294C71.0008 126.379 72.1601 128.936 72.5437 131.66C72.9272 134.384 72.5189 137.16 71.3673 139.659C70.2156 142.158 68.3692 144.274 66.0475 145.756C63.7259 147.237 61.0268 148.022 58.2713 148.016C55.0791 148.023 51.9771 146.96 49.463 144.996L9.5829 114.039C6.9116 111.981 5.05216 109.049 4.3313 105.759C3.61044 102.469 4.07428 99.0297 5.64132 96.0468C7.20836 93.0639 9.77833 90.7276 12.8997 89.4486C16.0211 88.1696 19.4941 88.0296 22.7087 89.0532L64.2013 35.8713C62.4222 33.014 61.7081 29.6224 62.1843 26.2918C62.6605 22.9613 64.2967 19.9046 66.8056 17.6583C69.3144 15.4119 72.5357 14.1195 75.9041 14.0079C79.2724 13.8962 82.5725 14.9725 85.2251 17.0477L125.105 48.0049C127.919 50.1884 129.82 53.3376 130.439 56.8414C131.058 60.3451 130.351 63.9535 128.456 66.9663C126.56 69.9791 123.611 72.1814 120.18 73.1459C116.749 74.1103 113.082 73.7681 109.89 72.1856L96.773 89.0186L193.491 159.509C194.16 159.999 194.724 160.617 195.15 161.328C195.575 162.038 195.855 162.827 195.97 163.646C196.023 164.168 196.005 164.695 195.918 165.213Z"
          fill="currentColor"
        />
      </svg>
    ),
  },
  {
    icon: <Building className="h-4 w-4" />,
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
    icon: <Users className="h-4 w-4" />,
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
    icon: <Globe className="h-4 w-4" />,
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
          d="M96.4583 6H32.125C25.7267 6 19.5904 8.54173 15.066 13.066C10.5417 17.5904 8 23.7267 8 30.125L8 199H120.583V30.125C120.583 23.7267 118.042 17.5904 113.517 13.066C108.993 8.54173 102.857 6 96.4583 6ZM56.25 158.792H32.125V142.708H56.25V158.792ZM56.25 126.625H32.125V110.542H56.25V126.625ZM56.25 94.4583H32.125V78.375H56.25V94.4583ZM56.25 62.2917H32.125V46.2083H56.25V62.2917ZM96.4583 158.792H72.3333V142.708H96.4583V158.792ZM96.4583 126.625H72.3333V110.542H96.4583V126.625ZM96.4583 94.4583H72.3333V78.375H96.4583V94.4583ZM96.4583 62.2917H72.3333V46.2083H96.4583V62.2917ZM176.875 46.2083H136.667V199H201V70.3333C201 63.935 198.458 57.7987 193.934 53.2744C189.41 48.7501 183.273 46.2083 176.875 46.2083ZM176.875 158.792H160.792V142.708H176.875V158.792ZM176.875 126.625H160.792V110.542H176.875V126.625ZM176.875 94.4583H160.792V78.375H176.875V94.4583Z"
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

    {title !== "Global Organizations" && (
      <div>
        {title === "Security Teams" && svgicon && (
          <div
            className="absolute top-2 right-2 size-20 md:size-20"
            style={{ transform: "scale(1)" }}
          >
            {svgicon}
          </div>
        )}
        {title === "Compliance & Legal" && svgicon && (
          <div
            className="absolute top-2 right-2 size-22 md:size-24"
            style={{ transform: "scale(1) rotate(16deg)" }}
          >
            {svgicon}
          </div>
        )}
        {title === "HR Departments" && svgicon && (
          <div
            className="absolute top-2 right-2 size-22 md:size-24"
            style={{ transform: "scale(1)" }}
          >
            {svgicon}
          </div>
        )}
        {title === "Enterprises" && svgicon && (
          <div
            className="absolute top-2 right-2 size-18 md:size-20"
            style={{ transform: "scale(1)" }}
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
