"use client";
import { useEffect, useRef } from "react";
import createGlobe from "cobe";
import React from "react";

export default function CobeGlobe({
  width = 300,
  height = 300,
  className = "",
}: {
  width?: number;
  height?: number;
  className?: string;
}) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const phi = useRef(0);

  useEffect(() => {
    let globe: any;
    let widthDpr = width * window.devicePixelRatio;
    let heightDpr = height * window.devicePixelRatio;

    if (canvasRef.current) {
      globe = createGlobe(canvasRef.current, {
        devicePixelRatio: 2,
        width: widthDpr,
        height: heightDpr,
        phi: 0,
        theta: 0.3,
        dark: 1,
        diffuse: 1.2,
        mapSamples: 16000,
        mapBrightness: 6,
        baseColor: [1, 1, 1],
        markerColor: [0.2, 0.8, 1],
        glowColor: [0.2, 0.8, 1],
        markers: [
          // Example marker
          { location: [37.7749, -122.4194], size: 0.1 }, // San Francisco
        ],
        onRender: (state: any) => {
          state.phi = phi.current;
          phi.current += 0.01;
        },
      });
    }
    return () => {
      if (globe) globe.destroy();
    };
  }, [width, height]);

  return (
    <div className={"relative flex items-center justify-center " + className} style={{ width, height }}>
      <canvas
        ref={canvasRef}
        width={width * 2}
        height={height * 2}
        style={{ width, height, display: 'block' }}
      />
    </div>
  );
} 