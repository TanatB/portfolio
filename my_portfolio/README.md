# Tanat — Portfolio

A single-page developer portfolio for a data engineer. Dark, editorial design with a
single signal-lime accent and subtle terminal/data motifs (monospace kickers, faux
code panels, hairline grids).

Built with **React 19 + TypeScript + Vite + Tailwind CSS v4**.

---

## Quick start

```bash
npm install
npm run dev        # start dev server (Vite, HMR)
```

Then open the printed local URL (default http://localhost:5173).

### Other scripts

| Command           | What it does                                  |
| ----------------- | --------------------------------------------- |
| `npm run dev`     | Start the Vite dev server with HMR            |
| `npm run build`   | Type-check (`tsc -b`) then build to `dist/`   |
| `npm run preview` | Serve the production build locally            |
| `npm run lint`    | Run ESLint across the project                 |

---

## Editing your content

All copy lives in **`src/data/`** — you should not need to touch component code to
update the site. Each file is typed by `src/types/index.ts`. Placeholder values are
marked with `// TODO` comments.

| File                     | Controls                                                        |
| ------------------------ | --------------------------------------------------------------- |
| `src/data/profile.ts`    | Name, title, tagline, bio, email, location, social links, skills |
| `src/data/projects.ts`   | Project cards (title, description, tags, optional links, featured) |
| `src/data/experience.ts` | Experience timeline entries (role, company, period, highlights)  |

> **Before publishing:** search the codebase for `TODO` and replace every placeholder
> (email, GitHub/LinkedIn URLs, company names, project links).

Data shapes (see `src/types/index.ts` for the full definitions):

- **`Project`** — `title`, `description`, `tags[]`, optional `githubUrl` / `liveUrl` /
  `highlight`, and `featured` (featured cards render larger). Optional links render
  conditionally, so nothing broken appears when a URL is absent.
- **`Experience`** — `role`, `company`, `period`, optional `location` / `stack[]`,
  and `highlights[]`.
- **`Profile`** — single object with name, title, tagline, summary, contact, and `skills[]`.

---

## Architecture

This is a **single-page scroll site** — there is no router. `App.tsx` stacks the
sections inside a single `<main>`, and the navbar links are in-page anchors
(`#about`, `#experience`, `#projects`, `#contact`).

```
src/
├── main.tsx              # React entry point
├── App.tsx               # Composes NavBar + sections + Footer; skip-to-content link
├── index.css             # Design system (Tailwind v4 @theme tokens) + base styles
├── types/
│   └── index.ts          # Project, Experience, Profile, SocialLink interfaces
├── data/                 # All editable content (see above)
│   ├── profile.ts
│   ├── projects.ts
│   └── experience.ts
├── components/           # Site chrome (shared across the page)
│   ├── NavBar.tsx        # Sticky, scroll-aware bar + mobile hamburger menu
│   └── Footer.tsx        # Slim footer with nav + social links
└── sections/             # One component per page section (each is a <section id="...">)
    ├── Hero.tsx          # #home  — headline, CTAs, faux pipeline.py terminal card
    ├── About.tsx         # #about — bio + stack.config skills panel
    ├── Experience.tsx    # #experience — vertical timeline
    ├── Projects.tsx      # #projects — project card grid (featured cards span wider)
    └── Contact.tsx       # #contact — validated form (mailto:) + direct links
```

### Why this structure

- **Data-driven, presentation-separated.** Content (`data/`) is decoupled from layout
  (`sections/`, `components/`) and types (`types/`), so updating the site is a data edit.
- **Section-per-file.** Each section is a self-contained, default-exported component
  that imports its own data and takes no props — easy to read, move, or remove.

---

## Design system

The visual language is defined once in **`src/index.css`** using Tailwind v4's `@theme`
block, which exposes design tokens as utility classes. **Use these tokens — don't
hardcode hex values.**

**Colors** (→ `bg-*`, `text-*`, `border-*`):

- `ink` (page bg), `surface` / `surface-2` (panels), `line` (hairline borders)
- `fg` / `muted` / `faint` (text hierarchy)
- `accent` (signal lime `#c5f82a`), `accent-soft`, `accent-dim`

**Fonts** (→ `font-*`, loaded via Google Fonts in `index.html`):

- `font-display` — Bricolage Grotesque (headings)
- `font-sans` — IBM Plex Sans (body, default)
- `font-mono` — IBM Plex Mono (kickers, labels, code motifs)

**Helper utilities** (also in `index.css`):

- `.container-page` — centered max-width content wrapper with padding
- `.kicker` — monospace uppercase lime eyebrow above section headings
- `.bg-grid` — faint grid texture for atmospheric backgrounds
- `.animate-rise` — entrance animation (pair with inline `animationDelay` for stagger)

**Accessibility & motion** are handled globally: a `:focus-visible` ring, a
skip-to-content link in `App.tsx`, semantic landmarks, and a
`prefers-reduced-motion` block that disables animations.

---

## Tooling notes

- **React Compiler** is enabled (via `babel-plugin-react-compiler` in `vite.config.ts`).
- **Tailwind CSS v4** is wired through the `@tailwindcss/vite` plugin; there is no
  `tailwind.config.js` — configuration lives in the `@theme` block in `index.css`.
- **No runtime dependencies beyond React + Tailwind.** Icons are inline SVG; there is
  no router, icon library, or animation library.

### Project-level agent skills

This repo carries a few [agent skills](https://skills.sh/) under
`../.agents/skills/` (repo root) that guided the build and remain available for future
work: `frontend-design`, `accessibility`, `fixing-accessibility`, and
`vercel-react-best-practices`.

---

## Deployment

Any static host works (Vercel, Netlify, GitHub Pages, Cloudflare Pages):

```bash
npm run build      # outputs static assets to dist/
```

Serve the contents of `dist/`.
