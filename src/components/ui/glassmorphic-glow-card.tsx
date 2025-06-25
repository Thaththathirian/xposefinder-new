"use client";

import { cn } from "@/lib/utils";
import { GlowingEffect } from "./glowing-effect";

interface GlassmorphicGlowCardProps {
  children: React.ReactNode;
  className?: string;
}

export function GlassmorphicGlowCard({
  children,
  className,
}: GlassmorphicGlowCardProps) {
  return (
    <div
      className={cn(
        "relative rounded-2xl p-px group",
        "bg-white/10 dark:bg-black/10",
        "backdrop-blur-xl",
        className
      )}
    >
      <div className="absolute inset-0 rounded-2xl overflow-hidden">
        <GlowingEffect
          glow
          disabled={false}
          variant="default"
          className="group-hover:opacity-100"
        />
      </div>
      <div className="relative z-10 h-full rounded-[15px] p-6">
        {children}
      </div>
    </div>
  );
} 