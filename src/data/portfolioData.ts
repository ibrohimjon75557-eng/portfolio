import { SkillItem, ProjectItem, EducationMilestone } from '../types';

export const PERSONAL_INFO = {
  name: 'Tursunboyev Ibrohimjon',
  shortName: 'Ibrohimjon',
  roleUz: 'Yosh Dasturchi & Robototexnika Muhandisi',
  roleEn: 'Young Software Developer & Robotics Engineer',
  age: 13,
  phone: '+998 50 522 07 08',
  phoneClean: '+998505220708',
  telegram: '@narzullayeva_Iz',
  telegramLink: 'https://t.me/narzullayeva_Iz',
  ilmhubTelegram: '@ilmhub.uz',
  ilmhubTelegramLink: 'https://t.me/ilmhub_uz',
  locationUz: 'Toshkent, O\'zbekiston',
  locationEn: 'Tashkent, Uzbekistan',
  experienceDurationUz: '2 yildan beri IT va robototexnika sohasida',
  experienceDurationEn: '2+ years in STEM, coding & robotics',
  educationUz: 'IlmHub IT Akademiyasi talabasi (2 yil)',
  educationEn: 'IlmHub IT Academy Student (2 years)',
  heroImage: '/src/assets/images/hero_ibrohim_robotics_1790567566644.jpg',
  ilmhubImage: '/src/assets/images/ilmhub_learning_lab_1790567624323.jpg',
};

export const SKILLS_LIST: SkillItem[] = [
  {
    id: 'scratch',
    name: 'Scratch',
    category: 'software',
    badge: 'Vizual Dasturlash',
    experienceYears: '2 yil',
    descriptionUz: 'Blokli dasturlash asosida murakkab 2D o\'yinlar, interaktiv animatsiyalar va algoritmik mantiqni yaratish. Dasturlash poydevori.',
    descriptionEn: 'Creating complex 2D games, interactive animations, and algorithmic logic based on block-based programming.',
    technologies: ['Scratch 3.0', 'Game Loops', 'Physics Simulation', 'Sprite Animation', 'Broadcast Messaging'],
    keyOutcomeUz: '5 dan ortiq to\'liq interaktiv arkada o\'yinlari va matematik modellar yaratilgan.',
    keyOutcomeEn: 'Built 5+ fully interactive arcade games and mathematical simulation models.',
    iconName: 'Gamepad2'
  },
  {
    id: 'arduino',
    name: 'Arduino IDE',
    category: 'hardware',
    badge: 'Mikrokontroller & C++',
    experienceYears: '2 yil',
    descriptionUz: 'C/C++ tilida mikrokontrollerlar uchun dasturiy kod yozish. Sensorlar, motorlar va drayverlar bilan bevosita ishlash.',
    descriptionEn: 'Writing firmware in C/C++ for microcontrollers. Interfacing directly with sensors, actuators, and motor drivers.',
    technologies: ['Arduino UNO', 'C / C++', 'HC-SR04 Ultrasonic', 'L298N Motor Driver', 'Servo SG90', 'PWM Control'],
    keyOutcomeUz: 'Avtonom harakatlanuvchi robotlar va aqlli masofa o\'lchash tizimlari loyihalashtirilgan.',
    keyOutcomeEn: 'Engineered autonomous rovers and intelligent distance measurement micro-systems.',
    iconName: 'Cpu'
  },
  {
    id: 'mblock',
    name: 'mBlock',
    category: 'hardware',
    badge: 'STEAM Robototexnika',
    experienceYears: '2 yil',
    descriptionUz: 'Robotlarni boshqarish uchun blok va Python/C++ kodlari o\'rtasidagi ko\'prik. Algoritmik robot harakatlari va sensor sinxronizatsiyasi.',
    descriptionEn: 'Bridging block coding with Python/C++ for robotics control. Developing sensor synchronization algorithms.',
    technologies: ['mBlock 5', 'Makeblock', 'Line Tracking Algorithms', 'Sensor Feedback Loops', 'Python Bridge'],
    keyOutcomeUz: 'Chiziq bo\'ylab xatoliksiz yuruvchi va to\'siqlarni taniy oladigan mBot dasturlari yozilgan.',
    keyOutcomeEn: 'Programmed high-precision line follower algorithms with dynamic obstacle detection.',
    iconName: 'Bot'
  },
  {
    id: 'robotics',
    name: 'Robotics',
    category: 'hardware',
    badge: 'Muhandislik & Konstruktsiya',
    experienceYears: '2 yil',
    descriptionUz: 'Mexanika, elektronika va dasturiy ta\'minotning uyg\'unligi. Sxemalarni non-boardda yig\'ish, lehimlash asoslari va avtomatlashtirish.',
    descriptionEn: 'Synergy of mechanics, electronics, and embedded software. Circuit breadboarding and automation mechanics.',
    technologies: ['4WD Chassis', 'IR Sensors', 'Bluetooth HC-05', 'Power Regulators', 'Relay Modules', 'Breadboard Prototyping'],
    keyOutcomeUz: 'To\'siqlarni aylanib o\'tuvchi 4 g\'ildirakli avtonom robot platformasi amalda yasalgan.',
    keyOutcomeEn: 'Constructed and tested physical 4WD obstacle-avoiding smart rover platforms.',
    iconName: 'Cog'
  },
  {
    id: 'mit-app-inventor',
    name: 'MIT App Inventor',
    category: 'software',
    badge: 'Mobil Ilovalar',
    experienceYears: '1.5 yil',
    descriptionUz: 'Smartfonlar uchun funksional Android ilovalar yaratish. Bluetooth orqali robotlar va Arduino tizimlarini mobil boshqarish.',
    descriptionEn: 'Developing native-like Android mobile apps. Remote Bluetooth telemetry and controller dashboards.',
    technologies: ['MIT App Inventor', 'Bluetooth Client API', 'Sensor Readout', 'Custom UI/UX', 'APK Build Pipeline'],
    keyOutcomeUz: 'Robotni smartfondan joystik va tugmalar bilan boshqaruvchi maxsus Android ilova yaratildi.',
    keyOutcomeEn: 'Created custom Android remote controller app with real-time Bluetooth joystick telemetry.',
    iconName: 'Smartphone'
  },
  {
    id: 'android-dev',
    name: 'Android Development',
    category: 'software',
    badge: 'Mobil Dasturlash Asoslari',
    experienceYears: '1 yil',
    descriptionUz: 'Zamonaviy mobil arxitektura tamoyillari, foydalanuvchi interfeyslari (UI/UX) va mobil xavfsizlik asoslari.',
    descriptionEn: 'Modern mobile UI architecture fundamentals, event-driven reactive flows, and mobile app deployment.',
    technologies: ['Android Architecture', 'Layout Design', 'Component Lifecycle', 'Mobile UX', 'Hardware Permissions'],
    keyOutcomeUz: 'Amaliy IoT va yordamchi mobil vositalar uchun interfeyslar loyihalashtirilgan.',
    keyOutcomeEn: 'Designed user-friendly interfaces for IoT utilities and youth learning tools.',
    iconName: 'Terminal'
  },
  {
    id: 'computer-literacy',
    name: 'Kompyuter Savodxonligi',
    category: 'core',
    badge: 'Raqamli Madaniyat',
    experienceYears: '3+ yil',
    descriptionUz: 'Operatsion tizimlar, fayl boshqaruvi, algoritmlar nazariyasi, tezkor yozish va kiber-xavfsizlik gigiyenasi.',
    descriptionEn: 'Operating systems mastery, algorithm fundamentals, file structure management, and cybersecurity essentials.',
    technologies: ['Windows / Linux Basics', 'Hardware Diagnostics', 'Touch Typing (Tez Yozish)', 'Network Basics', 'Data Security'],
    keyOutcomeUz: 'Har qanday dasturlash muhitini erkin sozlash va kompyuter vositalaridan maksimal samarali foydalanish.',
    keyOutcomeEn: 'Rapid tool setup, high typing speed, and foundational understanding of computational thinking.',
    iconName: 'Monitor'
  },
  {
    id: 'prompt-engineering',
    name: 'Prompt Engineering',
    category: 'ai_meta',
    badge: 'Sun\'iy Intellekt Asboblari',
    experienceYears: '1 yil',
    descriptionUz: 'Zamonaviy LLM (Large Language Model) sun\'iy intellekt tizimlari bilan professional muloqot, strukturaviy so\'rovlar va kod optimizatsiyasi.',
    descriptionEn: 'Mastering generative AI communication, structured chain-of-thought prompting, and code refactoring.',
    technologies: ['Gemini', 'ChatGPT', 'Structured Prompts', 'Code Debugging via AI', 'Zero/Few-Shot Learning'],
    keyOutcomeUz: 'Murakkab C++ va Python kodlaridagi xatolarni AI ko\'magida tahlil qilish va ta\'lim tezligini 3 baravarga oshirish.',
    keyOutcomeEn: 'Accelerated problem solving and firmware debugging through structured AI instructions.',
    iconName: 'Sparkles'
  }
];

export const PROJECTS_LIST: ProjectItem[] = [
  {
    id: 'arduino-rover',
    titleUz: 'Aqlli Avtonom Qidiruv Roboti (Smart 4WD Rover)',
    titleEn: 'Autonomous Smart 4WD Obstacle Avoidance Rover',
    categoryUz: 'Robototexnika & Arduino',
    categoryEn: 'Robotics & Hardware',
    badge: 'Hardware & C++',
    image: '/src/assets/images/project_robot_arduino_1790567581201.jpg',
    summaryUz: 'HC-SR04 ultratovush sensori va L298N drayveri asosida to\'siqlarni mustaqil aniqlab, xavfsiz marshrut tanlovchi 4 g\'ildirakli avtonom robot.',
    summaryEn: 'An autonomous 4-wheel robot capable of scanning surroundings via ultrasonic sensors and navigating without collision.',
    detailsUz: 'Ushbu robot Arduino UNO mikrokontrolleri boshqaruvida ishlaydi. Old panelga o\'rnatilgan SG90 servo motor ultratovushli sensorni chapga va o\'ngga burib, eng bo\'sh yo\'nalishni hisoblaydi va motor drayveriga signal yuboradi.',
    detailsEn: 'Powered by an Arduino UNO board. An ultrasonic sensor mounted on a micro-servo sweeps 180 degrees to detect open space and drive motor controllers accordingly.',
    hardwareStack: ['Arduino UNO R3', 'HC-SR04 Sensor', 'L298N Dual H-Bridge', 'SG90 Micro Servo', '4x DC Motors', 'Li-ion Batareya'],
    softwareStack: ['Arduino IDE', 'Embedded C/C++', 'PWM Control', 'Distance Algorithms'],
    achievementsUz: [
      'To\'siqlarni 25 sm masofadan aniq hisoblash',
      'Servo burchaklarini 0-180 darajada skanerlash',
      'Haqiqiy sharoitda 100% to\'qnashuvsiz sinov'
    ],
    achievementsEn: [
      '25cm precision distance threshold',
      '180-degree radar scanning routine',
      'Collision-free physical obstacle trials'
    ],
    demoType: 'robot'
  },
  {
    id: 'mobile-bluetooth-controller',
    titleUz: 'RoboController & IoT Mobil Boshqaruv Ilovasi',
    titleEn: 'RoboController & IoT Smart Dashboard',
    categoryUz: 'Mobil Dasturlash',
    categoryEn: 'Mobile App Development',
    badge: 'MIT App Inventor & Android',
    image: '/src/assets/images/project_mobile_iot_1790567599683.jpg',
    summaryUz: 'Smartfondan robotlar va aqlli xona qurilmalarini Bluetooth orqali real vaqtda boshqarish imkonini beruvchi qulay Android ilova.',
    summaryEn: 'A custom Android mobile application communicating via Bluetooth HC-05 with microcontrollers for tactile robot driving.',
    detailsUz: 'Ilovada virtual joystik, favqulodda to\'xtatish (E-Stop) tugmasi, yoritish chiroqlari boshqaruvi va mikrokontrollerdan kelayotgan telemetriya (batareya quvvati, masofa) ko\'rsatkichlari joy olgan.',
    detailsEn: 'Features tactile touch joysticks, emergency stop toggles, headlight sliders, and incoming telemetry indicators from the rover.',
    hardwareStack: ['Bluetooth HC-05 Module', 'Android Smartfon', 'Arduino Serial Port'],
    softwareStack: ['MIT App Inventor', 'Android Blocks', 'Serial Communication (9600 Baud)', 'UI/UX Design'],
    achievementsUz: [
      '15 metr masofagacha barqaror Bluetooth aloqasi',
      'Intuitiv va chiroyli tungi rejimdagi (Dark Mode) UI',
      'Ovozli buyruqlar yordamida robotni harakatlantirish moduli'
    ],
    achievementsEn: [
      'Stable Bluetooth link up to 15m',
      'Modern dark-mode tactile layout',
      'Voice command integration for basic motion'
    ],
    demoType: 'app'
  },
  {
    id: 'scratch-arcade-game',
    titleUz: 'Kosmik Sarguzasht: 2D Arkada O\'yini',
    titleEn: 'Cosmic Quest: 2D Physics Arcade Game',
    categoryUz: 'Vizual Dasturlash & O\'yinlar',
    categoryEn: 'Game Development',
    badge: 'Scratch 3.0',
    image: '/src/assets/images/project_scratch_game_1790567612594.jpg',
    summaryUz: 'Scratch muhitida noldan yaratilgan, tortishish kuchi fizikasi, ballar tizimi va murakkablashib boruvchi dushmanlar sun\'iy mantiqiga ega o\'yin.',
    summaryEn: 'An arcade space exploration game created completely from scratch with physics acceleration, particle sparks, and escalating enemy waves.',
    detailsUz: 'O\'yinda o\'yinchi kosmik kemani boshqarib asteroidlardan qochishi, resurslar to\'plashi va turli bosqichlardan o\'tishi kerak. Barcha spritelar, ovoz effektlari va mexanika blokli mantiq asosida to\'liq avtomatlashtirilgan.',
    detailsEn: 'Players navigate through asteroid fields, gathering power cells while evading enemy probes. Features algorithmic spawn timers and high-score memory.',
    hardwareStack: ['PC / Mac', 'Keyboard & Mouse Inputs'],
    softwareStack: ['Scratch 3.0 Engine', 'Custom Vector Sprites', 'Sound Synthesis', 'Score Variables'],
    achievementsUz: [
      'Real vaqtdagi gravitatsiya va inertsiya mexanikasi',
      'Rekordlar saqlanadigan dinamik hisoblagich',
      'Maktabdagi tengdoshlar orasida 50+ marta o\'ynalgan'
    ],
    achievementsEn: [
      'Real-time inertia and gravity simulation',
      'Dynamic high-score tracking system',
      'Tested and played 50+ times by classmates'
    ],
    demoType: 'game'
  }
];

export const EDUCATION_MILESTONES: EducationMilestone[] = [
  {
    year: '2024 - 2025',
    titleUz: 'IT va Algoritmik Fikrlash Asoslari',
    titleEn: 'Foundations of IT & Computational Thinking',
    academyUz: 'IlmHub IT Akademiyasi',
    academyEn: 'IlmHub IT Academy',
    descriptionUz: 'Kompyuter tuzilishi, mantiqiy bloklar, Scratch dasturlash muhitida dastlabki loyihalar va o\'yinlar yaratish bilan IT olamiga qadam tashlandi.',
    descriptionEn: 'Stepped into technology with computer architecture, logical algorithms, and initial Scratch games at IlmHub.',
    skillsLearned: ['Kompyuter savodxonligi', 'Scratch 3.0', 'Blokli Algoritmlar', 'Mantiqiy Tafakkur']
  },
  {
    year: '2025 - 2026',
    titleUz: 'Robototexnika, Arduino va Mobil Dasturlar',
    titleEn: 'Robotics, Microcontrollers & Mobile Apps',
    academyUz: 'IlmHub IT Akademiyasi',
    academyEn: 'IlmHub IT Academy',
    descriptionUz: 'Sxemotexnika, Arduino mikrokontrollerlari, mBlock, sensorlar va MIT App Inventor orqali mobil boshqaruv ilovalarini amalda yig\'ish va sinash.',
    descriptionEn: 'Diving into physical computing with Arduino, mBlock robotics kits, sensor arrays, and MIT App Inventor mobile controllers.',
    skillsLearned: ['Arduino IDE', 'mBlock', 'Robototexnika', 'MIT App Inventor', 'Sxemalar']
  },
  {
    year: '2026 - Hozirgi Kun',
    titleUz: 'Murakkab Muhandislik va Prompt Engineering',
    titleEn: 'Advanced Robotics & AI Prompt Engineering',
    academyUz: 'IlmHub IT Akademiyasi',
    academyEn: 'IlmHub IT Academy',
    descriptionUz: 'Avtonom robotlar, Android dasturlash poydevori va sun\'iy intellekt (Prompt Engineering) yordamida yangi innovatsion loyihalar ustida izlanish.',
    descriptionEn: 'Developing autonomous rovers, Android programming concepts, and leveraging AI models via prompt engineering for code optimization.',
    skillsLearned: ['Android Development', 'Prompt Engineering', 'Avtonom Tizimlar', 'IoT Prototiplash']
  }
];
