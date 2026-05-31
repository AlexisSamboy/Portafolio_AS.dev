"use client";

import React, { useRef, useEffect, useState } from "react";
import { motion, useReducedMotion } from "framer-motion";

interface VideoScrollHeroProps {
  videoSrc?: string;
  enableAnimations?: boolean;
  className?: string;
  startScale?: number;
  children?: React.ReactNode;
}

export function VideoScrollHero({
  videoSrc = "/video/cyberpunk.mp4",
  enableAnimations = true,
  className = "",
  startScale = 0.25,
  children,
}: VideoScrollHeroProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const shouldReduceMotion = useReducedMotion();
  
  const [scrollScale, setScrollScale] = useState(startScale);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    if (!enableAnimations || shouldReduceMotion) return;

    const handleScroll = () => {
      if (!containerRef.current) return;

      const rect = containerRef.current.getBoundingClientRect();
      const containerHeight = containerRef.current.offsetHeight;
      const windowHeight = window.innerHeight;
      
      // Calculate scroll progress based on container position relative to viewport
      const scrolled = Math.max(0, -rect.top);
      const maxScroll = containerHeight - windowHeight;
      const prog = Math.min(scrolled / Math.max(1, maxScroll), 1);
      
      setProgress(prog);

      // Scale from startScale (e.g. 0.25) to 1.0
      const newScale = startScale + (prog * (1 - startScale));
      setScrollScale(newScale);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll(); // Initial calculation

    return () => window.removeEventListener('scroll', handleScroll);
  }, [enableAnimations, shouldReduceMotion, startScale]);

  const shouldAnimate = enableAnimations && !shouldReduceMotion;

  // Custom children content (About Me) is visible immediately (starts at 0.4, goes to 1.0)
  const contentOpacity = 0.4 + progress * 0.6;

  return (
    <div className={`relative ${className}`}>
      {/* Hero Scroll Wrapper */}
      <div
        ref={containerRef}
        className="relative h-[200vh] bg-transparent"
      >
        {/* Sticky viewport-sized box */}
        <div className="sticky top-0 w-full h-screen flex items-center justify-center z-10 overflow-hidden">
          
          {/* Scaling Frame */}
          <div
            className="relative flex items-center justify-center will-change-transform border border-cyan-500/20 rounded-2xl overflow-hidden bg-slate-950/90 shadow-[0_0_50px_rgba(0,240,255,0.2)]"
            style={{
              transform: shouldAnimate ? `scale(${scrollScale})` : 'scale(1)',
              transformOrigin: "center center",
              width: "100vw",
              height: "100vh",
              // transition from rounded-2xl to rounded-none as it reaches full scale
              borderRadius: progress > 0.9 ? "0px" : "1rem",
            }}
          >
            {/* Background Video */}
            <video
              autoPlay
              loop
              muted
              playsInline
              className="absolute inset-0 w-full h-full object-cover opacity-25 z-0 pointer-events-none"
            >
              <source src={videoSrc} type="video/mp4" />
              Your browser does not support the video tag.
            </video>

            {/* Scanline / Cyber overlay */}
            <div className="absolute inset-0 pointer-events-none bg-[linear-gradient(rgba(18,16,16,0)_50%,rgba(0,0,0,0.3)_50%)] bg-[size:100%_4px] opacity-40 z-10" />

            {/* Emerging Content Panel (About Me - always rendered, opacity increases on scroll) */}
            <div 
              className="absolute inset-0 z-30 flex items-center justify-center p-6 md:p-12 overflow-y-auto max-h-full"
              style={{ 
                opacity: contentOpacity,
                pointerEvents: progress > 0.8 ? 'auto' : 'none'
              }}
            >
              {children}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
