'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { 
  Terminal, 
  Database, 
  Cpu, 
  Briefcase, 
  Award, 
  ExternalLink, 
  ChevronRight, 
  FileText, 
  Layers
} from 'lucide-react';
import { getAssetPath } from '@/lib/utils';
import MinimalistHeroDemo from '@/components/ui/demo';
import { CyberCard } from '@/components/ui/cyber-card';
import { HolographicDataViz } from '@/components/ui/holographic-data-viz';
import { StackMarquee } from '@/components/ui/stack-marquee';
import { VideoScrollHero } from '@/components/ui/video-scroll-hero';
import { AnimatedFolder } from '@/components/ui/3d-folder';
import { Accordion03 } from '@/components/ui/accordion-03';
import { CinematicFooter } from '@/components/ui/motion-footer';

export default function Home() {
  const experiences = [
    {
      role: 'Soporte Técnico en Sistemas',
      company: 'Loteka SRL',
      period: 'Jun 2024 - Ago 2025',
      icon: Terminal,
      borderColor: 'cyan' as const,
      textColor: 'text-[#00f0ff]',
      glowColor: 'text-glow-cyan',
      tag: 'SYSTEM_SUPPORT_V1',
      details: [
        'Administración y mantenimiento de infraestructura tecnológica para operaciones comerciales y financieras.',
        'Apoyo clave en la validación de consistencia de datos en sistemas de ventas transaccionales.'
      ]
    },
    {
      role: 'Soporte Técnico Informático',
      company: 'Procuraduría General de la República Dominicana',
      period: 'Ago 2025 - Mar 2026',
      icon: Database,
      borderColor: 'purple' as const,
      textColor: 'text-[#9d4edd]',
      glowColor: 'text-glow-purple',
      tag: 'DATA_INFRASTRUCTURE_V2',
      details: [
        'Gestión y resolución de incidencias técnicas en infraestructura local y cloud.',
        'Apoyo estratégico en la organización, auditoría y resguardo de información digital institucional.',
        'Instalación, configuración y mantenimiento preventivo de sistemas críticos de software y hardware.'
      ]
    },
    {
      role: 'Oficial de Inteligencia de Negocios',
      company: 'Asociación Peravia de Ahorros y Préstamos',
      period: 'Abr 2026 - Presente',
      icon: Cpu,
      borderColor: 'magenta' as const,
      textColor: 'text-[#ff2b6a]',
      glowColor: 'text-glow-magenta',
      tag: 'BI_INTELLIGENCE_CORE_V3',
      details: [
        'Automatización de flujos de extracción, transformación y carga (ETL) para la consolidación de reportes financieros.',
        'Desarrollo y mantenimiento de tableros de control ejecutivos (dashboards) en Power BI para el monitoreo de KPIs de negocio.',
        'Análisis avanzado de bases de datos relacionales y generación de consultas SQL optimizadas para soporte de decisiones estratégicas.'
      ]
    }
  ];

  const pythonCode = `import pandas as pd
from sklearn.cluster import KMeans

# Cargar base de datos de clientes
df = pd.read_csv('banco_clientes.csv')

# Clustering para segmentación de perfiles
kmeans = KMeans(n_clusters=4, random_state=42)
df['segmento'] = kmeans.fit_predict(df[['ingresos', 'historial_crediticio']])

print("Clientes segmentados con éxito:")
print(df.groupby('segmento').mean())`;

  const sqlCode = `WITH VentasMensuales AS (
  SELECT 
    cliente_id, 
    DATE_TRUNC('month', fecha) as mes, 
    SUM(monto) as total_monto
  FROM transacciones
  GROUP BY cliente_id, DATE_TRUNC('month', fecha)
)
SELECT 
  c.nombre, 
  v.mes, 
  v.total_monto
FROM VentasMensuales v
JOIN clientes c ON c.id = v.cliente_id
WHERE v.total_monto > 1500
ORDER BY v.total_monto DESC;`;

  const foldersData = [
    {
      title: "Desarrollo Web / BI",
      description: "Cuadros de mando interactivos en Power BI, minería de textos en redes sociales y KPIs financieros automatizados.",
      projects: [
        {
          id: "web-bi-1",
          title: "Tweets Copa Mundial FIFA",
          image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=600&auto=format&fit=crop",
          description: "Análisis completo de sentimiento y Text Mining a partir de un dataset masivo de tweets de la FIFA Mundial 2018. El reporte ejecutivo interactivo permite segmentar por idioma, geolocalización y nivel de engagement emocional en Power BI."
        },
        {
          id: "web-bi-2",
          title: "Dashboard de Ventas",
          image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=600&auto=format&fit=crop",
          description: "Visualizaciones dinámicas en Power BI para el seguimiento de rendimiento de ventas, facturación y márgenes operativos por sucursal."
        },
        {
          id: "web-bi-3",
          title: "Reporte Financiero Ejecutivo",
          image: "https://images.unsplash.com/photo-1551836022-d5d88e9218df?q=80&w=600&auto=format&fit=crop",
          description: "Tablero consolidado de balance y pérdidas y ganancias con integración directa a fuentes de bases de datos contables."
        }
      ]
    },
    {
      title: "Analítica de Datos",
      description: "Segmentación de clientes con Python, modelos de clustering de riesgo y análisis exploratorio predictivo (EDA).",
      projects: [
        {
          id: "data-1",
          title: "Perfil Cliente Bancario",
          image: "https://images.unsplash.com/photo-1526304640581-d334cdbbf45e?q=80&w=600&auto=format&fit=crop",
          description: "Procesamiento, limpieza y segmentación de clientes financieros usando algoritmos K-Means de Scikit-Learn. Clasifica a los clientes según ingresos, riesgo y comportamiento transaccional."
        },
        {
          id: "data-2",
          title: "Modelado de Riesgo de Crédito",
          image: "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?q=80&w=600&auto=format&fit=crop",
          description: "Evaluación del historial crediticio con técnicas estadísticas para predecir probabilidades de impago y segmentar carteras de riesgo en el sector bancario."
        },
        {
          id: "data-3",
          title: "Predicción de Churn",
          image: "https://images.unsplash.com/photo-1542831371-29b0f74f9713?q=80&w=600&auto=format&fit=crop",
          description: "Análisis predictivo del abandono de clientes utilizando modelos supervisados en Python y métricas de retención empresarial."
        }
      ]
    },
    {
      title: "Backend & SQL",
      description: "Modelado relacional robusto, tuning de índices, consultas recursivas complejas y optimización de ETLs.",
      projects: [
        {
          id: "sql-1",
          title: "Optimización de Consultas SQL",
          image: "https://images.unsplash.com/photo-1544383835-bda2bc66a55d?q=80&w=600&auto=format&fit=crop",
          description: "Diseño y optimización de consultas en SQL Server mediante CTEs recursivas, creación de índices no agrupados optimizados y análisis del plan de ejecución para transacciones masivas."
        },
        {
          id: "sql-2",
          title: "Diseño de BD Transaccional",
          image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?q=80&w=600&auto=format&fit=crop",
          description: "Estructuración de base de datos normalizada para e-commerce que garantiza la integridad referencial y previene cuellos de botella bajo transacciones concurrentes."
        },
        {
          id: "sql-3",
          title: "Procesos ETL para Data Warehouse",
          image: "https://images.unsplash.com/photo-1508847154043-be12a26c86c5?q=80&w=600&auto=format&fit=crop",
          description: "Desarrollo de scripts de extracción, transformación y carga para migrar y unificar datos transaccionales en un Data Warehouse centralizado."
        }
      ]
    }
  ];

  return (
    <>
      <main className="relative z-10 bg-[#05060a] border-b border-cyan-500/10 rounded-b-3xl shadow-2xl pb-32">
      {/* 1. HERO SECTION */}
      <MinimalistHeroDemo />

      {/* 1.5. VIDEO SCROLL HERO TRANSITION (About Me emerges from inside here) */}
      <VideoScrollHero>
        <div className="max-w-4xl w-full mx-auto bg-slate-950/85 border border-[#00f0ff]/20 backdrop-blur-xl p-8 rounded-2xl shadow-[0_0_50px_rgba(0,240,255,0.15)] relative max-h-[85vh] overflow-y-auto">
          {/* Brackets HUD accent */}
          <div className="absolute top-2 left-2 h-4 w-4 border-t border-l border-cyan-400 opacity-60" />
          <div className="absolute top-2 right-2 h-4 w-4 border-t border-r border-cyan-400 opacity-60" />
          <div className="absolute bottom-2 left-2 h-4 w-4 border-b border-l border-cyan-400 opacity-60" />
          <div className="absolute bottom-2 right-2 h-4 w-4 border-b border-r border-cyan-400 opacity-60" />

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            {/* Left Column: Profile Photo with pulsing purple glow ring */}
            <div className="lg:col-span-4 flex flex-col items-center text-center">
              <div className="relative">
                {/* Purple glowing circle avatar border */}
                <div className="relative w-40 h-40">
                  {/* Background glowing ring behind the head */}
                  <div className="absolute inset-0 rounded-full border-4 border-[#9d4edd] shadow-[0_0_25px_rgba(157,78,221,0.6),inset_0_0_15px_rgba(157,78,221,0.4)] bg-slate-950 animate-[pulse_4s_infinite]" />
                  
                  {/* Animating container that slides up the avatar */}
                  <motion.div
                    initial={{ opacity: 0, scale: 0.7, y: 35 }}
                    whileInView={{ opacity: 1, scale: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ type: "spring", stiffness: 100, damping: 15, delay: 0.3 }}
                    className="absolute inset-0"
                  >
                    {/* Layer 1: Torso/Shoulders clipped inside the circular border */}
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
                {/* Simulated shadow underneath */}
                <div className="w-28 h-1.5 bg-[#9d4edd]/20 rounded-full blur-sm mx-auto mt-3" />
              </div>

              <div className="mt-3 flex items-center gap-1.5 font-mono text-xs text-slate-300">
                <span className="h-2 w-2 rounded-full bg-[#00f0ff] animate-pulse" />
                <span>. Alexis Samboy</span>
              </div>
            </div>

            {/* Right Column: About details */}
            <div className="lg:col-span-8 space-y-6 font-sans">
              <div>
                <h2 className="text-4xl md:text-5xl font-black text-[#00f0ff] text-glow-cyan tracking-tight mb-1">About me.</h2>
                <div className="h-[2px] w-12 bg-[#ff2b6a] text-glow-magenta mb-3" />
                
                <h3 className="text-base font-semibold text-slate-200 mb-2">
                  Insights Architect. BI Developer. Data Strategist.
                </h3>
                <p className="text-slate-300 text-xs leading-relaxed">
                  Transformo datos complejos en soluciones de negocio automatizadas e interactivas. Diseño infraestructuras de reportes eficientes que facilitan la toma de decisiones empresariales estratégicas basadas en evidencia empírica.
                </p>
              </div>

              {/* Contact & Profiles */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2 border-t border-cyan-500/10">
                <div>
                  <h4 className="text-xs font-bold text-[#ff2b6a] text-glow-magenta font-mono mb-1">contact.</h4>
                  <a href="mailto:alexissamboy1998@gmail.com" className="text-[11px] text-slate-300 hover:text-[#00f0ff] transition-all flex items-center gap-1.5 font-mono">
                    <span>⚡ alexissamboy1998@gmail.com</span>
                  </a>
                </div>
                <div>
                  <h4 className="text-xs font-bold text-[#ff2b6a] text-glow-magenta font-mono mb-1">profiles.</h4>
                  <div className="flex flex-col gap-1 text-[10px] text-slate-300 font-mono">
                    <a href="https://linkedin.com/in/alexis-samboy-herrera" target="_blank" className="hover:text-[#00f0ff] truncate">linkedin.com/in/alexis-samboy-herrera</a>
                    <a href="https://github.com/AlexisSamboy" target="_blank" className="hover:text-[#00f0ff] truncate">github.com/AlexisSamboy</a>
                  </div>
                </div>
              </div>

              {/* Skills (badges) */}
              <div className="space-y-3">
                <h4 className="text-xs font-bold text-[#00f0ff] text-glow-cyan font-mono">skills.</h4>
                <div className="flex flex-wrap gap-2.5">
                  {[
                    { abbrev: 'Pbi', name: 'Power BI', border: 'border-[#00f0ff]/40 text-[#00f0ff] hover:shadow-[0_0_12px_#00f0ff] hover:border-[#00f0ff]' },
                    { abbrev: 'Py', name: 'Python', border: 'border-[#ff2b6a]/40 text-[#ff2b6a] hover:shadow-[0_0_12px_#ff2b6a] hover:border-[#ff2b6a]' },
                    { abbrev: 'Sql', name: 'SQL Server', border: 'border-[#9d4edd]/40 text-[#9d4edd] hover:shadow-[0_0_12px_#9d4edd] hover:border-[#9d4edd]' },
                    { abbrev: 'Ex', name: 'Excel', border: 'border-[#00f0ff]/40 text-[#00f0ff] hover:shadow-[0_0_12px_#00f0ff] hover:border-[#00f0ff]' },
                    { abbrev: 'Gt', name: 'Git & GitHub', border: 'border-[#ff2b6a]/40 text-[#ff2b6a] hover:shadow-[0_0_12px_#ff2b6a] hover:border-[#ff2b6a]' },
                    { abbrev: 'Tb', name: 'Tableau', border: 'border-[#9d4edd]/40 text-[#9d4edd] hover:shadow-[0_0_12px_#9d4edd] hover:border-[#9d4edd]' }
                  ].map((sk, idx) => (
                    <div 
                      key={idx}
                      className={`w-9 h-9 rounded-full border flex items-center justify-center font-mono text-[10px] font-bold bg-slate-950/80 cursor-default transition-all duration-300 ${sk.border}`}
                      title={sk.name}
                    >
                      {sk.abbrev}
                    </div>
                  ))}
                </div>
              </div>

              {/* Language */}
              <div className="space-y-3">
                <h4 className="text-xs font-bold text-[#00f0ff] text-glow-cyan font-mono">language.</h4>
                <div className="max-w-md space-y-2">
                  {[
                    { lang: 'Es', name: 'Español', percent: '100%', rating: '10/10' },
                    { lang: 'En', name: 'Inglés', percent: '80%', rating: '8/10' }
                  ].map((l, i) => (
                    <div key={i} className="flex items-center gap-2 text-[10px] font-mono">
                      <span className="w-5 text-slate-400 text-right">{l.lang}</span>
                      <div className="flex-grow h-2 bg-slate-900 border border-cyan-500/10 rounded-full overflow-hidden relative">
                        <div 
                          className="h-full bg-gradient-to-r from-[#9d4edd] to-[#00f0ff] rounded-full" 
                          style={{ width: l.percent }}
                        />
                      </div>
                      <span className="w-8 text-cyan-400 font-bold">{l.rating}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Availability tag */}
              <div className="pt-1">
                <div className="inline-block border border-[#ff2b6a]/30 bg-[#ff2b6a]/5 px-3 py-1.5 rounded-xl text-[10px] font-mono">
                  <span className="text-slate-300">Available for: </span>
                  <span className="text-[#ff2b6a] font-bold text-glow-magenta">Full-time | Remote | Contract</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </VideoScrollHero>

      {/* Grid container with global padding for the rest of the sections */}
      <div className="max-w-6xl mx-auto px-6 md:px-12 mt-12 space-y-32">
        
        {/* 3. TRAYECTORIA TIMELINE (Orden cronológico ascendente con rediseño Cyberpunk) */}
        <section id="experience" className="scroll-mt-24">
          <div className="flex items-center gap-3 mb-16">
            <span className="font-mono text-[#ff2b6a] text-sm tracking-widest">[02 // TIMELINE]</span>
            <h2 className="text-3xl font-bold tracking-tight text-glow-cyan text-slate-100">Trayectoria</h2>
            <div className="h-[1px] flex-grow bg-cyan-500/20" />
          </div>

          <div className="relative space-y-12">
            {/* High-tech vertical neon laser line connector - Positioned at exactly left-[196px] corresponding to grid gap center */}
            <div className="absolute left-[196px] top-4 bottom-4 w-1 bg-gradient-to-b from-[#00f0ff] via-[#9d4edd] to-[#ff2b6a] opacity-40 rounded-full hidden md:block" />

            {experiences.map((exp, i) => {
              const JobIcon = exp.icon;
              return (
                <div key={i} className="relative grid grid-cols-1 md:grid-cols-[180px_1fr] gap-8 group items-start">
                  {/* Glowing 3D node indicator on vertical line - Centered at 196px (196 - 10 = 186px) */}
                  <div className="absolute left-[186px] top-6 h-5 w-5 rounded-full bg-slate-950 border-2 border-cyan-500/60 hidden md:flex items-center justify-center group-hover:border-[#ff2b6a] group-hover:shadow-[0_0_15px_#ff2b6a] transition-all duration-300 z-10">
                    <div className="h-1.5 w-1.5 rounded-full bg-cyan-400 group-hover:bg-[#ff2b6a] transition-colors" />
                  </div>

                  {/* Left Column: Job timeline badge info - w-full on mobile, fixed 180px width on desktop aligned to the right */}
                  <div className="flex flex-col md:text-right font-mono gap-1.5 md:pr-6 md:items-end">
                    <div className="text-[10px] text-slate-400 border border-slate-700/40 px-2 py-0.5 rounded bg-slate-950/40 w-fit md:w-auto">
                      // {exp.tag}
                    </div>
                    <div className="text-xs font-bold text-cyan-400 bg-cyan-950/20 border border-cyan-500/20 px-3 py-1 rounded-full w-fit md:w-auto whitespace-nowrap">
                      {exp.period}
                    </div>
                  </div>

                  {/* Right Column: Premium CyberCard displaying details */}
                  <div className="flex-grow">
                    <CyberCard borderColor={exp.borderColor} className="w-full relative overflow-hidden bg-slate-950/70">
                      {/* Scanning visual overlay lines */}
                      <div className="absolute inset-0 bg-[linear-gradient(rgba(18,16,16,0)_50%,rgba(0,0,0,0.15)_50%)] bg-[size:100%_6px] pointer-events-none opacity-20" />
                      
                      <div className="flex items-start gap-4">
                        <div className="p-3 bg-slate-900 border border-slate-800 rounded-xl hidden sm:block">
                          <JobIcon className={`h-6 w-6 ${exp.textColor} ${exp.glowColor}`} />
                        </div>
                        
                        <div className="space-y-4 flex-grow">
                          <div>
                            <h3 className="text-lg font-bold text-slate-100 group-hover:text-cyan-300 transition-colors flex items-center gap-2">
                              {exp.role}
                            </h3>
                            <span className={`text-sm font-semibold tracking-wider ${exp.textColor} ${exp.glowColor}`}>
                              @ {exp.company}
                            </span>
                          </div>

                          <ul className="space-y-2.5 text-slate-300 font-sans text-xs leading-relaxed pl-4 list-none">
                            {exp.details.map((detail, idx) => (
                              <li key={idx} className="relative before:content-['▹'] before:absolute before:-left-4 before:text-fuchsia-500 before:font-bold">
                                {detail}
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>
                    </CyberCard>
                  </div>
                </div>
              );
            })}
          </div>
        </section>

        {/* 4. TECH MARQUEE */}
        <StackMarquee />

        {/* 5. PROYECTOS DESTACADOS (Carpetas 3D con visualización interactiva) */}
        <motion.section 
          id="projects" 
          className="scroll-mt-24"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, margin: "-100px" }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <div className="flex items-center gap-3 mb-16">
            <span className="font-mono text-[#ff2b6a] text-sm tracking-widest">[03 // PORTFOLIO]</span>
            <h2 className="text-3xl font-bold tracking-tight text-glow-cyan text-slate-100">Proyectos</h2>
            <div className="h-[1px] flex-grow bg-cyan-500/20" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 items-stretch justify-items-center">
            {foldersData.map((folder) => (
              <AnimatedFolder
                key={folder.title}
                title={folder.title}
                projects={folder.projects}
                description={folder.description}
                className="w-full h-full max-w-[340px]"
              />
            ))}
          </div>
        </motion.section>

        {/* 6. CERTIFICACIONES (Accordion interactivo) */}
        <section id="certs" className="scroll-mt-24">
          <div className="flex items-center gap-3 mb-10">
            <span className="font-mono text-[#ff2b6a] text-sm tracking-widest">[04 // CREDENTIALS]</span>
            <h2 className="text-3xl font-bold tracking-tight text-glow-cyan text-slate-100">Certificaciones</h2>
            <div className="h-[1px] flex-grow bg-cyan-500/20" />
          </div>

          <Accordion03 />
        </section>

      </div>
    </main>
    <CinematicFooter />
    </>
  );
}
