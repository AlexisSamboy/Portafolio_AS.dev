"use client";

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Terminal, Database, Cpu, ChevronDown, Award, Briefcase, Code } from 'lucide-react';
import { cn } from '@/lib/utils';
import { CinematicFooter } from '@/components/ui/motion-footer';

interface Experience {
  id: string;
  role: string;
  company: string;
  period: string;
  icon: React.ComponentType<{ className?: string }>;
  borderColor: 'cyan' | 'purple' | 'magenta';
  textColor: string;
  glowColor: string;
  tag: string;
  details: string[];
  achievements: string[];
  techUsed: string[];
}

const experiencesData: Experience[] = [
  {
    id: "01",
    role: "Soporte Técnico en Sistemas",
    company: "Loteka SRL",
    period: "Jun 2024 - Ago 2025",
    icon: Terminal,
    borderColor: 'cyan',
    textColor: 'text-[#00f0ff]',
    glowColor: 'text-glow-cyan',
    tag: 'SYS_SUPPORT_V1',
    details: [
      'Administración y mantenimiento preventivo de infraestructura de hardware y redes para puntos de venta comerciales.',
      'Soporte técnico y resolución de incidencias en sistemas transaccionales financieros.',
      'Apoyo clave en la validación periódica de consistencia de bases de datos operacionales.'
    ],
    achievements: [
      'Mantener una tasa de disponibilidad del sistema del 99.8% durante picos de transacciones comerciales.'
    ],
    techUsed: ['SQL Server', 'Windows Server', 'Active Directory', 'LAN/WAN Networks']
  },
  {
    id: "02",
    role: "Soporte Técnico Informático",
    company: "Procuraduría General de la República Dominicana",
    period: "Ago 2025 - Mar 2026",
    icon: Database,
    borderColor: 'purple',
    textColor: 'text-[#9d4edd]',
    glowColor: 'text-glow-purple',
    tag: 'GOV_INFRA_V2',
    details: [
      'Gestión integral de incidencias técnicas en infraestructura local y servidores en la nube.',
      'Apoyo estratégico en la organización, auditoría y resguardo de backups informáticos institucionales.',
      'Configuración y mantenimiento de plataformas de virtualización y bases de datos relacionales gubernamentales.'
    ],
    achievements: [
      'Rediseñar el flujo de resolución de tickets en soporte de red, disminuyendo el tiempo de espera de usuarios en un 35%.'
    ],
    techUsed: ['Windows Server', 'Hyper-V', 'SQL Server', 'Backup Recovery System']
  },
  {
    id: "03",
    role: "Oficial de Inteligencia de Negocios (BI)",
    company: "Asociación Peravia de Ahorros y Préstamos",
    period: "Abr 2026 - Presente",
    icon: Cpu,
    borderColor: 'magenta',
    textColor: 'text-[#ff2b6a]',
    glowColor: 'text-glow-magenta',
    tag: 'BI_INTELLIGENCE_CORE_V3',
    details: [
      'Automatización de flujos de extracción, transformación y carga (ETL) para la consolidación mensual y diaria de reportes financieros.',
      'Modelado de datos en DAX y diseño de tableros de control ejecutivos interactivos (dashboards) en Power BI para el monitoreo de KPIs de negocio.',
      'Ejecución de consultas SQL complejas sobre el core bancario (AS400/DB2) para auditorías analíticas y soporte a decisiones estratégicas.'
    ],
    achievements: [
      'Automatizar la generación de reportes clave para la junta directiva, reduciendo el tiempo de proceso de 5 horas semanales a menos de 1 hora.'
    ],
    techUsed: ['Power BI', 'SQL Server', 'Python', 'SSIS (Integration Services)', 'Excel Avanzado', 'AS400']
  }
];

export default function TrayectoriaPage() {
  const [expandedId, setExpandedId] = useState<string | null>("03"); // APAP expanded by default

  const toggleExpand = (id: string) => {
    setExpandedId(expandedId === id ? null : id);
  };

  const borderColors = {
    magenta: 'border-[#ff2b6a]/40 hover:border-[#ff2b6a] shadow-[0_0_15px_rgba(255,43,106,0.1)] hover:shadow-[0_0_20px_rgba(255,43,106,0.25)]',
    cyan: 'border-[#00f0ff]/40 hover:border-[#00f0ff] shadow-[0_0_15px_rgba(0,240,255,0.1)] hover:shadow-[0_0_20px_rgba(0,240,255,0.25)]',
    purple: 'border-[#9d4edd]/40 hover:border-[#9d4edd] shadow-[0_0_15px_rgba(157,78,221,0.1)] hover:shadow-[0_0_20px_rgba(157,78,221,0.25)]',
  };

  const indicatorColors = {
    magenta: 'border-[#ff2b6a] bg-[#ff2b6a]/10',
    cyan: 'border-[#00f0ff] bg-[#00f0ff]/10',
    purple: 'border-[#9d4edd] bg-[#9d4edd]/10',
  };

  return (
    <>
    <main className="relative min-h-screen bg-[#05060a] pt-28 pb-20 px-6 md:px-12 max-w-7xl mx-auto overflow-hidden">
      
      {/* Background cyber glowing elements */}
      <div className="absolute top-1/4 left-1/3 h-[300px] w-[300px] rounded-full bg-[#00f0ff]/5 blur-3xl pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/3 h-[300px] w-[300px] rounded-full bg-[#ff2b6a]/5 blur-3xl pointer-events-none" />

      {/* Page Title HUD */}
      <div className="flex items-center gap-3 mb-10">
        <span className="font-mono text-[#ff2b6a] text-xs tracking-widest">[02 // SYS_PATH]</span>
        <h1 className="text-2xl md:text-3xl font-black text-glow-cyan text-slate-100 uppercase">
          Trayectoria
        </h1>
        <div className="h-[1px] flex-grow bg-cyan-500/20" />
      </div>

      <div className="relative space-y-12 pl-4 md:pl-0">
        {/* High-tech vertical neon laser line connector */}
        <div className="absolute left-6 md:left-[196px] top-6 bottom-6 w-[2px] bg-gradient-to-b from-[#ff2b6a] via-[#9d4edd] to-[#00f0ff] opacity-30 rounded-full" />

        {experiencesData.map((exp, idx) => {
          const JobIcon = exp.icon;
          const isExpanded = expandedId === exp.id;

          return (
            <motion.div
              layout
              key={exp.id}
              className="relative grid grid-cols-1 md:grid-cols-[180px_1fr] gap-6 items-start group"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, ease: "easeOut" }}
            >
              
              {/* Timeline Glowing Node - Centered on desktop */}
              <div 
                className={cn(
                  "absolute left-4 md:left-[186px] top-6 h-5 w-5 rounded-full bg-slate-950 border-2 flex items-center justify-center transition-all duration-300 z-10",
                  isExpanded ? indicatorColors[exp.borderColor] : "border-slate-700/60",
                  "group-hover:scale-110"
                )}
              >
                <div 
                  className={cn(
                    "h-1.5 w-1.5 rounded-full transition-colors",
                    isExpanded ? (exp.borderColor === 'cyan' ? 'bg-[#00f0ff]' : exp.borderColor === 'purple' ? 'bg-[#9d4edd]' : 'bg-[#ff2b6a]') : "bg-slate-500"
                  )} 
                />
              </div>

              {/* Left Column: Job timeline badge info (Dates & Tag) */}
              <div className="pl-10 md:pl-0 flex flex-col md:text-right font-mono gap-1.5 md:pr-8 md:items-end">
                <div className="text-[9px] text-slate-500 border border-slate-800/60 px-2 py-0.5 rounded bg-slate-950/40 w-fit md:w-auto">
                  // {exp.tag}
                </div>
                <div className="text-[11px] font-bold text-slate-300 bg-slate-900 border border-slate-800 px-3 py-1 rounded-full w-fit md:w-auto whitespace-nowrap">
                  {exp.period}
                </div>
              </div>

              {/* Right Column: Premium CyberCard Layout */}
              <div className="pl-10 md:pl-0">
                <motion.div
                  layout
                  className={cn(
                    "rounded-2xl border p-6 bg-slate-950/60 backdrop-blur-xl transition-all duration-500 cursor-pointer overflow-hidden relative",
                    borderColors[exp.borderColor]
                  )}
                  onClick={() => toggleExpand(exp.id)}
                >
                  {/* Decorative corner lines */}
                  <div className="absolute top-0 left-4 h-[2px] w-6 bg-gradient-to-r from-transparent to-current opacity-40" />
                  <div className="absolute bottom-0 right-4 h-[2px] w-6 bg-gradient-to-l from-transparent to-current opacity-40" />
                  
                  {/* Scanning scanline background */}
                  <div className="absolute inset-0 bg-[linear-gradient(rgba(18,16,16,0)_50%,rgba(0,0,0,0.1)_50%)] bg-[size:100%_6px] pointer-events-none opacity-10" />

                  {/* Header Row */}
                  <div className="flex items-center justify-between gap-4">
                    <div className="flex items-center gap-3">
                      <div className="p-2.5 bg-slate-900 border border-slate-800 rounded-xl hidden sm:block">
                        <JobIcon className={cn("h-5 w-5", exp.textColor, exp.glowColor)} />
                      </div>
                      <div>
                        <h3 className="text-base md:text-lg font-bold text-slate-100 flex items-center gap-2">
                          {exp.role}
                        </h3>
                        <span className={cn("text-xs font-semibold tracking-wider", exp.textColor, exp.glowColor)}>
                          @ {exp.company}
                        </span>
                      </div>
                    </div>

                    {/* Expand/Collapse Trigger */}
                    <motion.div
                      animate={{ rotate: isExpanded ? 180 : 0 }}
                      transition={{ duration: 0.3 }}
                      className="p-1.5 rounded-lg border border-slate-800 bg-slate-900/60 text-slate-400"
                    >
                      <ChevronDown className="h-4 w-4" />
                    </motion.div>
                  </div>

                  {/* Expanded Content Drawer */}
                  <AnimatePresence initial={false}>
                    {isExpanded && (
                      <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: "auto" }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.35, ease: "easeInOut" }}
                        className="mt-6 pt-5 border-t border-slate-800/40 space-y-5"
                      >
                        {/* Daily details */}
                        <div className="space-y-2">
                          <p className="text-[10px] font-bold text-slate-500 font-mono tracking-widest flex items-center gap-1.5">
                            <Briefcase className="w-3.5 h-3.5" />
                            // RESPONSABILIDADES CLAVE:
                          </p>
                          <ul className="space-y-2 text-xs md:text-sm text-slate-300 pl-4 list-none">
                            {exp.details.map((detail, dIdx) => (
                              <li key={dIdx} className="relative before:content-['▹'] before:absolute before:-left-4 before:text-fuchsia-500 before:font-bold">
                                {detail}
                              </li>
                            ))}
                          </ul>
                        </div>

                        {/* Achievements details */}
                        {exp.achievements.length > 0 && (
                          <div className="space-y-2">
                            <p className="text-[10px] font-bold text-slate-500 font-mono tracking-widest flex items-center gap-1.5">
                              <Award className="w-3.5 h-3.5" />
                              // LOGRO DESTACADO:
                            </p>
                            <div className="border border-cyan-500/20 bg-cyan-950/10 p-3 rounded-xl">
                              {exp.achievements.map((achievement, aIdx) => (
                                <p key={aIdx} className="text-xs text-cyan-200/90 leading-relaxed pl-1">
                                  🏆 {achievement}
                                </p>
                              ))}
                            </div>
                          </div>
                        )}

                        {/* Tech Stack used */}
                        <div className="space-y-2 pt-2">
                          <p className="text-[10px] font-bold text-slate-500 font-mono tracking-widest flex items-center gap-1.5">
                            <Code className="w-3.5 h-3.5" />
                            // TECNOLOGÍAS APLICADAS:
                          </p>
                          <div className="flex flex-wrap gap-2">
                            {exp.techUsed.map((tech) => (
                              <span 
                                key={tech}
                                className="text-[9px] font-mono font-semibold px-2.5 py-1 rounded bg-slate-900 border border-slate-800 text-slate-300 hover:border-cyan-500/30 transition-all select-none"
                              >
                                {tech}
                              </span>
                            ))}
                          </div>
                        </div>

                      </motion.div>
                    )}
                  </AnimatePresence>

                </motion.div>
              </div>

            </motion.div>
          );
        })}

      </div>
    </main>
    <CinematicFooter />
    </>
  );
}
