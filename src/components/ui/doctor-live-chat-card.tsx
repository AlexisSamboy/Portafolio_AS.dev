"use client";

import React, { useState, useRef, useEffect } from "react";
import { CalendarHeart, MessageCircle, Star, HeartHandshake, Send, MessageSquare } from "lucide-react";
import { Button } from "@/components/ui/button";
import { getAssetPath, cn } from "@/lib/utils";

interface Message {
  sender: 'user' | 'aria';
  text: string;
}

export default function RuixenCard4() {
  const [messages, setMessages] = useState<Message[]>([
    { sender: 'aria', text: "¡Hola! Soy Aria, la asistente virtual de Alexis Samboy. ¿En qué proyecto o requerimiento de datos te gustaría trabajar hoy?" }
  ]);
  const [inputText, setInputText] = useState("");
  const [isTyping, setIsTyping] = useState(false);
  const chatContainerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (chatContainerRef.current) {
      chatContainerRef.current.scrollTop = chatContainerRef.current.scrollHeight;
    }
  }, [messages]);

  const suggestedQuestions = [
    "¿Qué servicios de analítica ofreces?",
    "Quiero cotizar un Dashboard de Power BI.",
    "¿Haces migraciones ETL / SSIS?",
    "¿Tienes experiencia con IBM AS400?"
  ];

  const getAriaResponse = (question: string): { response: string; waText: string } => {
    const q = question.toLowerCase();
    if (q.includes("servicios") || q.includes("ofreces") || q.includes("analítica")) {
      return {
        response: "Alexis se especializa en Business Intelligence, optimización de ETLs con SSIS y Python, optimización de SQL Server, y desarrollo web. ¡Es ideal para automatizar tus reportes corporativos!",
        waText: "Hola Alexis, estuve hablando con tu asistente Aria. Me gustaría conocer más sobre tus servicios de analítica de datos y BI."
      };
    } else if (q.includes("cotizar") || q.includes("dashboard") || q.includes("power bi")) {
      return {
        response: "Alexis diseña dashboards ejecutivos e interactivos en Power BI con fórmulas DAX eficientes y modelos en estrella. Hablemos por WhatsApp para darte una cotización a tu medida.",
        waText: "Hola Alexis, me gustaría cotizar el desarrollo de un Dashboard interactivo en Power BI para mi negocio."
      };
    } else if (q.includes("migración") || q.includes("etl") || q.includes("ssis")) {
      return {
        response: "¡Claro! Él construye flujos ETL robustos en SQL Server Integration Services (SSIS) y Python (Pandas) para integrar múltiples fuentes de datos automáticamente y programar alertas de red.",
        waText: "Hola Alexis, estoy buscando automatizar e integrar mis fuentes de datos con pipelines de ETL / SSIS."
      };
    } else if (q.includes("as400") || q.includes("ibm")) {
      return {
        response: "Sí, Alexis realiza la extracción directa de datos transaccionales de servidores IBM AS400/DB2 y su posterior consolidación en bases de datos modernas para análisis estratégico.",
        waText: "Hola Alexis, necesito soporte técnico o reportería sobre bases de datos de un servidor IBM AS400."
      };
    }
    return {
      response: "¡Excelente! Alexis estará encantado de ayudarte personalmente con eso. Haz clic en el botón de abajo para que chateen directamente por WhatsApp.",
      waText: `Hola Alexis, tengo una consulta sobre: "${question}"`
    };
  };

  const handleSend = (text: string) => {
    if (!text.trim()) return;
    
    setMessages(prev => [...prev, { sender: 'user', text }]);
    setInputText("");
    setIsTyping(true);

    setTimeout(() => {
      const info = getAriaResponse(text);
      setMessages(prev => [...prev, { sender: 'aria', text: info.response }]);
      setIsTyping(false);
    }, 850);
  };

  const getWhatsAppLink = (): string => {
    const userMsgs = messages.filter(m => m.sender === 'user');
    let text = "Hola Alexis, estuve conversando con tu secretaria virtual Aria sobre tu portafolio y me gustaría contactarte.";
    if (userMsgs.length > 0) {
      const lastUserText = userMsgs[userMsgs.length - 1].text;
      const info = getAriaResponse(lastUserText);
      text = info.waText;
    }
    return `https://wa.me/18098903807?text=${encodeURIComponent(text)}`;
  };

  return (
    <div className="max-w-sm w-full mx-auto bg-[#05060a]/95 border border-cyan-500/20 dark:border-cyan-500/30 rounded-2xl shadow-[0_0_30px_rgba(0,240,255,0.08)] overflow-hidden relative flex flex-col min-h-[500px]">
      
      {/* Circuit background overlay */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(18,16,16,0)_50%,rgba(0,0,0,0.15)_50%)] bg-[size:100%_4px] opacity-10 pointer-events-none" />

      {/* Status Badge */}
      <div className="absolute top-3 right-3 px-2.5 py-0.5 text-[10px] rounded-full bg-cyan-950/80 text-cyan-400 border border-cyan-500/30 font-mono tracking-widest animate-pulse z-10">
        AI_ONLINE
      </div>

      {/* Header */}
      <div className="p-4 text-center border-b border-cyan-500/10 bg-slate-950/40 relative z-10 shrink-0">
        <div className="relative w-14 h-14 mx-auto rounded-full p-[2px] bg-gradient-to-tr from-cyan-500 to-fuchsia-500">
          <img
            src={getAssetPath("img/logo-nav.png")}
            alt="Aria Avatar"
            className="w-full h-full object-contain rounded-full bg-slate-950"
            onError={(e) => {
              const target = e.target as HTMLImageElement;
              target.src = "https://github.com/shadcn.png";
            }}
          />
        </div>
        <h2 className="mt-2 text-base font-bold text-slate-100 font-sans tracking-wide">
          Aria (AI Secretary)
        </h2>
        <p className="text-[10px] text-cyan-400 font-mono uppercase tracking-widest mt-0.5">
          Asistente de Alexis Samboy
        </p>
      </div>

      {/* Chat Messages Logs */}
      <div ref={chatContainerRef} className="flex-grow p-4 overflow-y-auto space-y-3 max-h-[220px] scrollbar-thin bg-black/30">
        {messages.map((msg, index) => (
          <div
            key={index}
            className={cn(
              "flex flex-col max-w-[85%] rounded-xl p-2.5 text-xs font-sans",
              msg.sender === 'aria'
                ? "bg-slate-900/80 border border-slate-800 text-slate-200 self-start"
                : "bg-cyan-950/40 border border-cyan-500/30 text-cyan-200 self-end"
            )}
          >
            <span className="text-[8px] font-mono text-slate-500 mb-1">
              {msg.sender === 'aria' ? 'ARIA_SYS' : 'GUEST_USER'}
            </span>
            <p className="leading-relaxed">{msg.text}</p>
          </div>
        ))}
        {isTyping && (
          <div className="bg-slate-900/80 border border-slate-800 text-slate-400 self-start max-w-[85%] rounded-xl p-2.5 text-[10px] font-mono tracking-widest">
            ARIA_SYS typing...
          </div>
        )}
      </div>

      {/* Suggested Questions Grid */}
      <div className="p-3 border-t border-cyan-500/10 bg-slate-950/40 shrink-0">
        <p className="text-[9px] font-mono text-slate-500 mb-2">// PREGUNTAS SUGERIDAS:</p>
        <div className="grid grid-cols-2 gap-1.5">
          {suggestedQuestions.map((q, idx) => (
            <button
              key={idx}
              onClick={() => handleSend(q)}
              disabled={isTyping}
              className="text-[9px] text-left p-1.5 rounded-lg border border-slate-800 bg-slate-950/40 text-slate-300 hover:border-cyan-500/30 hover:text-cyan-300 transition-all font-sans cursor-pointer truncate"
              title={q}
            >
              {q}
            </button>
          ))}
        </div>
      </div>

      {/* Details Meta */}
      <div className="p-4 pt-2 border-t border-cyan-500/10 space-y-4 relative z-10 shrink-0">
        <div className="flex items-center justify-between text-[10px] text-slate-400 font-mono">
          <div className="flex items-center gap-1">
            <Star className="w-3.5 h-3.5 text-yellow-500" />
            4.9 VALORACIÓN
          </div>
          <div className="flex items-center gap-1">
            <MessageCircle className="w-3.5 h-3.5 text-cyan-400" />
            1.2K+ CHATS
          </div>
        </div>

        <div className="flex items-center gap-2 text-[10px] text-slate-400 font-mono">
          <CalendarHeart className="w-3.5 h-3.5 text-fuchsia-500" />
          DISPONIBILIDAD 24/7 · CONEXIÓN WHATSAPP
        </div>

        {/* Actions */}
        <div className="space-y-2 font-mono">
          <a
            href={getWhatsAppLink()}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full flex items-center justify-center gap-2 h-9 text-xs rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-bold transition-all shadow-[0_0_15px_rgba(16,185,129,0.15)] hover:shadow-[0_0_20px_rgba(16,185,129,0.3)] cursor-pointer"
          >
            <MessageSquare className="w-4 h-4" />
            CONECTAR_POR_WHATSAPP
          </a>
          <button
            onClick={() => setMessages([
              { sender: 'aria', text: "Chat reiniciado. ¿En qué más puedo asistirte en relación a la consultoría de Alexis?" }
            ])}
            className="w-full flex items-center justify-center gap-1.5 h-8 text-[10px] rounded-lg border border-slate-800 text-slate-400 hover:bg-slate-900 hover:text-slate-200 transition-colors cursor-pointer"
          >
            <HeartHandshake className="w-3.5 h-3.5" />
            REINICIAR_CONVERSACIÓN
          </button>
        </div>
      </div>
    </div>
  );
}
