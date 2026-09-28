import React from 'react';
import { ArrowUp, Send, Phone, Heart } from 'lucide-react';
import { Language } from '../types';
import { PERSONAL_INFO } from '../data/portfolioData';

interface FooterProps {
  currentLang: Language;
}

export const Footer: React.FC<FooterProps> = ({ currentLang }) => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#05070a] border-t border-white/[0.06] py-12 text-slate-400 text-xs">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 pb-8 border-b border-slate-800/80">
          
          {/* Brand & Narrative */}
          <div className="flex flex-col items-center md:items-start text-center md:text-left gap-1">
            <span className="text-base font-bold text-white tracking-tight flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-cyan-400" />
              <span>{PERSONAL_INFO.name}</span>
            </span>
            <p className="text-slate-400 text-xs">
              {currentLang === 'uz'
                ? '13 yoshli yosh dasturchi va robototexnika muhandisi portfoliosi · IlmHub'
                : '13-year-old software developer & robotics engineer portfolio · IlmHub'}
            </p>
          </div>

          {/* Quick contact shortcuts */}
          <div className="flex items-center gap-6 font-mono text-xs">
            <a 
              href={`tel:${PERSONAL_INFO.phoneClean}`} 
              className="hover:text-white transition-colors flex items-center gap-1.5"
            >
              <Phone className="w-3.5 h-3.5 text-emerald-400" />
              <span>{PERSONAL_INFO.phone}</span>
            </a>

            <a 
              href={PERSONAL_INFO.telegramLink} 
              target="_blank" 
              rel="noopener noreferrer"
              className="hover:text-cyan-400 transition-colors flex items-center gap-1.5"
            >
              <Send className="w-3.5 h-3.5 text-cyan-400" />
              <span>{PERSONAL_INFO.telegram}</span>
            </a>

            <button
              onClick={scrollToTop}
              className="p-2 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-300 hover:text-white transition-colors flex items-center gap-1"
              title="Yuqoriga qaytish"
              aria-label="Scroll to top"
            >
              <ArrowUp className="w-4 h-4" />
            </button>
          </div>

        </div>

        {/* Quiet Bottom Legal */}
        <div className="pt-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-[11px] text-slate-400">
          <div>
            © {new Date().getFullYear()} {PERSONAL_INFO.name}. Barcha huquqlar himoyalangan.
          </div>
          <div>
            IlmHub IT Akademiyasi ({PERSONAL_INFO.ilmhubTelegram}) ta'lim oluvchisi
          </div>
        </div>
      </div>
    </footer>
  );
};
