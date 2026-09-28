import React, { useState } from 'react';
import { 
  Gamepad2, Cpu, Bot, Cog, Smartphone, Terminal, Monitor, Sparkles,
  ArrowRight, CheckCircle2, ChevronRight, Sliders, Play, RotateCcw
} from 'lucide-react';
import { Language, SkillItem } from '../types';
import { SKILLS_LIST } from '../data/portfolioData';

interface SkillsSectionProps {
  currentLang: Language;
}

export const SkillsSection: React.FC<SkillsSectionProps> = ({ currentLang }) => {
  const [filter, setFilter] = useState<'all' | 'hardware' | 'software' | 'ai_meta' | 'core'>('all');
  const [selectedSkill, setSelectedSkill] = useState<SkillItem | null>(null);

  // Micro simulator states for interactive drawer
  const [sensorDistance, setSensorDistance] = useState<number>(35);
  const [servoAngle, setServoAngle] = useState<number>(90);
  const [scratchPos, setScratchPos] = useState<{ x: number; y: number; dir: number }>({ x: 0, y: 0, dir: 0 });
  const [promptInput, setPromptInput] = useState<string>('Arduino kodida servo qanday ishlaydi?');
  const [promptOutput, setPromptOutput] = useState<string>(
    '// Tizimli Prompt Javobi:\n#include <Servo.h>\nServo myServo;\nvoid setup() { myServo.attach(9); }\nvoid loop() { myServo.write(90); delay(1000); }'
  );

  const filteredSkills = filter === 'all' 
    ? SKILLS_LIST 
    : SKILLS_LIST.filter(s => s.category === filter);

  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'Gamepad2': return <Gamepad2 className="w-5 h-5 text-amber-400" />;
      case 'Cpu': return <Cpu className="w-5 h-5 text-cyan-400" />;
      case 'Bot': return <Bot className="w-5 h-5 text-emerald-400" />;
      case 'Cog': return <Cog className="w-5 h-5 text-blue-400" />;
      case 'Smartphone': return <Smartphone className="w-5 h-5 text-purple-400" />;
      case 'Terminal': return <Terminal className="w-5 h-5 text-teal-400" />;
      case 'Monitor': return <Monitor className="w-5 h-5 text-rose-400" />;
      case 'Sparkles': return <Sparkles className="w-5 h-5 text-yellow-300" />;
      default: return <Cpu className="w-5 h-5 text-cyan-400" />;
    }
  };

  const moveScratch = (steps: number) => {
    setScratchPos(prev => {
      const rad = (prev.dir * Math.PI) / 180;
      const nextX = Math.max(-100, Math.min(100, prev.x + Math.cos(rad) * steps));
      const nextY = Math.max(-60, Math.min(60, prev.y + Math.sin(rad) * steps));
      return { ...prev, x: Math.round(nextX), y: Math.round(nextY) };
    });
  };

  const turnScratch = (degrees: number) => {
    setScratchPos(prev => ({ ...prev, dir: (prev.dir + degrees) % 360 }));
  };

  return (
    <section id="skills" className="py-20 md:py-28 bg-[#090b10] border-b border-white/[0.06] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div>
            <div className="text-xs font-semibold text-cyan-400 tracking-wider mb-2">
              {currentLang === 'uz' ? 'TEXNOLOGIK STACK VA BILIMLAR' : 'TECHNOLOGY STACK & EXPERTISE'}
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight [text-wrap:balance]">
              {currentLang === 'uz' ? 'Ibrohimjonning 8 ta IT Yo\'nalishi' : 'Ibrohimjon’s 8 IT Disciplines'}
            </h2>
            <p className="text-slate-400 mt-2 text-sm sm:text-base max-w-xl">
              {currentLang === 'uz' 
                ? 'Nazariya emas, amaliyot: Har bir yo\'nalishda haqiqiy loyihalar, qurilmalar va ishlaydigan kodlar mavjud.'
                : 'Not just theory, but physical implementation: working code, robots, and games in every domain.'}
            </p>
          </div>

          {/* Interactive filter tabs (Section 1A compliant buttons) */}
          <div className="flex items-center gap-1.5 p-1 bg-slate-900/90 border border-slate-800 rounded-lg overflow-x-auto max-w-full">
            <button
              onClick={() => setFilter('all')}
              className={`px-3 py-1.5 text-xs font-medium rounded-md whitespace-nowrap transition-colors ${
                filter === 'all' ? 'bg-cyan-500/20 text-cyan-300 font-semibold' : 'text-slate-400 hover:text-slate-200'
              }`}
            >
              {currentLang === 'uz' ? 'Barchasi (8)' : 'All (8)'}
            </button>
            <button
              onClick={() => setFilter('hardware')}
              className={`px-3 py-1.5 text-xs font-medium rounded-md whitespace-nowrap transition-colors ${
                filter === 'hardware' ? 'bg-cyan-500/20 text-cyan-300 font-semibold' : 'text-slate-400 hover:text-slate-200'
              }`}
            >
              {currentLang === 'uz' ? 'Robototexnika & Hardware' : 'Robotics & Hardware'}
            </button>
            <button
              onClick={() => setFilter('software')}
              className={`px-3 py-1.5 text-xs font-medium rounded-md whitespace-nowrap transition-colors ${
                filter === 'software' ? 'bg-cyan-500/20 text-cyan-300 font-semibold' : 'text-slate-400 hover:text-slate-200'
              }`}
            >
              {currentLang === 'uz' ? 'Dasturlash & Mobil' : 'Software & Apps'}
            </button>
            <button
              onClick={() => setFilter('ai_meta')}
              className={`px-3 py-1.5 text-xs font-medium rounded-md whitespace-nowrap transition-colors ${
                filter === 'ai_meta' ? 'bg-cyan-500/20 text-cyan-300 font-semibold' : 'text-slate-400 hover:text-slate-200'
              }`}
            >
              {currentLang === 'uz' ? 'Prompt Engineering' : 'AI Prompting'}
            </button>
          </div>
        </div>

        {/* 8 Skills Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {filteredSkills.map((skill) => (
            <div
              key={skill.id}
              onClick={() => setSelectedSkill(skill)}
              className="group cursor-pointer rounded-xl glass-panel p-5 border border-slate-800 hover:border-cyan-500/40 transition-all duration-300 hover:-translate-y-1 flex flex-col justify-between"
            >
              <div>
                {/* Card Top: Icon & Quiet unboxed metadata */}
                <div className="flex items-center justify-between mb-4">
                  <div className="p-2.5 rounded-lg bg-slate-900 border border-slate-800 group-hover:border-cyan-500/30 transition-colors">
                    {getIcon(skill.iconName)}
                  </div>
                  <div className="text-xs text-slate-400 font-mono">
                    <span>{skill.experienceYears}</span>
                    <span className="mx-1.5" aria-hidden="true">·</span>
                    <span className="text-cyan-400/90">{skill.badge}</span>
                  </div>
                </div>

                {/* Skill Name */}
                <h3 className="text-lg font-bold text-white group-hover:text-cyan-300 transition-colors mb-2">
                  {skill.name}
                </h3>

                {/* Description */}
                <p className="text-xs text-slate-400 leading-relaxed mb-4">
                  {currentLang === 'uz' ? skill.descriptionUz : skill.descriptionEn}
                </p>

                {/* Technologies List */}
                <div className="text-[11px] text-slate-400 mb-4 flex flex-wrap gap-x-1.5 gap-y-1">
                  {skill.technologies.slice(0, 3).map((tech, idx) => (
                    <span key={tech} className="text-slate-300">
                      {tech}
                      {idx < 2 && <span className="text-slate-400 ml-1.5">/</span>}
                    </span>
                  ))}
                  {skill.technologies.length > 3 && (
                    <span className="text-cyan-400 font-mono">+{skill.technologies.length - 3}</span>
                  )}
                </div>
              </div>

              {/* Card Footer: Practical Outcome & Action Hint */}
              <div className="pt-3 border-t border-slate-800/80 flex items-center justify-between text-xs">
                <span className="text-slate-400 text-[11px] truncate max-w-[170px]">
                  {currentLang === 'uz' ? 'Tafsilot & Sinov' : 'Details & Test'}
                </span>
                <span className="text-cyan-400 flex items-center gap-1 group-hover:translate-x-1 transition-transform font-medium">
                  <span>{currentLang === 'uz' ? 'Ko\'rish' : 'View'}</span>
                  <ChevronRight className="w-3.5 h-3.5" />
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* Modal / Detailed Interactive Drawer for Selected Skill */}
        {selectedSkill && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm animate-in fade-in duration-200">
            <div className="bg-[#0f141f] border border-cyan-500/40 rounded-2xl max-w-2xl w-full p-6 sm:p-8 shadow-2xl relative max-h-[90vh] overflow-y-auto">
              
              {/* Close Button */}
              <button
                onClick={() => setSelectedSkill(null)}
                className="absolute top-5 right-5 p-2 text-slate-400 hover:text-white rounded-lg bg-slate-800/60 hover:bg-slate-800 transition-colors"
                aria-label="Yopish"
              >
                ✕
              </button>

              {/* Modal Header */}
              <div className="flex items-center gap-3 mb-4">
                <div className="p-3 rounded-xl bg-slate-900 border border-slate-700">
                  {getIcon(selectedSkill.iconName)}
                </div>
                <div>
                  <div className="text-xs text-cyan-400 font-mono">
                    {selectedSkill.badge} · {selectedSkill.experienceYears} tajriba
                  </div>
                  <h3 className="text-2xl font-bold text-white">{selectedSkill.name}</h3>
                </div>
              </div>

              {/* Modal Body */}
              <p className="text-sm text-slate-300 leading-relaxed mb-6">
                {currentLang === 'uz' ? selectedSkill.descriptionUz : selectedSkill.descriptionEn}
              </p>

              {/* Key Practical Achievement */}
              <div className="mb-6 p-4 rounded-xl bg-slate-900/90 border border-emerald-500/30">
                <div className="flex items-center gap-2 text-xs font-semibold text-emerald-400 mb-1">
                  <CheckCircle2 className="w-4 h-4" />
                  <span>{currentLang === 'uz' ? 'Amaliy Natija & Ko\'nikma' : 'Practical Achievement'}</span>
                </div>
                <p className="text-xs text-slate-300">
                  {currentLang === 'uz' ? selectedSkill.keyOutcomeUz : selectedSkill.keyOutcomeEn}
                </p>
              </div>

              {/* Technologies in Detail */}
              <div className="mb-6">
                <div className="text-xs font-semibold text-slate-400 mb-2">
                  {currentLang === 'uz' ? 'Ishlatilgan vositalar va modullar:' : 'Tools & Modules Used:'}
                </div>
                <div className="flex flex-wrap gap-2">
                  {selectedSkill.technologies.map(tech => (
                    <span 
                      key={tech}
                      className="px-2.5 py-1 text-xs font-mono bg-slate-900 text-cyan-300 border border-slate-700 rounded-md"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              {/* Interactive Mini-Simulator Section */}
              <div className="p-4 rounded-xl bg-slate-950/80 border border-slate-800">
                <div className="flex items-center justify-between mb-3">
                  <span className="text-xs font-bold text-slate-300 flex items-center gap-1.5 font-mono">
                    <Sliders className="w-3.5 h-3.5 text-cyan-400" />
                    <span>{currentLang === 'uz' ? 'INTERAKTIV MINI-LABORATORIYA' : 'INTERACTIVE MINI-LAB'}</span>
                  </span>
                  <span className="text-[11px] text-slate-400">
                    {selectedSkill.id === 'arduino' || selectedSkill.id === 'robotics'
                      ? 'HC-SR04 Sensor Simulyatsiyasi'
                      : selectedSkill.id === 'scratch'
                      ? 'Vizual Sprite Harakati'
                      : selectedSkill.id === 'prompt-engineering'
                      ? 'AI Prompt Optimizer'
                      : 'Jonli Test Moduli'}
                  </span>
                </div>

                {/* Case 1: Arduino / Robotics Sensor Simulator */}
                {(selectedSkill.id === 'arduino' || selectedSkill.id === 'robotics' || selectedSkill.id === 'mblock') && (
                  <div className="space-y-3">
                    <div className="flex items-center justify-between text-xs">
                      <span className="text-slate-400">To'siqqacha Masofa (sm):</span>
                      <span className="font-mono text-cyan-400 font-bold">{sensorDistance} sm</span>
                    </div>
                    <input 
                      type="range" 
                      min="5" 
                      max="100" 
                      value={sensorDistance}
                      onChange={(e) => setSensorDistance(Number(e.target.value))}
                      className="w-full accent-cyan-400 bg-slate-800 h-2 rounded cursor-pointer"
                    />
                    <div className="p-2.5 rounded bg-slate-900 border border-slate-800 flex items-center justify-between text-xs">
                      <span className="text-slate-300">Robot Reaksiyasi:</span>
                      <span className={`font-mono font-bold ${sensorDistance < 20 ? 'text-rose-400' : 'text-emerald-400'}`}>
                        {sensorDistance < 20 ? 'XAVF! To\'xtash va Burilish' : 'Yo\'l Ochiq: Oldinga Harakat'}
                      </span>
                    </div>
                  </div>
                )}

                {/* Case 2: Scratch Sprite Controller */}
                {selectedSkill.id === 'scratch' && (
                  <div className="space-y-3">
                    <div className="h-24 bg-slate-900 rounded-lg relative overflow-hidden flex items-center justify-center border border-slate-800">
                      <div 
                        className="w-6 h-6 rounded-full bg-amber-400 text-slate-950 text-[10px] font-bold flex items-center justify-center transition-all duration-200 shadow-[0_0_12px_rgba(251,191,36,0.6)]"
                        style={{
                          transform: `translate(${scratchPos.x}px, ${scratchPos.y}px) rotate(${scratchPos.dir}deg)`
                        }}
                      >
                        🚀
                      </div>
                      <div className="absolute bottom-1 right-2 text-[10px] font-mono text-slate-400">
                        X: {scratchPos.x} | Y: {scratchPos.y} | Dir: {scratchPos.dir}°
                      </div>
                    </div>
                    <div className="flex gap-2">
                      <button 
                        onClick={() => moveScratch(15)}
                        className="flex-1 py-1.5 text-xs font-semibold bg-amber-500/20 hover:bg-amber-500/30 text-amber-300 rounded border border-amber-500/30 transition-colors"
                      >
                        15 Qadam Yurish
                      </button>
                      <button 
                        onClick={() => turnScratch(45)}
                        className="flex-1 py-1.5 text-xs font-semibold bg-slate-800 hover:bg-slate-700 text-slate-200 rounded border border-slate-700 transition-colors"
                      >
                        45° Burilish
                      </button>
                      <button 
                        onClick={() => setScratchPos({ x: 0, y: 0, dir: 0 })}
                        className="p-1.5 text-xs bg-slate-800 hover:bg-slate-700 text-slate-400 hover:text-white rounded border border-slate-700"
                        title="Reset"
                      >
                        <RotateCcw className="w-3.5 h-3.5" />
                      </button>
                    </div>
                  </div>
                )}

                {/* Case 3: Prompt Engineering Playground */}
                {selectedSkill.id === 'prompt-engineering' && (
                  <div className="space-y-2">
                    <div className="text-xs text-slate-400">So'rov matnini sinab ko'ring:</div>
                    <input
                      type="text"
                      value={promptInput}
                      onChange={(e) => setPromptInput(e.target.value)}
                      className="w-full bg-slate-900 border border-slate-700 rounded px-2.5 py-1.5 text-xs text-white focus:outline-none focus:border-cyan-400 font-mono"
                    />
                    <div className="p-2 bg-slate-900 rounded text-[11px] font-mono text-cyan-300 border border-slate-800 whitespace-pre-wrap">
                      {promptOutput}
                    </div>
                  </div>
                )}

                {/* Other skills fallback */}
                {(selectedSkill.id === 'mit-app-inventor' || selectedSkill.id === 'android-dev' || selectedSkill.id === 'computer-literacy') && (
                  <div className="text-xs text-slate-400 space-y-2">
                    <p>
                      {currentLang === 'uz'
                        ? 'Ibrohimjon ushbu yo\'nalishda 2 yillik tajribaga ega bo\'lib, IlmHub kurslarida real amaliy topshiriqlarni yuqori baholarga bajargan.'
                        : 'Ibrohimjon has dedicated over 2 years at IlmHub to mastering hands-on assignments with distinction.'}
                    </p>
                    <div className="p-2 rounded bg-slate-900 font-mono text-[11px] text-emerald-400 border border-slate-800">
                      Status: 100% Amaliy Topshiriqlar Muvaffaqiyatli Yakunlangan
                    </div>
                  </div>
                )}
              </div>

              {/* Close Button Bottom */}
              <div className="mt-6 flex justify-end">
                <button
                  onClick={() => setSelectedSkill(null)}
                  className="px-5 py-2 text-xs font-semibold text-slate-900 bg-cyan-400 hover:bg-cyan-300 rounded-lg transition-colors"
                >
                  {currentLang === 'uz' ? 'Tushunarli / Yopish' : 'Close Details'}
                </button>
              </div>

            </div>
          </div>
        )}

      </div>
    </section>
  );
};
