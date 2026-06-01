"use client";

import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Terminal as TerminalIcon, Send, RefreshCw } from 'lucide-react';
import { Linkedin } from '@/components/ui/brand-icons';
import { cn } from '@/lib/utils';
import RuixenCard4 from '@/components/ui/doctor-live-chat-card';

// Terminal line interface
interface TerminalLine {
  text: string;
  type: 'system' | 'input' | 'success' | 'error' | 'info';
  delay?: number;
}

export default function ContactoPage() {
  const [terminalHistory, setTerminalHistory] = useState<TerminalLine[]>([
    { text: 'NEXORA TELEMETRY CONNECTION INITIATED...', type: 'info' },
    { text: 'ESTABLISHING SECURE CHANNEL TO AlexisSamboy.dev...', type: 'info' },
    { text: '[OK] CANAL ENCRIPTADO CONFIGURADO CON ÉXITO.', type: 'success' },
    { text: 'Escribe "help" para ver los comandos disponibles o presiona los botones HUD.', type: 'system' },
  ]);

  const [inputVal, setInputVal] = useState<string>('');
  const [formStep, setFormStep] = useState<number>(0); // 0 = command mode, 1 = name prompt, 2 = email prompt, 3 = message prompt, 4 = submitting
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });

  const terminalEndRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  // Auto-scroll terminal to bottom
  useEffect(() => {
    terminalEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [terminalHistory]);

  // Focus terminal input when clicking the terminal container
  const focusInput = (e: React.MouseEvent) => {
    const target = e.target as HTMLElement;
    if (
      target.tagName !== 'BUTTON' && 
      target.tagName !== 'INPUT' && 
      target.tagName !== 'A' && 
      !target.closest('button') && 
      !target.closest('a') && 
      formStep < 4
    ) {
      inputRef.current?.focus();
    }
  };

  const addLines = (lines: TerminalLine[]) => {
    setTerminalHistory(prev => [...prev, ...lines]);
  };

  const handleCommandSubmit = (command: string) => {
    const cmd = command.trim().toLowerCase();
    if (!cmd) return;

    // Log the input command
    addLines([{ text: `alexis@nexora:~$ ${command}`, type: 'input' }]);

    // Command Router
    switch (cmd) {
      case 'help':
        addLines([
          { text: 'COMANDOS DISPONIBLES EN EL NÚCLEO:', type: 'system' },
          { text: '  form, contact  - Iniciar el formulario guiado de contacto.', type: 'info' },
          { text: '  socials        - Listar enlaces directos a mis redes sociales.', type: 'info' },
          { text: '  about          - Mostrar un resumen de mi perfil profesional.', type: 'info' },
          { text: '  clear, cls     - Limpiar el buffer de la terminal.', type: 'info' },
          { text: '  help           - Mostrar esta bitácora de ayuda.', type: 'info' },
        ]);
        break;
      case 'clear':
      case 'cls':
        setTerminalHistory([]);
        break;
      case 'about':
        addLines([
          { text: '--- PERFIL DE ALEXIS SAMBOY ---', type: 'system' },
          { text: 'Nombre: Alexis Samboy Herrera', type: 'info' },
          { text: 'Rol: Oficial de Inteligencia de Negocios (BI) @ APAP', type: 'info' },
          { text: 'Especialidades: ETL, Power BI, Python, SQL Server, IBM AS400.', type: 'info' },
          { text: 'Visión: Fundador de Nexora, impulsando transformación digital avanzada.', type: 'info' },
        ]);
        break;
      case 'socials':
        addLines([
          { text: '--- ENLACES DIRECTOS (HAZ CLICK O VISITA) ---', type: 'system' },
          { text: '  • LinkedIn: linkedin.com/in/alexis-samboy-herrera/', type: 'info' },
          { text: '  • GitHub: github.com/AlexisSamboy', type: 'info' },
          { text: '  • Instagram: instagram.com/alexis_samboy/', type: 'info' },
          { text: '  • Email Directo: alexissamboy1998@gmail.com', type: 'info' },
        ]);
        break;
      case 'form':
      case 'contact':
        addLines([
          { text: '========================================', type: 'system' },
          { text: 'INICIANDO PROTOCOLO DE TRANSMISIÓN DE MENSAJES...', type: 'system' },
          { text: 'Por favor, ingresa tu NOMBRE completo:', type: 'system' }
        ]);
        setFormStep(1);
        break;
      default:
        addLines([
          { text: `Error: Comando "${cmd}" no reconocido. Escribe "help" para ver opciones.`, type: 'error' }
        ]);
    }
  };

  const handleFormStepSubmit = (value: string) => {
    const val = value.trim();
    if (!val) {
      addLines([{ text: 'Error: El campo no puede estar vacío.', type: 'error' }]);
      return;
    }

    if (formStep === 1) {
      // Name provided
      setFormData(prev => ({ ...prev, name: val }));
      addLines([
        { text: `> Nombre: ${val}`, type: 'input' },
        { text: 'Excelente. Ahora ingresa tu CORREO ELECTRÓNICO o método de contacto:', type: 'system' }
      ]);
      setFormStep(2);
    } else if (formStep === 2) {
      // Email/contact provided
      setFormData(prev => ({ ...prev, email: val }));
      addLines([
        { text: `> Contacto: ${val}`, type: 'input' },
        { text: 'Perfecto. Finalmente, escribe tu MENSAJE o consulta comercial:', type: 'system' }
      ]);
      setFormStep(3);
    } else if (formStep === 3) {
      // Message provided
      const completeData = { ...formData, message: val };
      setFormData(completeData);
      addLines([
        { text: `> Mensaje: ${val}`, type: 'input' },
        { text: 'Procesando mensaje...', type: 'info' }
      ]);
      setFormStep(4);

      // Simulate network request
      setTimeout(() => {
        addLines([
          { text: '========================================', type: 'success' },
          { text: '[SUCCESS] ¡TRANSMISIÓN COMPLETADA CON ÉXITO!', type: 'success' },
          { text: `Gracias ${completeData.name}. Me pondré en contacto contigo en tu correo (${completeData.email}) lo antes posible.`, type: 'success' },
          { text: '========================================', type: 'success' },
          { text: 'Puedes escribir "form" para enviar otro mensaje o "clear" para reiniciar.', type: 'system' }
        ]);
        setFormStep(0);
        setFormData({ name: '', email: '', message: '' });
      }, 1500);
    }
  };

  const handleInputSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!inputVal.trim()) return;

    const val = inputVal;
    setInputVal('');

    if (formStep === 0) {
      handleCommandSubmit(val);
    } else {
      handleFormStepSubmit(val);
    }
  };

  const runPresetCommand = (command: string) => {
    if (formStep > 0) return; // ignore clicks during form flow
    setInputVal('');
    handleCommandSubmit(command);
  };

  return (
    <main className="relative min-h-screen bg-[#05060a] pt-28 pb-20 px-6 md:px-12 max-w-7xl mx-auto overflow-hidden">
      
      {/* Background cyber glowing elements */}
      <div className="absolute top-1/4 left-1/3 h-[300px] w-[300px] rounded-full bg-[#00f0ff]/5 blur-3xl pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/3 h-[300px] w-[300px] rounded-full bg-[#ff2b6a]/5 blur-3xl pointer-events-none" />

      {/* Page Title HUD */}
      <div className="flex items-center gap-3 mb-10">
        <span className="font-mono text-[#ff2b6a] text-xs tracking-widest">[05 // SYS_CONTACT]</span>
        <h1 className="text-2xl md:text-3xl font-black text-glow-cyan text-slate-100 uppercase">
          Contacto
        </h1>
        <div className="h-[1px] flex-grow bg-cyan-500/20" />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
        
        {/* Left Column: Interactive Terminal Console (lg:col-span-8) */}
        <div className="lg:col-span-8 flex flex-col">
          <div 
            onClick={focusInput}
            className="flex-grow min-h-[420px] md:min-h-[500px] bg-black/90 border border-cyan-500/30 rounded-2xl p-6 font-mono text-xs md:text-sm text-cyan-400 shadow-[0_0_30px_rgba(0,240,255,0.05)] relative flex flex-col justify-between overflow-hidden cursor-text group"
          >
            {/* CRT screen scanline/curvature effects */}
            <div className="absolute inset-0 bg-[linear-gradient(rgba(18,16,16,0)_50%,rgba(0,0,0,0.15)_50%)] bg-[size:100%_4px] pointer-events-none opacity-20" />
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(0,240,255,0.03)_0%,transparent_100%)] pointer-events-none" />
            
            {/* Terminal Top Bar */}
            <div className="absolute top-0 left-0 right-0 h-9 bg-slate-950 border-b border-cyan-500/10 flex items-center justify-between px-4">
              <div className="flex items-center gap-1.5">
                <span className="w-2.5 h-2.5 rounded-full bg-[#ff2b6a] opacity-80" />
                <span className="w-2.5 h-2.5 rounded-full bg-[#f2c811] opacity-80" />
                <span className="w-2.5 h-2.5 rounded-full bg-[#00f0ff] opacity-80" />
              </div>
              <span className="text-[10px] text-slate-500 tracking-wider">alexis@nexora: ~/telemetry</span>
              <TerminalIcon className="w-3.5 h-3.5 text-cyan-500/40" />
            </div>

            {/* Scrollable Terminal Screen Output */}
            <div className="flex-grow overflow-y-auto mt-8 mb-4 space-y-2 pr-2 scrollbar-thin">
              <AnimatePresence>
                {terminalHistory.map((line, idx) => (
                  <motion.div
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    key={idx}
                    className={cn(
                      "leading-relaxed break-words",
                      line.type === 'system' && 'text-[#00f0ff] font-semibold',
                      line.type === 'input' && 'text-slate-300',
                      line.type === 'success' && 'text-emerald-400 font-bold',
                      line.type === 'error' && 'text-rose-500 font-medium',
                      line.type === 'info' && 'text-fuchsia-400'
                    )}
                  >
                    {line.text}
                  </motion.div>
                ))}
              </AnimatePresence>
              <div ref={terminalEndRef} />
            </div>

            {/* Terminal Command Input Line */}
            <form onSubmit={handleInputSubmit} className="flex items-center gap-2 border-t border-cyan-500/10 pt-3">
              <span className="text-fuchsia-500 shrink-0 select-none">
                {formStep === 0 ? 'alexis@nexora:~$' : formStep === 1 ? '[NOMBRE]>' : formStep === 2 ? '[CONTACTO]>' : formStep === 3 ? '[MENSAJE]>' : '[PROCESANDO]'}
              </span>
              
              <input
                ref={inputRef}
                type="text"
                value={inputVal}
                onChange={e => setInputVal(e.target.value)}
                disabled={formStep === 4}
                className="flex-grow bg-transparent border-none outline-none text-slate-100 placeholder-cyan-900 font-mono caret-cyan-400 disabled:opacity-50"
                placeholder={formStep === 0 ? "Escribe 'form' o 'help'..." : formStep === 1 ? "Tu nombre..." : formStep === 2 ? "Tu email..." : formStep === 3 ? "Tu mensaje aquí..." : "Enviando señal..."}
                autoComplete="off"
                autoCorrect="off"
                autoCapitalize="off"
                spellCheck="false"
              />
              
              <button 
                type="submit"
                disabled={formStep === 4 || !inputVal.trim()}
                className="p-1.5 rounded-lg border border-cyan-500/20 hover:border-cyan-400 text-cyan-400 hover:text-glow-cyan bg-cyan-950/20 disabled:opacity-40 transition-all cursor-pointer shrink-0"
              >
                <Send className="w-3.5 h-3.5" />
              </button>
            </form>
          </div>

          {/* Quick HUD Buttons for easier UX */}
          <div className="flex flex-wrap gap-2 mt-4">
            <button
              onClick={() => runPresetCommand('form')}
              disabled={formStep > 0}
              className={cn(
                "flex items-center gap-1.5 px-4 py-2 border rounded-xl font-mono text-[10px] md:text-xs tracking-wider transition-all duration-300 select-none cursor-pointer",
                formStep > 0
                  ? "bg-slate-950/20 border-slate-900 text-slate-600"
                  : "bg-fuchsia-950/10 border-fuchsia-500/30 text-fuchsia-400 hover:bg-fuchsia-950/20 hover:border-fuchsia-400 shadow-[0_0_10px_rgba(255,43,106,0.05)]"
              )}
            >
              <Send className="w-3.5 h-3.5" />
              INICIAR_FORMULARIO
            </button>
            <button
              onClick={() => runPresetCommand('socials')}
              disabled={formStep > 0}
              className={cn(
                "flex items-center gap-1.5 px-4 py-2 border rounded-xl font-mono text-[10px] md:text-xs tracking-wider transition-all duration-300 select-none cursor-pointer",
                formStep > 0
                  ? "bg-slate-950/20 border-slate-900 text-slate-600"
                  : "bg-cyan-950/10 border-cyan-500/30 text-cyan-400 hover:bg-cyan-950/20 hover:border-cyan-400"
              )}
            >
              <Linkedin className="w-3.5 h-3.5" />
              MOSTRAR_REDES
            </button>
            <button
              onClick={() => runPresetCommand('about')}
              disabled={formStep > 0}
              className={cn(
                "flex items-center gap-1.5 px-4 py-2 border rounded-xl font-mono text-[10px] md:text-xs tracking-wider transition-all duration-300 select-none cursor-pointer",
                formStep > 0
                  ? "bg-slate-950/20 border-slate-900 text-slate-600"
                  : "bg-slate-900 border-slate-800 text-slate-400 hover:border-slate-700 hover:text-slate-200"
              )}
            >
              <TerminalIcon className="w-3.5 h-3.5" />
              SOBRE_ALEXIS
            </button>
            <button
              onClick={() => runPresetCommand('clear')}
              className="flex items-center gap-1.5 px-4 py-2 border border-slate-850 bg-slate-950/40 rounded-xl font-mono text-[10px] md:text-xs tracking-wider text-slate-500 hover:text-slate-350 hover:border-slate-700 transition-all select-none cursor-pointer"
            >
              <RefreshCw className="w-3.5 h-3.5" />
              LIMPIAR_PANTALLA
            </button>
          </div>
        </div>

        {/* Right Column: AI Secretary Personal Assistant (lg:col-span-4) */}
        <div className="lg:col-span-4 flex flex-col justify-center">
          <RuixenCard4 />
        </div>

      </div>

    </main>
  );
}
