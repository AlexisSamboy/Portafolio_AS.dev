"use client";

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Mail } from 'lucide-react';
import { Github, Linkedin, Instagram } from '@/components/ui/brand-icons';
import { cn, getAssetPath } from '@/lib/utils';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

interface NavbarProps {
  logoText?: string;
  logoImgSrc?: string;
}

const navLinks = [
  { label: 'INICIO', href: '/' },
  { label: 'SOBRE MÍ', href: '/sobre-mi' },
  { label: 'TRAYECTORIA', href: '/trayectoria' },
  { label: 'PROYECTOS', href: '/proyectos' },
  { label: 'CERTIFICACIONES', href: '/certificaciones' },
  { label: 'CONTACTO', href: '/contacto' },
];

const socialLinks = [
  { icon: Github, href: 'https://github.com/AlexisSamboy' },
  { icon: Linkedin, href: 'https://www.linkedin.com/in/alexis-samboy-herrera/' },
  { icon: Instagram, href: 'https://www.instagram.com/alexis_samboy/' },
  { icon: Mail, href: 'mailto:alexissamboy1998@gmail.com' },
];

export function Navbar({
  logoText = "ALEXIS S.",
  logoImgSrc = "img/logo-as-dev.png",
}: NavbarProps) {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  // Helper check for active links
  const isLinkActive = (href: string) => {
    if (href === '/') {
      return pathname === '/';
    }
    return pathname.startsWith(href);
  };

  return (
    <>
      {/* Global Desktop Navigation Header */}
      <header className="fixed top-0 left-0 right-0 z-50 w-full bg-[#05060a]/40 backdrop-blur-md border-b border-cyan-500/10 py-4 px-6 md:px-12 flex justify-center">
        <div className="flex w-full max-w-7xl items-center justify-between">
          
          {/* Logo */}
          <Link
            href="/"
            className="text-xl font-bold tracking-wider text-glow-cyan text-[#00f0ff] flex items-center hover:scale-102 transition-transform cursor-pointer"
          >
            {logoImgSrc ? (
              <img src={getAssetPath(logoImgSrc)} alt="AS.DEV Logo" className="h-6 w-auto object-contain md:h-7" />
            ) : (
              logoText
            )}
          </Link>

          {/* Desktop Links */}
          <nav className="hidden items-center space-x-8 md:flex">
            {navLinks.map((link) => {
              const active = isLinkActive(link.href);
              return (
                <Link
                  key={link.label}
                  href={link.href}
                  className={cn(
                    "text-xs font-semibold tracking-widest relative py-2 transition-colors duration-300 select-none cursor-pointer",
                    active
                      ? "text-[#00f0ff] text-glow-cyan"
                      : "text-[#00f0ff]/60 hover:text-[#00f0ff] hover:text-glow-cyan"
                  )}
                >
                  {link.label}
                  {active && (
                    <motion.span
                      layoutId="activeGlobalNavLine"
                      className="absolute bottom-0 left-0 right-0 h-[2px] bg-[#00f0ff] shadow-[0_0_8px_#00f0ff]"
                      transition={{ type: "spring", stiffness: 380, damping: 30 }}
                    />
                  )}
                </Link>
              );
            })}
          </nav>

          {/* Mobile Hamburger Button */}
          <motion.button
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="flex flex-col space-y-1.5 md:hidden z-40 p-2 cursor-pointer hover:opacity-80 transition-opacity"
            onClick={() => setIsMobileMenuOpen(true)}
            aria-label="Open menu"
          >
            <span className="block h-0.5 w-6 bg-slate-200"></span>
            <span className="block h-0.5 w-6 bg-slate-200"></span>
            <span className="block h-0.5 w-5 bg-slate-200"></span>
          </motion.button>
        </div>
      </header>

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
              <Link
                href="/"
                onClick={() => setIsMobileMenuOpen(false)}
                className="text-xl font-bold tracking-wider text-glow-cyan text-[#00f0ff] flex items-center"
              >
                {logoImgSrc ? (
                  <img src={getAssetPath(logoImgSrc)} alt="AS.DEV Logo" className="h-6 w-auto object-contain" />
                ) : (
                  logoText
                )}
              </Link>
              <button
                onClick={() => setIsMobileMenuOpen(false)}
                className="p-2 text-slate-300 hover:text-[#ff2b6a] hover:scale-110 transition-all cursor-pointer"
                aria-label="Close menu"
              >
                <X className="h-6 w-6" />
              </button>
            </div>

            {/* Links Content */}
            <div className="flex flex-col items-center justify-center space-y-6 my-auto">
              {navLinks.map((link, index) => {
                const active = isLinkActive(link.href);
                return (
                  <motion.div
                    key={link.label}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.05 }}
                  >
                    <Link
                      href={link.href}
                      onClick={() => setIsMobileMenuOpen(false)}
                      className={cn(
                        "text-xl font-bold tracking-widest transition-colors duration-300 block py-1 cursor-pointer",
                        active
                          ? "text-[#00f0ff] text-glow-cyan"
                          : "text-[#00f0ff]/60 hover:text-[#00f0ff] hover:text-glow-cyan"
                      )}
                    >
                      {link.label}
                    </Link>
                  </motion.div>
                );
              })}
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
                Santo Domingo, RD
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
