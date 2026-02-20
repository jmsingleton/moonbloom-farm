# Visual Polish & Editorial Refinement — Design Document

**Date:** 2026-02-19

## Summary

Refine the site's visual design from "functional template" to "editorial, upscale farmhouse." The current design has strong bones (typography, color palette, layout structure) but the execution feels generic — identical gradient heroes, cold shadows, inconsistent button styles, and bare placeholder images. This design brings warmth, consistency, and restraint.

## Guiding Principle

Treat the site like a high-end print publication. Typography and whitespace do the heavy lifting. Decorative elements are minimal and intentional. Nothing should look "app-like" or like a CSS framework demo.

## Changes

### 1. Subpage Heroes (About, Gallery, Blog, Contact, What We Grow)

**Problem:** Every subpage uses the same 3-layer green-to-gold gradient hero. They feel copy-pasted and flashy.

**Solution:** Replace with single muted earthy tones per page. Simplify from 3 layers (bg + overlay + content) to a single background on `.page-hero`. Remove text-shadow from headings. Keep subtitle italic.

| Page | Background Gradient (top to bottom) |
|------|--------------------------------------|
| About | `#4a5a40` to `#566748` (dusty olive) |
| Gallery | `#6e5c4a` to `#7a6854` (soft clay) |
| Blog | `#3d4f3d` to `#4a5a48` (deep forest) |
| Contact | `#5a4d3e` to `#665948` (soil brown) |
| What We Grow | `#5e6f50` to `#6a7a5a` (sage olive) |

Each is a subtle vertical gradient (slight lightening downward). No multi-color gradients, no overlays.

### 2. Homepage Hero

**Problem:** The dark cinematic hero uses cold dark green/black tones that feel disconnected from the earthy palette.

**Solution:** Shift the gradient overlay from cold `rgba(20, 27, 21)` to warmer `rgba(35, 30, 24)` / `rgba(48, 42, 32)`. Warm up the grain overlay accent colors. Same dramatic scale, but feels like golden-hour light instead of midnight.

### 3. Warm Shadows (Global)

**Problem:** All shadows use cold `rgba(0, 0, 0, ...)` which feels clinical.

**Solution:** Replace with warm-toned shadows site-wide using `rgba(110, 92, 74, ...)` at the same opacity levels. Applies to: blog cards, photo frames, story photos, gallery items, map container, and any other box-shadow instances.

### 4. Button Consistency

**Problem:** Gallery filter buttons use pill shapes (`border-radius: 999px`), hero CTAs are square, form buttons are square — inconsistent.

**Solution:** Standardize to editorial square style (`border-radius: var(--border-radius)`, which is `2px`). Two button types:
- **Solid:** Forest green background, cream text, uppercase, consistent padding
- **Outline:** Forest green 1.5px border, transparent background, forest green text

Gallery filter buttons change from pills to square to match.

### 5. Blog Cards & Gallery Items

**Problem:** Minimal styling — faint cold shadow, no border. Functional but not refined.

**Solution:**
- Add subtle warm border: `1px solid rgba(110, 92, 74, 0.08)`
- Upgrade to warm shadows
- Tighten hover: gentle lift with slightly stronger warm shadow
- Keep cream background

### 6. Placeholder Images

**Problem:** Flat colored rectangles with centered "Photo" text look like broken images.

**Solution:** Replace "Photo" text with a small centered botanical SVG icon (leaf/stem motif matching the existing divider style). Keep the per-item background colors. Add subtle styling. These should look like an intentional design comp.

## Files Affected

- `src/styles/global.css` — warm shadow variables, any global shadow instances
- `src/components/HeroSection.astro` — warm up homepage hero
- `src/components/Header.astro` — (already fixed for mobile nav)
- `src/pages/about.astro` — hero replacement, warm shadows on story/farmer photos
- `src/pages/gallery.astro` — hero replacement, filter button style, gallery item shadows
- `src/pages/blog/index.astro` — hero replacement, blog card borders/shadows
- `src/pages/blog/[...slug].astro` — hero image placeholder
- `src/pages/contact.astro` — hero replacement, map shadow, social link button style
- `src/pages/what-we-grow.astro` — hero replacement, photo card shadows
- All pages with placeholder "Photo" text — replace with botanical SVG icon

## Out of Scope

- Real photography (placeholders stay, just styled better)
- Layout restructuring (the grid/section structure is solid)
- New pages or features
- Typography changes (Cormorant Garamond + Inter are good choices)
- Footer redesign (it's already strong)
