import React, { useState, useRef, useEffect } from 'react';
import { Terminal as TerminalIcon, CornerDownLeft, Sparkles, Check } from 'lucide-react';
import { Language } from '../types';
import { PERSONAL_INFO, SKILLS_LIST } from '../data/portfolioData';

interface InteractiveTerminalProps {
  currentLang: Language;
}

interface CommandOutput {
  command: string;
  output: string | React.ReactNode;
}

export const InteractiveTerminal: React.FC<InteractiveTerminalProps> = ({ currentLang }) => {
  const [inputVal, setInputVal] = useState('');
  const [history, setHistory] = useState<CommandOutput[]>([
    {
      command: 'welcome',
      output: currentLang === 'uz'
        ? "Ibrohimjon Tursunboyev IT Terminaliga xush kelibsiz! Mavjud buyruqlarni ko'rish uchun 'help' deb yozing yoki quyidagi tezkor tugmalarni bosing."
        : "Welcome to Ibrohimjon Tursunboyev's IT Terminal! Type 'help' to see available commands or click quick chips below."
    }
  ]);
  const bottomRef = useRef<HTMLDivElement>(null);

  const quickCommands = ['help', 'about', 'skills', 'ilmhub', 'projects', 'contact', 'clear'];

  const executeCommand = (cmdStr: string) => {
    const trimmed = cmdStr.trim().toLowerCase();
    if (!trimmed) return;

    if (trimmed === 'clear') {
      setHistory([]);
      setInputVal('');
      return;
    }

    let result: React.ReactNode = '';

    switch (trimmed) {
      case 'help':
        result = (
          <div className="space-y-1 text-slate-300">
            <div><span className="text-cyan-400 font-bold">about</span> - Ibrohimjon haqida qisqacha ma'lumot</div>
            <div><span className="text-cyan-400 font-bold">skills</span> - Barcha 8 ta IT yo'nalishi ro'yxati</div>
            <div><span className="text-cyan-400 font-bold">ilmhub</span> - IlmHub akademiyasidagi 2 yillik tajriba</div>
            <div><span className="text-cyan-400 font-bold">projects</span> - Tayyorlangan robot va o'yin loyihalari</div>
            <div><span className="text-cyan-400 font-bold">contact</span> - Telefon raqam va Telegram profili</div>
            <div><span className="text-cyan-400 font-bold">age</span> - Yosh va maqsadlar</div>
            <div><span className="text-cyan-400 font-bold">clear</span> - Terminalni tozalash</div>
          </div>
        );
        break;

      case 'about':
        result = (
          <div className="text-slate-300 space-y-1">
            <p><strong>Ism:</strong> {PERSONAL_INFO.name} (13 yosh)</p>
            <p><strong>Kasb:</strong> {PERSONAL_INFO.roleUz}</p>
            <p><strong>Joylashuv:</strong> {PERSONAL_INFO.locationUz}</p>
            <p><strong>Tajriba:</strong> {PERSONAL_INFO.experienceDurationUz}</p>
          </div>
        );
        break;

      case 'skills':
        result = (
          <div className="grid grid-cols-2 gap-2 text-slate-300">
            {SKILLS_LIST.map(s => (
              <div key={s.id}>
                • <strong className="text-cyan-300">{s.name}</strong> ({s.badge})
              </div>
            ))}
          </div>
        );
        break;

      case 'ilmhub':
        result = (
          <div className="text-slate-300 space-y-1">
            <p>🎓 <strong>Ta'lim dargohi:</strong> IlmHub IT Akademiyasi</p>
            <p>⏱ <strong>Davomiyligi:</strong> 2 yildan buyon doimiy tahsil</p>
            <p>📬 <strong>Telegram:</strong> {PERSONAL_INFO.ilmhubTelegram}</p>
            <p>📌 <strong>Yo'nalishlar:</strong> Robototexnika, Scratch, Arduino, mBlock, Mobil Ilovalar</p>
          </div>
        );
        break;

      case 'projects':
        result = (
          <div className="space-y-1 text-slate-300">
            <div>1. <strong className="text-cyan-300">Smart 4WD Rover:</strong> Arduino + Ultrasonik to'siqdan qochuvchi robot</div>
            <div>2. <strong className="text-purple-300">RoboController:</strong> MIT App Inventor orqali Android Bluetooth boshqaruvi</div>
            <div>3. <strong className="text-amber-300">Cosmic Quest:</strong> Scratch 3.0 fizikali kosmik arkada o'yini</div>
          </div>
        );
        break;

      case 'contact':
        result = (
          <div className="text-slate-300 space-y-1">
            <p>📞 <strong>Telefon:</strong> {PERSONAL_INFO.phone}</p>
            <p>✈️ <strong>Telegram:</strong> {PERSONAL_INFO.telegram}</p>
            <p>🌐 <strong>Manzil:</strong> Toshkent, O'zbekiston</p>
          </div>
        );
        break;

      case 'age':
        result = "Ibrohimjon hozirda 13 yoshda va O'zbekistonda yosh avlodning yetakchi robototexnik dasturchisi bo'lishni maqsad qilgan!";
        break;

      default:
        result = `Noma'lum buyruq: '${trimmed}'. Yordam uchun 'help' deb yozing.`;
    }

    setHistory(prev => [...prev, { command: trimmed, output: result }]);
    setInputVal('');
  };

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    executeCommand(inputVal);
  };

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [history]);

  return (
    <section className="py-16 bg-[#090b10] border-b border-white/[0.06] relative">
      <div className="max-w-4xl mx-auto px-4 sm:px-6">
        
        {/* Terminal Frame */}
        <div className="rounded-2xl glass-panel border border-slate-800 shadow-2xl overflow-hidden">
          
          {/* Terminal Title Bar */}
          <div className="px-4 py-3 bg-slate-950 border-b border-slate-800/80 flex items-center justify-between">
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 rounded-full bg-rose-500/80" />
              <div className="w-3 h-3 rounded-full bg-amber-500/80" />
              <div className="w-3 h-3 rounded-full bg-emerald-500/80" />
              <span className="ml-2 text-xs font-mono text-slate-400">ibrohimjon@ilmhub-dev:~</span>
            </div>
            
            <div className="flex items-center gap-1.5 text-[11px] text-cyan-400 font-mono">
              <TerminalIcon className="w-3.5 h-3.5" />
              <span>BASH INTERACTIVE</span>
            </div>
          </div>

          {/* Quick preset chips */}
          <div className="px-4 py-2 bg-slate-900/60 border-b border-slate-800/60 flex flex-wrap items-center gap-2 text-xs">
            <span className="text-[11px] text-slate-400 font-mono">Tezkor buyruqlar:</span>
            {quickCommands.map(cmd => (
              <button
                key={cmd}
                onClick={() => executeCommand(cmd)}
                className="px-2 py-0.5 rounded bg-slate-800 hover:bg-cyan-500/20 text-slate-300 hover:text-cyan-300 font-mono text-[11px] border border-slate-700/60 transition-colors"
              >
                {cmd}
              </button>
            ))}
          </div>

          {/* Terminal Body */}
          <div className="p-4 sm:p-6 bg-slate-950/90 font-mono text-xs sm:text-sm min-h-[220px] max-h-[360px] overflow-y-auto space-y-4">
            {history.map((item, index) => (
              <div key={index} className="space-y-1.5">
                <div className="flex items-center gap-2 text-cyan-400 font-bold">
                  <span className="text-slate-400">➜</span>
                  <span className="text-emerald-400">ibrohimjon</span>
                  <span className="text-slate-500">:~$</span>
                  <span className="text-slate-200">{item.command}</span>
                </div>
                <div className="pl-5 text-slate-300 leading-relaxed">
                  {item.output}
                </div>
              </div>
            ))}
            <div ref={bottomRef} />
          </div>

          {/* Terminal Input Bar */}
          <form onSubmit={handleFormSubmit} className="p-3 bg-slate-950 border-t border-slate-800 flex items-center gap-2">
            <span className="text-cyan-400 font-mono pl-2">➜</span>
            <input
              type="text"
              value={inputVal}
              onChange={(e) => setInputVal(e.target.value)}
              placeholder="Buyruq kiriting (masalan: help, skills, contact)..."
              className="flex-1 bg-transparent border-none text-xs sm:text-sm font-mono text-white focus:outline-none placeholder:text-slate-600"
            />
            <button
              type="submit"
              className="px-3 py-1.5 bg-slate-800 hover:bg-slate-700 text-slate-200 rounded text-xs font-mono flex items-center gap-1 transition-colors"
            >
              <span>Run</span>
              <CornerDownLeft className="w-3.5 h-3.5" />
            </button>
          </form>

        </div>

      </div>
    </section>
  );
};
