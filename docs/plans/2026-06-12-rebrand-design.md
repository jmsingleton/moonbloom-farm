# Moonbloom Farm Rebrand — Design

**Date:** 2026-06-12
**Status:** Approved by John
**Direction:** "Stamped minimal" — big-type minimal poster (direction 2) + rubber-stamp design language (from direction 1)

## Context & goals

Complete rebrand and redesign of the marketing site. Goals unchanged: drive farm
stand visits, grow Instagram, grow the email list. Repositioning: younger,
broader, "farmers market cool" — without losing the honest voice that already
defines the copy.

Core constraint that generates the identity: the logo must translate to a
physical rubber stamp for easy branding (kraft bags, egg cartons, signage).

**Corrected fact:** Moonbloom Farm does **not** sell flowers. Products are
eggs, produce, and baked goods. CLAUDE.md's "micro flower farm" claim is stale
and gets rewritten as part of this work.

## Concept

A minimal poster someone went at with a rubber stamp. The base layer is huge
lowercase type, two colors, lots of air. The playfulness is a small set of
one-ink stamped marks (round badge, moon phases, arrows, "open fri–sun")
applied like a farmer stamps a kraft bag — slightly rotated, never decorative
gradients/shadows/textures. Everything flat. No photography required at launch.

The moon is the ownable differentiator: every farm brand is sun-drenched;
moonbloom owns dusk. "Grown with love in the Valley of the Moon" (Sonoma
Valley's real nickname) stays as the brand line.

## Identity system

### Name & wordmark
- Always lowercase: **moonbloom farm** (singular — already de facto in code).
- Wordmark set in display face; the "o" in *bloom* carries a waning-crescent
  cut. One trick, used once.

### Logo system (all one-ink, all stamp-ready)
1. **Stamp badge** (hero asset): circle, "moonbloom farm" curved on top,
   "glen ellen, ca" curved on bottom, crescent-and-bloom mark centered.
   Solid shapes only; must survive rubber at 1.5".
2. **Mark alone**: crescent cradling a simple five-petal bloom. Favicon,
   IG avatar, tiny stamps. (Egg-variant mark was considered and rejected.)
3. **Horizontal wordmark**: site header.

### Color
| Token | Hex | Role |
| --- | --- | --- |
| `--ink` | `#14342B` | Midnight mint. Every word, line, button, stamp. The only ink. |
| `--paper` | `#EAF2EC` | Mint cream. Default ground. |
| `--butter` | `#F4E9C8` | Highlight ground. Max one band per page (visit/hours). |
| `--lilac` | `#E6DFF0` | Reserved garnish (journal/moon moments). Not at launch. |

Footer reverses: ink ground, paper text. Contrast ink-on-paper ≈ 12:1 (AAA).

### Type
One family: **Archivo** (Google Fonts, variable, width 62–125 + weight 100–900).
- Display: width 125 (Expanded), weight 900 (Black), lowercase, set huge.
- Body: width 100, weights 400/500/700, normal capitalization.
- No serif, no italic accent voice. Bold or quiet, nothing between.

### Motifs & rules
- Moon-phase divider ● ◐ ○ ◑ ● as the section separator.
- Stamps may rotate ±3°; never overlap text.
- Corners square (`--border-radius: 0`).
- Hover/focus = ink/paper inversion, never a third color. Focus ring: 2px ink
  outline, offset.
- Flat always: no gradients, shadows, grain, blur, or photography-dependent
  layouts.

## Site structure

### Pages
| Route | Fate |
| --- | --- |
| `/` | Rebuilt as the poster (flow below) |
| `/visit` | New — renamed from `/contact`: address, hours, map, email, IG, signup |
| `/about` | Kept; light voice pass |
| `/blog` | Kept (label "journal"); plumbing unchanged; empty at launch |
| `/what-we-sell` | **Deleted** — content absorbed into home "at the stand" |
| `/gallery` | **Deleted** — placeholder-only; returns when real photos exist |
| `/logo-concepts` | **Deleted** — old-brand exploration page |

Redirects (`public/_redirects`): `/what-we-sell → / 301`, `/gallery → / 301`,
`/contact → /visit 301`.

### Navigation
Wordmark left. Links: `about · journal` + one ink-filled button
**visit the stand →** (`/visit`). Mobile keeps full-screen overlay, simplified.

### Homepage flow
1. **Hero** (paper): giant lowercase type — "fresh eggs & garden produce.
   glen ellen, ca." Stamp badge rotated beside it; stamped
   "open fri–sun · 8ish–noon" mark; one button.
2. Moon-phase divider.
3. **at the stand**: three cards — eggs · produce · baked goods — tiny
   stamp-style icons + existing honest one-liners.
4. **Butter band**: address, hours, "get directions →".
5. **Signup**: one line + existing Netlify form.
6. **Footer** (reversed): wordmark, Instagram, email, copyright.

Home omits the blog preview at launch (blog is empty); revisit when posts exist.

## Voice

Keep the existing honest register — it is the brand. Rules:
- Display lines lowercase; body text normally capitalized.
- Keep the hedges: "8ish", "when we can", "when the girls are laying",
  "when the oven is on".
- No superlatives, no "artisanal".
- Browser titles lowercase: `moonbloom farm — glen ellen, ca`.
- Never claim flower sales anywhere (copy, alt text, meta).

## Technical scope

- `astro.config.mjs`: set `site` (verify domain — email is
  hello@moonbloom.farm) + `@astrojs/sitemap`. `robots.txt` gains sitemap line.
- `BaseLayout`: canonical URL, Open Graph + Twitter meta, `theme-color`
  mint cream. Designed OG card (stamp badge on butter, 1200×630) committed as
  static PNG.
- Fonts: single Google Fonts request for variable Archivo (wdth + wght),
  replacing Fraunces + DM Sans.
- Instagram: https://www.instagram.com/moonbloomfarm (replaces bare
  instagram.com links).
- New assets: favicon (mark), `public/logos/` rebuilt (badge / mark /
  wordmark SVGs), stamp icon set (egg, carrot, bread, moon phases, arrow),
  print-ready stamp file of the badge at 1.5".
- Deletions: old logos, all placeholder imagery, hero-bg, noise/grain CSS,
  fixed multi-layer body backgrounds, entrance animations.
- Docs rewritten: `docs/brand-guidelines.md` (new system), `CLAUDE.md`
  (products corrected, new palette/type/IA), `docs/copy.md` regenerated.
- Forms: keep Netlify forms + honeypots as-is (names unchanged so Netlify
  keeps history).

## Out of scope (deliberately)

- Real photography (illustrative stamps carry launch; photos slot in later).
- Gallery page return, lilac garnish, blog content.
- E-commerce of any kind (unchanged).

## Accessibility & performance notes

- AAA contrast on both grounds; AA+ on butter (≈9:1).
- Reduced-motion: site has almost no motion by design; any remaining
  transition respects `prefers-reduced-motion`.
- Removing fixed backgrounds/grain + one variable font = lighter paint and
  smaller CSS than current site.
