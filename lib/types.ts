export type Accent = "teal" | "emerald" | "cyan" | "lime";

export interface Project {
  name: string;
  tagline: string;
  description: string;
  image?: string;
  tech: string[];
  
  links: { live?: string; github?: string };
  year: string;
  accent: Accent;
}

export interface SiteContent {
  person: {
    name: string;
    role: string;
    location: string;
    heroHeadline: string;
    tagline: string;
    available: boolean;
    email: string;
    socials: { github: string; linkedin: string; twitter?: string };
  };
  about: {
    paragraphs: string[];
    highlights: string[];
  };
  skills: { group: string; items: string[] }[];
  projects: Project[];
  experience: {
    role: string;
    company: string;
    period: string;
    summary: string;
    bullets: string[];
  }[];
  contact: {
    headline: string;
    text: string;
    email: string;
  };
}
