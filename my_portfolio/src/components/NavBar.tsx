import { useEffect, useId, useState } from "react";
import { profile } from "../data/profile";

interface NavLink {
  label: string;
  href: string;
}

const NAV_LINKS: NavLink[] = [
  { label: "About", href: "#about" },
  { label: "Experience", href: "#experience" },
  { label: "Projects", href: "#projects" },
];

const NavBar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const menuId = useId();

  // Track scroll position to swap the bar from translucent to a more opaque,
  // hairline-bordered state once the user moves past the top.
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Close the mobile menu on Escape for keyboard users.
  useEffect(() => {
    if (!menuOpen) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setMenuOpen(false);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [menuOpen]);

  return (
    <header className="fixed inset-x-0 top-0 z-50">
      <nav
        aria-label="Primary"
        className={[
          "border-b backdrop-blur-md transition-colors duration-300",
          scrolled
            ? "border-line bg-ink/80"
            : "border-transparent bg-ink/30",
        ].join(" ")}
      >
        <div className="container-page flex h-16 items-center justify-between">
          {/* Brand */}
          <a
            href="#home"
            className="group flex items-center gap-2.5 font-display text-lg font-semibold tracking-tight text-fg"
            onClick={() => setMenuOpen(false)}
          >
            <span
              aria-hidden="true"
              className="inline-block h-3 w-3 rounded-[3px] bg-accent shadow-[0_0_12px_rgba(197,248,42,0.6)] transition-transform duration-300 group-hover:rotate-45"
            />
            {profile.name}
            <span className="text-accent" aria-hidden="true">
              .
            </span>
          </a>

          {/* Desktop links */}
          <div className="hidden items-center gap-1 md:flex">
            {NAV_LINKS.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="relative rounded-md px-3 py-2 font-mono text-sm text-muted transition-colors hover:text-fg"
              >
                {link.label}
              </a>
            ))}
            <a
              href="#contact"
              className="ml-3 inline-flex min-h-[40px] items-center gap-2 rounded-md bg-accent px-4 py-2 font-mono text-sm font-semibold text-ink transition-all hover:bg-accent-soft active:translate-y-px"
            >
              <span
                aria-hidden="true"
                className="inline-block h-1.5 w-1.5 rounded-full bg-ink"
              />
              Contact
            </a>
          </div>

          {/* Mobile hamburger */}
          <button
            type="button"
            aria-label={menuOpen ? "Close menu" : "Open menu"}
            aria-expanded={menuOpen}
            aria-controls={menuId}
            onClick={() => setMenuOpen((v) => !v)}
            className="inline-flex h-11 w-11 items-center justify-center rounded-md border border-line bg-surface/60 text-fg transition-colors hover:bg-surface-2 md:hidden"
          >
            <svg
              width="20"
              height="20"
              viewBox="0 0 20 20"
              fill="none"
              aria-hidden="true"
            >
              <line
                x1="3"
                x2="17"
                y1="6"
                y2="6"
                stroke="currentColor"
                strokeWidth="1.75"
                strokeLinecap="round"
                className="origin-center transition-transform duration-300"
                style={
                  menuOpen
                    ? { transform: "translateY(4px) rotate(45deg)" }
                    : undefined
                }
              />
              <line
                x1="3"
                x2="17"
                y1="14"
                y2="14"
                stroke="currentColor"
                strokeWidth="1.75"
                strokeLinecap="round"
                className="origin-center transition-transform duration-300"
                style={
                  menuOpen
                    ? { transform: "translateY(-4px) rotate(-45deg)" }
                    : undefined
                }
              />
            </svg>
          </button>
        </div>

        {/* Mobile dropdown menu */}
        <div
          id={menuId}
          className={[
            "overflow-hidden border-line bg-ink/95 backdrop-blur-md transition-all duration-300 ease-out md:hidden",
            menuOpen
              ? "max-h-80 border-t opacity-100"
              : "max-h-0 border-t-0 opacity-0",
          ].join(" ")}
        >
          <ul className="container-page flex flex-col gap-1 py-4">
            {NAV_LINKS.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  onClick={() => setMenuOpen(false)}
                  className="block rounded-md px-3 py-3 font-mono text-base text-muted transition-colors hover:bg-surface hover:text-fg"
                  tabIndex={menuOpen ? 0 : -1}
                >
                  <span className="text-accent" aria-hidden="true">
                    /{" "}
                  </span>
                  {link.label}
                </a>
              </li>
            ))}
            <li className="mt-2">
              <a
                href="#contact"
                onClick={() => setMenuOpen(false)}
                tabIndex={menuOpen ? 0 : -1}
                className="block rounded-md bg-accent px-3 py-3 text-center font-mono text-base font-semibold text-ink transition-colors hover:bg-accent-soft"
              >
                Contact
              </a>
            </li>
          </ul>
        </div>
      </nav>
    </header>
  );
};

export default NavBar;
