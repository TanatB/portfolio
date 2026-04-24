import { profile } from "../data/profile";

export default function AboutSection() {
  return (
    <section id="about" className="py-28 px-5 sm:px-10 bg-surface scroll-mt-14">
      <div className="max-w-5xl mx-auto">
        {/* Section label */}
        <div className="flex items-center gap-4 mb-16">
          <span className="font-mono text-gold text-[11px] tracking-[0.2em]">01</span>
          <span className="h-px w-8 bg-rim" />
          <h2 className="font-display font-bold text-ink text-2xl sm:text-3xl tracking-tight">About</h2>
        </div>

        <div className="grid md:grid-cols-2 gap-16">
          {/* Education */}
          <div>
            <h3 className="font-mono text-[10px] text-ink-dim tracking-[0.25em] uppercase mb-8">
              Education
            </h3>
            {profile.education.map((edu) => (
              <div key={edu.school} className="relative pl-5 flex flex-col gap-2">
                <div className="absolute left-0 top-0 bottom-0 w-0.5 bg-gold" />
                <p className="font-display font-semibold text-ink text-lg leading-snug">{edu.degree}</p>
                <p className="text-ink-dim text-sm">{edu.school}</p>
                <p className="font-mono text-[11px] text-ink-dim opacity-60">
                  {edu.location} · {edu.period}
                </p>
              </div>
            ))}
          </div>

          {/* Skills */}
          <div>
            <h3 className="font-mono text-[10px] text-ink-dim tracking-[0.25em] uppercase mb-8">
              Skills
            </h3>
            <div className="flex flex-col gap-7">
              {profile.skills.map((group) => (
                <div key={group.category}>
                  <p className="font-mono text-[10px] text-gold tracking-[0.15em] uppercase mb-3">
                    {group.category}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {group.items.map((skill) => (
                      <span
                        key={skill}
                        className="px-3 py-1.5 border border-rim text-ink-dim text-[11px] font-mono hover:border-gold hover:text-gold transition-colors duration-200 cursor-default"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
