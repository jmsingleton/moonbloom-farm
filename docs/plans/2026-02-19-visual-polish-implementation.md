# Visual Polish Implementation Plan

> **For Claude:** REQUIRED SUB-SKILL: Use superpowers:executing-plans to implement this plan task-by-task.

**Goal:** Refine the site from "functional template" to "editorial, upscale farmhouse" through warmer colors, consistent styling, and better placeholders.

**Architecture:** CSS-only changes across existing components. No layout restructuring, no new pages, no JS changes. The design system variables in `global.css` set the foundation, then per-component edits apply the refinements.

**Tech Stack:** Astro 5, vanilla CSS (scoped + global), inline SVG

---

### Task 1: Warm up homepage hero

**Files:**
- Modify: `src/components/HeroSection.astro` (lines 64-68, 75-78)

**Step 1: Shift hero overlay from cold to warm tones**

In `.hero-bg`, change the gradient overlay colors:

```css
/* FROM: */
linear-gradient(120deg, rgba(20, 27, 21, 0.82), rgba(48, 40, 34, 0.7))

/* TO: */
linear-gradient(120deg, rgba(35, 30, 24, 0.84), rgba(48, 42, 32, 0.72))
```

**Step 2: Warm up the grain overlay accents**

In `.hero-grain`, shift the radial gradient accent colors warmer:

```css
/* FROM: */
radial-gradient(circle at 10% 20%, rgba(185, 148, 79, 0.22), transparent 28%),
radial-gradient(circle at 88% 78%, rgba(178, 105, 75, 0.2), transparent 35%);

/* TO: */
radial-gradient(circle at 10% 20%, rgba(201, 169, 106, 0.25), transparent 30%),
radial-gradient(circle at 88% 78%, rgba(178, 120, 85, 0.22), transparent 38%);
```

**Step 3: Verify**

Run: `npm run build`

Visually check homepage hero — should feel like golden-hour light, slightly warmer than before, same dramatic scale.

**Step 4: Commit**

```
git add src/components/HeroSection.astro
git commit -m "style: warm up homepage hero tones"
```

---

### Task 2: Replace subpage heroes with muted earthy tones

**Files:**
- Modify: `src/pages/about.astro` (hero CSS ~lines 173-248)
- Modify: `src/pages/gallery.astro` (hero CSS ~lines 115-191)
- Modify: `src/pages/blog/index.astro` (hero CSS ~lines 58-133)
- Modify: `src/pages/contact.astro` (hero CSS ~lines 149-224)
- Modify: `src/pages/what-we-grow.astro` (hero CSS ~lines 135-210)

**Step 1: Replace each page's hero CSS**

For ALL 5 subpages, replace the 3-layer hero CSS (`.page-hero-bg` + `.page-hero-overlay` + their rules) with a single background on `.page-hero`. The structure for each page is identical — only the gradient colors differ.

**New `.page-hero` CSS pattern** (replaces the existing `.page-hero`, `.page-hero-bg`, `.page-hero-overlay`, and `.page-hero-content` rules):

```css
.page-hero {
  position: relative;
  min-height: 40vh;
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
  margin-top: calc(-1 * (var(--space-sm) * 2 + 1.5rem * 1.2));
  padding-top: calc(var(--space-sm) * 2 + 1.5rem * 1.2);
  background: linear-gradient(180deg, <COLOR_TOP> 0%, <COLOR_BOTTOM> 100%);
}

.page-hero-content {
  position: relative;
  z-index: 2;
  text-align: center;
  padding: var(--space-xl) var(--space-md);
  max-width: 700px;
}

.page-hero-title {
  font-family: var(--font-heading);
  font-size: clamp(2.2rem, 5.5vw, var(--font-size-4xl));
  font-weight: 700;
  line-height: 1.1;
  color: var(--color-cream);
  margin: 0 0 var(--space-sm);
}

.page-hero-subtitle {
  font-family: var(--font-body);
  font-size: clamp(1rem, 2vw, var(--font-size-lg));
  line-height: 1.6;
  color: var(--color-cream);
  margin: 0;
  opacity: 0.9;
  font-style: italic;
}
```

Note: `text-shadow` is removed from `.page-hero-title`. The `.page-hero-bg` and `.page-hero-overlay` CSS rules are deleted entirely.

**Per-page gradient values:**

| Page | `<COLOR_TOP>` | `<COLOR_BOTTOM>` |
|------|--------------|-----------------|
| About | `#4a5a40` | `#566748` |
| Gallery | `#6e5c4a` | `#7a6854` |
| Blog (index) | `#3d4f3d` | `#4a5a48` |
| Contact | `#5a4d3e` | `#665948` |
| What We Grow | `#5e6f50` | `#6a7a5a` |

**Step 2: Remove the `.page-hero-bg` and `.page-hero-overlay` divs from HTML**

In each page's template, remove these two lines from inside the `<section class="page-hero">`:

```html
<!-- DELETE these two lines: -->
<div class="page-hero-bg" aria-hidden="true"></div>
<div class="page-hero-overlay" aria-hidden="true"></div>
```

**Step 3: Update responsive breakpoints**

Keep the existing responsive rules but remove any that reference `.page-hero-bg` or `.page-hero-overlay`. The `.page-hero` min-height breakpoints (35vh at 768px, 30vh at 480px) stay.

**Step 4: Verify**

Run: `npm run build`

Visit each subpage — heroes should be muted solid tones, typography clear without text-shadow, no flashy gradients.

**Step 5: Commit**

```
git add src/pages/about.astro src/pages/gallery.astro src/pages/blog/index.astro src/pages/contact.astro src/pages/what-we-grow.astro
git commit -m "style: replace subpage heroes with muted earthy tones"
```

---

### Task 3: Warm up all box-shadows site-wide

**Files:**
- Modify: `src/pages/about.astro` (lines 294, 396)
- Modify: `src/pages/gallery.astro` (no box-shadow instances aside from lightbox)
- Modify: `src/pages/blog/index.astro` (lines 151, 160)
- Modify: `src/pages/contact.astro` (line 377)
- Modify: `src/pages/what-we-grow.astro` (lines 269, 275)
- Modify: `src/components/AboutPreview.astro` (line 99)
- Modify: `src/components/BlogPreview.astro` (lines 84, 93)
- Modify: `src/components/GrowPreview.astro` (line 99)
- Modify: `src/components/FarmStandInfo.astro` (line 161)

**Step 1: Replace cold shadows with warm shadows**

Find and replace all `box-shadow` values using `rgba(0, 0, 0, ...)` with `rgba(110, 92, 74, ...)` at the same opacity. The mapping:

| Cold (current) | Warm (new) |
|---|---|
| `rgba(0, 0, 0, 0.06)` | `rgba(110, 92, 74, 0.08)` |
| `rgba(0, 0, 0, 0.08)` | `rgba(110, 92, 74, 0.10)` |
| `rgba(0, 0, 0, 0.1)` | `rgba(110, 92, 74, 0.12)` |
| `rgba(0, 0, 0, 0.12)` | `rgba(110, 92, 74, 0.14)` |
| `rgba(0, 0, 0, 0.2)` | `rgba(110, 92, 74, 0.22)` |

Note: Do NOT change `box-shadow` values that already use warm tones (e.g., the header's `rgba(35, 30, 26, 0.08)` is already warm). Do NOT change focus ring `box-shadow` values (those use intentional accent colors like `rgba(44, 85, 48, 0.15)`).

**Step 2: Add warm borders to blog cards**

In `src/pages/blog/index.astro` and `src/components/BlogPreview.astro`, add to `.blog-card`:

```css
border: 1px solid rgba(110, 92, 74, 0.08);
```

**Step 3: Verify**

Run: `npm run build`

Shadows should look warmer and more natural throughout. The difference is subtle but gives the site a cohesive warmth.

**Step 4: Commit**

```
git add src/pages/about.astro src/pages/blog/index.astro src/pages/contact.astro src/pages/what-we-grow.astro src/components/AboutPreview.astro src/components/BlogPreview.astro src/components/GrowPreview.astro src/components/FarmStandInfo.astro
git commit -m "style: warm up box-shadows and add card borders"
```

---

### Task 4: Standardize button styles

**Files:**
- Modify: `src/pages/gallery.astro` (line 214 — filter button border-radius)
- Modify: `src/pages/contact.astro` (line 354 — social link border-radius)

**Step 1: Change gallery filter buttons from pills to square**

In `src/pages/gallery.astro`, in the `.filter-btn` rule, change:

```css
/* FROM: */
border-radius: 999px;

/* TO: */
border-radius: var(--border-radius);
```

**Step 2: Change contact social link from pill to square**

In `src/pages/contact.astro`, in the `.social-link` rule, change:

```css
/* FROM: */
border-radius: 999px;

/* TO: */
border-radius: var(--border-radius);
```

**Step 3: Verify**

Run: `npm run build`

Gallery filter buttons and contact social link should now be square (2px radius), matching the site's editorial aesthetic.

**Step 4: Commit**

```
git add src/pages/gallery.astro src/pages/contact.astro
git commit -m "style: standardize button border-radius to editorial square"
```

---

### Task 5: Replace "Photo" placeholder text with botanical SVG

**Files:**
- Modify: `src/pages/gallery.astro` (line 83 — masonry items, line 593 — lightbox JS)
- Modify: `src/pages/what-we-grow.astro` (line 103 — photo grid)
- Modify: `src/pages/blog/index.astro` (line 37 — blog card image)
- Modify: `src/pages/blog/[...slug].astro` (line 47 — post hero)
- Modify: `src/components/GalleryPreview.astro` (lines 9-14 — photo labels, line 30 — template)
- Modify: `src/components/BlogPreview.astro` (line 31 — blog card image)

**Step 1: Define the botanical placeholder SVG**

Use this small leaf motif (matches the existing botanical dividers in style) wherever "Photo" text currently appears:

```html
<svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" class="placeholder-icon">
  <path d="M16 28C16 28 12 22 7 19C2 16 1 10 1 10C1 10 7 11 11 15C14 17.8 15.5 22 16 28Z" fill="currentColor" opacity="0.4" />
  <path d="M16 28C16 28 20 22 25 19C30 16 31 10 31 10C31 10 25 11 21 15C18 17.8 16.5 22 16 28Z" fill="currentColor" opacity="0.4" />
  <path d="M16 28V10" stroke="currentColor" stroke-width="1" stroke-linecap="round" opacity="0.3" />
</svg>
```

**Step 2: Replace in all page files**

In each file, replace the `<span>` containing "Photo" text with the SVG above. The class on the SVG replaces the text span class. The existing CSS for `.masonry-placeholder-text`, `.photo-placeholder-text`, `.blog-card-image-text`, `.post-hero-placeholder-text` should be updated to style the SVG (mainly `color` and `opacity` — the SVG uses `currentColor`).

For the GalleryPreview component, change the `label` values from `'Photo'` to something unused (or remove the label property entirely) and replace the `<span>` template with the SVG.

For the gallery lightbox JS (line 593), change `lightboxImage.textContent = 'Photo'` to set innerHTML with the SVG string instead.

**Step 3: Update placeholder CSS**

Rename/update CSS classes to target the SVG. The SVG should inherit `color` from its parent (which is already `var(--color-charcoal-light)` in most places). No other styling changes needed — the SVG handles its own opacity internally.

**Step 4: Verify**

Run: `npm run build`

All placeholder rectangles should now show a small botanical leaf icon instead of "Photo" text. The lightbox should also show the leaf icon when opened.

**Step 5: Commit**

```
git add src/pages/gallery.astro src/pages/what-we-grow.astro src/pages/blog/index.astro src/pages/blog/[...slug].astro src/components/GalleryPreview.astro src/components/BlogPreview.astro
git commit -m "style: replace Photo placeholder text with botanical SVG icon"
```

---

### Task 6: Final build verification

**Step 1: Full build**

Run: `npm run build`

Expected: Clean build with 0 errors, 10 pages built.

**Step 2: Visual review checklist**

Start dev server with `npm run dev` and check each page:

- [ ] Homepage: hero feels warmer, golden-hour light
- [ ] About: muted olive hero, warm shadows on photos
- [ ] Gallery: clay-toned hero, square filter buttons, botanical icons in placeholders
- [ ] Blog listing: forest-toned hero, bordered cards with warm shadows
- [ ] Blog post: botanical icon in post hero placeholder
- [ ] Contact: soil brown hero, square social link button
- [ ] What We Grow: sage olive hero, warm shadows on photo cards
- [ ] All placeholders show botanical leaf instead of "Photo"
- [ ] Mobile nav hamburger opens/closes correctly (test at < 860px)
- [ ] Gallery lightbox opens/closes correctly

**Step 3: Commit any final tweaks**

If any colors need minor adjustment after visual review, fix and commit.
