import React, { useState, useEffect } from 'react';
import { Cpu, Smartphone, Gamepad2, Play, Pause, RotateCcw, Activity, Wifi, ShieldAlert, Sparkles } from 'lucide-react';
import { Language } from '../types';

interface InteractiveRoboticsLabProps {
  currentLang: Language;
}

export const InteractiveRoboticsLab: React.FC<InteractiveRoboticsLabProps> = ({ currentLang }) => {
  const [activeTab, setActiveTab] = useState<'arduino' | 'mit_app' | 'scratch_block'>('arduino');
  
  // Arduino Lab states
  const [distance, setDistance] = useState<number>(28);
  const [isAutoDriving, setIsAutoDriving] = useState<boolean>(true);
  const [servoAngle, setServoAngle] = useState<number>(90);
  const [roverState, setRoverState] = useState<'forward' | 'turning_right' | 'turning_left' | 'stopped'>('forward');
  const [serialLogs, setSerialLogs] = useState<string[]>([
    '[INIT] Arduino UNO R3 boot ok',
    '[SENSOR] HC-SR04 ultrasonic active',
    '[STATUS] Autonomous evasion ready'
  ]);

  // MIT App Inventor controller states
  const [connectedBt, setConnectedBt] = useState<boolean>(true);
  const [activeCommand, setActiveCommand] = useState<string>('IDLE');
  const [lightOn, setLightOn] = useState<boolean>(false);

  // Scratch builder state
  const [blockSequence, setBlockSequence] = useState<string[]>([
    'Qachonki yashil bayroq bosilsa',
    'Doimiy takrorlash:',
    '  10 qadam oldinga yurish',
    '  Agar to\'siq < 20sm bo\'lsa: 90° o\'ngga burilish'
  ]);
  const [isRunningScratch, setIsRunningScratch] = useState<boolean>(false);

  // Auto logic loop for Arduino simulator
  useEffect(() => {
    if (!isAutoDriving) return;

    if (distance < 20) {
      setRoverState('turning_right');
      setServoAngle(45);
      addSerialLog(`[EVADE] Masofa: ${distance}sm < 20sm! O'ngga burilish...`);
    } else {
      setRoverState('forward');
      setServoAngle(90);
    }
  }, [distance, isAutoDriving]);

  const addSerialLog = (msg: string) => {
    setSerialLogs(prev => [msg, ...prev.slice(0, 4)]);
  };

  const handleManualDrive = (cmd: string) => {
    setActiveCommand(cmd);
    addSerialLog(`[BLUETOOTH HC-05] Buyruq qabul qilindi: '${cmd}'`);
  };

  return (
    <section id="lab" className="py-20 bg-[#07090e] border-b border-white/[0.06] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="text-xs font-semibold text-cyan-400 tracking-wider mb-2 font-mono">
            {currentLang === 'uz' ? 'JONLI AMALIYOT LABORATORIYASI' : 'LIVE PRACTICAL SANDBOX'}
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight [text-wrap:balance]">
            {currentLang === 'uz' ? 'Virtual Texnologik Sinov Maydoni' : 'Virtual Tech Hardware & Code Lab'}
          </h2>
          <p className="text-slate-400 mt-3 text-sm sm:text-base">
            {currentLang === 'uz'
              ? 'Ibrohimjon yaratgan robotlar va dasturlarning mantiqini brauzerning o\'zida sinab ko\'ring.'
              : 'Interact directly with the physical logic and mobile architectures developed by Ibrohimjon.'}
          </p>

          {/* Tab Selector */}
          <div className="mt-8 inline-flex items-center gap-1.5 p-1 bg-slate-900 border border-slate-800 rounded-xl">
            <button
              onClick={() => setActiveTab('arduino')}
              className={`flex items-center gap-2 px-4 py-2 text-xs font-medium rounded-lg transition-colors ${
                activeTab === 'arduino' ? 'bg-cyan-500/20 text-cyan-300 font-semibold' : 'text-slate-400 hover:text-slate-200'
              }`}
            >
              <Cpu className="w-4 h-4 text-cyan-400" />
              <span>Arduino & Radar Rover</span>
            </button>
            <button
              onClick={() => setActiveTab('mit_app')}
              className={`flex items-center gap-2 px-4 py-2 text-xs font-medium rounded-lg transition-colors ${
                activeTab === 'mit_app' ? 'bg-purple-500/20 text-purple-300 font-semibold' : 'text-slate-400 hover:text-slate-200'
              }`}
            >
              <Smartphone className="w-4 h-4 text-purple-400" />
              <span>MIT App Inventor Telemetriya</span>
            </button>
            <button
              onClick={() => setActiveTab('scratch_block')}
              className={`flex items-center gap-2 px-4 py-2 text-xs font-medium rounded-lg transition-colors ${
                activeTab === 'scratch_block' ? 'bg-amber-500/20 text-amber-300 font-semibold' : 'text-slate-400 hover:text-slate-200'
              }`}
            >
              <Gamepad2 className="w-4 h-4 text-amber-400" />
              <span>Scratch Mantiqiy Bloklari</span>
            </button>
          </div>
        </div>

        {/* Tab 1: Arduino Rover & Radar */}
        {activeTab === 'arduino' && (
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center glass-panel rounded-2xl p-6 sm:p-8 border border-slate-800">
            
            {/* Visual Rover Animation & Radar Canvas */}
            <div className="lg:col-span-7 flex flex-col items-center justify-center p-6 bg-slate-950/80 rounded-xl border border-slate-800/80 relative min-h-[340px]">
              
              {/* Radar arc visualization */}
              <div className="relative w-64 h-64 flex items-center justify-center">
                {/* Concentric distance rings */}
                <div className="absolute inset-0 rounded-full border border-dashed border-cyan-500/20" />
                <div className="absolute inset-8 rounded-full border border-cyan-500/20" />
                <div className="absolute inset-16 rounded-full border border-cyan-500/30" />

                {/* Sweeping radar line */}
                <div 
                  className="absolute w-28 h-0.5 bg-gradient-to-r from-transparent to-cyan-400 origin-left left-1/2 transition-transform duration-300 shadow-[0_0_12px_rgba(34,211,238,0.8)]"
                  style={{ transform: `rotate(${servoAngle - 90}deg)` }}
                />

                {/* Rover Central Unit */}
                <div className="z-10 bg-slate-900 border-2 border-cyan-400/80 w-28 h-36 rounded-xl shadow-2xl flex flex-col items-center justify-between p-2.5 transition-transform duration-300">
                  {/* Front ultrasonic sensor eyes */}
                  <div className="flex gap-2">
                    <div className="w-4 h-4 rounded-full bg-slate-800 border border-cyan-400 flex items-center justify-center">
                      <div className="w-1.5 h-1.5 rounded-full bg-cyan-400 animate-ping" />
                    </div>
                    <div className="w-4 h-4 rounded-full bg-slate-800 border border-cyan-400 flex items-center justify-center">
                      <div className="w-1.5 h-1.5 rounded-full bg-cyan-400" />
                    </div>
                  </div>

                  {/* Microcontroller label */}
                  <div className="text-[10px] font-mono text-cyan-300 font-bold tracking-tight">
                    ARDUINO UNO
                  </div>

                  {/* Motor wheels */}
                  <div className="w-full flex justify-between px-1">
                    <div className="w-2 h-6 bg-slate-700 rounded-sm" />
                    <div className="w-2 h-6 bg-slate-700 rounded-sm" />
                  </div>
                </div>

                {/* Virtual obstacle pin */}
                <div 
                  className="absolute p-1.5 rounded bg-rose-500/90 text-white text-[10px] font-mono font-bold shadow-lg transition-all duration-300"
                  style={{
                    top: `${Math.max(10, 80 - distance * 0.6)}px`,
                    left: '50%',
                    transform: 'translateX(-50%)'
                  }}
                >
                  To'siq ({distance}sm)
                </div>
              </div>

              {/* Status Banner */}
              <div className="mt-4 flex items-center gap-3 text-xs font-mono">
                <span className="text-slate-400">Holat:</span>
                <span className={`px-2 py-0.5 rounded ${
                  roverState === 'forward' 
                    ? 'bg-emerald-500/20 text-emerald-400 border border-emerald-500/30' 
                    : 'bg-amber-500/20 text-amber-400 border border-amber-500/30'
                }`}>
                  {roverState === 'forward' ? '▲ To\'g\'riga Harakat' : '↻ To\'siqdan Qochish (O\'ngga)'}
                </span>
                <span className="text-slate-500">|</span>
                <span className="text-cyan-400">Servo: {servoAngle}°</span>
              </div>
            </div>

            {/* Hardware Controls & Serial Terminal */}
            <div className="lg:col-span-5 flex flex-col gap-5">
              <div>
                <h3 className="text-lg font-bold text-white mb-1">
                  {currentLang === 'uz' ? 'Ultrasonik Masofa Sinovi' : 'Ultrasonic Distance Test'}
                </h3>
                <p className="text-xs text-slate-400 mb-4">
                  {currentLang === 'uz'
                    ? 'Masofa slayderini o\'zgartiring va mikrokontroller avtomatik to\'xtash algoritmini qanday ishga tushirishini ko\'ring.'
                    : 'Slide the distance meter to witness Arduino’s automated collision evasion algorithm in real-time.'}
                </p>

                {/* Slider */}
                <div className="bg-slate-900/90 p-4 rounded-xl border border-slate-800 space-y-3">
                  <div className="flex justify-between text-xs">
                    <span className="text-slate-300">Masofa Sensori (HC-SR04):</span>
                    <span className="font-mono text-cyan-400 font-bold text-sm">{distance} sm</span>
                  </div>
                  <input
                    type="range"
                    min="5"
                    max="80"
                    value={distance}
                    onChange={(e) => setDistance(Number(e.target.value))}
                    className="w-full accent-cyan-400 bg-slate-800 h-2 rounded cursor-pointer"
                  />
                  <div className="flex justify-between text-[10px] text-slate-400 font-mono">
                    <span>5sm (Xavfli yaqin)</span>
                    <span className="text-amber-400">20sm (Chegara)</span>
                    <span>80sm (Ochiq yo'l)</span>
                  </div>
                </div>
              </div>

              {/* Real-time Serial Monitor Box */}
              <div className="bg-slate-950 rounded-xl border border-slate-800 p-4 font-mono">
                <div className="flex items-center justify-between pb-2 mb-2 border-b border-slate-800 text-[11px] text-slate-400">
                  <div className="flex items-center gap-1.5 text-cyan-400">
                    <Activity className="w-3.5 h-3.5" />
                    <span>COM3 [SERIAL: 9600 BAUD]</span>
                  </div>
                  <button
                    onClick={() => setSerialLogs(['[LOG] Terminal tozalandi'])}
                    className="text-[10px] text-slate-400 hover:text-white"
                  >
                    Clear
                  </button>
                </div>
                <div className="space-y-1 text-xs text-slate-300 min-h-[90px]">
                  {serialLogs.map((log, i) => (
                    <div key={i} className="leading-snug truncate">
                      <span className="text-slate-400 mr-2">&gt;</span>
                      <span className={log.includes('XAVF') || log.includes('EVADE') ? 'text-amber-400' : 'text-slate-300'}>
                        {log}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

            </div>
          </div>
        )}

        {/* Tab 2: MIT App Inventor Smart Dashboard */}
        {activeTab === 'mit_app' && (
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center glass-panel rounded-2xl p-6 sm:p-8 border border-slate-800">
            
            {/* Phone Mockup with Tactile Buttons */}
            <div className="lg:col-span-6 flex justify-center">
              <div className="w-72 bg-slate-950 rounded-[2.5rem] p-4 border-4 border-slate-800 shadow-2xl relative">
                {/* Speaker pill top */}
                <div className="w-20 h-4 bg-slate-900 rounded-full mx-auto mb-4 border border-slate-800 flex items-center justify-center">
                  <div className="w-2 h-2 rounded-full bg-slate-700" />
                </div>

                {/* App Screen Content */}
                <div className="bg-[#0b0f19] rounded-2xl p-4 border border-slate-800/80 flex flex-col justify-between min-h-[420px]">
                  
                  {/* App Header */}
                  <div>
                    <div className="flex items-center justify-between pb-2 border-b border-slate-800 text-xs">
                      <span className="font-bold text-white tracking-wide">ROBO-CONTROLLER</span>
                      <span className="flex items-center gap-1 text-[11px] text-emerald-400">
                        <Wifi className="w-3 h-3" />
                        <span>HC-05 OK</span>
                      </span>
                    </div>

                    <div className="mt-4 p-2.5 rounded-lg bg-slate-900/90 text-center border border-slate-800">
                      <div className="text-[10px] text-slate-400">JONLI TELEMETRIYA</div>
                      <div className="text-sm font-mono font-bold text-cyan-400 mt-0.5">
                        {activeCommand === 'IDLE' ? 'KUTILMOQDA' : `BUYRUQ: ${activeCommand}`}
                      </div>
                    </div>
                  </div>

                  {/* Tactile D-Pad Controls */}
                  <div className="my-6 flex flex-col items-center gap-2">
                    <button
                      onClick={() => handleManualDrive('OLDINGA (FORWARD)')}
                      className="w-14 h-14 rounded-xl bg-slate-800 hover:bg-cyan-500/20 text-cyan-400 border border-slate-700 active:scale-95 transition-transform flex items-center justify-center font-bold"
                    >
                      ▲
                    </button>
                    <div className="flex gap-2">
                      <button
                        onClick={() => handleManualDrive('CHAPGA (LEFT)')}
                        className="w-14 h-14 rounded-xl bg-slate-800 hover:bg-cyan-500/20 text-cyan-400 border border-slate-700 active:scale-95 transition-transform flex items-center justify-center font-bold"
                      >
                        ◄
                      </button>
                      <button
                        onClick={() => handleManualDrive('TO\'XTASH (STOP)')}
                        className="w-14 h-14 rounded-xl bg-rose-500/20 hover:bg-rose-500/30 text-rose-400 border border-rose-500/40 active:scale-95 transition-transform flex items-center justify-center font-bold text-xs"
                      >
                        STOP
                      </button>
                      <button
                        onClick={() => handleManualDrive('O\'NGGA (RIGHT)')}
                        className="w-14 h-14 rounded-xl bg-slate-800 hover:bg-cyan-500/20 text-cyan-400 border border-slate-700 active:scale-95 transition-transform flex items-center justify-center font-bold"
                      >
                        ►
                      </button>
                    </div>
                    <button
                      onClick={() => handleManualDrive('ORQAGA (REVERSE)')}
                      className="w-14 h-14 rounded-xl bg-slate-800 hover:bg-cyan-500/20 text-cyan-400 border border-slate-700 active:scale-95 transition-transform flex items-center justify-center font-bold"
                    >
                      ▼
                    </button>
                  </div>

                  {/* Auxiliary toggles */}
                  <div className="flex items-center justify-between pt-2 border-t border-slate-800 text-xs">
                    <button
                      onClick={() => setLightOn(!lightOn)}
                      className={`px-3 py-1.5 rounded-lg border text-xs font-medium transition-colors ${
                        lightOn ? 'bg-amber-500/20 text-amber-300 border-amber-500/40' : 'bg-slate-900 text-slate-400 border-slate-800'
                      }`}
                    >
                      {lightOn ? '💡 Chiroq: Yoniq' : '💡 Chiroq: O\'chiq'}
                    </button>
                    <span className="text-[10px] text-slate-400 font-mono">BAT: 98%</span>
                  </div>

                </div>
              </div>
            </div>

            {/* Explanation & Architecture details */}
            <div className="lg:col-span-6 space-y-4">
              <h3 className="text-xl font-bold text-white">
                {currentLang === 'uz' ? 'Mobil Dastur va Bluetooth Arxitekturasi' : 'Mobile App & Bluetooth Architecture'}
              </h3>
              <p className="text-sm text-slate-300 leading-relaxed">
                {currentLang === 'uz'
                  ? 'Ibrohimjon MIT App Inventor muhitida noldan maxsus Android ilovasini ishlab chiqqan. Ushbu ilova smartfonning Bluetooth moduli orqali robotdagi HC-05 chipiga 9600 baud tezlikda buyruqlar paketini uzatadi.'
                  : 'Ibrohimjon architected this custom Android application in MIT App Inventor. It streams packet commands at 9600 baud via Bluetooth to HC-05 modules mounted on physical robots.'}
              </p>

              <div className="space-y-2 text-xs text-slate-300">
                <div className="flex items-center gap-2 p-2.5 rounded-lg bg-slate-900 border border-slate-800">
                  <span className="w-2 h-2 rounded-full bg-cyan-400" />
                  <span><strong>Kechikish (Latency):</strong> 20ms dan kam, real vaqtda boshqaruv</span>
                </div>
                <div className="flex items-center gap-2 p-2.5 rounded-lg bg-slate-900 border border-slate-800">
                  <span className="w-2 h-2 rounded-full bg-emerald-400" />
                  <span><strong>Xavfsizlik:</strong> Favqulodda E-Stop tizimi to'qnashuvni oldini oladi</span>
                </div>
                <div className="flex items-center gap-2 p-2.5 rounded-lg bg-slate-900 border border-slate-800">
                  <span className="w-2 h-2 rounded-full bg-purple-400" />
                  <span><strong>Dizayn:</strong> Yosh foydalanuvchilar uchun intuitiv Dark Mode UI</span>
                </div>
              </div>
            </div>

          </div>
        )}

        {/* Tab 3: Scratch Block Sequence */}
        {activeTab === 'scratch_block' && (
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center glass-panel rounded-2xl p-6 sm:p-8 border border-slate-800">
            <div className="lg:col-span-6 space-y-3 font-mono">
              <div className="text-xs text-amber-400 font-bold mb-2">
                SCRATCH 3.0 BLOK MANTIQIY TIZIMI:
              </div>

              {blockSequence.map((block, idx) => (
                <div
                  key={idx}
                  className={`p-3 rounded-lg text-xs font-semibold border transition-all ${
                    idx === 0 
                      ? 'bg-amber-500/20 text-amber-300 border-amber-500/40 shadow-sm'
                      : idx === 1
                      ? 'bg-amber-600/20 text-amber-200 border-amber-600/40'
                      : 'bg-blue-600/20 text-blue-300 border-blue-500/30'
                  }`}
                >
                  {block}
                </div>
              ))}

              <div className="pt-2 flex gap-3">
                <button
                  onClick={() => {
                    setIsRunningScratch(true);
                    setTimeout(() => setIsRunningScratch(false), 2000);
                  }}
                  className="px-4 py-2 text-xs font-bold text-slate-950 bg-amber-400 hover:bg-amber-300 rounded-lg flex items-center gap-2 transition-colors"
                >
                  <Play className="w-3.5 h-3.5 fill-current" />
                  <span>{isRunningScratch ? 'Bajarilmoqda...' : 'Bloklarni Ishga Tushirish'}</span>
                </button>
              </div>
            </div>

            <div className="lg:col-span-6 p-6 rounded-xl bg-slate-950/80 border border-slate-800 flex flex-col justify-center">
              <h4 className="text-sm font-bold text-white mb-2">
                {currentLang === 'uz' ? 'Nega Scratch Asosiy Poydevor?' : 'Why is Scratch the Foundation?'}
              </h4>
              <p className="text-xs text-slate-300 leading-relaxed mb-4">
                {currentLang === 'uz'
                  ? 'Ibrohimjon o\'zining dasturlash yo\'lini aynan Scratch bilan boshlagan. Scratch orqali o\'zgaruvchilar, sikllar (loops), shartli operatorlar (if/else) va voqealarga asoslangan (event-driven) fikrlash shakllandi. Bu esa keyinchalik Arduino C++ va mobil dasturlashni tez o\'zlashtirishga yordam berdi.'
                  : 'Ibrohimjon started his journey in Scratch, mastering variables, event listeners, conditional loops, and coordinate math. This conceptual foundation enabled swift advancement into C++ and mobile app development.'}
              </p>
              <div className="p-3 rounded-lg bg-slate-900 border border-slate-800 text-xs text-emerald-400">
                ✓ 5+ ta to'liq arkada o'yini va fizika mexanikalari yaratilgan
              </div>
            </div>
          </div>
        )}

      </div>
    </section>
  );
};
