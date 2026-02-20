# Moonbloom Farms Website

Marketing website for Moonbloom Farms, a micro flower farm and farm stand in Glen Ellen, CA (Sonoma Valley). Built with [Astro 5](https://astro.build), deployed to [Netlify](https://netlify.com).

## Quick Start

```sh
npm install        # install dependencies
npm run dev        # start dev server at localhost:4321
```

Open http://localhost:4321 in your browser.

## Commands

| Command             | What it does                                       |
|---------------------|----------------------------------------------------|
| `npm run dev`       | Start local dev server with hot reload             |
| `npm run build`     | Build production site to `./dist/`                 |
| `npm run preview`   | Serve the production build locally for testing     |

## Project Structure

```
src/
  layouts/
    BaseLayout.astro        # Wraps every page (header, footer, global styles)
  components/
    Header.astro            # Sticky nav + mobile hamburger menu
    Footer.astro            # Site footer
    HeroSection.astro       # Homepage hero banner
    AboutPreview.astro      # Homepage "Our Story" teaser
    GrowPreview.astro       # Homepage "What We Grow" teaser
    GalleryPreview.astro    # Homepage photo grid teaser
    BlogPreview.astro       # Homepage journal teaser
    FarmStandInfo.astro     # Homepage farm stand hours + map
  pages/
    index.astro             # Home (composes preview components)
    about.astro             # About the farm
    what-we-grow.astro      # Flowers & produce
    gallery.astro           # Photo gallery with lightbox
    blog/
      index.astro           # Journal listing
      [...slug].astro       # Individual blog post template
    contact.astro           # Visit info, map, hours, email signup
  content/
    blog/                   # Blog posts (Markdown)
    config.ts               # Content collection schema
  styles/
    global.css              # Design tokens, resets, global styles
public/
  logos/                    # SVG logos
  images/                   # Placeholder images (replace with real photos)
  favicon.svg / .ico
docs/
  brand-guidelines.md       # Color, typography, and visual tone rules
netlify.toml                # Build config and security headers
```

## How to Test Changes

There are no automated tests. Testing is visual.

1. **Run the dev server** — `npm run dev` starts Astro with hot reload. Changes to `.astro` files, CSS, and Markdown are reflected immediately.

2. **Check these pages:**
   - `/` — Homepage hero, section previews, farm stand info
   - `/about` — Story blocks with photo placeholders
   - `/what-we-grow` — Photo grid of flowers and produce
   - `/gallery` — Masonry grid with filter buttons and lightbox
   - `/blog` — Journal listing with card layout
   - `/blog/<post-slug>` — Individual post with styled prose
   - `/contact` — Map, hours, social links, email signup

3. **Test mobile layout** — Resize browser below 860px. The hamburger menu should open a full-screen overlay. Test open/close and link navigation.

4. **Test gallery lightbox** — Click any gallery item. Navigate with arrows. Close with X or Escape key.

5. **Run a production build** — `npm run build` should complete with 0 errors and 10 pages. Then `npm run preview` to check the built output.

## How to Update Content

### Blog Posts

Blog posts are Markdown files in `src/content/blog/`. Each file needs this frontmatter:

```yaml
---
title: "Post Title"
description: "Short description for cards and SEO"
date: 2026-02-19
image: "/images/optional-hero.jpg"  # optional
tags: ["flowers", "farm life"]      # optional
---

Post body in Markdown here.
```

To add a new post, create a new `.md` file in `src/content/blog/`. The filename becomes the URL slug (e.g., `my-new-post.md` becomes `/blog/my-new-post`).

### Page Content

All page content is directly in the `.astro` files in `src/pages/`. Edit the HTML in those files to update text, add sections, or change structure.

### Navigation

Nav links are defined in `src/components/Header.astro` in the `navLinks` array at the top of the file. The label is what visitors see; the href is the URL path.

Note: "Journal" maps to `/blog` and "Visit" maps to `/contact`.

### Images

Placeholder images are in `public/images/` as SVGs. To replace with real photos:

1. Add photos to `public/images/` (JPG/WebP recommended)
2. Update the `<img>` tags in the relevant page/component files
3. Use `loading="lazy"` on images below the fold

For the logo, replace files in `public/logos/`. The header uses `moonbloom-horizontal.svg`.

## Design System

Full brand guidelines are in `docs/brand-guidelines.md`. Key design tokens are CSS custom properties in `src/styles/global.css`:

| Token | Value | Usage |
|-------|-------|-------|
| `--color-paper` | Cream | Page background |
| `--color-ink` | Deep green | Primary text |
| `--color-forest` | Forest green | Buttons, accents |
| `--color-clay` | Terracotta | Warm accent |
| `--color-brass` | Gold | Highlight accent |
| `--font-heading` | Cormorant Garamond | Headings |
| `--font-body` | Inter | Body text |
| `--max-width` | 1200px | Content container |
| `--border-radius` | 2px | Nearly square corners |

Fonts are loaded via Google Fonts in `BaseLayout.astro`.

## Deployment

The site deploys to Netlify. Configuration is in `netlify.toml`:

- **Build command:** `npm run build`
- **Publish directory:** `dist`
- **Security headers:** X-Frame-Options, X-Content-Type-Options, Referrer-Policy

To deploy, connect the git repository to Netlify. Pushes to the main branch trigger automatic builds.

## Troubleshooting

**Dev server won't start:** Run `npm install` first. Requires Node.js 18+.

**Build fails:** Check for syntax errors in `.astro` files. Run `npm run build` and read the error output — Astro gives clear file/line references.

**Styles not updating:** Astro scopes component styles with `data-astro-cid-*` attributes. If styles aren't applying, make sure selectors are in the right component's `<style>` block, or use `global.css` for site-wide rules.

**Mobile nav not working:** The mobile nav overlay sits outside the `<header>` element (this is intentional — it avoids CSS containment issues with the sticky header). The JS uses `document.getElementById` to find it.
