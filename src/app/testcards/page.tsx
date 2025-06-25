"use client";

import dynamic from "next/dynamic";
import { motion } from "framer-motion";
// import { useEffect, useRef } from "react";
import React from "react";
import GradientPathTrace from "@/components/ui/gradient-path-trace";
import Image from "next/image";
const CobeGlobe = dynamic(() => import("@/components/ui/cobe-globe"), { ssr: false });

export default function TestCards() {
  return (
    <div className="preview flex min-h-[350px] w-full justify-center p-2 sm:p-10 items-center">
      <div className="mx-auto my-20 w-full max-w-7xl px-4 md:px-8">
        <div className="relative mx-auto flex w-fit items-center justify-center p-4">
          <div className="absolute inset-0 h-full w-full border border-neutral-200 dark:border-neutral-800" style={{ width: '100%', height: '100%', borderRadius: 0 }}>
            <div className="absolute -left-1 -top-1 h-2 w-2 bg-neutral-200 dark:bg-neutral-800" style={{ opacity: 1 }} />
            <div className="absolute -right-1 -top-1 h-2 w-2 bg-neutral-200 dark:bg-neutral-800" style={{ opacity: 1 }} />
            <div className="absolute -bottom-1 -left-1 h-2 w-2 bg-neutral-200 dark:bg-neutral-800" style={{ opacity: 1 }} />
            <div className="absolute -bottom-1 -right-1 h-2 w-2 bg-neutral-200 dark:bg-neutral-800" style={{ opacity: 1 }} />
          </div>
          <h2 className="text-bold text-neutral-8000 mx-auto w-fit text-center font-sans text-xl font-bold tracking-tight text-neutral-800 md:text-4xl dark:text-neutral-100">
            Deployments made easy
          </h2>
        </div>
        <p className="mx-auto mt-4 max-w-lg text-center text-sm text-neutral-600 dark:text-neutral-400">
          Deploy with ease, leave complexities to us.
        </p>
        <div className="cols-1 mt-20 grid gap-4 md:auto-rows-[25rem] md:grid-cols-5">
          {/* Card 1 */}
          <div className="group isolate overflow-hidden rounded-2xl bg-white shadow-[0_1px_1px_rgba(0,0,0,0.05),0_4px_6px_rgba(34,42,53,0.04),0_24px_68px_rgba(47,48,55,0.05),0_2px_3px_rgba(0,0,0,0.04)] dark:bg-neutral-900 flex flex-col justify-between md:col-span-3">
            <div className="relative h-full w-full overflow-hidden">
              <div className="relative flex h-full w-full items-center justify-center">
                <AnimatedCards />
              </div>
            </div>
            <div className="p-6 h-40">
              <h3 className="font-sans text-base font-medium tracking-tight text-neutral-700 dark:text-neutral-100">One click deploy</h3>
              <p className="mt-2 max-w-xs font-sans text-base font-normal tracking-tight text-neutral-500 dark:text-neutral-400">Deploy your app in seconds, with our one click deploy feature.</p>
            </div>
          </div>
          {/* Card 2 */}
          <div className="group isolate overflow-hidden rounded-2xl bg-white shadow-[0_1px_1px_rgba(0,0,0,0.05),0_4px_6px_rgba(34,42,53,0.04),0_24px_68px_rgba(47,48,55,0.05),0_2px_3px_rgba(0,0,0,0.04)] dark:bg-neutral-900 flex flex-col justify-between md:col-span-2">
            <div className="p-6 h-40">
              <h3 className="font-sans text-base font-medium tracking-tight text-neutral-700 dark:text-neutral-100">Intuitive workflow</h3>
              <p className="mt-2 max-w-xs font-sans text-base font-normal tracking-tight text-neutral-500 dark:text-neutral-400">With our intuitive workflow, you can easily manage your app without complex steps.</p>
            </div>
            <div className="relative h-full w-full overflow-hidden">
              <div className="ml-6 mt-2 h-full w-full rounded-lg border border-neutral-200 bg-neutral-100 p-4 dark:border-neutral-700 dark:bg-neutral-800">
                <Image  alt="Dashboard" loading="lazy" width="500" height="500" decoding="async" data-nimg="1" className="w-full rounded-lg object-cover" src="https://assets.aceternity.com/pro/dashboard.webp" />
              </div>
            </div>
          </div>
          {/* Card 3: Hosting over the edge with CobeGlobe */}
          <div className="group isolate overflow-hidden rounded-2xl bg-white shadow-[0_1px_1px_rgba(0,0,0,0.05),0_4px_6px_rgba(34,42,53,0.04),0_24px_68px_rgba(47,48,55,0.05),0_2px_3px_rgba(0,0,0,0.04)] dark:bg-neutral-900 flex flex-col justify-between md:col-span-2">
            <div className="p-6 h-40">
              <h3 className="font-sans text-base font-medium tracking-tight text-neutral-700 dark:text-neutral-100">Hosting over the edge</h3>
              <p className="mt-2 max-w-xs font-sans text-base font-normal tracking-tight text-neutral-500 dark:text-neutral-400">With our edge network, we host your website by going into each city by ourselves.</p>
            </div>
            <div className="relative h-full w-full overflow-hidden">
              <div
                className="absolute -bottom-10 right-0"
                style={{
                  width: 820,
                  height: 320,
                  transform: "translateX(50%)",
                }}
              >
                <CobeGlobe width={720} height={680} />
              </div>
            </div>
          </div>
          {/* Card 4 */}
          <div className="group isolate overflow-hidden rounded-2xl bg-white shadow-[0_1px_1px_rgba(0,0,0,0.05),0_4px_6px_rgba(34,42,53,0.04),0_24px_68px_rgba(47,48,55,0.05),0_2px_3px_rgba(0,0,0,0.04)] dark:bg-neutral-900 flex flex-col justify-between md:col-span-3">
            <div className="p-6 h-40">
              <h3 className="font-sans text-base font-medium tracking-tight text-neutral-700 dark:text-neutral-100">Running out of copy</h3>
              <p className="mt-2 max-w-xs font-sans text-base font-normal tracking-tight text-neutral-500 dark:text-neutral-400">You are running out of copy for your website, we can generate copy for you.</p>
            </div>
            <div className="relative h-full w-full overflow-hidden">
              <div className="ml-6 mt-2 h-full w-full rounded-lg border border-neutral-200 bg-neutral-100 p-4 dark:border-neutral-700 dark:bg-neutral-800">
                <Image alt="Dashboard" loading="lazy" width="500" height="500" decoding="async" data-nimg="1" className="w-full rounded-lg object-cover" src="https://assets.aceternity.com/pro/dashboard.webp" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

// AnimatedCards component for the "One click deploy" card
function AnimatedCards() {
  const cardData = [
    {
      key: "git",
      content: (
        <div className="flex flex-col items-start justify-center px-2 font-mono text-neutral-800 dark:text-neutral-300">
          <p className="bg-transparent text-[8px]">git add .</p>
          <p className="bg-transparent text-[8px]">git commit -m &quot;update&quot;</p>
          <p className="bg-transparent text-[8px]">git push</p>
        </div>
      ),
    },
    {
      key: "github",
      content: (
        <div className="flex items-center justify-center w-full h-full">
          <svg width="32" height="32" viewBox="0 0 20 20" fill="none" className="h-8 w-8 object-contain text-black dark:text-white">
            <g fill="currentColor">
              <path d="M10 0C4.477 0 0 4.477 0 10c0 4.418 2.865 8.166 6.839 9.489.5.092.682-.217.682-.483 0-.237-.009-.868-.014-1.703-2.782.604-3.369-1.342-3.369-1.342-.454-1.154-1.11-1.462-1.11-1.462-.908-.62.069-.608.069-.608 1.004.07 1.532 1.032 1.532 1.032.892 1.529 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.339-2.22-.253-4.555-1.11-4.555-4.943 0-1.091.39-1.984 1.029-2.683-.103-.253-.446-1.272.098-2.65 0 0 .84-.269 2.75 1.025A9.564 9.564 0 0 1 10 4.844c.85.004 1.705.115 2.504.337 1.909-1.294 2.748-1.025 2.748-1.025.546 1.378.202 2.397.1 2.65.64.699 1.028 1.592 1.028 2.683 0 3.842-2.337 4.687-4.565 4.936.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.749 0 .268.18.579.688.481C17.138 18.163 20 14.418 20 10c0-5.523-4.477-10-10-10z" />
            </g>
          </svg>
        </div>
      ),
    },
    {
      key: "aws",
      content: (
        <div className="flex flex-col items-center justify-center w-full h-full">
          <span className="text-xs font-bold text-yellow-500">aws</span>
          <span className="text-[10px] text-neutral-400">your site is live ✨</span>
        </div>
      ),
    },
  ];

  // For SVG tracing animation
  // const pathRef = useRef<SVGPathElement>(null);
  // const [pathLength, setPathLength] = React.useState(0);

  // useEffect(() => {
  //   if (pathRef.current) {
      
  //     setPathLength(pathRef.current.getTotalLength());
  //   }
  // }, []);

  return (
    <div className="relative z-30 mx-auto flex w-full max-w-lg flex-row items-center justify-center gap-4 p-8">
      {/* Animated gradient tracing SVG */}
      <div className="absolute left-0 top-1/2 -translate-y-1/2 w-full h-16 pointer-events-none" style={{ zIndex: 1 }}>
        <GradientPathTrace
          d="M 48 32 Q 80 0 160 32 Q 240 64 272 32"
          colors={["#00d4ff", "#7f5af0"]}
        />
      </div>
      {cardData.map((card, i) => (
        <motion.div
          key={card.key}
          initial={{ opacity: 0, y: 20, scale: 0.95 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ delay: 0.1 * i, duration: 0.5, type: "spring" }}
          whileHover={{ scale: 1.04, boxShadow: "0 4px 24px rgba(0,0,0,0.10)" }}
          className="relative flex h-14 w-32 items-center justify-center rounded-lg bg-gradient-to-b from-white to-white p-2 shadow-lg dark:from-neutral-800 dark:to-neutral-700"
          style={{ zIndex: 2 }}
        >
          {card.content}
        </motion.div>
      ))}
    </div>
  );
} 