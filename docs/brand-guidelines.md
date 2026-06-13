# Moonbloom Farm — Brand Guidelines

The brand system for the moonbloom farm website. Sourced from the approved
rebrand design (`docs/plans/2026-06-12-rebrand-design.md`). Direction:
**stamped minimal**.

> **Products:** eggs, produce, and baked goods. moonbloom farm does **not** sell
> flowers — never claim or imply flower sales anywhere (copy, alt text, meta).

---

## Concept

A minimal poster someone went at with a rubber stamp.

The base layer is huge lowercase type, two colors, and lots of air. The
playfulness comes from a small set of one-ink stamped marks — a round badge,
moon phases, an arrow, "open fri–sun" — applied the way a farmer stamps a kraft
bag: slightly rotated, never fussy. Everything is flat: no gradients, no
shadows, no grain, no blur, no photography. Illustrated stamps carry the launch;
real photos slot in later.

The moon is the ownable differentiator. Every farm brand is sun-drenched;
moonbloom owns dusk. **"Grown with love in the Valley of the Moon"** (Sonoma
Valley's real nickname) is the brand line.

---

## Color

Two inks at launch — one dark, one light — plus a highlight ground. A third
ground (lilac) is reserved for later.

| Token | Hex | Role |
| --- | --- | --- |
| `--ink` | `#14342B` | Midnight mint. Every word, line, button, and stamp. The only ink. |
| `--paper` | `#EAF2EC` | Mint cream. The default ground. |
| `--butter` | `#F4E9C8` | Highlight ground. Max **one** band per page (the visit/hours band). |
| `--lilac` | `#E6DFF0` | Reserved garnish (journal / moon moments). **Not used at launch.** |

- Everything is drawn in `--ink`. There is no second accent color — emphasis
  comes from scale, weight, and the stamped marks, not from a new hue.
- The **footer reverses**: `--ink` ground with `--paper` text.
- Contrast: ink-on-paper ≈ **12:1 (AAA)**; ink-on-butter ≈ 9:1 (AA+).
- `theme-color` (browser chrome) is mint cream `#EAF2EC`.

---

## Type

**One family: Archivo** (Google Fonts, variable: width 62–125, weight 100–900
available). Loaded once in `BaseLayout` as a single request. No serif. No
italic. No second typeface. The system uses only **two width stops — 100 (body)
and 125 (display)**; the rest of the axis exists but is off-system, so don't
reach for intermediate widths.

| Voice | Width | Weight | Casing | Use |
| --- | --- | --- | --- | --- |
| **Display** | 125 (Expanded) | 900 (Black) | lowercase | Headings, set huge |
| **Body** | 100 | 400 / 500 / 700 | normal | Everything else |

- Display is bold, wide, and lowercase, set large with tight tracking
  (`letter-spacing: -0.02em`, `line-height` near 1). Body text is normally
  capitalized.
- The convention is **display-lowercase**: source headings with true casing;
  the lowercasing is presentational (`text-transform: lowercase`).
- Bold or quiet — nothing between. No italic accent voice exists in this brand.

### Wordmark

The wordmark is "moonbloom farm" set in the display face. The **"o" in *bloom*
carries a waning-crescent cut** — the one type trick, used exactly once. The
site header renders the wordmark as display text beside the mark (not a separate
SVG file).

---

## Logo system

All logos are **one-ink** and **stamp-ready** (solid shapes that survive a
rubber stamp).

1. **Stamp badge** (the hero asset) — a circle with "moonbloom farm" curved
   along the top, "glen ellen, ca" curved along the bottom, and the
   crescent-and-bloom mark centered. Solid shapes only; must read at **1.5"**
   when stamped in rubber. File: `public/logos/moonbloom-badge.svg`
   (print master: `public/logos/moonbloom-stamp-print.png`).
2. **Mark alone** — a crescent cradling a simple five-petal bloom. Used for the
   favicon, the Instagram avatar, and tiny stamps. File:
   `public/logos/moonbloom-mark.svg`. *(An egg-variant mark was considered and
   rejected.)*
3. **Horizontal wordmark** — the site header lockup (mark + "moonbloom farm" in
   display type).

### Stamp rules

- **One color** (always `--ink`), **solid shapes only**.
- A stamp may rotate **±3°** to feel hand-applied. It must **never overlap
  text**.
- Square corners (`--border-radius: 0`). No rounded shapes outside the badge's
  circle and the bloom.

---

## Motifs & interaction

- **Moon-phase divider** — `● ◐ ○ ◑ ●`, the section separator (rendered as an
  inline SVG in `MoonDivider.astro`).
- **Hover / focus = ink/paper inversion.** A link or button flips its ground and
  text between `--ink` and `--paper`. Never introduce a third color on
  interaction.
- **Focus ring** — `2px` solid `--ink` outline, offset (with a paper-colored
  fill in the gap so the ring stays visible on ink grounds).
- **Flat always** — no gradients, shadows, grain, blur, entrance animations, or
  photography-dependent layouts. The site is near-motionless by design; any
  remaining transition respects `prefers-reduced-motion`.

---

## Voice

Keep the existing honest register — it is the brand.

- Display lines are **lowercase**; body text is **normally capitalized**.
- **Keep the honest hedges:** "8ish", "when we can", "when the girls are
  laying", "when the oven is on". They are the voice, not filler.
- **No superlatives. No "artisanal."** Describe small things plainly.
- **Browser titles are lowercase**, in the pattern
  `moonbloom farm — glen ellen, ca` (and `<page> — moonbloom farm` elsewhere).
- **Never claim flower sales** — not in copy, not in alt text, not in meta.
  Products are eggs, produce, and baked goods.

---

## Do / Do not

**Do**

- Keep everything **flat** and **two-color** (ink on paper; one butter band).
- Set display headings **huge and lowercase**.
- Apply **stamped marks rotated ±3°**, never overlapping text.
- Keep the **honest hedges** in the copy.
- Invert **ink/paper** on hover and focus.
- Use **square corners** everywhere.

**Do not**

- Add gradients, shadows, grain, blur, or entrance animations.
- Build **photography-dependent** layouts (no photos at launch).
- Introduce a **third color** (lilac is reserved, not for launch).
- Use a **serif or italic** — Archivo only, no accent voice.
- Reach for **superlatives** or "artisanal."
- **Claim or imply flower sales** anywhere.
