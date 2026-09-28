import React from 'react';
import { Calendar, GraduationCap, Send, ExternalLink, Award, Sparkles, BookOpen } from 'lucide-react';
import { Language } from '../types';
import { PERSONAL_INFO, EDUCATION_MILESTONES } from '../data/portfolioData';

interface IlmHubSectionProps {
  currentLang: Language;
}

export const IlmHubSection: React.FC<IlmHubSectionProps> = ({ currentLang }) => {
  return (
    <section id="education" className="py-20 md:py-28 bg-[#07090e] border-b border-white/[0.06] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div>
            <div className="text-xs font-semibold text-cyan-400 tracking-wider mb-2 font-mono">
              {currentLang === 'uz' ? 'TA\'LIM VA AKADEMIK YO\'L' : 'EDUCATION & TRAINING PATH'}
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight [text-wrap:balance]">
              {currentLang === 'uz' ? 'IlmHub IT Akademiyasida 2 Yillik Tajriba' : '2 Years of Immersion at IlmHub IT Academy'}
            </h2>
            <p className="text-slate-400 mt-2 text-sm sm:text-base max-w-2xl">
              {currentLang === 'uz'
                ? 'Ibrohimjon 2 yildan buyon IlmHub kurslarida zamonaviy robototexnika, dasturlash va muhandislik amaliyotini o\'rganmoqda.'
                : 'For 2 full years, Ibrohimjon has engaged in physical computing, robotics, and software engineering at IlmHub.'}
            </p>
          </div>

          {/* IlmHub Telegram Link Button */}
          <a
            href={PERSONAL_INFO.ilmhubTelegramLink}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-4 py-2 text-xs font-semibold text-white bg-slate-800 hover:bg-slate-700 border border-slate-700 rounded-lg transition-colors whitespace-nowrap self-start md:self-auto"
          >
            <Send className="w-3.5 h-3.5 text-cyan-400" />
            <span>IlmHub Telegram: {PERSONAL_INFO.ilmhubTelegram}</span>
            <ExternalLink className="w-3 h-3 text-slate-400" />
          </a>
        </div>

        {/* Feature Banner: Lab Photo + IlmHub Trust Badge */}
        <div className="rounded-2xl glass-panel border border-slate-800 p-6 sm:p-8 mb-12 overflow-hidden relative">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            {/* Lab Image */}
            <div className="lg:col-span-6 rounded-xl overflow-hidden aspect-[16/9] border border-slate-700/80 bg-slate-900 relative">
              <img
                src={PERSONAL_INFO.ilmhubImage}
                alt="IlmHub IT Academy STEM Robotics Lab"
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/70 via-transparent to-transparent" />
              <div className="absolute bottom-3 left-3 text-xs font-mono text-cyan-300 bg-slate-900/90 px-2.5 py-1 rounded border border-slate-700">
                IlmHub STEM & Robotics Lab
              </div>
            </div>

            {/* Description & Academy Highlights */}
            <div className="lg:col-span-6 space-y-4">
              <div className="inline-flex items-center gap-2 text-xs font-mono text-emerald-400 bg-emerald-500/10 px-3 py-1 rounded-md border border-emerald-500/20">
                <GraduationCap className="w-4 h-4" />
                <span>2 Yillik Faol Talabalik Maqomi</span>
              </div>

              <h3 className="text-xl sm:text-2xl font-bold text-white">
                {currentLang === 'uz' ? 'IlmHub — Yosh Iste\'dodlar Maskani' : 'IlmHub — Where Young Innovators Thrive'}
              </h3>

              <p className="text-sm text-slate-300 leading-relaxed">
                {currentLang === 'uz'
                  ? 'IlmHub kurslarida olingan bilimlar tufayli Ibrohimjon faqat kompyuterda kod yozish bilan cheklanmay, real motorlar, mikrokontrollerlar, sensorlar va masofadan boshqarish vositalarini mustaqil yig\'ish va sozlash mahoratiga ega bo\'ldi.'
                  : 'Through intensive mentor-led modules at IlmHub, Ibrohimjon went beyond screen coding into physical hardware synthesis, circuit breadboarding, and wireless embedded systems.'}
              </p>

              <div className="grid grid-cols-2 gap-3 pt-2">
                <div className="p-3 rounded-lg bg-slate-900/90 border border-slate-800 text-xs">
                  <div className="font-bold text-white mb-0.5">Amaliy Darslar</div>
                  <div className="text-slate-400 text-[11px]">Nazariyadan ko'ra ko'proq real prototiplar</div>
                </div>
                <div className="p-3 rounded-lg bg-slate-900/90 border border-slate-800 text-xs">
                  <div className="font-bold text-white mb-0.5">Kuchli Ustozlar</div>
                  <div className="text-slate-400 text-[11px]">Tajribali muhandis va dasturchi murabbiylar</div>
                </div>
              </div>
            </div>

          </div>
        </div>

        {/* 2-Year Progression Timeline */}
        <div className="space-y-6">
          <div className="text-xs font-mono font-bold text-slate-400 tracking-wider">
            {currentLang === 'uz' ? 'BOSQICHMA-BOSQICH RIVOJLANISH XRONOLOGIYASI:' : 'CHRONOLOGICAL LEARNING MILESTONES:'}
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {EDUCATION_MILESTONES.map((milestone, index) => (
              <div
                key={milestone.year}
                className="rounded-xl glass-panel p-6 border border-slate-800 hover:border-slate-700 transition-colors flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between text-xs font-mono text-cyan-400 mb-3">
                    <span className="flex items-center gap-1.5">
                      <Calendar className="w-3.5 h-3.5" />
                      <span>{milestone.year}</span>
                    </span>
                    <span className="text-slate-500">Bosqich {index + 1}</span>
                  </div>

                  <h4 className="text-base font-bold text-white mb-2">
                    {currentLang === 'uz' ? milestone.titleUz : milestone.titleEn}
                  </h4>

                  <div className="text-xs text-slate-400 font-mono mb-3">
                    {milestone.academyUz}
                  </div>

                  <p className="text-xs text-slate-300 leading-relaxed mb-4">
                    {currentLang === 'uz' ? milestone.descriptionUz : milestone.descriptionEn}
                  </p>
                </div>

                <div className="pt-3 border-t border-slate-800/80">
                  <div className="text-[11px] text-slate-400 font-semibold mb-2">
                    {currentLang === 'uz' ? 'O\'zlashtirilgan:' : 'Mastered:'}
                  </div>
                  <div className="flex flex-wrap gap-1.5">
                    {milestone.skillsLearned.map(skill => (
                      <span
                        key={skill}
                        className="px-2 py-0.5 text-[10px] font-mono bg-slate-900 text-slate-300 border border-slate-800 rounded"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};
