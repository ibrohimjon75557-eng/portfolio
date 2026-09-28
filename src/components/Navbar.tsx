import React, { useState } from 'react';
import { Menu, X, Send, Phone, Globe } from 'lucide-react';
import { Language } from '../types';
import { PERSONAL_INFO } from '../data/portfolioData';

interface NavbarProps {
  currentLang: Language;
  onToggleLang: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ currentLang, onToggleLang }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = [
    { href: '#about', labelUz: 'Haqimda', labelEn: 'About' },
    { href: '#skills', labelUz: 'Bilimlar', labelEn: 'Skills' },
    { href: '#lab', labelUz: 'Laboratoriya', labelEn: 'Virtual Lab' },
    { href: '#projects', labelUz: 'Loyihalar', labelEn: 'Projects' },
    { href: '#education', labelUz: 'IlmHub', labelEn: 'Education' },
    { href: '#contact', labelUz: 'Aloqa', labelEn: 'Contact' },
  ];

  return (
    <header className="sticky top-0 z-50 w-full backdrop-blur-md bg-[#090b10]/85 border-b border-white/[0.06]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        
        {/* Zone 1: Single text element wordmark */}
        <a 
          href="#" 
          className="text-lg font-bold tracking-tight text-white hover:text-cyan-400 transition-colors flex items-center gap-2"
        >
          <span className="w-2.5 h-2.5 rounded-full bg-cyan-400 shadow-[0_0_10px_rgba(34,211,238,0.8)]" />
          <span>Ibrohimjon Tursunboyev</span>
        </a>

        {/* Zone 2: Clean text navigation links */}
        <nav className="hidden md:flex items-center gap-7 text-sm font-medium text-slate-300">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="hover:text-cyan-400 transition-colors"
            >
              {currentLang === 'uz' ? link.labelUz : link.labelEn}
            </a>
          ))}
        </nav>

        {/* Zone 3: 1-2 primary actions */}
        <div className="flex items-center gap-3">
          {/* Language Switcher */}
          <button
            onClick={onToggleLang}
            className="flex items-center gap-1.5 px-2.5 py-1.5 text-xs font-semibold text-slate-300 hover:text-white bg-slate-800/80 hover:bg-slate-700/80 border border-slate-700/60 rounded-md transition-colors"
            title={currentLang === 'uz' ? "Switch to English" : "O'zbek tiliga o'tish"}
          >
            <Globe className="w-3.5 h-3.5 text-cyan-400" />
            <span>{currentLang === 'uz' ? 'UZ' : 'EN'}</span>
          </button>

          {/* Quick Contact Button */}
          <a
            href={PERSONAL_INFO.telegramLink}
            target="_blank"
            rel="noopener noreferrer"
            className="hidden sm:inline-flex items-center gap-2 px-3.5 py-1.5 text-xs font-semibold text-slate-950 bg-cyan-400 hover:bg-cyan-300 rounded-md transition-colors shadow-sm whitespace-nowrap"
          >
            <Send className="w-3.5 h-3.5" />
            <span>{currentLang === 'uz' ? 'Telegram' : 'Contact'}</span>
          </a>

          {/* Mobile hamburger button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2 text-slate-400 hover:text-white focus:outline-none"
            aria-label="Toggle navigation menu"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden px-4 pt-3 pb-5 border-t border-slate-800 bg-[#0c1017]">
          <div className="flex flex-col gap-3">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="py-2 text-sm font-medium text-slate-300 hover:text-cyan-400 border-b border-slate-800/50"
              >
                {currentLang === 'uz' ? link.labelUz : link.labelEn}
              </a>
            ))}
            <div className="pt-2 flex items-center justify-between">
              <a
                href={`tel:${PERSONAL_INFO.phoneClean}`}
                className="flex items-center gap-2 text-xs text-slate-300 py-1.5"
              >
                <Phone className="w-3.5 h-3.5 text-emerald-400" />
                <span>{PERSONAL_INFO.phone}</span>
              </a>
              <a
                href={PERSONAL_INFO.telegramLink}
                target="_blank"
                rel="noopener noreferrer"
                className="px-3 py-1.5 text-xs font-semibold text-slate-950 bg-cyan-400 rounded-md"
              >
                Telegram: {PERSONAL_INFO.telegram}
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};
