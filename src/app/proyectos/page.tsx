"use client";

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Terminal, Database, Code, Cpu, ExternalLink, Globe, LayoutGrid, X } from 'lucide-react';
import { getAssetPath, cn } from '@/lib/utils';

interface Project {
  id: string;
  title: string;
  category: 'python' | 'sql' | 'etl' | 'bi' | 'web' | 'nexora';
  description: string;
  stack: string[];
  problem: string;
  outcome: string;
  image: string;
  github?: string;
  demo?: string;
}

const projectsData: Project[] = [
  {
    id: "p1",
    title: "Tweets Copa Mundial FIFA Tracker",
    category: "python",
    description: "Automatización para la recolección, limpieza y procesamiento estructurado de tweets globales relacionados con la Copa Mundial de Fútbol.",
    stack: ["Python", "Pandas", "BeautifulSoup", "Jupyter Notebook", "NLTK"],
    problem: "Dificultad para capturar y estructurar grandes volúmenes de opiniones sociales en tiempo real en redes para realizar análisis de sentimientos.",
    outcome: "Recolección y almacenamiento estructurado de más de 50,000 tweets diarios en un dataset CSV limpio listo para minería de textos.",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=600&auto=format&fit=crop",
    github: "https://github.com/AlexisSamboy"
  },
  {
    id: "p2",
    title: "Data Processor Auto Utility",
    category: "python",
    description: "Utilidad en línea de comandos para la limpieza, transformación y volcado automático de reportes contables crudos a base de datos relacional.",
    stack: ["Python", "OpenPyXL", "SQLite", "OS Shell"],
    problem: "Procesar reportes financieros manuales diariamente consumía más de 2 horas al equipo administrativo y provocaba errores humanos.",
    outcome: "Limpieza automática del archivo de entrada y volcado a base de datos en menos de 5 segundos, enviando reporte consolidado final.",
    image: "https://images.unsplash.com/photo-1526304640581-d334cdbbf45e?q=80&w=600&auto=format&fit=crop",
    github: "https://github.com/AlexisSamboy"
  },
  {
    id: "p3",
    title: "Core Database Indexes Audit",
    category: "sql",
    description: "Auditoría exhaustiva del rendimiento de la base de datos central, rediseño de índices fragmentados y optimización de store procedures.",
    stack: ["SQL Server", "T-SQL", "Query Analyzer", "Execution Plans"],
    problem: "Las consultas financieras de cierre de mes provocaban bloqueos en las tablas del core y tardaban más de 15 minutos en resolver.",
    outcome: "Reducción del tiempo de ejecución de reportes clave a 4 segundos (97% de optimización) y erradicación total de interbloqueos (deadlocks).",
    image: "https://images.unsplash.com/photo-1544383835-bda2bc66a55d?q=80&w=600&auto=format&fit=crop",
    github: "https://github.com/AlexisSamboy"
  },
  {
    id: "p4",
    title: "Historical Transaction Consolidator",
    category: "sql",
    description: "Diseño e implementación de vistas relacionales indexadas complejas para la conciliación de transacciones históricas multicanal.",
    stack: ["PostgreSQL", "T-SQL", "Window Functions", "CTEs"],
    problem: "Inexistencia de un histórico unificado de movimientos debido a la fragmentación de la información de transacciones bancarias antiguas.",
    outcome: "Consolidación de transacciones de más de 5 años de antigüedad en un esquema unificado, accesible para auditoría forense en segundos.",
    image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?q=80&w=600&auto=format&fit=crop",
    github: "https://github.com/AlexisSamboy"
  },
  {
    id: "p5",
    title: "Financial Consolidation Pipeline",
    category: "etl",
    description: "Pipeline SSIS robusto para la extracción automática, depuración de anomalías y carga de saldos financieros diarios de sucursales.",
    stack: ["SSIS (Integration Services)", "T-SQL", "SQL Agent", "Batch Scripting"],
    problem: "Cargas manuales diarias descentralizadas de balances que generaban duplicados y descuadres recurrentes en el cierre contable.",
    outcome: "Proceso totalmente automatizado programado a medianoche, con control de alertas por email y registro inmediato de anomalías de red.",
    image: "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?q=80&w=600&auto=format&fit=crop",
    github: "https://github.com/AlexisSamboy"
  },
  {
    id: "p6",
    title: "Sales & Revenue Dashboard",
    category: "bi",
    description: "Cuadro de mando interactivo y dinámico para el análisis geográfico e histórico de facturación por zona y canal de venta.",
    stack: ["Power BI", "DAX", "Power Query", "Data Modeling"],
    problem: "La dirección general tardaba 10 días tras el cierre del mes en obtener un reporte visual consolidado del desempeño comercial.",
    outcome: "Monitoreo en tiempo real con segmentación interactiva por producto y vendedor, permitiendo tomar medidas de marketing en 24 horas.",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=600&auto=format&fit=crop",
    github: "https://github.com/AlexisSamboy"
  },
  {
    id: "p7",
    title: "Executive KPI Monitor",
    category: "bi",
    description: "Modelo en estrella y dashboard para el seguimiento cuantitativo de objetivos corporativos y rendimiento financiero por gerencia.",
    stack: ["Power BI", "DAX", "SQL Server", "Excel Datasets"],
    problem: "Dispersión de los objetivos de rendimiento estratégico, dificultando medir el cumplimiento en tiempo real de los gerentes.",
    outcome: "Unificación de KPIs en una única interfaz gráfica neón con alertas automáticas de desviación de metas respecto al plan anual.",
    image: "https://images.unsplash.com/photo-1551836022-d5d88e9218df?q=80&w=600&auto=format&fit=crop",
    github: "https://github.com/AlexisSamboy"
  },
  {
    id: "p8",
    title: "Nexora Corporate Portal",
    category: "web",
    description: "Sitio corporativo oficial para la marca Nexora, destacando una experiencia inmersiva holográfica en modo oscuro.",
    stack: ["Next.js", "React", "Tailwind CSS", "Framer Motion"],
    problem: "Necesidad de una landing page premium e interactiva para posicionar los servicios de transformación digital y desarrollo de Nexora.",
    outcome: "Puntuación de rendimiento perfecta (100% estático), tiempos de carga de 0.8s y conversión efectiva de nuevos clientes.",
    image: "https://images.unsplash.com/photo-1542831371-29b0f74f9713?q=80&w=600&auto=format&fit=crop",
    github: "https://github.com/AlexisSamboy",
    demo: "https://github.com/AlexisSamboy"
  },
  {
    id: "p9",
    title: "Nexora Analytics Panel",
    category: "nexora",
    description: "Portal privado de analítica integrado diseñado para clientes de Nexora, con resúmenes dinámicos de marketing.",
    stack: ["React", "Tailwind CSS", "Chart.js", "REST APIs"],
    problem: "Los clientes necesitaban reportes simplificados de sus campañas sin requerir licencias corporativas costosas de BI de escritorio.",
    outcome: "Dashboard integrado y responsivo en web con autenticación segura y visualización inmediata que aumentó la retención de cuentas en un 40%.",
    image: "https://images.unsplash.com/photo-1508847154043-be12a26c86c5?q=80&w=600&auto=format&fit=crop",
    github: "https://github.com/AlexisSamboy"
  }
];

const categories = [
  { id: 'all', label: 'Todos', icon: LayoutGrid },
  { id: 'python', label: 'Python Projects', icon: Code },
  { id: 'sql', label: 'SQL Projects', icon: Database },
  { id: 'etl', label: 'ETL / SSIS Projects', icon: Database },
  { id: 'bi', label: 'Business Intelligence', icon: Cpu },
  { id: 'web', label: 'Web Development', icon: ExternalLink },
  { id: 'nexora', label: 'Nexora Client Work', icon: Globe },
];

export default function ProyectosPage() {
  const [activeCategory, setActiveCategory] = useState<string>('all');
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  const filteredProjects = activeCategory === 'all'
    ? projectsData
    : projectsData.filter(p => p.category === activeCategory);

  return (
    <main className="relative min-h-screen bg-[#05060a] pt-28 pb-20 px-6 md:px-12 max-w-7xl mx-auto overflow-hidden">
      
      {/* Background ambient light */}
      <div className="absolute top-1/4 left-1/2 h-[350px] w-[350px] -translate-x-1/2 rounded-full bg-[#00f0ff]/5 blur-3xl pointer-events-none" />

      {/* Page Title Header */}
      <div className="flex items-center gap-3 mb-10">
        <span className="font-mono text-[#ff2b6a] text-xs tracking-widest">[03 // DEV_PORTFOLIO]</span>
        <h1 className="text-2xl md:text-3xl font-black text-glow-cyan text-slate-100 uppercase">
          Proyectos
        </h1>
        <div className="h-[1px] flex-grow bg-cyan-500/20" />
      </div>

      {/* Tabs list (Cyberpunk folders style) */}
      <div className="flex flex-wrap gap-2 mb-10 border-b border-cyan-500/10 pb-4">
        {categories.map((cat) => {
          const CatIcon = cat.icon;
          const isActive = activeCategory === cat.id;
          return (
            <button
              key={cat.id}
              onClick={() => setActiveCategory(cat.id)}
              className={cn(
                "flex items-center gap-2 px-4 py-2 text-xs md:text-sm font-mono tracking-wider border rounded-xl transition-all duration-300 cursor-pointer select-none",
                isActive
                  ? "bg-[#00f0ff]/10 border-[#00f0ff] text-[#00f0ff] shadow-[0_0_12px_rgba(0,240,255,0.2)]"
                  : "bg-slate-950/40 border-slate-800 text-slate-400 hover:text-slate-200 hover:border-slate-700"
              )}
            >
              <CatIcon className="w-3.5 h-3.5" />
              {cat.label}
            </button>
          );
        })}
      </div>

      {/* Projects Grid */}
      <motion.div 
        layout 
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8"
      >
        <AnimatePresence mode="popLayout">
          {filteredProjects.map((project) => (
            <motion.div
              layout
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              transition={{ duration: 0.3 }}
              key={project.id}
              onClick={() => setSelectedProject(project)}
              className="relative flex flex-col justify-between overflow-hidden rounded-2xl border border-cyan-500/15 bg-slate-950/40 hover:border-cyan-400/60 hover:shadow-[0_0_20px_rgba(0,240,255,0.1)] transition-all duration-300 cursor-pointer group group-hover:-translate-y-1 select-none min-h-[360px]"
            >
              {/* Circuit background overlay */}
              <div className="absolute inset-0 bg-[linear-gradient(rgba(18,16,16,0)_50%,rgba(0,0,0,0.15)_50%)] bg-[size:100%_4px] opacity-15 pointer-events-none" />

              {/* Card visual header */}
              <div className="relative h-44 overflow-hidden bg-slate-950">
                <img
                  src={getAssetPath(project.image)}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-103"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/40 to-transparent" />
                <span className="absolute top-3 left-3 text-[9px] font-mono font-bold tracking-widest px-2.5 py-0.5 rounded border border-cyan-500/20 bg-slate-950/80 text-cyan-400">
                  {project.category.toUpperCase()}
                </span>
              </div>

              {/* Card info */}
              <div className="p-5 flex-grow flex flex-col justify-between">
                <div>
                  <h3 className="text-base font-bold text-slate-100 group-hover:text-[#00f0ff] transition-colors duration-300">
                    {project.title}
                  </h3>
                  <p className="text-xs text-slate-400 mt-2 line-clamp-3 leading-relaxed">
                    {project.description}
                  </p>
                </div>

                {/* Tech tags list */}
                <div className="mt-4 pt-4 border-t border-slate-800/40 space-y-3">
                  <div className="flex flex-wrap gap-1.5">
                    {project.stack.slice(0, 3).map(tech => (
                      <span key={tech} className="text-[9px] font-mono px-2 py-0.5 rounded bg-slate-900 border border-slate-800 text-slate-400">
                        {tech}
                      </span>
                    ))}
                    {project.stack.length > 3 && (
                      <span className="text-[9px] font-mono px-2 py-0.5 text-slate-500">
                        +{project.stack.length - 3}
                      </span>
                    )}
                  </div>
                  
                  {/* Action prompt */}
                  <span className="text-[10px] font-mono text-[#00f0ff] opacity-60 group-hover:opacity-100 flex items-center gap-1.5 transition-opacity">
                    VER_CASE_STUDY_SYS ⚡
                  </span>
                </div>
              </div>
            </motion.div>
          ))}
        </AnimatePresence>
      </motion.div>

      {/* Case Study Modal Overlay */}
      <AnimatePresence>
        {selectedProject && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-[#05060a]/90 backdrop-blur-xl"
            onClick={() => setSelectedProject(null)}
          >
            {/* Modal Body */}
            <motion.div
              initial={{ scale: 0.9, y: 20 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.9, y: 20 }}
              transition={{ type: "spring", stiffness: 300, damping: 25 }}
              className="relative w-full max-w-3xl bg-slate-950 border border-cyan-500/20 rounded-2xl shadow-[0_0_50px_rgba(0,240,255,0.15)] overflow-hidden max-h-[90vh] flex flex-col"
              onClick={e => e.stopPropagation()}
            >
              
              {/* Header Image */}
              <div className="relative h-60 md:h-72 w-full bg-slate-900 shrink-0">
                <img
                  src={getAssetPath(selectedProject.image)}
                  alt={selectedProject.title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/20 to-transparent" />
                
                {/* Close Button */}
                <button
                  onClick={() => setSelectedProject(null)}
                  className="absolute top-4 right-4 p-2 bg-slate-950/80 border border-slate-800 rounded-full hover:border-[#ff2b6a] hover:text-[#ff2b6a] transition-all cursor-pointer"
                  aria-label="Close details"
                >
                  <X className="h-5 w-5" />
                </button>

                <div className="absolute bottom-4 left-6">
                  <span className="text-[10px] font-mono font-bold tracking-widest px-2.5 py-0.5 rounded border border-cyan-500/20 bg-slate-950/90 text-cyan-400">
                    {selectedProject.category.toUpperCase()}
                  </span>
                  <h2 className="text-xl md:text-2xl font-black text-slate-100 text-glow-cyan mt-2">
                    {selectedProject.title}
                  </h2>
                </div>
              </div>

              {/* Scrollable details panel */}
              <div className="p-6 md:p-8 overflow-y-auto space-y-6 max-h-[calc(90vh-240px)] font-sans">
                
                {/* General description */}
                <div className="space-y-2">
                  <p className="text-[10px] font-mono font-bold tracking-widest text-[#00f0ff]">
                    // RESUMEN_DEL_PROYECTO
                  </p>
                  <p className="text-slate-300 text-sm md:text-base leading-relaxed">
                    {selectedProject.description}
                  </p>
                </div>

                {/* Problem & Solution block */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-4 border-t border-slate-800/40">
                  <div className="space-y-2">
                    <p className="text-[10px] font-mono font-bold tracking-widest text-[#ff2b6a]">
                      // EL_PROBLEMA
                    </p>
                    <p className="text-slate-300 text-xs md:text-sm leading-relaxed border-l-2 border-[#ff2b6a]/30 pl-3">
                      {selectedProject.problem}
                    </p>
                  </div>
                  <div className="space-y-2">
                    <p className="text-[10px] font-mono font-bold tracking-widest text-[#00f0ff]">
                      // EL_RESULTADO_OBTENIDO
                    </p>
                    <p className="text-slate-300 text-xs md:text-sm leading-relaxed border-l-2 border-[#00f0ff]/30 pl-3">
                      {selectedProject.outcome}
                    </p>
                  </div>
                </div>

                {/* Applied technologies stack */}
                <div className="space-y-2 pt-4 border-t border-slate-800/40">
                  <p className="text-[10px] font-mono font-bold tracking-widest text-[#9d4edd]">
                    // STACK_TECNOLOGICO_APLICADO
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {selectedProject.stack.map(tech => (
                      <span key={tech} className="text-xs font-mono px-3 py-1 rounded bg-slate-900 border border-slate-800 text-slate-200">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Action buttons footer */}
                <div className="flex items-center gap-4 pt-6 border-t border-slate-800/40">
                  {selectedProject.github && (
                    <a
                      href={selectedProject.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 px-5 py-2.5 rounded-full bg-slate-900 border border-slate-800 hover:border-cyan-400 text-slate-100 hover:text-[#00f0ff] font-mono text-xs tracking-wider transition-all cursor-pointer"
                    >
                      <Globe className="w-4 h-4" />
                      GITHUB_REPO
                    </a>
                  )}
                  {selectedProject.demo && (
                    <a
                      href={selectedProject.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 px-5 py-2.5 rounded-full bg-cyan-950/20 border border-cyan-500/20 hover:border-cyan-400 text-cyan-200 hover:text-cyan-100 font-mono text-xs tracking-wider transition-all cursor-pointer shadow-[0_0_15px_rgba(0,240,255,0.05)]"
                    >
                      <Globe className="w-4 h-4" />
                      VER_DEMO_WEB
                    </a>
                  )}
                </div>

              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

    </main>
  );
}
