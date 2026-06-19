"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { User, Briefcase, Code, Terminal, Database, Shield } from 'lucide-react';
import { CyberCard } from '@/components/ui/cyber-card';
import { getAssetPath, cn } from '@/lib/utils';
import { CinematicFooter } from '@/components/ui/motion-footer';

const techStack = [
  { name: 'Python', category: 'Backend & Data Science', level: 'Avanzado', glow: 'hover:shadow-[0_0_15px_#3776ab] hover:border-[#3776ab]/60', textColor: 'text-[#3776ab]', icon: 'Py' },
  { name: 'SQL Server', category: 'Database & Procedimientos', level: 'Avanzado', glow: 'hover:shadow-[0_0_15px_#cc292b] hover:border-[#cc292b]/60', textColor: 'text-[#cc292b]', icon: 'SQL' },
  { name: 'SSIS', category: 'Data Integration & ETL', level: 'Intermedio', glow: 'hover:shadow-[0_0_15px_#00a2ed] hover:border-[#00a2ed]/60', textColor: 'text-[#00a2ed]', icon: 'SSIS' },
  { name: 'Power BI', category: 'Dashboards & Analítica', level: 'Avanzado', glow: 'hover:shadow-[0_0_15px_#f2c811] hover:border-[#f2c811]/60', textColor: 'text-[#f2c811]', icon: 'PBI' },
  { name: 'Excel Avanzado', category: 'Hojas de Cálculo & Macros', level: 'Avanzado', glow: 'hover:shadow-[0_0_15px_#1f7246] hover:border-[#1f7246]/60', textColor: 'text-[#1f7246]', icon: 'XLS' },
  { name: 'AS400', category: 'Extracción IBM Systems', level: 'Intermedio', glow: 'hover:shadow-[0_0_15px_#9d4edd] hover:border-[#9d4edd]/60', textColor: 'text-[#9d4edd]', icon: 'AS' },
  { name: 'Git & GitHub', category: 'Control de Versiones', level: 'Avanzado', glow: 'hover:shadow-[0_0_15px_#f05032] hover:border-[#f05032]/60', textColor: 'text-[#f05032]', icon: 'Git' },
  { name: 'JavaScript', category: 'Frontend Logic', level: 'Avanzado', glow: 'hover:shadow-[0_0_15px_#f7df1e] hover:border-[#f7df1e]/60', textColor: 'text-[#f7df1e]', icon: 'JS' },
  { name: 'React & Next.js', category: 'Desarrollo Web Apps', level: 'Avanzado', glow: 'hover:shadow-[0_0_15px_#61dafb] hover:border-[#61dafb]/60', textColor: 'text-[#61dafb]', icon: 'React' },
  { name: 'HTML & CSS', category: 'Estructura & Estilos', level: 'Avanzado', glow: 'hover:shadow-[0_0_15px_#e34f26] hover:border-[#e34f26]/60', textColor: 'text-[#e34f26]', icon: 'CSS' },
  { name: 'APIs Rest', category: 'Integración Web', level: 'Avanzado', glow: 'hover:shadow-[0_0_15px_#00f0ff] hover:border-[#00f0ff]/60', textColor: 'text-[#00f0ff]', icon: 'API' },
  { name: 'ETL Pipelines', category: 'Ingeniería de Datos', level: 'Avanzado', glow: 'hover:shadow-[0_0_15px_#ff2b6a] hover:border-[#ff2b6a]/60', textColor: 'text-[#ff2b6a]', icon: 'ETL' }
];

export default function SobreMiPage() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.15 }
    }
  } as const;

  const itemVariants = {
    hidden: { opacity: 0, y: 25 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { type: "spring", stiffness: 100, damping: 15 }
    }
  } as const;

  return (
    <>
    <main className="relative min-h-screen bg-[#05060a] pt-28 pb-20 px-6 md:px-12 max-w-7xl mx-auto overflow-hidden">
      
      {/* Background cyber glowing elements */}
      <div className="absolute top-1/4 left-1/4 h-[300px] w-[300px] rounded-full bg-[#9d4edd]/5 blur-3xl pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/4 h-[300px] w-[300px] rounded-full bg-[#00f0ff]/5 blur-3xl pointer-events-none" />

      {/* Decorative HUD header lines */}
      <div className="flex items-center gap-3 mb-12">
        <span className="font-mono text-[#ff2b6a] text-sm tracking-widest">[01 // ABOUT_ME_SYS]</span>
        <h1 className="text-3xl md:text-4xl font-extrabold tracking-tight text-glow-cyan text-slate-100 uppercase">
          Sobre Mí
        </h1>
        <div className="h-[1px] flex-grow bg-cyan-500/20" />
      </div>

      <motion.div 
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start"
      >
        
        {/* Left Column: Big 3D Pop-out Avatar & Visual Accents */}
        <motion.div 
          variants={itemVariants}
          className="lg:col-span-4 flex flex-col items-center justify-center text-center lg:sticky lg:top-32"
        >
          <div className="relative">
            {/* Pulsing purple glowing ring */}
            <div className="relative w-56 h-56 md:w-64 md:h-64">
              <div className="absolute inset-0 rounded-full border-4 border-[#9d4edd] shadow-[0_0_35px_rgba(157,78,221,0.8),inset_0_0_20px_rgba(157,78,221,0.6)] bg-slate-950/80 animate-[pulse_4s_infinite]" />
              
              {/* Animating container that slides up the avatar */}
              <motion.div
                initial={{ opacity: 0, scale: 0.8, y: 35 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                transition={{ type: "spring", stiffness: 80, damping: 12, delay: 0.2 }}
                className="absolute inset-0"
              >
                {/* Layer 1: Torso/Shoulders clipped inside circular border */}
                <div className="absolute inset-0 rounded-full overflow-hidden">
                  <img 
                    src={getAssetPath("img/alexis-sin-fondo.png")} 
                    alt="Alexis Samboy Avatar Body" 
                    className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[125%] h-[125%] object-cover origin-bottom"
                    onError={(e) => {
                      const target = e.target as HTMLImageElement;
                      target.src = getAssetPath("img/alexis-samboy.jpg");
                    }}
                  />
                </div>
                
                {/* Layer 2: Head protruding OUTSIDE the circular border (on top) */}
                <img 
                  src={getAssetPath("img/alexis-sin-fondo.png")} 
                  alt="Alexis Samboy Avatar Head" 
                  className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[125%] h-[125%] object-cover origin-bottom pointer-events-none"
                  style={{ clipPath: 'polygon(0 0, 100% 0, 100% 55%, 0 55%)' }}
                  onError={(e) => {
                    const target = e.target as HTMLImageElement;
                    target.src = getAssetPath("img/alexis-samboy.jpg");
                  }}
                />
              </motion.div>
            </div>
            
            {/* Simulated shadow */}
            <div className="w-36 h-2 bg-[#9d4edd]/30 rounded-full blur-md mx-auto mt-4" />
          </div>

          <div className="mt-6 font-mono text-sm text-slate-300">
            <span className="text-[#00f0ff] font-bold">// </span>
            <span>Alexis Samboy Herrera</span>
            <div className="text-xs text-slate-500 mt-1">Santo Domingo, República Dominicana</div>
          </div>
        </motion.div>

        {/* Right Column: Profile Content */}
        <div className="lg:col-span-8 space-y-12">
          
          {/* Section 1: Personal Introduction */}
          <motion.section variants={itemVariants} className="space-y-4">
            <h2 className="text-xl md:text-2xl font-bold text-[#00f0ff] text-glow-cyan flex items-center gap-2">
              <User className="w-5 h-5 text-cyan-400" />
              Introducción Personal
            </h2>
            <div className="h-[1px] w-24 bg-gradient-to-r from-cyan-500 to-transparent" />
            <div className="text-slate-300 space-y-4 text-sm md:text-base leading-relaxed font-sans">
              <p>
                Soy un especialista en **Business Intelligence & Estrategia Digital** apasionado por descifrar historias complejas ocultas en grandes conjuntos de datos y transformarlas en decisiones corporativas lógicas y accionables.
              </p>
              <p>
                A través del diseño y estructuración de modelos relacionales, la optimización de procesos de extracción y transformación de datos (ETL) y el desarrollo de cuadros de mando interactivos e intuitivos, facilito el crecimiento de las organizaciones basándome en evidencia analítica sólida.
              </p>
              <p>
                Además, como parte de mi visión tecnológica, impulso la marca **Nexora**, un espacio enfocado en aportar innovación mediante transformación digital, analítica avanzada de datos y el desarrollo de experiencias y plataformas web modernas a medida. Creo firmemente que la automatización y la estructuración tecnológica son los catalizadores más poderosos para maximizar la eficiencia y rentabilidad empresarial.
              </p>
            </div>
          </motion.section>

          {/* Section 2: Current Work (Asociación Peravia) */}
          <motion.section variants={itemVariants} className="space-y-4">
            <h2 className="text-xl md:text-2xl font-bold text-[#ff2b6a] text-glow-magenta flex items-center gap-2">
              <Briefcase className="w-5 h-5 text-fuchsia-500" />
              Trabajo Actual
            </h2>
            <div className="h-[1px] w-24 bg-gradient-to-r from-fuchsia-500 to-transparent" />
            
            <CyberCard borderColor="magenta" className="bg-slate-950/70 border-[#ff2b6a]/30">
              <div className="space-y-4">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-fuchsia-500/10 pb-3">
                  <div>
                    <h3 className="text-lg font-bold text-slate-100">Oficial de Inteligencia de Negocios</h3>
                    <p className="text-xs text-fuchsia-400 font-mono tracking-wider">Asociación Peravia de Ahorros y Préstamos</p>
                  </div>
                  <span className="text-xs font-mono px-3 py-1 rounded-full border border-[#ff2b6a]/30 bg-[#ff2b6a]/5 text-slate-300 w-fit">
                    Abr 2026 - Presente
                  </span>
                </div>
                
                <p className="text-xs text-slate-400 font-mono tracking-widest">// RESPONSABILIDADES Y TAREAS DIARIAS:</p>
                
                <ul className="grid grid-cols-1 md:grid-cols-2 gap-3 text-xs md:text-sm text-slate-300 font-sans list-none pl-0">
                  {[
                    'Desarrollo e implementación de cuadros de mando (dashboards) ejecutivos interactivos en Power BI.',
                    'Automatización y orquestación de procesos de integración y flujos de datos (ETL).',
                    'Levantamiento detallado de requerimientos técnicos de negocio con líderes de área.',
                    'Extracción de información histórica y análisis profundo de datos directamente desde bases de datos AS400.',
                    'Auditoría y soporte analítico a la toma de decisiones estratégicas basadas en KPIs de negocio.',
                    'Documentación técnica y funcional de la infraestructura de Business Intelligence institucional.'
                  ].map((task, idx) => (
                    <li key={idx} className="relative pl-5 before:content-['⚡'] before:absolute before:left-0 before:text-fuchsia-500">
                      {task}
                    </li>
                  ))}
                </ul>
              </div>
            </CyberCard>
          </motion.section>

          {/* Section 3: Tech Stack Grid */}
          <motion.section variants={itemVariants} className="space-y-4">
            <h2 className="text-xl md:text-2xl font-bold text-[#9d4edd] text-glow-purple flex items-center gap-2">
              <Code className="w-5 h-5 text-purple-400" />
              Tecnologías que uso día a día
            </h2>
            <div className="h-[1px] w-24 bg-gradient-to-r from-purple-500 to-transparent" />
            
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
              {techStack.map((tech, index) => (
                <div
                  key={tech.name}
                  className={cn(
                    'relative rounded-xl border border-cyan-500/10 bg-slate-950/40 p-4 transition-all duration-300 select-none group cursor-default flex flex-col justify-between min-h-[100px]',
                    tech.glow
                  )}
                >
                  <div className="flex justify-between items-start">
                    <span className={cn("font-mono text-xs font-bold", tech.textColor)}>
                      {tech.icon}
                    </span>
                    <span className="text-[9px] font-mono text-slate-500 uppercase tracking-widest">
                      {tech.level}
                    </span>
                  </div>
                  
                  <div className="mt-3">
                    <h4 className="text-sm font-semibold text-slate-200 group-hover:text-slate-100 transition-colors">
                      {tech.name}
                    </h4>
                    <p className="text-[10px] text-slate-500 font-mono mt-0.5 truncate">
                      {tech.category}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </motion.section>

        </div>
      </motion.div>
    </main>
    <CinematicFooter />
    </>
  );
}
