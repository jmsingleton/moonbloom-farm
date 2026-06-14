# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

Marketing website for Moonbloom Farm, a small family farm and roadside stand in Glen Ellen, CA (Sonoma Valley). The stand sells **eggs, produce, and baked goods — no flowers**. The site drives visitors to the physical farm stand, builds Instagram following, and grows an email subscriber list. The brand is repositioned younger and broader — "farmers market cool" — while keeping the honest, plain-spoken voice.

This is **not** an e-commerce site — there are no prices, carts, or payments. Content is managed via code and Markdown files (no CMS).

## Commands

- `npm run dev` — Start dev server at localhost:4321
- `npm run build` — Build static site to `./dist/`
- `npm run preview` — Preview production build locally
- `npm run assets` — Regenerate `favicon.ico`, the OG card, and the print-ready stamp PNGs from the brand SVGs (via `@resvg/resvg-js`). Run after editing any brand SVG.

There are no tests, linters, or formatters configured.

## Architecture

**Framework:** Astro 5 (static site generator) with strict TypeScript. Deploys to Netlify.

**Layout:** Single layout (`src/layouts/BaseLayout.astro`) wraps all pages with Header, Footer, and global styles. It also sets canonical URL, Open Graph / Twitter meta, the OG card, `theme-color`, and LocalBusiness JSON-LD. All pages pass `title` and `description` props.

**Pages:** File-based routing in `src/pages/`. Live routes are `/` (home), `/visit`, `/about`, and `/blog` (labeled "journal"). The home page (`index.astro`) is an inline poster composition — hero, moon-phase divider, an "at the stand" three-card grid, a butter visit band, and a newsletter signup — built directly in the page (the old preview components were deleted). The deleted pages redirect via `public/_redirects`: `/contact → /visit`, and `/what-we-sell`, `/gallery`, `/logo-concepts` → `/` (all 301).

**Blog:** Uses Astro content collections. Posts are Markdown files in `src/content/blog/` with frontmatter schema defined in `src/content.config.ts` (title, description, date, optional image and tags). Dynamic routes via `src/pages/blog/[...slug].astro`. The blog is empty at launch (shows an empty state).

**Styling:** No CSS framework. All styles use CSS custom properties defined in `src/styles/global.css` (`--ink`, `--paper`, `--butter`, `--lilac`; type, space, and text-size scales). Components use Astro scoped `<style>` blocks. Prose/markdown content is styled via `:global()` selectors in the blog post template.

## Brand & Design System

Refer to `docs/brand-guidelines.md` for the full spec. Key points:

- **Color tokens:** `--ink` (`#14342B`, midnight mint — every word, line, button, stamp; the only ink), `--paper` (`#EAF2EC`, mint cream — default ground), `--butter` (`#F4E9C8`, highlight band, max one per page), `--lilac` (`#E6DFF0`, reserved, not used at launch). The footer reverses (ink ground, paper text).
- **Typography:** One family — **Archivo** (variable, loaded via Google Fonts in BaseLayout). Display = Expanded (width 125), Black (weight 900), lowercase, set huge. Body = normal width, weights 400/500/700, normal capitalization. No serif, no italic.
- **Design direction:** "Stamped minimal" — a flat poster stamped with one-ink marks. Huge lowercase type, two colors, lots of air. No gradients, shadows, grain, blur, or photography at launch. Stamps rotate ±3° and never overlap text.
- **Layout:** `--max-width: 1100px`, square corners (`--border-radius: 0`). Content areas like blog prose max out at 720px.

## Navigation

Nav links are defined in `src/components/Header.astro` as a `navLinks` array: **about** and **journal** (journal maps to `/blog`), plus an ink-filled **visit the stand →** button mapping to `/visit`. The header is sticky. Mobile nav is a full-screen overlay triggered by the hamburger button (breakpoint: 760px).

## Static Assets

- Logos in `public/logos/` — `moonbloom-badge.svg` (stamp badge), `moonbloom-mark.svg` (the mark, used in header/footer/favicon), and `moonbloom-stamp-print.png` (print-ready badge). The header wordmark is display text beside the mark, not a separate SVG.
- Favicon at `public/favicon.svg` and `public/favicon.ico`.
- OG card at `public/og/og-card.png`.
- The old placeholder images in `public/images/` were removed; real photography slots in later.
