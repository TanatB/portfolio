export interface Project {
  title: string;
  description: string;
  tags: string[];
  githubUrl: string;
  status: "complete" | "in-progress" | "coming-soon";
  category: "de" | "swe";
}

export interface Education {
  degree: string;
  school: string;
  location: string;
  period: string;
}

export interface SkillGroup {
  category: string;
  items: string[];
}

export interface Profile {
  fullName: string;
  title: string;
  summary: string;
  email: string;
  github: string;
  githubUrl: string;
  linkedinUrl: string;
  education: Education[];
  skills: SkillGroup[];
}
