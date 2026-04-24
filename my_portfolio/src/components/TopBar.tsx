import { useState } from "react";
import { profile } from "../data/profile";

const navItems = [
  { label: "About", id: "about" },
  { label: "Data Engineering", id: "de" },
  { label: "Software Engineering", id: "swe" },
  { label: "Contact", id: "contact" },
];

function scrollTo(id: string) {
  document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
}

export default function TopBar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-rim" style={{ backgroundColor: "rgba(8,8,10,0.88)", backdropFilter: "blur(12px)" }}>
      <div className="max-w-5xl mx-auto px-5 sm:px-10 flex items-center justify-between h-14">
        <button
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          className="font-display font-extrabold text-gold tracking-tight hover:opacity-60 transition-opacity text-base"
        >
          {profile.fullName.split(" ").map(w => w[0]).join("")}
        </button>

        {/* Desktop nav */}
        <nav className="hidden sm:flex items-center gap-8">
          {navItems.map((item) => (
            <button
              key={item.id}
              onClick={() => scrollTo(item.id)}
              className="relative text-[11px] font-mono font-medium text-ink-dim hover:text-ink transition-colors group tracking-[0.15em] uppercase"
            >
              {item.label}
              <span className="absolute -bottom-0.5 left-0 w-0 h-px bg-gold group-hover:w-full transition-all duration-300" />
            </button>
          ))}
        </nav>

        {/* Mobile hamburger */}
        <button
          className="sm:hidden p-2 text-ink-dim hover:text-gold transition-colors"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            {menuOpen ? (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>
      </div>

      {menuOpen && (
        <nav className="sm:hidden border-t border-rim bg-surface px-5 py-5 flex flex-col gap-5">
          {navItems.map((item) => (
            <button
              key={item.id}
              onClick={() => { scrollTo(item.id); setMenuOpen(false); }}
              className="text-[11px] font-mono tracking-[0.15em] uppercase text-ink-dim hover:text-gold text-left transition-colors"
            >
              {item.label}
            </button>
          ))}
        </nav>
      )}
    </header>
  );
}
