import { profile } from "../data/profile";

/* ---------------------------------------------------------------------------
   Inline icons (no icon library). Decorative — labelled by their parent link.
   ------------------------------------------------------------------------- */
type IconProps = { className?: string };

const MailIcon = ({ className }: IconProps) => (
  <svg viewBox="0 0 24 24" fill="none" aria-hidden="true" className={className}>
    <rect
      x="3"
      y="5"
      width="18"
      height="14"
      rx="2.5"
      stroke="currentColor"
      strokeWidth="1.6"
    />
    <path
      d="m4 7 8 6 8-6"
      stroke="currentColor"
      strokeWidth="1.6"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

const GitHubIcon = ({ className }: IconProps) => (
  <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" className={className}>
    <path d="M12 1.5a10.5 10.5 0 0 0-3.32 20.46c.53.1.72-.23.72-.5v-1.76c-2.92.64-3.54-1.4-3.54-1.4-.48-1.22-1.17-1.55-1.17-1.55-.95-.65.07-.64.07-.64 1.06.08 1.62 1.09 1.62 1.09.94 1.61 2.46 1.15 3.06.88.1-.68.37-1.15.67-1.41-2.33-.27-4.78-1.17-4.78-5.18 0-1.15.41-2.08 1.08-2.82-.11-.27-.47-1.34.1-2.79 0 0 .88-.28 2.88 1.08a9.96 9.96 0 0 1 5.24 0c2-1.36 2.88-1.08 2.88-1.08.57 1.45.21 2.52.1 2.79.67.74 1.08 1.67 1.08 2.82 0 4.02-2.46 4.9-4.8 5.16.38.33.71.97.71 1.96v2.9c0 .28.19.61.73.5A10.5 10.5 0 0 0 12 1.5Z" />
  </svg>
);

const LinkedInIcon = ({ className }: IconProps) => (
  <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" className={className}>
    <path d="M6.94 5a1.94 1.94 0 1 1-3.88 0 1.94 1.94 0 0 1 3.88 0ZM3.3 8.48h3.28V21H3.3V8.48ZM9.34 8.48h3.14v1.71h.04c.44-.83 1.5-1.71 3.1-1.71 3.31 0 3.92 2.18 3.92 5.01V21h-3.27v-5.56c0-1.33-.02-3.03-1.85-3.03-1.85 0-2.13 1.45-2.13 2.94V21H9.34V8.48Z" />
  </svg>
);

const NAV_LINKS = [
  { label: "About", href: "#about" },
  { label: "Experience", href: "#experience" },
  { label: "Projects", href: "#projects" },
  { label: "Contact", href: "#contact" },
] as const;

const SOCIAL_LINKS = [
  {
    label: "Email",
    href: `mailto:${profile.email}`,
    external: false,
    Icon: MailIcon,
  },
  {
    label: "GitHub",
    href: profile.github,
    external: true,
    Icon: GitHubIcon,
  },
  {
    label: "LinkedIn",
    href: profile.linkedin,
    external: true,
    Icon: LinkedInIcon,
  },
] as const;

/**
 * Footer — slim, hairline-topped closing bar.
 *
 * Columns on desktop (brand · nav · social), stacked on mobile, with a
 * © + build note baseline.
 */
function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-line bg-ink">
      <div className="container-page py-12 md:py-14">
        <div className="flex flex-col gap-10 md:flex-row md:items-start md:justify-between">
          {/* Brand */}
          <div className="max-w-xs">
            <a
              href="#home"
              className="group inline-flex items-center gap-2.5 font-display text-xl font-semibold tracking-tight text-fg"
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
            <p className="mt-3 font-mono text-xs leading-relaxed text-faint">
              {profile.title} &mdash; pipelines, warehouses &amp; ML systems.
            </p>
          </div>

          {/* Quick links + social */}
          <div className="flex flex-col gap-8 sm:flex-row sm:gap-16">
            <nav aria-label="Footer">
              <p className="mb-4 font-mono text-xs uppercase tracking-[0.12em] text-faint">
                navigate
              </p>
              <ul className="flex flex-col gap-2.5">
                {NAV_LINKS.map((link) => (
                  <li key={link.href}>
                    <a
                      href={link.href}
                      className="font-mono text-sm text-muted transition-colors hover:text-accent"
                    >
                      <span className="text-accent/60" aria-hidden="true">
                        /{" "}
                      </span>
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </nav>

            <div>
              <p className="mb-4 font-mono text-xs uppercase tracking-[0.12em] text-faint">
                elsewhere
              </p>
              <ul className="flex gap-2.5">
                {SOCIAL_LINKS.map(({ label, href, external, Icon }) => (
                  <li key={label}>
                    <a
                      href={href}
                      {...(external
                        ? { target: "_blank", rel: "noreferrer noopener" }
                        : {})}
                      className="inline-flex h-11 w-11 items-center justify-center rounded-lg border border-line bg-surface text-muted transition-colors hover:border-accent/50 hover:bg-surface-2 hover:text-accent focus-visible:ring-2 focus-visible:ring-accent/60"
                    >
                      <Icon className="h-5 w-5" />
                      <span className="sr-only">
                        {label}
                        {external ? " (opens in a new tab)" : ""}
                      </span>
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* Baseline */}
        <div className="mt-10 flex flex-col gap-3 border-t border-line pt-6 sm:flex-row sm:items-center sm:justify-between">
          <p className="text-sm text-faint">
            &copy; {year} {profile.name}. All rights reserved.
          </p>
          <p className="font-mono text-xs text-faint">
            Built with{" "}
            <span className="text-accent-dim">React</span> +{" "}
            <span className="text-accent-dim">Tailwind</span>
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
