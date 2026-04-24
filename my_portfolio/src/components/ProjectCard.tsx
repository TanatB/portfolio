import type { Project } from "../types";

const statusConfig = {
  complete:      { label: "Complete",     dot: "#22c55e" },
  "in-progress": { label: "In Progress",  dot: "#c9a84c" },
  "coming-soon": { label: "Coming Soon",  dot: "#35332c" },
};

interface ProjectCardProps {
  project: Project;
}

export default function ProjectCard({ project }: ProjectCardProps) {
  const status = statusConfig[project.status];

  return (
    <div className="group relative flex flex-col bg-surface border border-rim hover:border-gold/40 p-6 transition-all duration-300 hover:bg-surface-hi">
      {/* Animated left accent bar */}
      <div className="absolute left-0 top-0 h-0 w-0.5 bg-gold group-hover:h-full transition-all duration-500" />

      {/* Header row */}
      <div className="flex items-start justify-between gap-3 mb-4">
        <h3 className="font-display font-semibold text-ink text-lg leading-snug group-hover:text-gold transition-colors duration-200">
          {project.title}
        </h3>
        <div className="flex items-center gap-1.5 shrink-0 pt-1">
          <span
            className="w-1.5 h-1.5 rounded-full"
            style={{ backgroundColor: status.dot }}
          />
          <span className="font-mono text-[10px] text-ink-dim tracking-[0.12em] uppercase whitespace-nowrap">
            {status.label}
          </span>
        </div>
      </div>

      {/* Description */}
      <p
        className="text-ink-dim text-sm leading-relaxed mb-5 flex-1"
        style={{ fontWeight: 300 }}
      >
        {project.description}
      </p>

      {/* Tags */}
      <div className="flex flex-wrap gap-1.5 mb-5">
        {project.tags.map((tag) => (
          <span
            key={tag}
            className="px-2 py-0.5 border border-rim text-ink-dim text-[10px] font-mono tracking-wider"
          >
            {tag}
          </span>
        ))}
      </div>

      {/* GitHub link */}
      {project.githubUrl && (
        <a
          href={project.githubUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 text-[11px] font-mono text-ink-dim hover:text-gold transition-colors duration-200 mt-auto group/link"
        >
          <svg className="w-3.5 h-3.5" fill="currentColor" viewBox="0 0 24 24">
            <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z" />
          </svg>
          View on GitHub
          <span className="group-hover/link:translate-x-1 transition-transform duration-200 inline-block">→</span>
        </a>
      )}
    </div>
  );
}
