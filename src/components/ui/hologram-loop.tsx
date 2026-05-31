'use client';

import React, { useEffect, useRef } from 'react';

export const HologramLoop = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animId: number;
    let angle = 0;

    const resize = () => {
      // Keep it square and responsive
      const size = canvas.parentElement?.getBoundingClientRect().width || 400;
      canvas.width = size;
      canvas.height = size;
    };

    const draw = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      const cx = canvas.width / 2;
      const cy = canvas.height / 2;
      const radius = Math.min(cx, cy) * 0.75;

      ctx.save();
      ctx.translate(cx, cy);

      // Draw outer tech circles
      ctx.strokeStyle = 'rgba(0, 240, 255, 0.1)';
      ctx.lineWidth = 1;
      ctx.beginPath();
      ctx.arc(0, 0, radius * 1.2, 0, Math.PI * 2);
      ctx.stroke();

      // Outer dashed circle
      ctx.strokeStyle = 'rgba(255, 43, 106, 0.15)';
      ctx.lineWidth = 2;
      ctx.setLineDash([4, 8]);
      ctx.beginPath();
      ctx.arc(0, 0, radius * 1.05, angle, angle + Math.PI * 2);
      ctx.stroke();
      ctx.setLineDash([]);

      // Rotating globe contours
      ctx.rotate(angle);
      ctx.strokeStyle = 'rgba(0, 240, 255, 0.25)';
      ctx.lineWidth = 1.5;

      // Draw latitude/longitude lines to look like 3D sphere
      for (let i = -4; i <= 4; i++) {
        const r = Math.sin(Math.acos(i / 5)) * radius;
        const y = (i / 5) * radius;
        
        // Latitudes
        ctx.beginPath();
        ctx.ellipse(0, y, r, r * 0.25, 0, 0, Math.PI * 2);
        ctx.stroke();
        
        // Longitudes
        ctx.beginPath();
        ctx.ellipse(0, 0, radius, radius * Math.abs(i / 5), 0, 0, Math.PI * 2);
        ctx.stroke();
      }

      // Draw central core glow
      const grad = ctx.createRadialGradient(0, 0, 0, 0, 0, radius * 0.6);
      grad.addColorStop(0, 'rgba(157, 78, 221, 0.3)');
      grad.addColorStop(0.5, 'rgba(0, 240, 255, 0.1)');
      grad.addColorStop(1, 'rgba(0, 0, 0, 0)');
      ctx.fillStyle = grad;
      ctx.beginPath();
      ctx.arc(0, 0, radius * 0.6, 0, Math.PI * 2);
      ctx.fill();

      // Draw telemetry ticks
      ctx.restore();

      // Increment rotation angle
      angle += 0.005;
      animId = requestAnimationFrame(draw);
    };

    window.addEventListener('resize', resize);
    resize();
    draw();

    return () => {
      cancelAnimationFrame(animId);
      window.removeEventListener('resize', resize);
    };
  }, []);

  return (
    <div className="absolute inset-0 z-0 flex items-center justify-center pointer-events-none opacity-60">
      <canvas
        ref={canvasRef}
        className="w-full h-full max-w-[500px] max-h-[500px]"
      />
    </div>
  );
};
