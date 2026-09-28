/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { Language } from './types';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { SkillsSection } from './components/SkillsSection';
import { InteractiveRoboticsLab } from './components/InteractiveRoboticsLab';
import { ProjectsSection } from './components/ProjectsSection';
import { IlmHubSection } from './components/IlmHubSection';
import { InteractiveTerminal } from './components/InteractiveTerminal';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';

export default function App() {
  const [currentLang, setCurrentLang] = useState<Language>('uz');

  const toggleLanguage = () => {
    setCurrentLang(prev => (prev === 'uz' ? 'en' : 'uz'));
  };

  return (
    <div className="min-h-screen bg-[#080a0f] text-[#e2e8f0] flex flex-col selection:bg-cyan-500/20 selection:text-cyan-300">
      {/* 3-zone Header */}
      <Navbar currentLang={currentLang} onToggleLang={toggleLanguage} />

      {/* Main Content Sections */}
      <main className="flex-1">
        <Hero currentLang={currentLang} />
        <SkillsSection currentLang={currentLang} />
        <InteractiveRoboticsLab currentLang={currentLang} />
        <ProjectsSection currentLang={currentLang} />
        <IlmHubSection currentLang={currentLang} />
        <InteractiveTerminal currentLang={currentLang} />
        <ContactSection currentLang={currentLang} />
      </main>

      {/* Clean Footer */}
      <Footer currentLang={currentLang} />
    </div>
  );
}
