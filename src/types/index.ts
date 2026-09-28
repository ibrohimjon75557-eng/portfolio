export type Language = 'uz' | 'en';

export interface SkillItem {
  id: string;
  name: string;
  category: 'hardware' | 'software' | 'ai_meta' | 'core';
  badge: string;
  experienceYears: string;
  descriptionUz: string;
  descriptionEn: string;
  technologies: string[];
  keyOutcomeUz: string;
  keyOutcomeEn: string;
  iconName: string;
}

export interface ProjectItem {
  id: string;
  titleUz: string;
  titleEn: string;
  categoryUz: string;
  categoryEn: string;
  badge: string;
  image: string;
  summaryUz: string;
  summaryEn: string;
  detailsUz: string;
  detailsEn: string;
  hardwareStack: string[];
  softwareStack: string[];
  achievementsUz: string[];
  achievementsEn: string[];
  demoType: 'robot' | 'app' | 'game' | 'code';
}

export interface EducationMilestone {
  year: string;
  titleUz: string;
  titleEn: string;
  academyUz: string;
  academyEn: string;
  descriptionUz: string;
  descriptionEn: string;
  skillsLearned: string[];
}
