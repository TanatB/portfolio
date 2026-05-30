export interface Project {
  title: string;
  description: string;
  /** Short tech tags rendered as chips */
  tags: string[];
  /** Optional links — omit to hide the corresponding button */
  githubUrl?: string;
  liveUrl?: string;
  /** Optional one-line outcome/metric, e.g. "Cut load time 40%" */
  highlight?: string;
  /** Flags the card as featured (rendered larger) */
  featured?: boolean;
}

export interface Experience {
  role: string;
  company: string;
  /** Display string, e.g. "2024 — Present" */
  period: string;
  location?: string;
  highlights: string[];
  /** Tech used in this role */
  stack?: string[];
}

export interface SocialLink {
  label: string;
  href: string;
}

export interface Profile {
  name: string;
  /** Role/tagline under the name */
  title: string;
  /** Short hero sentence */
  tagline: string;
  /** Longer about paragraph(s) */
  summary: string;
  email: string;
  location: string;
  github: string;
  linkedin: string;
  /** Headline skills/stack shown in About + Hero */
  skills: string[];
}
