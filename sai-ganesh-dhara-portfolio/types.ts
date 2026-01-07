
export interface Project {
  title: string;
  tech: string[];
  description: string[];
  githubUrl?: string;
}

export interface SkillCategory {
  name: string;
  skills: string[];
}

export interface Education {
  degree: string;
  institution: string;
  period: string;
  score?: string;
}

export interface Certification {
  name: string;
  issuer: string;
  date: string;
}

export interface ResumeData {
  name: string;
  title: string;
  contact: {
    phone: string;
    email: string;
    linkedin: string;
    github: string;
  };
  about: string;
  skills: SkillCategory[];
  projects: Project[];
  education: Education[];
  certifications: Certification[];
}
