# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

Marketing website for Moonbloom Farms, a micro flower farm and farm stand in Glen Ellen, CA (Sonoma Valley). The site drives visitors to the physical farm stand, builds Instagram following, and grows an email subscriber list. Target audience is affluent local women in Sonoma County.

This is **not** an e-commerce site — there are no prices, carts, or payments. Content is managed via code and Markdown files (no CMS).

## Commands

- `npm run dev` — Start dev server at localhost:4321
- `npm run build` — Build static site to `./dist/`
- `npm run preview` — Preview production build locally

There are no tests, linters, or formatters configured.

## Architecture

**Framework:** Astro 5 (static site generator) with strict TypeScript. Deploys to Netlify.

**Layout:** Single layout (`src/layouts/BaseLayout.astro`) wraps all pages with Header, Footer, and global styles. All pages pass `title` and `description` props.

**Pages:** File-based routing in `src/pages/`. The home page (`index.astro`) is a composition of preview components (HeroSection, AboutPreview, GrowPreview, GalleryPreview, FarmStandInfo, BlogPreview) that tease content from dedicated pages.

**Blog:** Uses Astro content collections. Posts are Markdown files in `src/content/blog/` with frontmatter schema defined in `src/content.config.ts` (title, description, date, optional image and tags). Dynamic routes via `src/pages/blog/[...slug].astro`.

**Styling:** No CSS framework. All styles use CSS custom properties defined in `src/styles/global.css`. Components use Astro scoped `<style>` blocks. Prose/markdown content is styled via `:global()` selectors in the blog post template.

## Brand & Design System

Refer to `docs/brand-guidelines.md` for the full spec. Key points:

- **Color variables:** `--color-paper` (cream bg), `--color-ink`/`--color-moss` (deep green), `--color-clay` (terracotta accent), `--color-brass` (gold highlight). Each has a `-soft` variant.
- **Typography:** Cormorant Garamond for headings (`--font-heading`), Inter for body (`--font-body`). Loaded via Google Fonts in BaseLayout.
- **Design direction:** "Rustic elegant" — upscale farmhouse feel. Natural light photography, shallow depth of field, warm tones, imperfect textures. Avoid saturated greens, glossy stock photos, harsh contrast.
- **Layout:** `--max-width: 1200px`, `--border-radius: 2px` (nearly square corners). Content areas like blog prose max out at 720px.

## Navigation

Nav links are defined in `src/components/Header.astro` as a `navLinks` array. The header is sticky with backdrop blur. Mobile nav is a full-screen overlay triggered by hamburger button (breakpoint: 860px). Note: "Journal" label maps to `/blog`, "Visit" maps to `/contact`.

## Static Assets

- Logos in `public/logos/` — primary is `moonbloom-horizontal.svg` (used in header)
- Placeholder SVG images in `public/images/` — these are temporary and should be replaced with real photography
- Favicon at `public/favicon.svg` and `public/favicon.ico`
