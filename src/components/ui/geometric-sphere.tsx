"use client";

import React, { useState, useEffect, useCallback, useRef } from "react";
import { Mail, MessageSquare, Phone } from "lucide-react";
import { Github, Linkedin, Instagram } from "@/components/ui/brand-icons";
import { getAssetPath } from "@/lib/utils";

// --- CONFIGURATION BLOCK for Easy Remixing ---
export const CONFIG = {
  // Visuals (mapped to neon palette)
  primaryColor: "255, 43, 106", // RGB for Magenta
  secondaryColor: "0, 240, 255", // RGB for Cyan

  // Animation Speed
  sphereRotationDuration: "200s",
  gridPanDuration: "120s",
  coreGlowDuration: "15s",

  // Intensity & Depth
  wireframeOpacity: 0.6,
  wireframeShadowIntensity: 50,
  coreBlur: 150,
  parallaxDepth: 25,
  lerpFactor: 0.08,
  sphereDensity: 12,
};

// Helper function for linear interpolation (Lerp)
const lerp = (a: number, b: number, t: number) => a + (b - a) * t;

export default function SphereHero() {
  const [targetMousePos, setTargetMousePos] = useState({ x: 0, y: 0 });
  const currentMousePos = useRef({ x: 0, y: 0 });
  const animationFrameRef = useRef<number>(0);

  const animateLerp = useCallback(() => {
    currentMousePos.current.x = lerp(
      currentMousePos.current.x,
      targetMousePos.x,
      CONFIG.lerpFactor
    );
    currentMousePos.current.y = lerp(
      currentMousePos.current.y,
      targetMousePos.y,
      CONFIG.lerpFactor
    );

    setTargetMousePos((p) => ({
      x: currentMousePos.current.x,
      y: currentMousePos.current.y,
    }));

    animationFrameRef.current = requestAnimationFrame(animateLerp);
  }, [targetMousePos.x, targetMousePos.y]);

  useEffect(() => {
    animationFrameRef.current = requestAnimationFrame(animateLerp);
    return () => cancelAnimationFrame(animationFrameRef.current);
  }, [animateLerp]);

  const handleMouseMove = useCallback((e: MouseEvent) => {
    const centerX = window.innerWidth / 2;
    const centerY = window.innerHeight / 2;
    const x = (e.clientX - centerX) / centerX;
    const y = (e.clientY - centerY) / centerY;
    setTargetMousePos({ x, y });
  }, []);

  useEffect(() => {
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, [handleMouseMove]);

  const { x: smoothX, y: smoothY } = currentMousePos.current;

  // Parallax & rotation math
  const parallaxDepth = CONFIG.parallaxDepth;
  const rotationStrength = 5;

  const baseTranslate = `translate3d(${smoothX * parallaxDepth}px, ${smoothY * parallaxDepth}px, 0)`;
  const gridTranslate = `translate3d(${-smoothX * (parallaxDepth / 2)}px, ${-smoothY * (parallaxDepth / 2)}px, 0)`;
  const hazeTranslate = `translate3d(${smoothX * (parallaxDepth / 2)}px, ${smoothY * (parallaxDepth / 2)}px, 0)`;

  const tiltRotateX = smoothY * rotationStrength;
  const tiltRotateY = -smoothX * rotationStrength;
  const tiltTranslate = `rotateX(${tiltRotateX}deg) rotateY(${tiltRotateY}deg)`;

  // Generate sphere rings
  const sphereRings = Array.from({ length: CONFIG.sphereDensity }, (_, i) => {
    const step = 90 / (CONFIG.sphereDensity / 2);
    const angle = i * step;
    const commonStyle = {
      transform:
        i % 2 === 0 ? `rotateY(${angle}deg)` : `rotateX(${angle}deg)`,
    };
    return (
      <div
        key={`ring-${i}`}
        className="wireframe-line"
        style={commonStyle}
        aria-hidden="true"
      />
    );
  });

  // Inline style values derived from CONFIG to be set on elements
  const coreLightStyle = {
    width: "250px",
    height: "250px",
    backgroundImage: `radial-gradient(circle, rgba(${CONFIG.secondaryColor}, 0.35) 0%, transparent 70%)`,
    filter: `blur(${CONFIG.coreBlur}px)`,
    boxShadow: `0 0 ${CONFIG.coreBlur / 2}px 20px rgba(${CONFIG.secondaryColor}, 0.15), 0 0 ${CONFIG.coreBlur}px 40px rgba(${CONFIG.primaryColor}, 0.1)`,
  };

  const panningGridStyle = {
    transform: gridTranslate,
    backgroundImage:
      "repeating-linear-gradient(to right, rgba(0,240,255,0.03) 1px, transparent 1px), repeating-linear-gradient(to bottom, rgba(0,240,255,0.03) 1px, transparent 1px)",
    backgroundSize: "30px 30px",
    opacity: 0.3,
  };

  const hazeStyle = {
    transform: hazeTranslate,
    backgroundImage: `radial-gradient(circle at 50% 50%, rgba(${CONFIG.primaryColor}, 0.1) 0%, transparent 60%)`,
    filter: "blur(100px)",
    opacity: 0.5,
    mixBlendMode: "screen" as const,
  };

  const deepBaseStyle = {
    transform: baseTranslate,
    backgroundImage: `radial-gradient(at 50% 50%, rgba(${CONFIG.primaryColor}, 0.05) 0%, #05060a 90%)`,
  };

  const bloomStyle = {
    transform: baseTranslate,
    backgroundImage: `radial-gradient(circle at 50% 50%, rgba(${CONFIG.primaryColor}, 0.2) 0%, transparent 60%), radial-gradient(circle at 10% 10%, rgba(${CONFIG.secondaryColor}, 0.15) 0%, transparent 40%)`,
    mixBlendMode: "screen" as const,
    filter: "blur(80px)",
    opacity: 0.8,
  };

  return (
    <div className="relative min-h-[460px] md:min-h-[500px] w-full overflow-hidden bg-black/80 border border-cyan-500/20 rounded-2xl flex flex-col items-center justify-between p-8 font-sans shadow-[0_0_30px_rgba(0,240,255,0.03)] group">
      
      {/* Layer 0: Panning Grid Layer */}
      <div className="absolute inset-0 panning-grid" style={panningGridStyle} />

      {/* Layer 1: Volumetric Haze */}
      <div className="absolute inset-0" style={hazeStyle} />

      {/* Layer 2: Deep Base Background & Core Glow */}
      <div className="absolute inset-0" style={deepBaseStyle}>
        <div className="core-light absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full pointer-events-none" style={coreLightStyle} />
      </div>

      {/* Layer 3: Geometric Glow Sphere */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 sphere-container pointer-events-none z-10">
        <div
          className="w-[350px] h-[350px] md:w-[420px] md:h-[420px] sphere-rotation"
          style={{
            transform: tiltTranslate,
            transformOrigin: "center center",
            animationDuration: CONFIG.sphereRotationDuration,
          }}
        >
          {sphereRings}
        </div>
      </div>

      {/* Layer 4: Soft Radial Bloom */}
      <div className="absolute inset-0" style={bloomStyle} />

      {/* Layer 5: CRT vignette / scanline overlay */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(18,16,16,0)_50%,rgba(0,0,0,0.1)_50%)] bg-[size:100%_4px] opacity-10 pointer-events-none" />

      {/* Content Top: HUD label */}
      <div className="relative z-20 w-full flex items-center justify-between border-b border-cyan-500/10 pb-3 font-mono text-[9px] text-slate-500">
        <span>// GEOMETRIC_CORE_CONNECTED</span>
        <span className="text-cyan-400">TELEMETRY: ACTIVE</span>
      </div>

      {/* Content Center: Title & Description */}
      <div className="relative z-20 text-center max-w-lg mx-auto py-10">
        <h2 className="text-xl md:text-2xl font-black text-glow-cyan text-slate-100 uppercase tracking-wider font-mono">
          Canal de Comunicación
        </h2>

        <p className="text-xs md:text-sm text-slate-355 leading-relaxed mt-4 font-sans">
          ¿Listo para automatizar tus flujos de datos o diseñar tableros de control avanzados? Chatea con mi asistente virtual **Aria** o contáctame de forma directa.
        </p>
      </div>

      {/* Content Bottom: Actions & Contacts */}
      <div className="relative z-20 w-full space-y-6">
        
        {/* Contact Links Buttons */}
        <div className="flex flex-col sm:flex-row gap-3">
          <a
            href="https://wa.me/18098903807?text=Hola%20Alexis,%20vi%20tu%20portafolio%20y%20me%20gustaría%2520coordinar%20una%20reunión."
            target="_blank"
            rel="noopener noreferrer"
            className="flex-1 flex items-center justify-center gap-2 py-3 rounded-xl bg-slate-950/80 border border-[#00f0ff]/30 hover:border-[#00f0ff] hover:text-[#00f0ff] hover:shadow-[0_0_15px_rgba(0,240,255,0.2)] text-slate-100 font-mono text-xs tracking-wider transition-all cursor-pointer"
          >
            <Phone className="w-4 h-4 text-cyan-400" />
            CONTACTAR_A_ALEXIS
          </a>
          <a
            href="mailto:alexissamboy1998@gmail.com"
            className="flex-1 flex items-center justify-center gap-2 py-3 rounded-xl bg-[#ff2b6a]/10 border border-[#ff2b6a]/30 hover:border-[#ff2b6a] hover:text-[#ff2b6a] hover:shadow-[0_0_15px_rgba(255,43,106,0.2)] text-slate-100 font-mono text-xs tracking-wider transition-all cursor-pointer"
          >
            <Mail className="w-4 h-4 text-fuchsia-400" />
            ENVIAR_CORREO_DIRECTO
          </a>
        </div>

        {/* Social Grid */}
        <div className="border-t border-slate-800/40 pt-4 flex flex-col md:flex-row items-center justify-between gap-4 font-sans text-xs">
          
          {/* Email Text */}
          <div className="flex items-center gap-1.5 text-slate-400 font-mono text-[10px]">
            <span className="text-cyan-400 font-bold">//</span>
            <span>alexissamboy1998@gmail.com</span>
          </div>

          {/* Social Icons row */}
          <div className="flex items-center gap-4">
            <a
              href="https://www.linkedin.com/in/alexis-samboy-herrera/"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-lg bg-slate-950 border border-slate-900 hover:border-[#00f0ff]/40 text-slate-400 hover:text-slate-200 transition-colors"
              title="LinkedIn"
            >
              <Linkedin size={16} />
            </a>
            <a
              href="https://github.com/AlexisSamboy"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-lg bg-slate-950 border border-slate-900 hover:border-[#00f0ff]/40 text-slate-400 hover:text-slate-200 transition-colors"
              title="GitHub"
            >
              <Github size={16} />
            </a>
            <a
              href="https://www.instagram.com/alexis_samboy/"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-lg bg-slate-950 border border-slate-900 hover:border-[#00f0ff]/40 text-slate-400 hover:text-slate-200 transition-colors"
              title="Instagram"
            >
              <Instagram size={16} />
            </a>
          </div>
        </div>

      </div>

    </div>
  );
}
