export type Language = 'en' | 'ja' | 'my';

export interface Translation {
  nav: {
    experience: string;
    projects: string;
    skills: string;
    contact: string;
  };
  hero: {
    badge: string;
    description: string;
    cta: string;
    cv: string;
    status: string;
  };
  sectionTitles: {
    experience: string;
    experienceSubtitle: string;
    projects: string;
    projectsSubtitle: string;
    skills: string;
    skillsSubtitle: string;
    certifications: string;
    contact: string;
    contactSubtitle: string;
  };
}

export interface Project {
  title: string;
  description: string;
  tags: string[];
  link?: string;
  role: string;
  year: string;
}

export interface Experience {
  company: string;
  role: string;
  period: string;
  description: string;
}

export interface Certification {
  name: string;
  fullName: string;
  issuer: string;
  icon: any;
  color: string;
  bg: string;
  border: string;
}

export interface Skill {
  name: string;
  icon: string;
}

export interface SkillCategory {
  category: string;
  items: Skill[];
}
