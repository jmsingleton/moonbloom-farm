# Moonbloom Farms Website Implementation Plan

> **For Claude:** REQUIRED SUB-SKILL: Use superpowers:executing-plans to implement this plan task-by-task.

**Goal:** Build a rustic-elegant brand website for Moonbloom Farms, a Glen Ellen micro farm, using Astro with static HTML output hosted on Netlify.

**Architecture:** Astro static site with hybrid page structure — home page previews all sections, dedicated pages go deeper. Markdown-based blog via Astro content collections. Netlify Forms for email signup. No database, no auth, no e-commerce.

**Tech Stack:** Astro, HTML, CSS (vanilla with custom properties), vanilla JS (lightbox, mobile nav), Netlify Forms, Google Maps embed

**Design doc:** `docs/plans/2026-02-13-moonbloom-farms-website-design.md`

---

### Task 1: Initialize Astro Project

**Files:**
- Create: `package.json`, `astro.config.mjs`, `tsconfig.json`, `src/` directory structure

**Step 1: Scaffold Astro project**

Run:
```bash
npm create astro@latest . -- --template minimal --install --no-git
```

Accept defaults. This creates the minimal Astro starter in the current directory.

**Step 2: Verify it builds and runs**

Run: `npx astro build`
Expected: Build succeeds, output in `dist/`

Run: `npx astro dev`
Expected: Dev server starts at localhost:4321

**Step 3: Create source directory structure**

```bash
mkdir -p src/components
mkdir -p src/layouts
mkdir -p src/pages/blog
mkdir -p src/content/blog
mkdir -p src/styles
mkdir -p public/images
```

**Step 4: Commit**

```bash
git add -A
git commit -m "feat: initialize Astro project with minimal template"
```

---

### Task 2: Global Styles and Design Tokens

**Files:**
- Create: `src/styles/global.css`
- Create: `src/styles/reset.css`

**Step 1: Create CSS reset**

Create `src/styles/reset.css` with a minimal modern CSS reset (box-sizing, margin/padding reset, img max-width, etc.)

**Step 2: Create global stylesheet with design tokens**

Create `src/styles/global.css` with:

```css
@import './reset.css';

:root {
  /* Colors */
  --color-cream: #FAF7F2;
  --color-cream-dark: #F0EBE3;
  --color-forest: #2C5530;
  --color-forest-light: #3A7040;
  --color-terracotta: #C4785B;
  --color-terracotta-light: #D4956F;
  --color-gold: #C9A96E;
  --color-gold-light: #D9C08E;
  --color-charcoal: #333330;
  --color-charcoal-light: #5C5C58;
  --color-white: #FFFFFF;

  /* Typography */
  --font-heading: 'Playfair Display', Georgia, serif;
  --font-body: 'Lato', 'Segoe UI', sans-serif;
  --font-size-xs: 0.75rem;
  --font-size-sm: 0.875rem;
  --font-size-base: 1rem;
  --font-size-lg: 1.125rem;
  --font-size-xl: 1.5rem;
  --font-size-2xl: 2rem;
  --font-size-3xl: 2.75rem;
  --font-size-4xl: 3.5rem;

  /* Spacing */
  --space-xs: 0.5rem;
  --space-sm: 1rem;
  --space-md: 1.5rem;
  --space-lg: 2.5rem;
  --space-xl: 4rem;
  --space-2xl: 6rem;

  /* Layout */
  --max-width: 1200px;
  --border-radius: 8px;

  /* Transitions */
  --transition: 200ms ease;
}

body {
  font-family: var(--font-body);
  font-size: var(--font-size-base);
  line-height: 1.7;
  color: var(--color-charcoal);
  background-color: var(--color-cream);
}

h1, h2, h3, h4, h5, h6 {
  font-family: var(--font-heading);
  line-height: 1.2;
  color: var(--color-charcoal);
}

a {
  color: var(--color-forest);
  text-decoration: none;
  transition: color var(--transition);
}

a:hover {
  color: var(--color-forest-light);
}

.container {
  max-width: var(--max-width);
  margin: 0 auto;
  padding: 0 var(--space-md);
}

/* Linen texture background utility */
.bg-linen {
  background-image: url("data:image/svg+xml,..."); /* subtle noise texture */
  background-color: var(--color-cream);
}

/* Botanical divider */
.divider {
  display: flex;
  align-items: center;
  justify-content: center;
  margin: var(--space-xl) 0;
  color: var(--color-gold);
  opacity: 0.6;
}
```

**Step 3: Verify styles load**

Update `src/pages/index.astro` to import the global CSS and render a test heading + paragraph. Run dev server, confirm fonts and colors render.

**Step 4: Commit**

```bash
git add src/styles/
git commit -m "feat: add global styles with rustic elegant design tokens"
```

---

### Task 3: Base Layout with Google Fonts

**Files:**
- Create: `src/layouts/BaseLayout.astro`
- Modify: `src/pages/index.astro`

**Step 1: Create BaseLayout**

Create `src/layouts/BaseLayout.astro` with:
- `<html>` with lang="en"
- `<head>` with charset, viewport, title prop, meta description prop
- Google Fonts link for Playfair Display (400, 700) and Lato (400, 700)
- Import of `../styles/global.css`
- Favicon link
- `<body>` with `<slot />` for page content

Props: `title: string`, `description: string`

**Step 2: Update index.astro to use layout**

Update `src/pages/index.astro` to use `BaseLayout` with a test heading.

**Step 3: Verify in browser**

Run: `npx astro dev`
Expected: Page renders with Playfair Display heading and Lato body text on cream background.

**Step 4: Commit**

```bash
git add src/layouts/ src/pages/index.astro
git commit -m "feat: add base layout with Google Fonts and meta tags"
```

---

### Task 4: Header Component with Sticky Navigation

**Files:**
- Create: `src/components/Header.astro`
- Modify: `src/layouts/BaseLayout.astro` (add Header to body)

**Step 1: Build the Header component**

Create `src/components/Header.astro` with:
- Sticky positioning (`position: sticky; top: 0; z-index: 100`)
- Semi-transparent cream background with backdrop blur on scroll
- Farm name/logo on the left (text-based initially, "Moonbloom Farms" in Playfair Display)
- Nav links on the right: Home, About, What We Grow, Gallery, Blog, Contact
- Hamburger menu button (hidden on desktop, visible on mobile)
- Mobile nav: full-screen overlay with centered links, slide-in animation
- Active page highlighting based on `Astro.url.pathname`

Include `<script>` for:
- Mobile menu toggle
- Scroll detection to add a shadow/background change on scroll

**Step 2: Add Header to BaseLayout**

Import and render `<Header />` at the top of `<body>` in BaseLayout.

**Step 3: Verify**

Run dev server. Confirm:
- Header sticks to top on scroll
- Nav links display on desktop
- Hamburger appears on mobile viewport (resize browser)
- Mobile menu opens/closes

**Step 4: Commit**

```bash
git add src/components/Header.astro src/layouts/BaseLayout.astro
git commit -m "feat: add sticky header with responsive mobile navigation"
```

---

### Task 5: Footer Component

**Files:**
- Create: `src/components/Footer.astro`
- Modify: `src/layouts/BaseLayout.astro` (add Footer to body)

**Step 1: Build the Footer component**

Create `src/components/Footer.astro` with three columns on desktop (stacked on mobile):

Column 1 — **Moonbloom Farms**:
- Farm name in Playfair Display
- One-line tagline
- Social icons (Instagram, etc.) using inline SVGs

Column 2 — **Visit the Stand**:
- Address: Glen Ellen, CA (placeholder full address)
- Seasonal hours
- Link to Contact page

Column 3 — **Stay Connected**:
- Email signup form (name + email inputs, submit button)
- `<form>` with `data-netlify="true"` attribute for Netlify Forms
- Hidden `form-name` input

Bottom bar:
- Copyright line: "2026 Moonbloom Farms"
- Botanical line-art divider above footer

Style: deep forest green background, cream text, gold accents for links.

**Step 2: Add Footer to BaseLayout**

Import and render `<Footer />` at the bottom of `<body>` in BaseLayout, after `<slot />`.

**Step 3: Verify**

Run dev server. Confirm footer renders with three columns on desktop, stacks on mobile, form displays.

**Step 4: Commit**

```bash
git add src/components/Footer.astro src/layouts/BaseLayout.astro
git commit -m "feat: add footer with email signup, social links, and farm stand info"
```

---

### Task 6: Home Page — Hero Section

**Files:**
- Modify: `src/pages/index.astro`
- Create: `src/components/HeroSection.astro`

**Step 1: Create HeroSection component**

Create `src/components/HeroSection.astro` with:
- Full-viewport-height section with a background image (placeholder gradient initially)
- Dark overlay for text readability
- Centered content: farm name (h1), tagline (p), CTA button ("Visit the Stand" linking to contact)
- Email signup inline form below the CTA
- Subtle scroll-down indicator (chevron or arrow) at the bottom
- CSS: `min-height: 100vh`, flexbox centering, responsive font sizes

**Step 2: Add to index.astro**

Import and render `<HeroSection />` as the first element in index.astro.

**Step 3: Verify**

Run dev server. Confirm hero fills the viewport, text is readable, CTA button displays, scroll indicator appears.

**Step 4: Commit**

```bash
git add src/components/HeroSection.astro src/pages/index.astro
git commit -m "feat: add hero section with CTA and email signup"
```

---

### Task 7: Home Page — About Preview Section

**Files:**
- Create: `src/components/AboutPreview.astro`
- Modify: `src/pages/index.astro`

**Step 1: Create AboutPreview component**

Create `src/components/AboutPreview.astro` with:
- Section with botanical divider at top
- Two-column layout: photo placeholder on left, text on right (stacks on mobile)
- Heading: "Our Story" in Playfair Display
- 2-3 sentences of placeholder text about the farm
- "Learn More" link styled as a subtle text link with arrow, linking to `/about`
- Rounded corners on the image, subtle shadow

**Step 2: Add to index.astro**

Import and render `<AboutPreview />` after HeroSection.

**Step 3: Verify**

Run dev server. Confirm layout, text, and link render. Check mobile stacking.

**Step 4: Commit**

```bash
git add src/components/AboutPreview.astro src/pages/index.astro
git commit -m "feat: add about preview section to home page"
```

---

### Task 8: Home Page — What We Grow Preview Section

**Files:**
- Create: `src/components/GrowPreview.astro`
- Modify: `src/pages/index.astro`

**Step 1: Create GrowPreview component**

Create `src/components/GrowPreview.astro` with:
- Section heading: "What We Grow & Sell"
- Grid of 4 category cards: Flowers, Seasonal Produce, Farm Fresh Eggs, Curated Gifts
- Each card: image placeholder (rounded corners), category name, one-line description
- Cards use CSS grid: 4 columns on desktop, 2 on tablet, 1 on mobile
- "See Everything" link to `/what-we-grow`
- Cream-dark background to alternate from the previous section

**Step 2: Add to index.astro**

Import and render `<GrowPreview />` after AboutPreview.

**Step 3: Verify**

Run dev server. Confirm 4 cards render in grid, responsive behavior works.

**Step 4: Commit**

```bash
git add src/components/GrowPreview.astro src/pages/index.astro
git commit -m "feat: add what we grow preview section with category cards"
```

---

### Task 9: Home Page — Gallery Preview & Farm Stand Info

**Files:**
- Create: `src/components/GalleryPreview.astro`
- Create: `src/components/FarmStandInfo.astro`
- Modify: `src/pages/index.astro`

**Step 1: Create GalleryPreview component**

Create `src/components/GalleryPreview.astro` with:
- Section heading: "Life at the Farm"
- Masonry-style or asymmetric grid of 6 placeholder images (CSS grid with varying `grid-row` spans)
- Hover effect: slight zoom with overlay
- "View Gallery" link to `/gallery`

**Step 2: Create FarmStandInfo component**

Create `src/components/FarmStandInfo.astro` with:
- Two-column layout: info on left, embedded Google Map on right
- Heading: "Visit the Stand"
- Address, seasonal hours, and brief directions/note
- Google Maps embed `<iframe>` with placeholder coordinates for Glen Ellen, CA
- Deep forest green background section with cream text (visual break)

**Step 3: Add both to index.astro**

Import and render `<GalleryPreview />` then `<FarmStandInfo />` after GrowPreview.

**Step 4: Verify**

Run dev server. Confirm gallery grid and map section render. Check responsive stacking.

**Step 5: Commit**

```bash
git add src/components/GalleryPreview.astro src/components/FarmStandInfo.astro src/pages/index.astro
git commit -m "feat: add gallery preview and farm stand info sections to home page"
```

---

### Task 10: Home Page — Blog Preview Section

**Files:**
- Create: `src/components/BlogPreview.astro`
- Modify: `src/pages/index.astro`

**Step 1: Create BlogPreview component**

Create `src/components/BlogPreview.astro` with:
- Section heading: "From the Field"
- 3 placeholder blog post cards in a row (stacking on mobile)
- Each card: image placeholder, date, title, short excerpt (2 lines), "Read More" link
- Cards have cream background, subtle shadow, rounded corners
- "All Posts" link to `/blog`

Note: This will use static placeholder data initially. It will be wired to real content collection data in Task 14.

**Step 2: Add to index.astro**

Import and render `<BlogPreview />` after FarmStandInfo, before the Footer.

**Step 3: Verify**

Run dev server. Confirm 3 cards render, responsive behavior works.

**Step 4: Commit**

```bash
git add src/components/BlogPreview.astro src/pages/index.astro
git commit -m "feat: add blog preview section with placeholder posts"
```

---

### Task 11: About Page

**Files:**
- Create: `src/pages/about.astro`

**Step 1: Create the About page**

Create `src/pages/about.astro` using BaseLayout with:
- Page hero: smaller hero banner with heading "About Moonbloom Farms" (not full viewport, ~40vh)
- Story section: two-column with photo and text blocks, alternating sides
- Values/philosophy section: 3 icon+text blocks (e.g., "Sustainably Grown", "Locally Rooted", "Seasonally Inspired")
- "Meet the Farmer" section with photo placeholder and bio text
- All content is placeholder text — owner will replace later
- Botanical dividers between sections

**Step 2: Verify**

Run dev server, navigate to `/about`. Confirm all sections render, nav link highlights.

**Step 3: Commit**

```bash
git add src/pages/about.astro
git commit -m "feat: add about page with story, values, and farmer bio sections"
```

---

### Task 12: What We Grow & Sell Page

**Files:**
- Create: `src/pages/what-we-grow.astro`

**Step 1: Create the What We Grow page**

Create `src/pages/what-we-grow.astro` using BaseLayout with:
- Page hero banner: "What We Grow & Sell" heading (~40vh)
- Category sections, each with:
  - Category heading (e.g., "Seasonal Flowers", "Farm Fresh Produce", "Eggs", "Curated Gifts")
  - Short description paragraph
  - Photo grid (3-column CSS grid) with placeholder images and captions
  - Botanical divider between categories
- Alternating background colors (cream / cream-dark) for visual rhythm
- Bottom CTA: "Visit the stand to see what's available today" with link to Contact

**Step 2: Verify**

Run dev server, navigate to `/what-we-grow`. Confirm categories and grids render.

**Step 3: Commit**

```bash
git add src/pages/what-we-grow.astro
git commit -m "feat: add what we grow page with category sections and photo grids"
```

---

### Task 13: Gallery Page with Lightbox

**Files:**
- Create: `src/pages/gallery.astro`

**Step 1: Create the Gallery page**

Create `src/pages/gallery.astro` using BaseLayout with:
- Page hero banner: "Gallery" heading
- Optional category filter buttons at top (All, Flowers, Farm, Products) — CSS-only using anchor links + sections, or vanilla JS toggle
- Responsive masonry-style photo grid using CSS columns or CSS grid
- 12-16 placeholder image slots with varied aspect ratios
- Each image is a `<button>` or clickable element that opens the lightbox

**Step 2: Build the lightbox**

Add `<script>` in the gallery page for a minimal vanilla JS lightbox:
- Click image → full-screen overlay with the image centered
- Previous/next navigation arrows
- Close button (X) and click-outside-to-close
- Keyboard navigation (arrow keys, Escape to close)
- Smooth fade-in/out transitions
- Prevent body scroll when lightbox is open

**Step 3: Verify**

Run dev server, navigate to `/gallery`. Confirm grid renders, lightbox opens/closes, keyboard navigation works.

**Step 4: Commit**

```bash
git add src/pages/gallery.astro
git commit -m "feat: add gallery page with responsive grid and lightbox"
```

---

### Task 14: Blog — Content Collection and Listing Page

**Files:**
- Create: `src/content.config.ts`
- Create: `src/content/blog/welcome-to-moonbloom.md`
- Create: `src/content/blog/spring-flowers-2026.md`
- Create: `src/content/blog/farm-stand-hours.md`
- Create: `src/pages/blog/index.astro`

**Step 1: Define the blog content collection**

Create `src/content.config.ts`:

```typescript
import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const blog = defineCollection({
  loader: glob({ pattern: "**/*.md", base: "./src/content/blog" }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    date: z.coerce.date(),
    image: z.string().optional(),
    tags: z.array(z.string()).optional(),
  }),
});

export const collections = { blog };
```

**Step 2: Create sample blog posts**

Create 3 sample `.md` files in `src/content/blog/` with frontmatter (title, description, date, image) and 2-3 paragraphs of placeholder content each.

**Step 3: Create blog listing page**

Create `src/pages/blog/index.astro`:
- Page hero banner: "From the Field" heading
- Fetch all blog posts with `getCollection('blog')`, sort by date descending
- List posts as cards: image, date formatted nicely, title, excerpt, "Read More" link
- Cards in a single-column or two-column layout

**Step 4: Wire up BlogPreview on home page**

Modify `src/components/BlogPreview.astro` to import `getCollection` from `astro:content` and fetch the latest 3 posts instead of using static placeholder data.

**Step 5: Verify**

Run: `npx astro build`
Expected: Build succeeds with blog collection.

Run dev server, navigate to `/blog`. Confirm posts list with correct data.

**Step 6: Commit**

```bash
git add src/content.config.ts src/content/blog/ src/pages/blog/ src/components/BlogPreview.astro
git commit -m "feat: add blog content collection, sample posts, and listing page"
```

---

### Task 15: Blog — Individual Post Page

**Files:**
- Create: `src/pages/blog/[...slug].astro`

**Step 1: Create dynamic blog post page**

Create `src/pages/blog/[...slug].astro`:
- Use `getCollection('blog')` in `getStaticPaths()`
- Layout: BaseLayout with article-width content (max ~720px centered)
- Post header: title (h1), date, optional image (full-width)
- Post body: rendered Markdown content with styled prose (headings, paragraphs, lists, blockquotes, images)
- Bottom: "Back to all posts" link
- Previous/next post navigation

Style the prose content:
- Comfortable reading width
- Proper spacing between elements
- Styled blockquotes with left border in terracotta
- Image captions

**Step 2: Verify**

Run dev server, click a post from the blog listing. Confirm it renders with full content, navigation works.

**Step 3: Commit**

```bash
git add src/pages/blog/
git commit -m "feat: add individual blog post template with styled prose"
```

---

### Task 16: Contact Page

**Files:**
- Create: `src/pages/contact.astro`

**Step 1: Create the Contact page**

Create `src/pages/contact.astro` using BaseLayout with:
- Page hero banner: "Get in Touch" heading
- Two-column layout (stacks on mobile):

Left column:
- Farm stand address
- Seasonal hours (styled in a card/table)
- Phone number (if applicable)
- Email address
- Social media links with icons

Right column:
- Embedded Google Maps `<iframe>` for Glen Ellen, CA location
- Sized responsively, rounded corners

Bottom section:
- Email signup form (larger version): heading "Stay in the Loop", name, email, optional message
- `data-netlify="true"` and `netlify-honeypot` for spam protection
- Styled submit button in forest green

**Step 2: Verify**

Run dev server, navigate to `/contact`. Confirm map embed, form, and info display correctly.

**Step 3: Commit**

```bash
git add src/pages/contact.astro
git commit -m "feat: add contact page with map, hours, and email signup form"
```

---

### Task 17: Netlify Configuration and Deployment Prep

**Files:**
- Create: `netlify.toml`
- Create: `public/_redirects`
- Create: `public/robots.txt`

**Step 1: Create Netlify config**

Create `netlify.toml`:

```toml
[build]
  command = "npm run build"
  publish = "dist"

[[headers]]
  for = "/*"
  [headers.values]
    X-Frame-Options = "DENY"
    X-Content-Type-Options = "nosniff"
    Referrer-Policy = "strict-origin-when-cross-origin"
```

**Step 2: Create redirects file**

Create `public/_redirects`:

```
# Redirect www to non-www (or vice versa, owner's preference)
# https://www.moonbloomfarms.com/* https://moonbloomfarms.com/:splat 301
```

**Step 3: Create robots.txt**

Create `public/robots.txt`:

```
User-agent: *
Allow: /
Sitemap: https://moonbloomfarms.com/sitemap.xml
```

**Step 4: Final build verification**

Run: `npx astro build`
Expected: Clean build with no errors, output in `dist/`

Verify `dist/` contains:
- `index.html`
- `about/index.html`
- `what-we-grow/index.html`
- `gallery/index.html`
- `blog/index.html`
- Blog post HTML files
- `contact/index.html`

**Step 5: Commit**

```bash
git add netlify.toml public/_redirects public/robots.txt
git commit -m "feat: add Netlify config, redirects, and robots.txt"
```

---

### Task 18: Placeholder Images and Final Polish

**Files:**
- Create: placeholder SVG images in `public/images/`
- Modify: all components to reference placeholder images

**Step 1: Create placeholder images**

Generate simple SVG placeholder images for:
- `public/images/hero-bg.svg` — large hero background
- `public/images/about-photo.svg` — about section photo
- `public/images/gallery-*.svg` — 6+ gallery placeholders
- `public/images/category-*.svg` — 4 category card images
- `public/images/blog-*.svg` — 3 blog post images

Each SVG should be a simple colored rectangle with subtle text indicating what photo goes there (e.g., "Farm Photo Here") using the design palette colors.

**Step 2: Wire placeholders into components**

Update all components to reference these placeholder image paths instead of empty `src` attributes or broken links.

**Step 3: Final responsive check**

Run dev server and verify at these breakpoints:
- Desktop (1200px+)
- Tablet (768px)
- Mobile (375px)

Check: navigation, all sections, typography scaling, image sizing, form usability.

**Step 4: Commit**

```bash
git add public/images/ src/
git commit -m "feat: add placeholder images and final responsive polish"
```

---

## Summary

| Task | Description | Estimated Steps |
|------|-------------|----------------|
| 1 | Initialize Astro project | 4 |
| 2 | Global styles and design tokens | 4 |
| 3 | Base layout with Google Fonts | 4 |
| 4 | Header with sticky nav | 4 |
| 5 | Footer component | 4 |
| 6 | Home — Hero section | 4 |
| 7 | Home — About preview | 4 |
| 8 | Home — What We Grow preview | 4 |
| 9 | Home — Gallery preview & Farm Stand info | 5 |
| 10 | Home — Blog preview | 4 |
| 11 | About page | 3 |
| 12 | What We Grow page | 3 |
| 13 | Gallery page with lightbox | 4 |
| 14 | Blog — Content collection & listing | 6 |
| 15 | Blog — Post template | 3 |
| 16 | Contact page | 3 |
| 17 | Netlify config & deployment prep | 5 |
| 18 | Placeholder images & final polish | 4 |

**Total: 18 tasks, ~72 steps**

Tasks are sequential — each builds on the previous. Tasks 1-5 create the foundation, 6-10 build the home page, 11-16 create the inner pages, and 17-18 prepare for deployment.
