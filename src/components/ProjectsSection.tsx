import React, { useState } from 'react';
import { ExternalLink, Layers, CheckCircle2, X, Terminal, Cpu, ArrowUpRight } from 'lucide-react';
import { Language, ProjectItem } from '../types';
import { PROJECTS_LIST } from '../data/portfolioData';

interface ProjectsSectionProps {
  currentLang: Language;
}

export const ProjectsSection: React.FC<ProjectsSectionProps> = ({ currentLang }) => {
  const [selectedProject, setSelectedProject] = useState<ProjectItem | null>(null);

  return (
    <section id="projects" className="py-20 md:py-28 bg-[#090b10] border-b border-white/[0.06] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div>
            <div className="text-xs font-semibold text-cyan-400 tracking-wider mb-2 font-mono">
              {currentLang === 'uz' ? 'AMALIY ISHLAR VA MUHANDISLIK' : 'PORTFOLIO OF PRACTICAL WORKS'}
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight [text-wrap:balance]">
              {currentLang === 'uz' ? 'Tanlangan IT va Robototexnika Loyihalari' : 'Featured Hardware & Software Projects'}
            </h2>
            <p className="text-slate-400 mt-2 text-sm sm:text-base max-w-xl">
              {currentLang === 'uz'
                ? 'Ibrohimjon tomonidan noldan loyihalashtirilgan, yig\'ilgan va dasturlangan real ishlanmalar.'
                : 'Engineered, assembled, and programmed by Ibrohimjon during his two years of rigorous STEM training.'}
            </p>
          </div>

          <div className="text-xs text-slate-400 font-mono">
            <span>3 ta Asosiy Show-case</span>
            <span className="mx-2" aria-hidden="true">·</span>
            <span className="text-cyan-400">100% Sinovdan O'tgan</span>
          </div>
        </div>

        {/* Bento Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
          
          {/* Card 1: Main Large Rover Project (col-span-12 lg:col-span-7) */}
          <div 
            onClick={() => setSelectedProject(PROJECTS_LIST[0])}
            className="lg:col-span-7 group cursor-pointer rounded-2xl glass-panel border border-slate-800 hover:border-cyan-500/40 transition-all duration-300 overflow-hidden flex flex-col justify-between"
          >
            <div className="relative aspect-[16/10] w-full overflow-hidden bg-slate-900">
              <img
                src={PROJECTS_LIST[0].image}
                alt={PROJECTS_LIST[0].titleUz}
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0b0f19] via-transparent to-transparent opacity-90" />
              
              {/* Unboxed category badge overlay */}
              <div className="absolute top-4 left-4 text-xs font-mono text-cyan-300 bg-slate-900/80 backdrop-blur-md px-3 py-1 rounded-md border border-cyan-500/20">
                {currentLang === 'uz' ? PROJECTS_LIST[0].categoryUz : PROJECTS_LIST[0].categoryEn}
              </div>
            </div>

            <div className="p-6">
              <div className="flex items-center gap-2 text-xs text-slate-400 mb-2 font-mono">
                <span>Arduino C++</span>
                <span aria-hidden="true">·</span>
                <span>HC-SR04 Radar</span>
                <span aria-hidden="true">·</span>
                <span>L298N 4WD</span>
              </div>

              <h3 className="text-xl sm:text-2xl font-bold text-white group-hover:text-cyan-300 transition-colors mb-2">
                {currentLang === 'uz' ? PROJECTS_LIST[0].titleUz : PROJECTS_LIST[0].titleEn}
              </h3>

              <p className="text-xs sm:text-sm text-slate-400 leading-relaxed mb-4">
                {currentLang === 'uz' ? PROJECTS_LIST[0].summaryUz : PROJECTS_LIST[0].summaryEn}
              </p>

              <div className="flex items-center justify-between pt-4 border-t border-slate-800 text-xs font-medium">
                <span className="text-slate-400">{currentLang === 'uz' ? 'To\'liq sxema va kod' : 'Full schematics & code'}</span>
                <span className="text-cyan-400 flex items-center gap-1 group-hover:translate-x-1 transition-transform">
                  <span>{currentLang === 'uz' ? 'Batafsil ko\'rish' : 'View Details'}</span>
                  <ArrowUpRight className="w-4 h-4" />
                </span>
              </div>
            </div>
          </div>

          {/* Cards 2 & 3: Vertical Stack (col-span-12 lg:col-span-5) */}
          <div className="lg:col-span-5 flex flex-col gap-6">
            
            {/* Card 2: Mobile IoT Controller */}
            <div 
              onClick={() => setSelectedProject(PROJECTS_LIST[1])}
              className="group cursor-pointer rounded-2xl glass-panel border border-slate-800 hover:border-purple-500/40 transition-all duration-300 p-5 flex flex-col justify-between"
            >
              <div className="flex gap-4 items-center mb-3">
                <div className="w-20 h-20 rounded-xl overflow-hidden bg-slate-900 shrink-0 border border-slate-700">
                  <img
                    src={PROJECTS_LIST[1].image}
                    alt={PROJECTS_LIST[1].titleUz}
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform"
                  />
                </div>
                <div>
                  <div className="text-xs text-purple-400 font-mono mb-1">
                    {currentLang === 'uz' ? PROJECTS_LIST[1].categoryUz : PROJECTS_LIST[1].categoryEn}
                  </div>
                  <h3 className="text-base font-bold text-white group-hover:text-purple-300 transition-colors">
                    {currentLang === 'uz' ? PROJECTS_LIST[1].titleUz : PROJECTS_LIST[1].titleEn}
                  </h3>
                </div>
              </div>

              <p className="text-xs text-slate-400 line-clamp-2 mb-3">
                {currentLang === 'uz' ? PROJECTS_LIST[1].summaryUz : PROJECTS_LIST[1].summaryEn}
              </p>

              <div className="flex items-center justify-between pt-3 border-t border-slate-800/80 text-xs">
                <span className="text-slate-400 font-mono text-[11px]">MIT App + Bluetooth</span>
                <span className="text-purple-400 flex items-center gap-1 group-hover:translate-x-1 transition-transform">
                  <span>{currentLang === 'uz' ? 'Ochish' : 'Open'}</span>
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </span>
              </div>
            </div>

            {/* Card 3: Scratch Arcade Game */}
            <div 
              onClick={() => setSelectedProject(PROJECTS_LIST[2])}
              className="group cursor-pointer rounded-2xl glass-panel border border-slate-800 hover:border-amber-500/40 transition-all duration-300 p-5 flex flex-col justify-between"
            >
              <div className="flex gap-4 items-center mb-3">
                <div className="w-20 h-20 rounded-xl overflow-hidden bg-slate-900 shrink-0 border border-slate-700">
                  <img
                    src={PROJECTS_LIST[2].image}
                    alt={PROJECTS_LIST[2].titleUz}
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform"
                  />
                </div>
                <div>
                  <div className="text-xs text-amber-400 font-mono mb-1">
                    {currentLang === 'uz' ? PROJECTS_LIST[2].categoryUz : PROJECTS_LIST[2].categoryEn}
                  </div>
                  <h3 className="text-base font-bold text-white group-hover:text-amber-300 transition-colors">
                    {currentLang === 'uz' ? PROJECTS_LIST[2].titleUz : PROJECTS_LIST[2].titleEn}
                  </h3>
                </div>
              </div>

              <p className="text-xs text-slate-400 line-clamp-2 mb-3">
                {currentLang === 'uz' ? PROJECTS_LIST[2].summaryUz : PROJECTS_LIST[2].summaryEn}
              </p>

              <div className="flex items-center justify-between pt-3 border-t border-slate-800/80 text-xs">
                <span className="text-slate-400 font-mono text-[11px]">Scratch 3.0 + Fizika</span>
                <span className="text-amber-400 flex items-center gap-1 group-hover:translate-x-1 transition-transform">
                  <span>{currentLang === 'uz' ? 'Ochish' : 'Open'}</span>
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </span>
              </div>
            </div>

          </div>

        </div>

        {/* Modal Lightbox Viewer */}
        {selectedProject && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/85 backdrop-blur-md animate-in fade-in duration-200">
            <div className="bg-[#0b0f19] border border-cyan-500/40 rounded-2xl max-w-3xl w-full p-6 sm:p-8 shadow-2xl relative max-h-[92vh] overflow-y-auto">
              
              <button
                onClick={() => setSelectedProject(null)}
                className="absolute top-5 right-5 p-2 text-slate-400 hover:text-white rounded-lg bg-slate-800/60 hover:bg-slate-800 transition-colors z-20"
                aria-label="Yopish"
              >
                <X className="w-5 h-5" />
              </button>

              {/* Modal Image Header */}
              <div className="rounded-xl overflow-hidden bg-slate-950 mb-6 aspect-[16/9] border border-slate-800 relative">
                <img
                  src={selectedProject.image}
                  alt={selectedProject.titleUz}
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0b0f19] via-transparent to-transparent opacity-80" />
                <div className="absolute bottom-4 left-4 right-4">
                  <div className="text-xs font-mono text-cyan-400 mb-1">
                    {currentLang === 'uz' ? selectedProject.categoryUz : selectedProject.categoryEn}
                  </div>
                  <h3 className="text-xl sm:text-2xl font-bold text-white">
                    {currentLang === 'uz' ? selectedProject.titleUz : selectedProject.titleEn}
                  </h3>
                </div>
              </div>

              {/* Detailed Explanation */}
              <div className="space-y-6">
                <div>
                  <h4 className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-2 font-mono">
                    {currentLang === 'uz' ? 'LOYIHA HAQIDA' : 'PROJECT OVERVIEW'}
                  </h4>
                  <p className="text-sm text-slate-300 leading-relaxed">
                    {currentLang === 'uz' ? selectedProject.detailsUz : selectedProject.detailsEn}
                  </p>
                </div>

                {/* Stacks */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="p-4 rounded-xl bg-slate-900/90 border border-slate-800">
                    <div className="flex items-center gap-2 text-xs font-bold text-cyan-400 mb-2 font-mono">
                      <Cpu className="w-4 h-4" />
                      <span>{currentLang === 'uz' ? 'HARDWARE / USKUNALAR' : 'HARDWARE MODULES'}</span>
                    </div>
                    <ul className="text-xs text-slate-300 space-y-1">
                      {selectedProject.hardwareStack.map(item => (
                        <li key={item} className="flex items-center gap-1.5">
                          <span className="w-1.5 h-1.5 rounded-full bg-cyan-400" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="p-4 rounded-xl bg-slate-900/90 border border-slate-800">
                    <div className="flex items-center gap-2 text-xs font-bold text-emerald-400 mb-2 font-mono">
                      <Terminal className="w-4 h-4" />
                      <span>{currentLang === 'uz' ? 'SOFTWARE / ALGORITMLAR' : 'SOFTWARE & LOGIC'}</span>
                    </div>
                    <ul className="text-xs text-slate-300 space-y-1">
                      {selectedProject.softwareStack.map(item => (
                        <li key={item} className="flex items-center gap-1.5">
                          <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* Achievements List */}
                <div>
                  <h4 className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-2 font-mono">
                    {currentLang === 'uz' ? 'ERISHILGAN NATIJALAR' : 'KEY ACHIEVEMENTS'}
                  </h4>
                  <div className="space-y-2">
                    {(currentLang === 'uz' ? selectedProject.achievementsUz : selectedProject.achievementsEn).map(item => (
                      <div key={item} className="flex items-center gap-2 text-xs text-slate-200 p-2 rounded-lg bg-slate-900 border border-slate-800">
                        <CheckCircle2 className="w-4 h-4 text-cyan-400 shrink-0" />
                        <span>{item}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Action button */}
                <div className="pt-2 flex justify-end">
                  <button
                    onClick={() => setSelectedProject(null)}
                    className="px-5 py-2 text-xs font-semibold text-slate-950 bg-cyan-400 hover:bg-cyan-300 rounded-lg transition-colors"
                  >
                    {currentLang === 'uz' ? 'Yopish' : 'Close'}
                  </button>
                </div>
              </div>

            </div>
          </div>
        )}

      </div>
    </section>
  );
};
