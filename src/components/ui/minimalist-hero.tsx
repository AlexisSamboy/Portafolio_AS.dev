import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { LucideIcon, X } from 'lucide-react';
import { cn, getAssetPath } from '@/lib/utils';

import { HologramLoop } from './hologram-loop';

// Define the props interface for type safety and reusability
interface MinimalistHeroProps {
  logoText?: string;
  logoImgSrc?: string;
  navLinks: { label: string; href: string }[];
  mainText: string;
  readMoreLink: string;
  imageSrc: string;
  imageAlt: string;
  overlayText: {
    part1: string;
    part2: string;
  };
  socialLinks: { icon: React.ComponentType<{ className?: string }>; href: string }[];
  locationText: string;
  className?: string;
}

// Helper component for navigation links
const NavLink = ({ href, children }: { href: string; children: React.ReactNode }) => (
  <a
    href={href}
    className="text-sm font-medium tracking-widest text-[#00f0ff]/60 transition-colors hover:text-[#00f0ff] text-glow-cyan"
  >
    {children}
  </a>
);

// Helper component for social media icons
const SocialIcon = ({ href, icon: Icon }: { href: string; icon: React.ComponentType<{ className?: string }> }) => (
  <motion.a 
    href={href} 
    target="_blank" 
    rel="noopener noreferrer" 
    className="text-foreground/60 transition-colors inline-block hover:text-[#ff2b6a]"
    whileHover={{ 
      scale: 1.3,
      y: -5,
    }}
    transition={{ type: "spring", stiffness: 350, damping: 12 }}
  >
    <Icon className="h-5 w-5" />
  </motion.a>
);

// The main reusable Hero Section component
export const MinimalistHero = ({
  logoText,
  logoImgSrc,
  navLinks,
  mainText,
  readMoreLink,
  imageSrc,
  imageAlt,
  overlayText,
  socialLinks,
  locationText,
  className,
}: MinimalistHeroProps) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <div
      className={cn(
        'relative flex h-screen w-full flex-col items-center justify-between overflow-hidden bg-transparent p-8 font-sans md:p-12',
        className
      )}
    >
      {/* Header */}
      <header className="z-30 flex w-full max-w-7xl items-center justify-between">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          className="text-xl font-bold tracking-wider text-glow-cyan text-[#00f0ff] flex items-center"
        >
          {logoImgSrc ? (
            <img src={getAssetPath(logoImgSrc)} alt="AS.DEV Logo" className="h-6 w-auto object-contain md:h-7" />
          ) : (
            logoText
          )}
        </motion.div>
        <div className="hidden items-center space-x-8 md:flex">
          {navLinks.map((link) => (
            <NavLink key={link.label} href={link.href}>
              {link.label}
            </NavLink>
          ))}
        </div>
        <motion.button
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          className="flex flex-col space-y-1.5 md:hidden z-40 p-2 cursor-pointer hover:opacity-80 transition-opacity"
          onClick={() => setIsMobileMenuOpen(true)}
          aria-label="Open menu"
        >
          <span className="block h-0.5 w-6 bg-foreground"></span>
          <span className="block h-0.5 w-6 bg-foreground"></span>
          <span className="block h-0.5 w-5 bg-foreground"></span>
        </motion.button>
      </header>

      {/* Main Content Area */}
      <div className="relative grid w-full max-w-7xl flex-grow grid-cols-1 items-center md:grid-cols-3">
        {/* Left Text Content */}
        <motion.div
          initial={{ opacity: 0, x: -35 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ type: "spring", stiffness: 80, damping: 15, delay: 1 }}
          className="z-20 order-2 md:order-1 text-center md:text-left"
        >
          <motion.p 
            className="mx-auto max-w-sm md:max-w-md text-base md:text-[18px] leading-relaxed text-slate-200 md:mx-0 font-sans tracking-wide select-none"
            whileHover={{ scale: 1.01, x: 4 }}
            transition={{ type: "spring", stiffness: 300, damping: 20 }}
          >
            {mainText}
          </motion.p>
        </motion.div>

        {/* Center Image with Circle */}
        <div className="relative order-1 md:order-2 flex justify-center items-center h-full">
            <HologramLoop />
            <motion.div
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1], delay: 0.2 }}
                className="absolute z-0 h-[300px] w-[300px] rounded-full bg-gradient-to-tr from-fuchsia-500 via-purple-600 to-cyan-400 opacity-60 blur-2xl animate-pulse md:h-[400px] md:w-[400px] lg:h-[500px] lg:w-[500px]"
            ></motion.div>
            <motion.img
                src={getAssetPath(imageSrc)}
                alt={imageAlt}
                className="relative z-10 h-auto w-56 object-cover md:w-64 scale-150 lg:w-72"
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, ease: [0.22, 1, 0.36, 1], delay: 0.4 }}
                onError={(e) => {
                const target = e.target as HTMLImageElement;
                target.onerror = null;
                target.src = `https://placehold.co/400x600/eab308/ffffff?text=Image+Not+Found`;
                }}
            />
        </div>

        {/* Right Text */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 1.2 }}
          className="z-20 order-3 flex items-center justify-center text-center md:justify-start"
        >
          <h1 className="text-4xl sm:text-5xl md:text-4xl lg:text-5xl xl:text-6xl font-extrabold text-slate-100 font-mono tracking-tighter select-none">
            <span className="text-glow-cyan animate-pulse-cyan block">{overlayText.part1}</span>
            <span className="text-[#ff2b6a] text-glow-magenta animate-pulse-magenta block">{overlayText.part2}</span>
          </h1>
        </motion.div>
      </div>

      {/* Footer Elements */}
      <footer className="z-30 flex w-full max-w-7xl items-center justify-between">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 1.2 }}
          className="flex items-center space-x-4"
        >
          {socialLinks.map((link, index) => (
            <SocialIcon key={index} href={link.href} icon={link.icon} />
          ))}
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ 
            opacity: 1,
            y: [0, -3, 0]
          }}
          transition={{ 
            opacity: { duration: 0.5, delay: 1.3 },
            y: {
              repeat: Infinity,
              duration: 4,
              ease: "easeInOut",
              delay: 1.8
            }
          }}
          className="text-sm font-medium text-slate-300 flex items-center select-none"
        >
          <span className="relative flex h-2 w-2 mr-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-cyan-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-cyan-500"></span>
          </span>
          {locationText}
        </motion.div>
      </footer>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: "-100%" }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: "-100%" }}
            transition={{ type: "spring", stiffness: 300, damping: 30 }}
            className="fixed inset-0 z-50 flex flex-col justify-between bg-[#05060a]/98 backdrop-blur-2xl p-8 md:hidden border-b border-[#00f0ff]/20"
          >
            {/* Header inside Mobile Menu */}
            <div className="flex w-full items-center justify-between">
              <div className="text-xl font-bold tracking-wider text-glow-cyan text-[#00f0ff] flex items-center">
                {logoImgSrc ? (
                  <img src={getAssetPath(logoImgSrc)} alt="AS.DEV Logo" className="h-6 w-auto object-contain" />
                ) : (
                  logoText
                )}
              </div>
              <button
                onClick={() => setIsMobileMenuOpen(false)}
                className="p-2 text-slate-300 hover:text-[#ff2b6a] hover:scale-110 transition-all cursor-pointer"
                aria-label="Close menu"
              >
                <X className="h-6 w-6" />
              </button>
            </div>

            {/* Links Content */}
            <div className="flex flex-col items-center justify-center space-y-8 my-auto">
              {navLinks.map((link, index) => (
                <motion.a
                  key={link.label}
                  href={link.href}
                  onClick={() => setIsMobileMenuOpen(false)}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  className="text-2xl font-semibold tracking-widest text-[#00f0ff]/80 hover:text-[#00f0ff] text-glow-cyan transition-colors"
                >
                  {link.label}
                </motion.a>
              ))}
            </div>

            {/* Mobile Menu Footer */}
            <div className="flex flex-col items-center space-y-4 border-t border-cyan-500/10 pt-6">
              <div className="flex items-center space-x-6">
                {socialLinks.map((link, index) => {
                  const Icon = link.icon;
                  return (
                    <a
                      key={index}
                      href={link.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-slate-400 hover:text-[#ff2b6a] transition-colors"
                    >
                      <Icon className="h-6 w-6" />
                    </a>
                  );
                })}
              </div>
              <div className="text-xs font-mono text-slate-400">
                {locationText}
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};
