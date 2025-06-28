"use client";
import { useEffect, useRef, useState } from "react";
import createGlobe from "cobe";
import React from "react";

export default function CobeGlobe({
  width = 300,
  height = 300,
  className = "",
  globeColor = [0.2, 0.8, 1],
}: {
  width?: number;
  height?: number;
  className?: string;
  globeColor?: [number, number, number];
}) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const phi = useRef(0);
  const containerRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  // Lazy load globe only when visible
  useEffect(() => {
    const observer = new window.IntersectionObserver(
      ([entry]) => setIsVisible(entry.isIntersecting),
      { rootMargin: '200px' }
    );
    if (containerRef.current) observer.observe(containerRef.current);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!isVisible) return;
    let globe: any;
    const widthDpr = width * 1;
    const heightDpr = height * 1;
    if (canvasRef.current) {
      globe = createGlobe(canvasRef.current, {
        devicePixelRatio: 1,
        width: widthDpr,
        height: heightDpr,
        phi: 0,
        theta: 0.3,
        dark: 1,
        diffuse: 1.2,
        mapSamples: 4000,
        mapBrightness: 3,
        baseColor: [1, 1, 1],
        markerColor: globeColor,
        glowColor: globeColor,
        markers: [
          { location: [37.7749, -122.4194], size: 0.1 },
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
  }, [width, height, isVisible]);

  return (
    <div ref={containerRef} className={"relative flex items-center justify-center " + className} style={{ width, height }}>
      <canvas
        ref={canvasRef}
        width={width}
        height={height}
        style={{ width, height, display: 'block' }}
      />
    </div>
  );
} 