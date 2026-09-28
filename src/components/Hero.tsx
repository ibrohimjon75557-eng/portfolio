import React, { useState } from 'react';
import { ArrowDown, Send, Sparkles, Terminal, Code2, Cpu, Check, Copy } from 'lucide-react';
import { Language } from '../types';
import { PERSONAL_INFO } from '../data/portfolioData';

interface HeroProps {
  currentLang: Language;
}

export const Hero: React.FC<HeroProps> = ({ currentLang }) => {
  const [activeTab, setActiveTab] = useState<'arduino' | 'scratch'>('arduino');
  const [copied, setCopied] = useState(false);

  const arduinoSnippet = `// Tursunboyev Ibrohimjon - Obstacle Detection
#include <Servo.h>
#define TRIG_PIN 9
#define ECHO_PIN 10

Servo radarServo;

void setup() {
  pinMode(TRIG_PIN, OUTPUT);
  pinMode(ECHO_PIN, INPUT);
  radarServo.attach(11);
  Serial.begin(9600);
}

void loop() {
  long distance = readUltrasonic();
  if (distance < 20) {
    evadeObstacle(); // Avtonom aylanib o'tish
  }
}`;

  const scratchSnippet = `Qachonki [yashil bayroq] bosilganda:
  Hisobla [ball] = 0
  Harakatlan [x: 0, y: -120] nuqtaga
  Doimiy takrorla:
    Agar <klaviatura [o'ng strelka] bosilsa> unda:
      10 qadam yursin
      Keyingi kostyumga o'tsin
    Agar <tegmoqda [Asteroid] ?> unda:
      Signal yubor [Portlash]
      To'xtat [barchasini]`;

  const copyCode = () => {
    const code = activeTab === 'arduino' ? arduinoSnippet : scratchSnippet;
    navigator.clipboard.writeText(code);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section id="about" className="relative pt-12 pb-20 md:py-24 bg-tech-grid border-b border-white/[0.06] overflow-hidden">
      {/* Ambient background glows */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[350px] bg-cyan-500/10 rounded-full blur-[130px] pointer-events-none" />
      <div className="absolute top-2/3 right-10 w-[400px] h-[300px] bg-emerald-500/10 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Editorial & Identity */}
          <div className="lg:col-span-7 flex flex-col justify-center">
            
            {/* Clean unboxed metadata separator - Section 1A compliant */}
            <div className="flex flex-wrap items-center gap-2 text-xs md:text-sm font-medium text-cyan-400 mb-4 tracking-wide">
              <span>{currentLang === 'uz' ? '13 yosh' : '13 years old'}</span>
              <span className="text-slate-600" aria-hidden="true">·</span>
              <span>{currentLang === 'uz' ? 'Yosh Dasturchi' : 'Young Developer'}</span>
              <span className="text-slate-600" aria-hidden="true">·</span>
              <span>{currentLang === 'uz' ? 'Robototexnik' : 'Robotics Enthusiast'}</span>
              <span className="text-slate-600" aria-hidden="true">·</span>
              <span>IlmHub (2 yil)</span>
            </div>

            {/* Display Headline */}
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-[3.25rem] font-extrabold tracking-tight text-white leading-[1.15] mb-6 [text-wrap:balance]">
              {currentLang === 'uz' ? (
                <>
                  Kelajak texnologiyalarini bugun yaratamiz: <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-teal-300 to-emerald-400">Robototexnika, AI va Kod.</span>
                </>
              ) : (
                <>
                  Shaping tomorrow's technology today: <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-teal-300 to-emerald-400">Robotics, AI & Code.</span>
                </>
              )}
            </h1>

            {/* Bio Narrative */}
            <p className="text-base sm:text-lg text-slate-300 leading-relaxed mb-8 max-w-2xl">
              {currentLang === 'uz' ? (
                <>
                  Assalomu alaykum! Men <strong className="text-white font-semibold">{PERSONAL_INFO.name}</strong>man. 
                  2 yildan buyon <strong className="text-cyan-300 font-medium">IlmHub</strong> akademiyasida robototexnika, 
                  Arduino mikrokontrollerlari, Scratch, Android mobil ilovalari va zamonaviy Prompt Engineering yo'nalishlarida 
                  amaliy bilim olib, aqlli tizimlar va o'yinlar yaratmoqdaman.
                </>
              ) : (
                <>
                  Hello! I am <strong className="text-white font-semibold">{PERSONAL_INFO.name}</strong>, a 13-year-old developer 
                  from Uzbekistan. For the past 2 years at <strong className="text-cyan-300 font-medium">IlmHub IT Academy</strong>, 
                  I have been building autonomous robotics, programming microcontrollers with Arduino C++, designing Scratch games, 
                  and mastering Prompt Engineering.
                </>
              )}
            </p>

            {/* CTAs */}
            <div className="flex flex-wrap items-center gap-4 mb-10">
              <a
                href="#projects"
                className="px-6 py-3 text-sm font-semibold text-slate-950 bg-cyan-400 hover:bg-cyan-300 transition-all rounded-lg shadow-[0_0_20px_rgba(34,211,238,0.3)] flex items-center gap-2 group whitespace-nowrap"
              >
                <span>{currentLang === 'uz' ? 'Loyihalarni ko\'rish' : 'Explore Projects'}</span>
                <ArrowDown className="w-4 h-4 group-hover:translate-y-0.5 transition-transform" />
              </a>

              <a
                href={PERSONAL_INFO.telegramLink}
                target="_blank"
                rel="noopener noreferrer"
                className="px-5 py-3 text-sm font-medium text-white bg-slate-800/90 hover:bg-slate-700/90 border border-slate-700 transition-colors rounded-lg flex items-center gap-2 whitespace-nowrap"
              >
                <Send className="w-4 h-4 text-cyan-400" />
                <span>{currentLang === 'uz' ? 'Telegram orqali yozish' : 'Message on Telegram'}</span>
              </a>

              <a
                href={`tel:${PERSONAL_INFO.phoneClean}`}
                className="text-xs text-slate-400 hover:text-slate-200 transition-colors px-3 py-2 flex items-center gap-1.5"
              >
                <span>{PERSONAL_INFO.phone}</span>
              </a>
            </div>

            {/* Tabular Numerals Quantitative Proof Metrics (Section 1H) */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 pt-6 border-t border-slate-800/80">
              <div>
                <div className="text-2xl sm:text-3xl font-bold font-mono text-cyan-400 tabular-nums">2+ yil</div>
                <div className="text-xs text-slate-400 mt-1">{currentLang === 'uz' ? "IlmHub ta'limi" : 'Academy training'}</div>
              </div>
              <div>
                <div className="text-2xl sm:text-3xl font-bold font-mono text-emerald-400 tabular-nums">8 ta</div>
                <div className="text-xs text-slate-400 mt-1">{currentLang === 'uz' ? "IT yo'nalishi" : 'Core IT domains'}</div>
              </div>
              <div>
                <div className="text-2xl sm:text-3xl font-bold font-mono text-indigo-400 tabular-nums">15+</div>
                <div className="text-xs text-slate-400 mt-1">{currentLang === 'uz' ? "Amaliy loyihalar" : 'Hands-on projects'}</div>
              </div>
              <div>
                <div className="text-2xl sm:text-3xl font-bold font-mono text-amber-400 tabular-nums">100%</div>
                <div className="text-xs text-slate-400 mt-1">{currentLang === 'uz' ? "Amaliy tajriba" : 'Physical practical code'}</div>
              </div>
            </div>

          </div>

          {/* Right Column: Visual Anchor & Interactive Code Inspector */}
          <div className="lg:col-span-5 flex flex-col gap-5">
            
            {/* Visual Portrait Card */}
            <div className="relative group rounded-2xl overflow-hidden glass-panel border border-slate-700/60 shadow-2xl">
              <div className="aspect-[4/3] w-full overflow-hidden bg-slate-900 relative">
                <img
                  src={PERSONAL_INFO.heroImage}
                  alt="Tursunboyev Ibrohimjon - Robotics and Code Developer"
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#090b10] via-transparent to-transparent opacity-85" />
                
                {/* Live Floating Status Pin */}
                <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between text-xs">
                  <div className="bg-slate-900/90 backdrop-blur-md border border-cyan-500/30 px-3 py-1.5 rounded-md text-slate-200 flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                    <span className="font-mono">{currentLang === 'uz' ? 'IlmHub Lab: Faol Kodlash' : 'IlmHub Lab: Active Coding'}</span>
                  </div>
                  <div className="bg-slate-900/90 backdrop-blur-md border border-white/10 px-2.5 py-1.5 rounded-md text-cyan-400 font-mono">
                    13 yosh
                  </div>
                </div>
              </div>
            </div>

            {/* Interactive Code & Algorithmic Block Switcher (Proof of practical coding) */}
            <div className="rounded-xl glass-panel border border-slate-800 p-4">
              <div className="flex items-center justify-between pb-3 mb-3 border-b border-slate-800/80">
                <div className="flex items-center gap-2">
                  <Terminal className="w-4 h-4 text-cyan-400" />
                  <span className="text-xs font-semibold text-slate-300 font-mono">
                    {currentLang === 'uz' ? 'KOD VA MANTIQ NAMUNASI' : 'CODE & LOGIC SAMPLE'}
                  </span>
                </div>
                
                {/* Segmented control for tabs */}
                <div className="flex items-center gap-1 bg-slate-900/80 p-0.5 rounded-md border border-slate-800">
                  <button
                    onClick={() => setActiveTab('arduino')}
                    className={`px-2.5 py-1 text-xs rounded transition-colors ${
                      activeTab === 'arduino'
                        ? 'bg-cyan-500/20 text-cyan-300 font-semibold'
                        : 'text-slate-400 hover:text-slate-200'
                    }`}
                  >
                    Arduino C++
                  </button>
                  <button
                    onClick={() => setActiveTab('scratch')}
                    className={`px-2.5 py-1 text-xs rounded transition-colors ${
                      activeTab === 'scratch'
                        ? 'bg-amber-500/20 text-amber-300 font-semibold'
                        : 'text-slate-400 hover:text-slate-200'
                    }`}
                  >
                    Scratch
                  </button>
                </div>
              </div>

              {/* Code display */}
              <div className="relative group/code">
                <pre className="text-[11px] sm:text-xs font-mono text-slate-300 bg-slate-950/70 p-3 rounded-lg overflow-x-auto border border-slate-800/50 leading-relaxed max-h-44">
                  <code>{activeTab === 'arduino' ? arduinoSnippet : scratchSnippet}</code>
                </pre>
                
                <button
                  onClick={copyCode}
                  className="absolute top-2 right-2 p-1.5 bg-slate-800/80 hover:bg-slate-700 text-slate-300 hover:text-white rounded border border-slate-700 transition-colors"
                  title="Nusxalash"
                  aria-label="Copy code snippet"
                >
                  {copied ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
                </button>
              </div>

              <div className="mt-3 flex items-center justify-between text-[11px] text-slate-400">
                <span className="flex items-center gap-1.5">
                  <Cpu className="w-3.5 h-3.5 text-cyan-400" />
                  <span>{activeTab === 'arduino' ? 'Arduino UNO R3 Mikrokontroller' : 'Scratch 3.0 Game Engine'}</span>
                </span>
                <span className="text-slate-400">Ibrohimjon Muallifligi</span>
              </div>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
};
