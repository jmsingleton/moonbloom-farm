# moonbloom farm — future work

The site launched on the "stamped minimal" flat identity (see
[`brand-guidelines.md`](brand-guidelines.md)). The following are **deliberately
deferred** — the launch does not need them, and they slot in later without
reworking the current design.

## Real photography

The launch uses flat graphic/stamp art and needs no photos. When real
photography is available:

- Drop files into `public/images/` (it currently holds only a `.gitkeep`).
- Introduce photos where they earn their place — likely the home hero, the
  "at the stand" cards, and the about page. Keep the flat, two-color, no-shadow
  aesthetic; photos should feel stamped-in, not glossy.
- All imagery must stay on-brand: warm, natural-light, honest. Never imply
  flower sales (the farm sells eggs, produce, and baked goods).

## Gallery page

The old gallery was placeholder-only and was removed (`/gallery` now 301s to
`/`). Bring it back as a real page only once there is genuine photography to
fill it.

## Blog content

`src/content/blog/` is empty (kept with a `.gitkeep`), so `/blog` renders its
empty state and Astro logs an informational "collection is empty" line during
build. Add a Markdown file (frontmatter schema in `src/content.config.ts`:
`title`, `description`, `date`, optional `image`/`tags`) to publish the first
post — the listing and post template are already built and styled.

## Lilac garnish

`--lilac` (`#E6DFF0`) is defined but reserved — not used at launch. It is held
for occasional journal / "moon moment" accents once there is content to warrant
it.

## Out of scope (unchanged)

- E-commerce of any kind — there are no prices, carts, or payments.
