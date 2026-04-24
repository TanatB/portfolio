import { profile } from "../data/profile";

export default function HeroSection() {
  const [firstName, ...rest] = profile.fullName.split(" ");
  const lastName = rest.join(" ");

  return (
    <section
      id="hero"
      className="relative min-h-[calc(100vh-3.5rem)] flex items-center px-5 sm:px-10 overflow-hidden dot-grid"
    >
      {/* Ambient glow */}
      <div
        className="absolute -top-20 -left-40 w-[500px] h-[500px] rounded-full pointer-events-none"
        style={{ background: "radial-gradient(circle, rgba(201,168,76,0.06) 0%, transparent 65%)" }}
      />
      <div
        className="absolute bottom-0 right-0 w-96 h-96 rounded-full pointer-events-none"
        style={{ background: "radial-gradient(circle, rgba(201,168,76,0.03) 0%, transparent 65%)" }}
      />

      <div className="max-w-5xl w-full py-24 relative z-10">
        {/* Eyebrow label */}
        <p className="anim-fade-up delay-1 font-mono text-gold text-[11px] tracking-[0.25em] uppercase mb-8 flex items-center gap-2">
          <span className="inline-block w-4 h-px bg-gold" />
          Available for opportunities
        </p>

        {/* Name */}
        <h1
          className="anim-fade-up delay-2 font-display font-extrabold leading-[0.88] tracking-tight mb-8"
          style={{ fontSize: "clamp(3.5rem, 11vw, 7.5rem)" }}
        >
          <span className="block text-ink">{firstName}</span>
          <span className="block text-gold">{lastName}</span>
        </h1>

        {/* Title rule */}
        <div className="anim-fade-up delay-3 flex items-center gap-4 mb-8">
          <span className="h-px w-10 bg-gold opacity-60" />
          <h2 className="font-mono text-ink-dim text-xs tracking-[0.2em] uppercase">
            {profile.title}
          </h2>
        </div>

        {/* Summary */}
        <p
          className="anim-fade-up delay-4 text-ink-dim leading-relaxed max-w-lg mb-12"
          style={{ fontSize: "0.9375rem", fontWeight: 300 }}
        >
          {profile.summary}
        </p>

        {/* CTAs */}
        <div className="anim-fade-up delay-5 flex flex-wrap items-center gap-3">
          <a
            href={profile.githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 bg-gold text-bg text-[11px] font-mono font-medium tracking-[0.15em] uppercase hover:bg-ink transition-colors duration-200"
          >
            <svg className="w-3.5 h-3.5" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z" />
            </svg>
            GitHub
          </a>
          <a
            href={profile.linkedinUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 border border-rim text-ink-dim text-[11px] font-mono tracking-[0.15em] uppercase hover:border-gold hover:text-gold transition-colors duration-200"
          >
            <svg className="w-3.5 h-3.5" fill="currentColor" viewBox="0 0 24 24">
              <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
            </svg>
            LinkedIn
          </a>
        </div>
      </div>

      {/* Scroll hint */}
      <div className="anim-fade-in delay-5 absolute bottom-8 left-5 sm:left-10 flex items-center gap-2 text-ink-faint">
        <span className="font-mono text-[10px] tracking-[0.2em] uppercase">scroll</span>
        <svg className="w-3 h-3 animate-bounce" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
        </svg>
      </div>
    </section>
  );
}
