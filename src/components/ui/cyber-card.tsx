'use client';

import React, { useRef, useState } from 'react';
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion';
import { cn } from '@/lib/utils';

interface CyberCardProps {
  children: React.ReactNode;
  className?: string;
  borderColor?: 'magenta' | 'cyan' | 'purple';
}

export const CyberCard = ({ children, className, borderColor = 'cyan' }: CyberCardProps) => {
  const cardRef = useRef<HTMLDivElement>(null);
  const [hovered, setHovered] = useState(false);

  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const mouseXSpring = useSpring(x, { damping: 20, stiffness: 300 });
  const mouseYSpring = useSpring(y, { damping: 20, stiffness: 300 });

  const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], [10, -10]);
  const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], [-10, 10]);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;
    const mouseX = e.clientX - rect.left - width / 2;
    const mouseY = e.clientY - rect.top - height / 2;

    x.set(mouseX / width);
    y.set(mouseY / height);
  };

  const handleMouseLeave = () => {
    setHovered(false);
    x.set(0);
    y.set(0);
  };

  const borderColors = {
    magenta: 'border-[#ff2b6a]/50 hover:border-[#ff2b6a] shadow-[0_0_15px_rgba(255,43,106,0.15)] hover:shadow-[0_0_25px_rgba(255,43,106,0.3)]',
    cyan: 'border-[#00f0ff]/50 hover:border-[#00f0ff] shadow-[0_0_15px_rgba(0,240,255,0.15)] hover:shadow-[0_0_25px_rgba(0,240,255,0.3)]',
    purple: 'border-[#9d4edd]/50 hover:border-[#9d4edd] shadow-[0_0_15px_rgba(157,78,221,0.15)] hover:shadow-[0_0_25px_rgba(157,78,221,0.3)]',
  };

  return (
    <div
      className="perspective-1000"
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={handleMouseLeave}
    >
      <motion.div
        ref={cardRef}
        style={{
          rotateX: rotateX,
          rotateY: rotateY,
          transformStyle: 'preserve-3d',
        }}
        className={cn(
          'relative rounded-2xl border bg-slate-950/40 p-6 backdrop-blur-xl transition-all duration-300 ease-out',
          borderColors[borderColor],
          className
        )}
      >
        {/* Futuristic circuit line details */}
        <div className="absolute top-0 left-4 h-[2px] w-8 bg-gradient-to-r from-transparent to-current opacity-70" />
        <div className="absolute bottom-0 right-4 h-[2px] w-8 bg-gradient-to-l from-transparent to-current opacity-70" />
        <div className="absolute top-4 left-0 h-8 w-[2px] bg-gradient-to-b from-transparent to-current opacity-70" />
        <div className="absolute bottom-4 right-0 h-8 w-[2px] bg-gradient-to-t from-transparent to-current opacity-70" />
        
        {/* Content wrapper with preserve-3d */}
        <div style={{ transform: hovered ? 'translateZ(20px)' : 'translateZ(0px)', transition: 'transform 0.3s ease' }}>
          {children}
        </div>
      </motion.div>
    </div>
  );
};
