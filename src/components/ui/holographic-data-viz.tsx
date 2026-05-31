'use client';

import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

export const HolographicDataViz = () => {
  const [telemetry, setTelemetry] = useState({
    fps: 60,
    entropy: 0.842,
    accuracy: 94.8,
    status: 'ONLINE',
  });

  useEffect(() => {
    const interval = setInterval(() => {
      setTelemetry((prev) => ({
        fps: Math.floor(58 + Math.random() * 4),
        entropy: parseFloat((0.83 + Math.random() * 0.03).toFixed(4)),
        accuracy: parseFloat((94.5 + Math.random() * 0.6).toFixed(1)),
        status: Math.random() > 0.95 ? 'CALIBRATING' : 'ONLINE',
      }));
    }, 1500);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative flex flex-col rounded-xl border border-cyan-500/20 bg-slate-950/80 p-4 font-mono text-xs text-cyan-400 shadow-[0_0_20px_rgba(0,240,255,0.05)]">
      {/* Scanline effect */}
      <div className="absolute inset-0 pointer-events-none rounded-xl overflow-hidden bg-[linear-gradient(rgba(18,16,16,0)_50%,rgba(0,0,0,0.25)_50%),linear-gradient(90deg,rgba(255,0,0,0.06),rgba(0,255,0,0.02),rgba(0,0,255,0.06))] bg-[size:100%_4px,3px_100%] opacity-40 z-10" />

      {/* Title block */}
      <div className="flex items-center justify-between border-b border-cyan-500/20 pb-2 mb-3">
        <div className="flex items-center gap-2">
          <span className="h-2 w-2 rounded-full bg-cyan-400 animate-ping" />
          <span className="font-bold tracking-widest text-[#00f0ff]">BI_HOLOGRAPHIC_TELEMETRY</span>
        </div>
        <span className="text-[10px] text-fuchsia-500 border border-fuchsia-500/30 px-1 rounded bg-fuchsia-500/10">
          SYS_SEC_V.3.8
        </span>
      </div>

      {/* Grid and SVG visual */}
      <div className="relative h-44 w-full border border-cyan-500/10 bg-slate-950/90 rounded overflow-hidden">
        {/* Holographic grid */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(0,240,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(0,240,255,0.03)_1px,transparent_1px)] bg-[size:20px_20px]" />
        
        {/* Animated neon waves */}
        <svg className="absolute inset-0 h-full w-full" viewBox="0 0 300 150" preserveAspectRatio="none">
          {/* Cyan Wave */}
          <motion.path
            d="M 0 80 Q 75 40 150 80 T 300 80"
            fill="none"
            stroke="#00f0ff"
            strokeWidth="2"
            animate={{
              d: [
                "M 0 80 Q 75 30 150 90 T 300 80",
                "M 0 80 Q 75 110 150 50 T 300 80",
                "M 0 80 Q 75 30 150 90 T 300 80"
              ]
            }}
            transition={{ repeat: Infinity, duration: 6, ease: "easeInOut" }}
            className="drop-shadow-[0_0_8px_#00f0ff]"
          />

          {/* Magenta Wave */}
          <motion.path
            d="M 0 80 Q 75 110 150 60 T 300 80"
            fill="none"
            stroke="#ff2b6a"
            strokeWidth="1.5"
            animate={{
              d: [
                "M 0 80 Q 75 90 150 50 T 300 80",
                "M 0 80 Q 75 40 150 110 T 300 80",
                "M 0 80 Q 75 90 150 50 T 300 80"
              ]
            }}
            transition={{ repeat: Infinity, duration: 8, ease: "easeInOut" }}
            className="drop-shadow-[0_0_8px_#ff2b6a]"
            strokeDasharray="4 2"
          />

          {/* Purple Wave */}
          <motion.path
            d="M 0 80 Q 75 60 150 100 T 300 80"
            fill="none"
            stroke="#9d4edd"
            strokeWidth="1"
            animate={{
              d: [
                "M 0 80 Q 75 120 150 70 T 300 80",
                "M 0 80 Q 75 50 150 90 T 300 80",
                "M 0 80 Q 75 120 150 70 T 300 80"
              ]
            }}
            transition={{ repeat: Infinity, duration: 5, ease: "easeInOut" }}
            className="drop-shadow-[0_0_5px_#9d4edd]"
          />
        </svg>

        {/* Dynamic target reticle */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 border border-cyan-400/20 rounded-full h-24 w-24 flex items-center justify-center animate-[spin_20s_linear_infinite]">
          <div className="border border-dashed border-fuchsia-400/30 rounded-full h-16 w-16" />
        </div>
        <div className="absolute top-2 left-2 text-[9px] text-[#00f0ff]/50">INDEX_A // 80.3%</div>
        <div className="absolute bottom-2 right-2 text-[9px] text-[#ff2b6a]/50">SWEEP_FREQ_0.14Hz</div>
      </div>

      {/* Telemetry info */}
      <div className="grid grid-cols-2 gap-2 mt-3 text-[10px]">
        <div className="border border-cyan-500/10 p-1.5 rounded bg-slate-950/50">
          <div className="text-cyan-500/60 uppercase">SIGNAL_INTEGRITY</div>
          <div className="text-sm font-bold text-cyan-400">{(telemetry.entropy * 100).toFixed(1)}%</div>
        </div>
        <div className="border border-cyan-500/10 p-1.5 rounded bg-slate-950/50">
          <div className="text-cyan-500/60 uppercase">MODEL_ACCURACY</div>
          <div className="text-sm font-bold text-[#00f0ff]">{telemetry.accuracy}%</div>
        </div>
        <div className="border border-cyan-500/10 p-1.5 rounded bg-slate-950/50">
          <div className="text-cyan-500/60 uppercase">CORE_TELEMETRY</div>
          <div className="text-sm font-bold text-fuchsia-400">{telemetry.status}</div>
        </div>
        <div className="border border-cyan-500/10 p-1.5 rounded bg-slate-950/50">
          <div className="text-cyan-500/60 uppercase">REFRESH_RATE</div>
          <div className="text-sm font-bold text-cyan-400">{telemetry.fps} FPS</div>
        </div>
      </div>
    </div>
  );
};
