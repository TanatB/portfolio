import type { Project } from "../types";
import ProjectCard from "./ProjectCard";

const sectionNumbers: Record<string, string> = {
  de:  "02",
  swe: "03",
};

interface ProjectSectionProps {
  id: string;
  title: string;
  projects: Project[];
}

export default function ProjectSection({ id, title, projects }: ProjectSectionProps) {
  const num = sectionNumbers[id] ?? "0x";

  return (
    <section id={id} className="py-28 px-5 sm:px-10 scroll-mt-14">
      <div className="max-w-5xl mx-auto">
        <div className="flex items-center gap-4 mb-16">
          <span className="font-mono text-gold text-[11px] tracking-[0.2em]">{num}</span>
          <span className="h-px w-8 bg-rim" />
          <h2 className="font-display font-bold text-ink text-2xl sm:text-3xl tracking-tight">{title}</h2>
        </div>
        <div className="grid sm:grid-cols-2 gap-4">
          {projects.map((project) => (
            <ProjectCard key={project.title} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
}
