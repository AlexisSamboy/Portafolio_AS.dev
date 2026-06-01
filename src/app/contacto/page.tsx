"use client";

import React from 'react';
import SphereHero from '@/components/ui/geometric-sphere';
import RuixenCard4 from '@/components/ui/doctor-live-chat-card';

export default function ContactoPage() {
  return (
    <main className="relative min-h-screen bg-[#05060a] pt-28 pb-20 px-6 md:px-12 max-w-7xl mx-auto overflow-hidden">
      
      {/* Background cyber glowing elements */}
      <div className="absolute top-1/4 left-1/3 h-[300px] w-[300px] rounded-full bg-[#00f0ff]/5 blur-3xl pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/3 h-[300px] w-[300px] rounded-full bg-[#ff2b6a]/5 blur-3xl pointer-events-none" />

      {/* Page Title HUD */}
      <div className="flex items-center gap-3 mb-10">
        <span className="font-mono text-[#ff2b6a] text-xs tracking-widest">[05 // SYS_CONTACT]</span>
        <h1 className="text-2xl md:text-3xl font-black text-glow-cyan text-slate-100 uppercase">
          Contacto
        </h1>
        <div className="h-[1px] flex-grow bg-cyan-500/20" />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
        
        {/* Left Column: Geometric Sphere Animation with Contact Links (lg:col-span-8) */}
        <div className="lg:col-span-8 flex flex-col justify-center">
          <SphereHero />
        </div>

        {/* Right Column: AI Secretary Personal Assistant (lg:col-span-4) */}
        <div className="lg:col-span-4 flex flex-col justify-center">
          <RuixenCard4 />
        </div>

      </div>

    </main>
  );
}
