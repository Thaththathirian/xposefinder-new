import React, { useRef, useEffect, useState } from "react";
import { motion } from "framer-motion";

interface GradientPathTraceProps {
  d: string;
  gradientId?: string;
  colors?: [string, string];
  duration?: number;
  strokeWidth?: number;
  svgProps?: React.SVGProps<SVGSVGElement>;
}

const GradientPathTrace: React.FC<GradientPathTraceProps> = ({
  d,
  gradientId = "trace-gradient",
  colors = ["#00A6F5", "#7f5af0"],
  duration = 1.2,
  strokeWidth = 3,
  svgProps = {},
}) => {
  const pathRef = useRef<SVGPathElement>(null);
  const [pathLength, setPathLength] = useState(0);

  useEffect(() => {
    if (pathRef.current) {
      setPathLength(pathRef.current.getTotalLength());
    }
  }, [d]);

  return (
    <svg width="100%" height="100%" viewBox="0 0 320 64" fill="none" {...svgProps}>
      <defs>
        <linearGradient id={gradientId} x1="0" y1="0" x2="320" y2="64" gradientUnits="userSpaceOnUse">
          <stop stopColor={colors[0]} />
          <stop offset="1" stopColor={colors[1]} />
        </linearGradient>
      </defs>
      <motion.path
        ref={pathRef}
        d={d}
        stroke={`url(#${gradientId})`}
        strokeWidth={strokeWidth}
        fill="none"
        initial={{ strokeDasharray: pathLength, strokeDashoffset: pathLength }}
        animate={{ strokeDashoffset: 0 }}
        transition={{ duration, ease: "easeInOut" }}
      />
    </svg>
  );
};

export default GradientPathTrace; 