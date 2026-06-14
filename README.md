# moonbloom farm — website

Marketing website for **moonbloom farm**, a small family farm and roadside stand in Glen Ellen, CA (Sonoma Valley). The stand sells **eggs, produce, and baked goods — no flowers**. The site drives visits to the physical stand, builds the Instagram following, and grows the email list.

Built with [Astro 5](https://astro.build) (static, strict TypeScript), deployed to [Netlify](https://netlify.com). This is **not** an e-commerce site — no prices, carts, or payments. Content lives in code and Markdown (no CMS).

The brand is a flat "stamped minimal" poster identity — huge lowercase type, two colors, and one-ink stamped marks. See [`docs/brand-guidelines.md`](docs/brand-guidelines.md) for the full spec.

## Quick start

```sh
npm install        # install dependencies
npm run dev        # start dev server at localhost:4321
```

Open http://localhost:4321 in your browser.

## Commands

| Command            | What it does                                                              |
|--------------------|--------------------------------------------------------------------------|
| `npm run dev`      | Start local dev server with hot reload                                    |
| `npm run build`    | Build production site to `./dist/`                                        |
| `npm run preview`  | Serve the production build locally for testing                           |
| `npm run assets`   | Regenerate `favicon.ico`, the OG card, and the print-ready stamp PNG from the brand SVGs (via `@resvg/resvg-js`). Run after editing any brand SVG. |

There are no automated tests, linters, or formatters — verification is `npm run build` plus a visual check.

## Project structure

```
src/
  layouts/
    BaseLayout.astro        # Wraps every page: header, footer, global styles,
                            # canonical URL, OG/Twitter meta, theme-color, LocalBusiness JSON-LD
  components/
    Header.astro            # Sticky nav + full-screen mobile overlay (hamburger)
    Footer.astro            # Reversed (ink ground) footer: wordmark, links, copyright
    MoonbloomMark.astro     # Inline crescent-and-bloom mark (currentColor)
    StampBadge.astro        # Inline circular stamp badge (ring text needs the webfont)
    MoonDivider.astro       # Decorative moon-phase section divider ● ◐ ○ ◑ ●
  pages/
    index.astro             # Home — inline "poster": hero, divider, "at the stand"
                            # cards, butter visit band, newsletter signup
    about.astro             # About the farm and farmers (big type, no imagery)
    visit.astro             # Address, hours, map, email, Instagram, signup (replaces /contact)
    blog/
      index.astro           # Journal listing (empty state at launch)
      [...slug].astro       # Individual post template
  content/
    blog/                   # Blog posts (Markdown) — empty at launch
  content.config.ts         # Content-collection schema (title, description, date, image?, tags?)
  styles/
    global.css              # Design tokens, reset, utilities (.btn/.link/.stamp/.input/.display)
public/
  logos/                    # moonbloom-badge.svg, moonbloom-mark.svg, moonbloom-stamp-print.png
  og/                       # og-card.png (generated)
  images/                   # (placeholders removed; real photography slots in later)
  favicon.svg / favicon.ico
  robots.txt / _redirects   # sitemap pointer; 301s for retired routes
scripts/
  gen-assets.mjs            # Rasterizes brand SVGs → favicon.ico / OG card / print stamp
docs/
  brand-guidelines.md       # Color, type, logo, voice rules
  copy.md                   # Every user-visible string, page by page
netlify.toml                # Build config and security headers
```

## Routes & redirects

Live routes: `/` (home), `/visit`, `/about`, `/blog` (labeled "journal"). The old-brand pages were removed; `public/_redirects` 301s them so external links don't break:

- `/contact` → `/visit`
- `/what-we-sell`, `/gallery`, `/logo-concepts` → `/`

## How to test changes

There are no automated tests — testing is visual.

1. **Run the dev server** — `npm run dev` (hot reload for `.astro`, CSS, and Markdown).
2. **Check the pages:** `/`, `/about`, `/visit`, `/blog`, and an individual `/blog/<slug>` once posts exist.
3. **Test mobile layout** — below 760px the header collapses to a hamburger that opens a full-screen overlay; test open/close (and Escape) and link navigation. The stamp badge reorders above the hero on small screens.
4. **Tab through** to confirm focus rings are visible on both the paper grounds and the reversed ink footer.
5. **Run a production build** — `npm run build` should complete with 0 errors and build 4 pages (the "blog collection empty" warning is expected at launch). Then `npm run preview` to check the built output.

## How to update content

### Blog posts

Markdown files in `src/content/blog/`. Frontmatter schema is defined in `src/content.config.ts`:

```yaml
---
title: "Post Title"
description: "Short description for cards and SEO"
date: 2026-02-19
image: "/images/optional-hero.jpg"   # optional
tags: ["farm life", "eggs"]           # optional
---

Post body in Markdown here.
```

The filename becomes the URL slug (e.g. `my-new-post.md` → `/blog/my-new-post`).

### Page content

Page copy lives directly in the `.astro` files in `src/pages/`. `docs/copy.md` is a plain-language export of every user-visible string if you'd rather edit there and have changes applied back.

### Navigation

Nav links are the `navLinks` array at the top of `src/components/Header.astro`. "journal" maps to `/blog`; the "visit the stand →" button maps to `/visit`.

### Brand SVGs & generated assets

Brand marks live in `public/logos/` and `src/assets/`. After editing any brand SVG, run `npm run assets` to regenerate the favicon, OG card, and print-ready stamp, then commit the updated binaries. The script pins the Archivo font files and fails loudly if one is missing.

## Design system

Full brand guidelines: [`docs/brand-guidelines.md`](docs/brand-guidelines.md). Tokens are CSS custom properties in `src/styles/global.css`:

| Token | Value | Usage |
|-------|-------|-------|
| `--ink` | `#14342B` (midnight mint) | Every word, line, button, and stamp — the only ink |
| `--paper` | `#EAF2EC` (mint cream) | Default page ground |
| `--butter` | `#F4E9C8` | Highlight band — at most one per page |
| `--lilac` | `#E6DFF0` | Reserved garnish — not used at launch |
| `--font` | Archivo | One family; display = Expanded (width 125) Black (900) lowercase, body = normal width |
| `--max-width` | `1100px` | Content container (prose maxes at 720px) |

Corners are square. Archivo loads once via Google Fonts in `BaseLayout.astro`. No serif, no italic, no second typeface.

## Deployment

Deploys to Netlify (config in `netlify.toml`):

- **Build command:** `npm run build`
- **Publish directory:** `dist`
- **Security headers:** X-Frame-Options, X-Content-Type-Options, Referrer-Policy

Pushes to the main branch trigger automatic builds. The production domain is `moonbloom.farm` (set as `site` in `astro.config.mjs` for canonical URLs and the sitemap).

## Troubleshooting

**Dev server won't start:** Run `npm install` first. Requires Node.js 18+.

**Build fails:** Read the error output — Astro gives clear file/line references.

**Styles not updating:** Astro scopes component styles with `data-astro-cid-*` attributes. Keep selectors in the right component's `<style>` block, or use `global.css` for site-wide rules. Note: inline `style=""` attributes outrank scoped rules.

**Mobile nav not working:** The overlay sits outside `<header>` (intentional — it avoids containment issues with the sticky header) and toggles `inert` on `main`/`footer` for focus containment. The JS finds it via `document.getElementById`.
