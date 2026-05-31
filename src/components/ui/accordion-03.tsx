/* eslint-disable @next/next/no-img-element */
"use client"

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"
import { Button } from "@/components/ui/button"

import { getAssetPath } from "@/lib/utils"

const items = [
  {
    id: "01",
    title: "Power BI & BI Core",
    img: "img/certs/certificado-power-bi.png",
    content: "Especialización en análisis de datos corporativos, modelado DAX y estructuración de cuadros de mando interactivos en Power BI para el monitoreo de KPIs de negocio.",
    certs: [
      { name: "Microsoft Power BI", issuer: "Escuela de informática UASD", year: "2024" },
      { name: "Evaluador de Indicadores Clave (KPI)", issuer: "Fundación Carlos Slim", year: "2025" },
      { name: "Power BI Inicial", issuer: "Educación IT", year: "2023" }
    ]
  },
  {
    id: "02",
    title: "Ciencia de Datos & ETL con Python",
    img: "img/certs/ciencias-de-datos.png",
    content: "Fundamentos estadísticos, minería de datos y construcción de tuberías de extracción, transformación y carga (ETL) automatizadas para analítica avanzada.",
    certs: [
      { name: "Desarrollo de procesos ETL con Python y pandas", issuer: "Plataforma UBITS", year: "2024" },
      { name: "Curso de Ciencias de Datos", issuer: "Cymetria - Indotel (Talento Digital)", year: "2025" },
      { name: "Introducción a las ciencias de datos", issuer: "Plataforma UBITS", year: "2024" }
    ]
  },
  {
    id: "03",
    title: "Programación en Python",
    img: "img/certs/certificacion-python-itla.jpg",
    content: "Dominio práctico del lenguaje de programación estándar para análisis de datos, incluyendo la automatización de procesos y la resolución de problemas lógicos.",
    certs: [
      { name: "Programación en Python", issuer: "Instituto Tecnológico de las Américas (ITLA)", year: "2024" },
      { name: "Programación con Python: Curso práctico", issuer: "Escuela de informática UASD", year: "2024" },
      { name: "Introducción a la programación con Python 1", issuer: "Coursera", year: "2024" }
    ]
  },
  {
    id: "04",
    title: "Hojas de Cálculo & Excel Avanzado",
    img: "img/certs/certificacion-excel-avanzado.jpg",
    content: "Automatización avanzada de reportes ejecutivos mediante el uso de macros, tablas dinámicas complejas y fórmulas lógicas financieras avanzadas.",
    certs: [
      { name: "Curso de Excel Avanzado", issuer: "Instituto Tecnológico de las Américas (ITLA)", year: "2025" },
      { name: "Curso de Excel intermedio", issuer: "Instituto Tecnológico de las Américas (ITLA)", year: "2025" },
      { name: "Curso de Microsoft Excel Avanzado", issuer: "Escuela de informática UASD", year: "2024" },
      { name: "Técnico en manejo de paquetes Microsoft", issuer: "Centro Fralan (Infotep)", year: "2013" }
    ]
  },
  {
    id: "05",
    title: "Liderazgo, Soporte Técnico & Redes",
    img: "img/certs/certificacion-liderazgo.png",
    content: "Capacidades de liderazgo de equipos en entornos digitales, además de habilidades de soporte técnico informático, infraestructura física y redes LAN/WAN.",
    certs: [
      { name: "Curso de Liderazgo de Equipos", issuer: "Cymetria - Indotel (Talento Digital)", year: "2025" },
      { name: "Servicio técnico y Soporte de computadora", issuer: "Udemy", year: "2024" },
      { name: "Introducción a la programación", issuer: "Instituto Tecnológico de las Américas (ITLA)", year: "2021" }
    ]
  }
]

export function Accordion03() {
  return (
    <div className="w-full max-w-4xl mx-auto">
      <Accordion type="single" defaultValue="01" collapsible className="w-full space-y-4">
        {items.map((item) => (
          <AccordionItem 
            className="relative border border-[#00f0ff]/10 hover:border-[#00f0ff]/30 hover:shadow-[0_0_15px_rgba(0,240,255,0.05)] transition-all duration-300 rounded-xl overflow-hidden bg-slate-950/30 group/item" 
            value={item.id} 
            key={item.id}
          >
            <AccordionTrigger className="px-6 hover:no-underline text-slate-300 hover:text-[#00f0ff] transition-colors duration-300">
              <div className="flex items-center gap-3">
                <span className="text-xs font-mono text-fuchsia-500/70 group-hover/item:text-fuchsia-500 transition-all duration-300 group-hover/item:scale-105">
                  // {item.id}
                </span>
                <h3 className="text-base md:text-lg font-semibold tracking-tight transition-transform duration-300 group-hover/item:translate-x-1">
                  {item.title}
                </h3>
              </div>
            </AccordionTrigger>
            
            <AccordionContent className="text-slate-300 w-full grid md:grid-cols-2 border-t border-[#00f0ff]/10 bg-slate-950/60">
              <div className="p-6 space-y-6 flex flex-col justify-between">
                <div className="space-y-4">
                  <p className="text-sm text-slate-300 leading-relaxed">
                    {item.content}
                  </p>
                  
                  <div className="space-y-3 pt-2">
                    <h4 className="text-[10px] font-bold text-[#00f0ff] font-mono tracking-widest">
                      // CERTIFICACIONES REGISTRADAS:
                    </h4>
                    <ul className="space-y-2 text-xs">
                      {item.certs.map((cert, index) => (
                        <li key={index} className="flex items-start gap-2 hover:text-slate-100 transition-colors">
                          <span className="text-fuchsia-500 font-bold">▹</span>
                          <div>
                            <strong className="text-slate-200 font-medium">{cert.name}</strong>
                            <span className="text-slate-400 block sm:inline sm:ml-1">
                              • {cert.issuer} ({cert.year})
                            </span>
                          </div>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                <div className="pt-4">
                  <Button 
                    variant="outline" 
                    className="border-cyan-500/20 hover:border-cyan-400 text-cyan-200 hover:text-cyan-100 bg-cyan-950/10 hover:bg-cyan-950/20 font-mono text-xs tracking-wider transition-all duration-300"
                  >
                    VERIFICAR_CREDENCIALES_SYS
                  </Button>
                </div>
              </div>
              
              <div className="relative min-h-[200px] md:min-h-full border-t md:border-t-0 md:border-l border-[#00f0ff]/10 overflow-hidden group/img">
                <img
                  className="w-full h-full object-cover transition-transform duration-700 group-hover/img:scale-105"
                  src={getAssetPath(item.img)}
                  alt={item.title}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent pointer-events-none" />
                <div className="absolute inset-0 bg-[linear-gradient(rgba(18,16,16,0)_50%,rgba(0,0,0,0.15)_50%)] bg-[size:100%_4px] pointer-events-none opacity-20" />
              </div>
            </AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </div>
  )
}
