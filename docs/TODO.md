# Moonbloom Farms — Outstanding Design Work

## Real photography (in progress)

The site currently runs on placeholder SVGs. Every location below needs a real
photograph before the design can land. Until images are in hand, the layout
work that depends on them (homepage rhythm, gallery refinement) should not be
touched.

### Replacement targets

| Location | File | Current placeholder | Notes |
| --- | --- | --- | --- |
| Hero background | `public/images/hero-bg.svg` | gradient SVG | Want a moody, low-light shot — eggs in a nest, hands holding produce, a corner of the stand at dawn |
| About — farm | `public/images/about-farm.svg` | line drawing | Wide farm landscape |
| About — farmers | `public/images/about-farmer.svg` | line drawing | Portrait of Brittney & John |
| About story block 2 | `public/images/placeholder-flowers.svg` | flat color | Garden / hands-in-soil / chickens / workbench shot — needs a non-flower replacement |
| What We Sell — eggs | `public/images/placeholder-eggs.svg` | flat color | Eggs in basket, eggs in hand, the hens themselves |
| What We Sell — produce | `public/images/placeholder-produce.svg` | flat color | Garden harvest, vegetables on the bench |
| What We Sell — baked goods | `public/images/placeholder-baked-goods.svg` | flat color | Sourdough loaf, scones cooling on the counter, a slice of pie |
| Gallery preview (homepage) | inline placeholders in `GalleryPreview.astro` | colored rectangles | 6 photos: 1 landscape hero, 1 tall portrait, 4 squares, 1 wide |
| Gallery page | inline placeholders in `gallery.astro` | colored rectangles, 16 items | Categorized as `flowers` / `farm` / `products` — the `flowers` filter should probably go away |
| Blog cards | inline SVG in `BlogPreview.astro` and `blog/index.astro` | leaf icon | 16:9 hero per post |
| Blog post hero | inline SVG in `blog/[...slug].astro` | leaf icon | Optional per-post via frontmatter `image` |

### Unused placeholders

`public/images/placeholder-gifts.svg` is no longer referenced anywhere — safe to delete.

`public/images/placeholder-flowers.svg` is still used in About story block 2 ("Our Growing Philosophy"). When real photos arrive, swap it for a non-flower image (chickens, garden, hands-in-soil) and delete the file.

### When photos arrive

1. Drop files into `public/images/` (keep original aspect ratios where possible).
2. Replace `<img src="...svg">` references with real paths and update `alt` text.
3. Remove the `placeholder-icon` SVG fallbacks from gallery/blog placeholders.
4. Once gallery has real photos, revisit the masonry layout, drop the `flowers` filter category.

## Blog content

All three placeholder posts have been deleted. The `src/content/blog/` directory is empty (kept around with a `.gitkeep`) and:

- `BlogPreview` on the homepage hides itself entirely when there are no posts
- The `/blog` page shows a friendly italic empty-state message with a link to Visit
- Astro emits a "collection does not exist or is empty" log line during build — that's informational, not an error, and it'll go away as soon as you add a real `.md` file

Drop a markdown file into `src/content/blog/` (frontmatter: `title`, `description`, `date`, optional `image` and `tags`) when you're ready to publish your first post. The existing template fields are defined in `src/content.config.ts`.

## Gallery page also has flower references

`src/pages/gallery.astro` includes captions like "Spring Dahlias", "Ranunculus Harvest", "Sweet Pea Trellis", "Dahlia Field", "Wildflower Meadow", "Zinnia Close-Up". These will need replacement when real photo captions come in.

## Design work pending real photos

- Homepage rhythm rework (full-bleed photo moments, asymmetric two-column with offset photos)
- Gallery layout refinement / drop the flowers filter
- About — story block 2 still references `/images/placeholder-flowers.svg`; needs reassignment to a non-flower image when real photos arrive

## Design work that can proceed without photos

- ✅ Typography swap to Fraunces + DM Sans
- ✅ Color token cleanup (drop duplicate aliases, distinguish ink from moss)
- ✅ Reconcile address / hours / season / founders / email
- ✅ What We Sell page: Eggs + Produce + Baked Goods, image-led, no sub-grids, no dividers (page renamed from `/what-we-grow`)
- ✅ Homepage GrowPreview reduced to 3 cards (Eggs, Produce, Baked Goods)
- ✅ Three placeholder blog posts deleted; empty-state added to /blog and BlogPreview hidden when empty
- ✅ Custom MoonbloomMark (crescent + sprig) replaces the leaf icon as the brand ornament
- ✅ Leaf icons stripped from gallery and blog placeholders (quieter)
- ✅ Footer simplified — solid dark moss bg, MoonbloomMark + brand line at top, 2-col Visit/Newsletter, Instagram + email pushed to small bottom strip
- ✅ Unified `PageHero` component — light editorial treatment (paper bg, big Fraunces title, italic subtitle, MoonbloomMark) replaces 5 inline dark gradients across about, what-we-sell, gallery, contact, blog/index
- ✅ All 6 botanical dividers removed (AboutPreview, About x3, Contact x2)
- ✅ Hamburger script bug fix (was wrapped in `astro:page-load` listener that never fires without ViewTransitions)
