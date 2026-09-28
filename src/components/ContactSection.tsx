import React, { useState } from 'react';
import { Phone, Send, Copy, Check, MessageSquare, MapPin, Mail, ExternalLink } from 'lucide-react';
import { Language } from '../types';
import { PERSONAL_INFO } from '../data/portfolioData';

interface ContactSectionProps {
  currentLang: Language;
}

export const ContactSection: React.FC<ContactSectionProps> = ({ currentLang }) => {
  const [copiedPhone, setCopiedPhone] = useState(false);
  const [copiedTelegram, setCopiedTelegram] = useState(false);
  const [visitorName, setVisitorName] = useState('');
  const [messageText, setMessageText] = useState('');
  const [sentSuccess, setSentSuccess] = useState(false);

  const handleCopyPhone = () => {
    navigator.clipboard.writeText(PERSONAL_INFO.phone);
    setCopiedPhone(true);
    setTimeout(() => setCopiedPhone(false), 2000);
  };

  const handleCopyTelegram = () => {
    navigator.clipboard.writeText(PERSONAL_INFO.telegram);
    setCopiedTelegram(true);
    setTimeout(() => setCopiedTelegram(false), 2000);
  };

  const handleSendMessage = (e: React.FormEvent) => {
    e.preventDefault();
    const encoded = encodeURIComponent(
      `Assalomu alaykum Ibrohimjon! Mening ismim ${visitorName || "Tashrif buyuruvchi"}. Xabarim: ${messageText}`
    );
    window.open(`https://t.me/narzullayeva_Iz?text=${encoded}`, '_blank');
    setSentSuccess(true);
    setTimeout(() => setSentSuccess(false), 3000);
  };

  return (
    <section id="contact" className="py-20 md:py-28 bg-[#07090e] border-b border-white/[0.06] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-14">
          <div className="text-xs font-semibold text-cyan-400 tracking-wider mb-2 font-mono">
            {currentLang === 'uz' ? 'ALOQA VA HAMKORLIK' : 'CONTACT & INQUIRIES'}
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight [text-wrap:balance]">
            {currentLang === 'uz' ? 'Ibrohimjon Bilan Bog\'laning' : 'Get in Touch with Ibrohimjon'}
          </h2>
          <p className="text-slate-400 mt-3 text-sm sm:text-base">
            {currentLang === 'uz'
              ? 'Yangi loyihalar, musobaqalar, robototexnika sinovlari yoki takliflar bo\'yicha bemalol murojaat qiling.'
              : 'Feel free to reach out for robotics competitions, tech collaborations, or inquiries.'}
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Direct Contact Cards (lg:col-span-5) */}
          <div className="lg:col-span-5 space-y-4">
            
            {/* Phone Card */}
            <div className="rounded-2xl glass-panel p-6 border border-slate-800 flex items-center justify-between">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-xl bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center text-emerald-400">
                  <Phone className="w-6 h-6" />
                </div>
                <div>
                  <div className="text-xs text-slate-400 font-mono">
                    {currentLang === 'uz' ? 'Telefon raqam' : 'Direct Phone'}
                  </div>
                  <a 
                    href={`tel:${PERSONAL_INFO.phoneClean}`}
                    className="text-base sm:text-lg font-bold text-white hover:text-emerald-400 transition-colors font-mono"
                  >
                    {PERSONAL_INFO.phone}
                  </a>
                </div>
              </div>

              <button
                onClick={handleCopyPhone}
                className="p-2 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-300 hover:text-white transition-colors"
                title="Raqamdan nusxa olish"
                aria-label="Copy phone"
              >
                {copiedPhone ? <Check className="w-4 h-4 text-emerald-400" /> : <Copy className="w-4 h-4" />}
              </button>
            </div>

            {/* Telegram Card */}
            <div className="rounded-2xl glass-panel p-6 border border-slate-800 flex items-center justify-between">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-xl bg-cyan-500/10 border border-cyan-500/20 flex items-center justify-center text-cyan-400">
                  <Send className="w-6 h-6" />
                </div>
                <div>
                  <div className="text-xs text-slate-400 font-mono">
                    {currentLang === 'uz' ? 'Shaxsiy Telegram' : 'Personal Telegram'}
                  </div>
                  <a 
                    href={PERSONAL_INFO.telegramLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-base sm:text-lg font-bold text-white hover:text-cyan-400 transition-colors font-mono"
                  >
                    {PERSONAL_INFO.telegram}
                  </a>
                </div>
              </div>

              <div className="flex items-center gap-1.5">
                <button
                  onClick={handleCopyTelegram}
                  className="p-2 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-300 hover:text-white transition-colors"
                  title="Username nusxalash"
                  aria-label="Copy Telegram username"
                >
                  {copiedTelegram ? <Check className="w-4 h-4 text-cyan-400" /> : <Copy className="w-4 h-4" />}
                </button>
                <a
                  href={PERSONAL_INFO.telegramLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-3 py-2 text-xs font-semibold bg-cyan-400 text-slate-950 rounded-lg hover:bg-cyan-300 transition-colors"
                >
                  Yozish
                </a>
              </div>
            </div>

            {/* IlmHub Academy Contact Note */}
            <div className="rounded-2xl glass-panel p-6 border border-slate-800 space-y-2">
              <div className="text-xs text-slate-400 font-mono">
                {currentLang === 'uz' ? 'Ta\'lim Maskani' : 'Academy Affiliation'}
              </div>
              <div className="flex items-center justify-between">
                <span className="text-sm font-semibold text-white">IlmHub IT Akademiyasi (2 yil)</span>
                <a
                  href={PERSONAL_INFO.ilmhubTelegramLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-xs text-cyan-400 hover:underline flex items-center gap-1"
                >
                  <span>{PERSONAL_INFO.ilmhubTelegram}</span>
                  <ExternalLink className="w-3 h-3" />
                </a>
              </div>
              <p className="text-xs text-slate-400 pt-1">
                Toshkent, O'zbekiston · Robototexnika va Dasturlash Laboratoriyasi
              </p>
            </div>

          </div>

          {/* Quick Telegram Message Sender (lg:col-span-7) */}
          <div className="lg:col-span-7 rounded-2xl glass-panel p-6 sm:p-8 border border-slate-800">
            <h3 className="text-lg font-bold text-white mb-2 flex items-center gap-2">
              <MessageSquare className="w-5 h-5 text-cyan-400" />
              <span>{currentLang === 'uz' ? 'Tezkor Xabar Yuborish' : 'Quick Direct Message'}</span>
            </h3>
            <p className="text-xs text-slate-400 mb-6">
              {currentLang === 'uz'
                ? 'Quyidagi formani to\'ldiring va to\'g\'ridan-to\'g\'ri Ibrohimjonning Telegramiga yuboring.'
                : 'Fill out this form to send a pre-formatted message directly to Ibrohimjon on Telegram.'}
            </p>

            <form onSubmit={handleSendMessage} className="space-y-4">
              <div>
                <label className="block text-xs font-mono text-slate-300 mb-1.5">
                  {currentLang === 'uz' ? 'Ismingiz yoki Tashkilotingiz:' : 'Your Name / Organization:'}
                </label>
                <input
                  type="text"
                  required
                  value={visitorName}
                  onChange={(e) => setVisitorName(e.target.value)}
                  placeholder={currentLang === 'uz' ? 'Masalan: Sardor / IT Ustoz' : 'e.g. John / IT Mentor'}
                  className="w-full px-4 py-2.5 rounded-lg bg-slate-900 border border-slate-700/80 text-white text-sm focus:outline-none focus:border-cyan-400 transition-colors"
                />
              </div>

              <div>
                <label className="block text-xs font-mono text-slate-300 mb-1.5">
                  {currentLang === 'uz' ? 'Xabar Matni:' : 'Your Message:'}
                </label>
                <textarea
                  required
                  rows={4}
                  value={messageText}
                  onChange={(e) => setMessageText(e.target.value)}
                  placeholder={
                    currentLang === 'uz'
                      ? 'Salom Ibrohimjon! Robototexnika loyihalaringiz juda qiziqarli ekan...'
                      : 'Hi Ibrohimjon! I loved your robotics rover project...'
                  }
                  className="w-full px-4 py-2.5 rounded-lg bg-slate-900 border border-slate-700/80 text-white text-sm focus:outline-none focus:border-cyan-400 transition-colors resize-none"
                />
              </div>

              <div className="flex items-center justify-between pt-2">
                <div className="text-xs text-slate-400">
                  {sentSuccess && (
                    <span className="text-emerald-400 font-semibold flex items-center gap-1">
                      <Check className="w-3.5 h-3.5" /> Telegram ochilmoqda!
                    </span>
                  )}
                </div>

                <button
                  type="submit"
                  className="px-6 py-2.5 text-xs sm:text-sm font-semibold text-slate-950 bg-cyan-400 hover:bg-cyan-300 rounded-lg transition-colors flex items-center gap-2 shadow-[0_0_15px_rgba(34,211,238,0.25)]"
                >
                  <Send className="w-4 h-4" />
                  <span>{currentLang === 'uz' ? 'Telegramda Yuborish' : 'Send via Telegram'}</span>
                </button>
              </div>
            </form>
          </div>

        </div>

      </div>
    </section>
  );
};
