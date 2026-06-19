"use client";

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Award, Calendar, ChevronLeft, ChevronRight, X, ZoomIn, ZoomOut, Maximize2, ShieldCheck, Database, Cpu, Code, LayoutGrid, Terminal } from 'lucide-react';
import { getAssetPath, cn } from '@/lib/utils';
import { CinematicFooter } from '@/components/ui/motion-footer';

interface Credential {
  id: string;
  name: string;
  issuer: string;
  year: string;
  category: string;
  categorySlug: 'bi' | 'data-science' | 'python' | 'excel' | 'liderazgo';
  img: string;
  description: string;
  glowColor: string;
  borderColor: string;
  textColor: string;
}

const credentialsData: Credential[] = [
  // 1. Power BI & BI Core
  {
    id: "c1",
    name: "Microsoft Power BI",
    issuer: "Escuela de informática UASD",
    year: "2024",
    category: "Power BI & Business Intelligence",
    categorySlug: 'bi',
    img: "img/certs/certificado-power-bi.png",
    description: "Modelado relacional avanzado, análisis DAX y creación de tableros de control interactivos empresariales.",
    glowColor: "hover:shadow-[0_0_15px_#f2c811] hover:border-[#f2c811]/60",
    borderColor: "border-[#f2c811]/25",
    textColor: "text-[#f2c811]"
  },
  {
    id: "c2",
    name: "Evaluador de Indicadores Clave (KPI)",
    issuer: "Fundación Carlos Slim",
    year: "2025",
    category: "Power BI & Business Intelligence",
    categorySlug: 'bi',
    img: "img/certs/certificado-power-bi.png",
    description: "Metodologías de diseño, levantamiento y evaluación cuantitativa de KPIs de negocio.",
    glowColor: "hover:shadow-[0_0_15px_#f2c811] hover:border-[#f2c811]/60",
    borderColor: "border-[#f2c811]/25",
    textColor: "text-[#f2c811]"
  },
  {
    id: "c3",
    name: "Power BI Inicial",
    issuer: "Educación IT",
    year: "2023",
    category: "Power BI & Business Intelligence",
    categorySlug: 'bi',
    img: "img/certs/certificado-power-bi.png",
    description: "Ingesta y limpieza de datos con Power Query y visualización básica estructurada.",
    glowColor: "hover:shadow-[0_0_15px_#f2c811] hover:border-[#f2c811]/60",
    borderColor: "border-[#f2c811]/25",
    textColor: "text-[#f2c811]"
  },
  // 2. Ciencia de Datos & ETL con Python
  {
    id: "c4",
    name: "Desarrollo de ETL con Python y pandas",
    issuer: "Plataforma UBITS",
    year: "2024",
    category: "Ciencia de Datos & ETL",
    categorySlug: 'data-science',
    img: "img/certs/ciencias-de-datos.png",
    description: "Construcción de pipelines de automatización para la extracción, transformación y carga (ETL) de datasets estructurados con Pandas.",
    glowColor: "hover:shadow-[0_0_15px_#00f0ff] hover:border-[#00f0ff]/60",
    borderColor: "border-[#00f0ff]/25",
    textColor: "text-[#00f0ff]"
  },
  {
    id: "c5",
    name: "Curso de Ciencias de Datos",
    issuer: "Cymetria - Indotel (Talento Digital)",
    year: "2025",
    category: "Ciencia de Datos & ETL",
    categorySlug: 'data-science',
    img: "img/certs/ciencias-de-datos.png",
    description: "Especialización completa en minería de datos, estadística computacional y modelos predictivos básicos.",
    glowColor: "hover:shadow-[0_0_15px_#00f0ff] hover:border-[#00f0ff]/60",
    borderColor: "border-[#00f0ff]/25",
    textColor: "text-[#00f0ff]"
  },
  {
    id: "c6",
    name: "Introducción a las ciencias de datos",
    issuer: "Plataforma UBITS",
    year: "2024",
    category: "Ciencia de Datos & ETL",
    categorySlug: 'data-science',
    img: "img/certs/ciencias-de-datos.png",
    description: "Fundamentos teóricos y metodológicos de la recolección, exploración e interpretación de datos masivos.",
    glowColor: "hover:shadow-[0_0_15px_#00f0ff] hover:border-[#00f0ff]/60",
    borderColor: "border-[#00f0ff]/25",
    textColor: "text-[#00f0ff]"
  },
  // 3. Programación en Python
  {
    id: "c7",
    name: "Programación en Python",
    issuer: "Instituto Tecnológico de las Américas (ITLA)",
    year: "2024",
    category: "Programación en Python",
    categorySlug: 'python',
    img: "img/certs/certificacion-python-itla.jpg",
    description: "Lógica de programación estructurada, modularización, manejo de excepciones y control de flujos algorítmicos complejos.",
    glowColor: "hover:shadow-[0_0_15px_#3776ab] hover:border-[#3776ab]/60",
    borderColor: "border-[#3776ab]/25",
    textColor: "text-[#3776ab]"
  },
  {
    id: "c8",
    name: "Programación con Python: Curso práctico",
    issuer: "Escuela de informática UASD",
    year: "2024",
    category: "Programación en Python",
    categorySlug: 'python',
    img: "img/certs/certificacion-python-itla.jpg",
    description: "Aplicación práctica de algoritmos y scripting para la resolución de problemas cotidianos de ingeniería.",
    glowColor: "hover:shadow-[0_0_15px_#3776ab] hover:border-[#3776ab]/60",
    borderColor: "border-[#3776ab]/25",
    textColor: "text-[#3776ab]"
  },
  {
    id: "c9",
    name: "Introducción a la programación con Python 1",
    issuer: "Coursera",
    year: "2024",
    category: "Programación en Python",
    categorySlug: 'python',
    img: "img/certs/certificacion-python-itla.jpg",
    description: "Fundamentos iniciales del lenguaje de scripting, tipos de variables y estructuras condicionales simples.",
    glowColor: "hover:shadow-[0_0_15px_#3776ab] hover:border-[#3776ab]/60",
    borderColor: "border-[#3776ab]/25",
    textColor: "text-[#3776ab]"
  },
  // 4. Hojas de Cálculo & Excel Avanzado
  {
    id: "c10",
    name: "Curso de Excel Avanzado",
    issuer: "Instituto Tecnológico de las Américas (ITLA)",
    year: "2025",
    category: "Hojas de Cálculo & Excel",
    categorySlug: 'excel',
    img: "img/certs/certificacion-excel-avanzado.jpg",
    description: "Desarrollo de macros, dashboards financieros avanzados, formulación lógica y automatización integrada de reportes.",
    glowColor: "hover:shadow-[0_0_15px_#1f7246] hover:border-[#1f7246]/60",
    borderColor: "border-[#1f7246]/25",
    textColor: "text-[#1f7246]"
  },
  {
    id: "c11",
    name: "Curso de Excel intermedio",
    issuer: "Instituto Tecnológico de las Américas (ITLA)",
    year: "2025",
    category: "Hojas de Cálculo & Excel",
    categorySlug: 'excel',
    img: "img/certs/certificacion-excel-avanzado.jpg",
    description: "Estructuración de datos en tablas dinámicas complejas, funciones de búsqueda relacionales y filtros avanzados.",
    glowColor: "hover:shadow-[0_0_15px_#1f7246] hover:border-[#1f7246]/60",
    borderColor: "border-[#1f7246]/25",
    textColor: "text-[#1f7246]"
  },
  {
    id: "c12",
    name: "Curso de Microsoft Excel Avanzado",
    issuer: "Escuela de informática UASD",
    year: "2024",
    category: "Hojas de Cálculo & Excel",
    categorySlug: 'excel',
    img: "img/certs/certificacion-excel-avanzado.jpg",
    description: "Auditoría de fórmulas, análisis de hipótesis (Solver/Tablas de datos) y consolidación automatizada de libros.",
    glowColor: "hover:shadow-[0_0_15px_#1f7246] hover:border-[#1f7246]/60",
    borderColor: "border-[#1f7246]/25",
    textColor: "text-[#1f7246]"
  },
  {
    id: "c13",
    name: "Técnico en manejo de paquetes Microsoft",
    issuer: "Centro Fralan (Infotep)",
    year: "2013",
    category: "Hojas de Cálculo & Excel",
    categorySlug: 'excel',
    img: "img/certs/certificacion-excel-avanzado.jpg",
    description: "Certificación inicial oficial como especialista en herramientas de productividad de oficina de Microsoft.",
    glowColor: "hover:shadow-[0_0_15px_#1f7246] hover:border-[#1f7246]/60",
    borderColor: "border-[#1f7246]/25",
    textColor: "text-[#1f7246]"
  },
  // 5. Liderazgo, Soporte Técnico & Redes
  {
    id: "c14",
    name: "Curso de Liderazgo de Equipos",
    issuer: "Cymetria - Indotel (Talento Digital)",
    year: "2025",
    category: "Liderazgo & Soporte Técnico",
    categorySlug: 'liderazgo',
    img: "img/certs/certificacion-liderazgo.png",
    description: "Gestión ágil de equipos tecnológicos, resolución de conflictos internos y metodologías de liderazgo transformacional.",
    glowColor: "hover:shadow-[0_0_15px_#9d4edd] hover:border-[#9d4edd]/60",
    borderColor: "border-[#9d4edd]/25",
    textColor: "text-[#9d4edd]"
  },
  {
    id: "c15",
    name: "Servicio técnico y Soporte de computadora",
    issuer: "Udemy",
    year: "2024",
    category: "Liderazgo & Soporte Técnico",
    categorySlug: 'liderazgo',
    img: "img/certs/certificacion-liderazgo.png",
    description: "Mantenimiento preventivo, diagnóstico y reparación de hardware informático y solución de problemas en sistemas operativos.",
    glowColor: "hover:shadow-[0_0_15px_#9d4edd] hover:border-[#9d4edd]/60",
    borderColor: "border-[#9d4edd]/25",
    textColor: "text-[#9d4edd]"
  },
  {
    id: "c16",
    name: "Introducción a la programación",
    issuer: "Instituto Tecnológico de las Américas (ITLA)",
    year: "2021",
    category: "Liderazgo & Soporte Técnico",
    categorySlug: 'liderazgo',
    img: "img/certs/certificacion-liderazgo.png",
    description: "Fundamentos lógicos iniciales, diagramación de flujos y estructuras esenciales para iniciar el camino del desarrollo.",
    glowColor: "hover:shadow-[0_0_15px_#9d4edd] hover:border-[#9d4edd]/60",
    borderColor: "border-[#9d4edd]/25",
    textColor: "text-[#9d4edd]"
  }
];

const tabs = [
  { id: 'all', label: 'Todos', icon: LayoutGrid },
  { id: 'bi', label: 'Power BI', icon: Cpu },
  { id: 'data-science', label: 'Ciencia de Datos & ETL', icon: Database },
  { id: 'python', label: 'Python', icon: Code },
  { id: 'excel', label: 'Excel Avanzado', icon: Database },
  { id: 'liderazgo', label: 'Liderazgo & Soporte', icon: ShieldCheck },
];

export default function CertificacionesPage() {
  const [activeTab, setActiveTab] = useState<string>('all');
  const [selectedCertIndex, setSelectedCertIndex] = useState<number | null>(null);
  const [zoomScale, setZoomScale] = useState<number>(1);

  const filteredCerts = activeTab === 'all'
    ? credentialsData
    : credentialsData.filter(c => c.categorySlug === activeTab);

  const openLightbox = (certId: string) => {
    const idx = filteredCerts.findIndex(c => c.id === certId);
    if (idx !== -1) {
      setSelectedCertIndex(idx);
      setZoomScale(1);
    }
  };

  const closeLightbox = () => {
    setSelectedCertIndex(null);
    setZoomScale(1);
  };

  const handleNext = () => {
    if (selectedCertIndex !== null) {
      setSelectedCertIndex((selectedCertIndex + 1) % filteredCerts.length);
      setZoomScale(1);
    }
  };

  const handlePrev = () => {
    if (selectedCertIndex !== null) {
      setSelectedCertIndex((selectedCertIndex - 1 + filteredCerts.length) % filteredCerts.length);
      setZoomScale(1);
    }
  };

  const zoomIn = () => setZoomScale(prev => Math.min(prev + 0.25, 2.5));
  const zoomOut = () => setZoomScale(prev => Math.max(prev - 0.25, 0.75));

  const currentCert = selectedCertIndex !== null ? filteredCerts[selectedCertIndex] : null;

  return (
    <>
    <main className="relative min-h-screen bg-[#05060a] pt-28 pb-20 px-6 md:px-12 max-w-7xl mx-auto overflow-hidden">
      
      {/* Background neon elements */}
      <div className="absolute top-1/4 left-1/4 h-[300px] w-[300px] rounded-full bg-[#f2c811]/5 blur-3xl pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/4 h-[300px] w-[300px] rounded-full bg-[#9d4edd]/5 blur-3xl pointer-events-none" />

      {/* Decorative HUD header lines */}
      <div className="flex items-center gap-3 mb-10">
        <span className="font-mono text-[#ff2b6a] text-xs tracking-widest">[04 // SYS_CREDENTIALS]</span>
        <h1 className="text-2xl md:text-3xl font-black text-glow-cyan text-slate-100 uppercase">
          Certificaciones
        </h1>
        <div className="h-[1px] flex-grow bg-cyan-500/20" />
      </div>

      {/* Navigation tabs */}
      <div className="flex flex-wrap gap-2 mb-10 border-b border-cyan-500/10 pb-4">
        {tabs.map((tab) => {
          const TabIcon = tab.icon;
          const isActive = activeTab === tab.id;
          return (
            <button
              key={tab.id}
              onClick={() => {
                setActiveTab(tab.id);
                setSelectedCertIndex(null);
              }}
              className={cn(
                "flex items-center gap-2 px-4 py-2 text-xs md:text-sm font-mono tracking-wider border rounded-xl transition-all duration-300 cursor-pointer select-none",
                isActive
                  ? "bg-[#00f0ff]/10 border-[#00f0ff] text-[#00f0ff] shadow-[0_0_12px_rgba(0,240,255,0.2)]"
                  : "bg-slate-950/40 border-slate-800 text-slate-400 hover:text-slate-200 hover:border-slate-700"
              )}
            >
              <TabIcon className="w-3.5 h-3.5" />
              {tab.label}
            </button>
          );
        })}
      </div>

      {/* Credentials Grid */}
      <motion.div 
        layout 
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6"
      >
        <AnimatePresence mode="popLayout">
          {filteredCerts.map((cert) => (
            <motion.div
              layout
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              transition={{ duration: 0.3 }}
              key={cert.id}
              onClick={() => openLightbox(cert.id)}
              className={cn(
                "relative flex flex-col justify-between overflow-hidden rounded-2xl border bg-slate-950/40 p-4 transition-all duration-300 cursor-pointer select-none group min-h-[300px]",
                cert.borderColor,
                cert.glowColor
              )}
            >
              {/* Scanline CRT overlay effect */}
              <div className="absolute inset-0 bg-[linear-gradient(rgba(18,16,16,0)_50%,rgba(0,0,0,0.12)_50%)] bg-[size:100%_4px] opacity-10 pointer-events-none" />

              {/* Decorative mini corner lines */}
              <div className="absolute top-2 left-2 w-2 h-2 border-t border-l border-slate-700 opacity-60" />
              <div className="absolute top-2 right-2 w-2 h-2 border-t border-r border-slate-700 opacity-60" />
              <div className="absolute bottom-2 left-2 w-2 h-2 border-b border-l border-slate-700 opacity-60" />
              <div className="absolute bottom-2 right-2 w-2 h-2 border-b border-r border-slate-700 opacity-60" />

              {/* Thumbnail Container */}
              <div className="relative h-32 rounded-xl overflow-hidden bg-slate-950/80 mb-4 flex items-center justify-center border border-slate-800">
                <img
                  src={getAssetPath(cert.img)}
                  alt={cert.name}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  onError={(e) => {
                    const target = e.target as HTMLImageElement;
                    target.src = getAssetPath("img/certs/certificado-power-bi.png");
                  }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 to-transparent" />
                <div className="absolute bottom-2 right-2 p-1.5 rounded-lg bg-slate-950/80 border border-slate-800 text-slate-400 group-hover:text-glow-cyan">
                  <Maximize2 className="w-3.5 h-3.5" />
                </div>
              </div>

              {/* Credential Meta */}
              <div className="flex-grow flex flex-col justify-between">
                <div>
                  <span className={cn("text-[9px] font-mono font-semibold tracking-wider uppercase", cert.textColor)}>
                    {cert.category}
                  </span>
                  <h3 className="text-sm font-bold text-slate-200 mt-1 line-clamp-2 group-hover:text-slate-100 transition-colors">
                    {cert.name}
                  </h3>
                  <p className="text-xs text-slate-400 mt-2 line-clamp-2 leading-relaxed font-sans">
                    {cert.description}
                  </p>
                </div>

                <div className="mt-4 pt-3 border-t border-slate-800/40 flex items-center justify-between font-mono text-[10px] text-slate-500">
                  <div className="flex items-center gap-1">
                    <Award className="w-3.5 h-3.5 text-fuchsia-500" />
                    <span>{cert.issuer}</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <Calendar className="w-3.5 h-3.5 text-cyan-500" />
                    <span>{cert.year}</span>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </AnimatePresence>
      </motion.div>

      {/* Interactive Lightbox Modal */}
      <AnimatePresence>
        {currentCert && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-[#05060a]/95 backdrop-blur-2xl select-none"
            onClick={closeLightbox}
          >
            {/* Modal Body */}
            <motion.div
              initial={{ scale: 0.9, y: 15 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.9, y: 15 }}
              transition={{ type: "spring", stiffness: 300, damping: 25 }}
              className="relative w-full max-w-5xl bg-slate-950 border border-cyan-500/20 rounded-2xl shadow-[0_0_50px_rgba(0,240,255,0.15)] overflow-hidden flex flex-col md:flex-row max-h-[90vh]"
              onClick={e => e.stopPropagation()}
            >
              {/* Close button */}
              <button
                onClick={closeLightbox}
                className="absolute top-4 right-4 p-2 bg-slate-950/80 border border-slate-800 rounded-full hover:border-[#ff2b6a] hover:text-[#ff2b6a] transition-all z-20 cursor-pointer"
                aria-label="Close credentials preview"
              >
                <X className="h-5 w-5" />
              </button>

              {/* Left Column: Interactive Image Viewer */}
              <div className="relative flex-grow flex items-center justify-center bg-slate-950 p-6 min-h-[300px] md:min-h-full border-b md:border-b-0 md:border-r border-slate-800/60 overflow-hidden">
                
                {/* Glowing target crosshair */}
                <div className="absolute top-4 left-4 font-mono text-[9px] text-slate-600">// PREVIEW_FRAME_SYS</div>
                <div className="absolute bottom-4 left-4 font-mono text-[9px] text-slate-600">SCALE: {Math.round(zoomScale * 100)}%</div>

                {/* Animated credentials image */}
                <div className="relative overflow-hidden w-full h-full max-h-[450px] md:max-h-[600px] flex items-center justify-center">
                  <motion.img
                    animate={{ scale: zoomScale }}
                    transition={{ type: "spring", stiffness: 200, damping: 20 }}
                    src={getAssetPath(currentCert.img)}
                    alt={currentCert.name}
                    className="max-w-full max-h-full object-contain shadow-2xl rounded-lg border border-slate-800"
                    onError={(e) => {
                      const target = e.target as HTMLImageElement;
                      target.src = getAssetPath("img/certs/certificado-power-bi.png");
                    }}
                  />
                </div>

                {/* Zoom controls floating bar */}
                <div className="absolute bottom-4 right-4 flex items-center gap-1.5 bg-slate-900/80 border border-slate-800/80 rounded-xl p-1 z-10">
                  <button
                    onClick={zoomOut}
                    className="p-2 hover:bg-slate-800 rounded-lg text-slate-400 hover:text-slate-200 transition-colors cursor-pointer"
                    title="Zoom Out"
                  >
                    <ZoomOut className="w-4 h-4" />
                  </button>
                  <span className="w-[1px] h-4 bg-slate-800" />
                  <button
                    onClick={zoomIn}
                    className="p-2 hover:bg-slate-800 rounded-lg text-slate-400 hover:text-slate-200 transition-colors cursor-pointer"
                    title="Zoom In"
                  >
                    <ZoomIn className="w-4 h-4" />
                  </button>
                </div>

                {/* Navigation arrows (Overlay style) */}
                <button
                  onClick={handlePrev}
                  className="absolute left-4 top-1/2 -translate-y-1/2 p-3 bg-slate-900/65 border border-slate-800 hover:border-cyan-400 rounded-xl text-slate-300 hover:text-[#00f0ff] transition-all cursor-pointer z-10"
                  aria-label="Previous credential"
                >
                  <ChevronLeft className="w-5 h-5" />
                </button>
                <button
                  onClick={handleNext}
                  className="absolute right-4 top-1/2 -translate-y-1/2 p-3 bg-slate-900/65 border border-slate-800 hover:border-cyan-400 rounded-xl text-slate-300 hover:text-[#00f0ff] transition-all cursor-pointer z-10"
                  aria-label="Next credential"
                >
                  <ChevronRight className="w-5 h-5" />
                </button>
              </div>

              {/* Right Column: Information Panel */}
              <div className="w-full md:w-80 shrink-0 p-6 md:p-8 flex flex-col justify-between bg-slate-950 font-sans max-h-[90vh] md:max-h-full overflow-y-auto">
                <div className="space-y-6 pt-4">
                  <div className="space-y-1">
                    <span className={cn("text-[9px] font-mono font-bold tracking-widest uppercase", currentCert.textColor)}>
                      {currentCert.category}
                    </span>
                    <h2 className="text-lg md:text-xl font-black text-slate-100 text-glow-cyan leading-tight mt-1">
                      {currentCert.name}
                    </h2>
                  </div>

                  <div className="space-y-3 font-mono text-xs">
                    <div className="flex items-center justify-between border-b border-slate-800/40 pb-2">
                      <span className="text-slate-500">// EMISOR</span>
                      <span className="text-slate-200 font-medium">{currentCert.issuer}</span>
                    </div>
                    <div className="flex items-center justify-between border-b border-slate-800/40 pb-2">
                      <span className="text-slate-500">// AÑO</span>
                      <span className="text-slate-200 font-medium">{currentCert.year}</span>
                    </div>
                    <div className="flex items-center justify-between border-b border-slate-800/40 pb-2">
                      <span className="text-slate-500">// ID_SISTEMA</span>
                      <span className="text-slate-400">{currentCert.id.toUpperCase()}</span>
                    </div>
                  </div>

                  <div className="space-y-2">
                    <h4 className="text-[10px] font-mono font-bold tracking-widest text-[#00f0ff]">
                      // DETALLE_DE_COMPETENCIAS
                    </h4>
                    <p className="text-xs text-slate-400 leading-relaxed font-sans">
                      {currentCert.description}
                    </p>
                  </div>
                </div>

                <div className="mt-8 pt-4 border-t border-slate-800/40">
                  <a
                    href={getAssetPath(currentCert.img)}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center gap-2 w-full py-2.5 rounded-xl bg-slate-900 border border-slate-800 hover:border-cyan-400 text-slate-300 hover:text-[#00f0ff] font-mono text-xs tracking-wider transition-all cursor-pointer"
                  >
                    <Terminal className="w-4 h-4" />
                    DESCARGAR_CERTIFICADO_RAW
                  </a>
                </div>
              </div>

            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

    </main>
    <CinematicFooter />
    </>
  );
}
