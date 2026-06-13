# Moonbloom Farm — Site Copy

Every user-visible word on the site, in the order you'd encounter it. Edit this
file directly and we'll apply the changes back to the site afterward.

A few formatting conventions:

- **Big display headings render lowercase on the site** (the brand's display
  voice — Archivo Black, Expanded, lowercase). They're written here with normal
  sentence casing for readability, but on the page they appear all-lowercase.
  The body text is normally capitalized, exactly as written.
- "(button)", "(link)", or "(stamp)" notes the element type so you know whether
  something is a click target. A "(stamp)" is a bordered, slightly rotated
  stamped mark — not a link.
- Notes under "Things to weigh in on" at the bottom flag lines that may benefit
  from a second pass.

---

## Site-wide

### Navigation menu (top of every page)

The wordmark sits at left and links home:

- moonbloom farm *(wordmark, links to `/`)*

Then the links and the button:

- about
- journal *(links to `/blog`)*
- (button) visit the stand → *(links to `/visit`)*

On mobile, the full-screen overlay adds a **home** link above the others.

### Browser tab titles (lowercase)

- Home — `moonbloom farm — glen ellen, ca`
- Visit — `visit the stand — moonbloom farm`
- About — `about — moonbloom farm`
- Journal — `journal — moonbloom farm`
- Blog post — `<post title, lowercased> — moonbloom farm`

### SEO meta descriptions (the snippet that shows in Google search)

- **Home:** Moonbloom Farm — a small family farm and roadside stand in Glen Ellen, California. Eggs from our flock, produce from the garden, and baked goods from the kitchen, Friday through Sunday.
- **Visit:** Visit the Moonbloom Farm stand in Glen Ellen, CA. Find seasonal hours, directions, and sign up for updates.
- **About:** Meet Brittney Harvey and John Singleton, the family behind Moonbloom Farm — a small farm and roadside stand in Glen Ellen, growing eggs and produce in the Sonoma Valley since 2023.
- **Journal:** Stories from the field — seasonal stories and growing updates from Moonbloom Farm in the Sonoma Valley.

---

## Home `/`

### Hero

- **Heading (h1):** fresh eggs & garden produce.
- **Sub:** A small farm stand on Arnold Drive in Glen Ellen. Grown with love in the Valley of the Moon.
- (button) plan your visit → *(links to `/visit`)*
- (stamp) open fri–sun · 8ish–noon

### Moon-phase divider

A decorative `● ◐ ○ ◑ ●` separator. No text.

### At the stand

- **Heading (h2):** at the stand
- **Sub:** Three things, made small, sold honestly.

- **Card 1**
  - Name: eggs
  - Description: Pasture-raised, when the girls are laying.
- **Card 2**
  - Name: produce
  - Description: Whatever the garden is offering this week.
- **Card 3**
  - Name: baked goods
  - Description: From the farmhouse kitchen, when the oven is on.

### Find the stand (butter band)

- **Heading (h2):** find the stand
- **Address:**
  - 13700 Arnold Drive
  - Glen Ellen, CA 95442
- **Hours row:** **friday – sunday** ~8am – noon
- **Note:** When we can. The stand knows no schedule but the season's.
- (button) get directions → *(opens Google Maps)*

### Signup

- **Heading (h2):** field notes, occasionally.
- **Sub:** Farm stand updates when there is something to share.
- **Form placeholders:**
  - First name
  - Email address
- (button) sign up

---

## Visit `/visit`

### Hero

- **Heading (h1):** come say hi.
- **Sub:** The stand sits at the edge of our driveway. Stop by, see what's out, say hello to the chickens.

### Details (butter band)

- (stamp) open fri–sun · 8ish–noon
- **Address:**
  - 13700 Arnold Drive
  - Glen Ellen, CA 95442
- **Note:** Hours are honest, not precise — when we can, while it lasts.
- (button) get directions → *(opens Google Maps)*
- (link) hello@moonbloom.farm *(email)*
- (link) @moonbloomfarm *(Instagram)*
- **Map:** an embedded Google Map of the Glen Ellen location (no caption text).

### Signup

- **Heading (h2):** field notes, occasionally.
- **Sub:** Farm stand updates when there is something to share.
- **Form placeholders:**
  - First name
  - Email address
- (button) sign up

---

## About `/about`

### Hero

- **Heading (h1):** two people, a flock, a garden.
- **Sub:** A small Sonoma Valley farm and roadside stand, run by two people in their first chapter of doing this.

### Moon-phase divider (decorative)

### How it all began

- **Heading (h2):** how it all began
- **Paragraph 1:** Moonbloom started in 2023, when we set down roots on a stretch of Sonoma Valley land and got to work. What began as a backyard project — a few rows of vegetables, a small flock of chickens — has slowly grown into the roadside stand you'll find on Arnold Drive today.
- **Paragraph 2:** We're still figuring it out, season by season. Some weeks we have more eggs than we know what to do with; some weeks the garden runs wild. We bring what we have to the stand and try to leave it a little better than we found it.

### Pullquote (oversized display line, slightly rotated)

- the land teaches us.

### Our growing philosophy

- **Heading (h2):** our growing philosophy
- **Paragraph 1:** We grow without synthetic pesticides or herbicides — just compost, cover crops, and a willingness to let the seasons set the pace. The chickens get the run of the place. The garden gets time.
- **Paragraph 2:** What ends up at the stand is whatever the land decided to give us that week. We think it tastes better that way.

### A few things we believe (butter band)

- **Heading (h2):** a few things we believe

- **01 — sustainably grown**
  - No synthetic chemicals, no shortcuts. We feed the soil with compost and cover crops and let it do its work, season by season.
- **02 — locally rooted**
  - Everything we grow stays in the valley. The stand sits at the edge of our driveway in Glen Ellen — close enough that the eggs are usually still warm.
- **03 — seasonally inspired**
  - We follow the calendar that nature writes. Spring greens, summer tomatoes, fall squash — what is at the stand is whatever the season is offering, and we wouldn't have it any other way.

### Meet the farmers

- **Heading (h2):** meet the farmers
- **Names:** Brittney Harvey & John Singleton
- **Paragraph 1:** Brittney and John traded a busier life for a quieter one in 2023, swapping the city for a few acres in Glen Ellen and a steady rotation of small projects with feathers, leaves, and dirt.
- **Paragraph 2:** Moonbloom is a side-of-the-road, side-of-life kind of farm — not their day job, but where real care goes. Stop by the stand on a Friday morning and one of them will probably be there to say hello.
- (button) visit the stand → *(links to `/visit`)*

---

## Journal `/blog`

### Hero

- **Heading (h1):** from the field
- **Sub:** Seasonal stories, growing updates, and dispatches from life on the farm.

### Empty state (currently shown — no posts yet)

- **Message:** Stories will arrive when the season picks up.
- **Followup:** Until then, come find us at the stand on Arnold Drive — Friday through Sunday, when we can.
- (link) plan your visit → *(links to `/visit`)*

### Post card (shown per post once posts exist)

- **Date** (e.g. June 13, 2026)
- **Title** *(the post's frontmatter title)*
- **Excerpt** *(the post's frontmatter description, clamped to two lines)*
- (link) read more →

### Post template (`/blog/<slug>`)

The per-post page renders, in order:

- **Date** (e.g. June 13, 2026)
- **Title** *(post frontmatter title; lowercased in the browser tab as
  `<title> — moonbloom farm`)*
- **Prose** *(the post's Markdown body)*
- (link) ← back to the journal
- Previous/next navigation (shown only when a neighboring post exists):
  - **Previous** label, then `← <previous post title>` (link)
  - **Next** label, then `<next post title> →` (link)

---

## Footer (every page)

The footer reverses the palette (ink ground, paper text), centered:

- *(moonbloom mark — small custom mark, no text)*
- **Wordmark:** moonbloom farm
- **Tagline:** grown with love in the valley of the moon.
- (link) instagram *(links to instagram.com/moonbloomfarm)*
- (link) hello@moonbloom.farm *(email)*
- (link) visit the stand *(links to `/visit`)*
- **Copyright:** © 2026 moonbloom farm · glen ellen, california *(year auto-updates)*

---

## Things to weigh in on

A few lines that may benefit from a second pass — feel free to edit, replace, or
keep as-is:

1. **Home hero sub** — "Grown with love in the Valley of the Moon." is the soft,
   poetic brand line; the rest of the hero is direct. Keep it for the moon
   reference (it matches the name), or tighten.

2. **Home "find the stand" note** — "The stand knows no schedule but the
   season's." is a touch lyrical next to the plainer "When we can." Keep for
   voice or trim.

3. **About pullquote** — "the land teaches us." is pulled from body copy and
   elevated as a display moment between the two story blocks. Easy to swap for a
   different line.

4. **About — Brittney & John bio** — Honest but generic, written without
   specific details. You'll likely want to replace it with something specific to
   who you are and why you're doing this.

5. **About — three values** — "sustainably grown / locally rooted / seasonally
   inspired" is fine but inherited framing. If there's something more honest to
   say, or if values feel like overreach for a small side-of-life farm, easy to
   cut or rewrite.

6. **Baked goods one-liner** — "From the farmhouse kitchen, when the oven is on."
   keeps the hedge; confirm baked goods are always on offer or note the
   when-the-oven-is-on caveat is enough.

7. **Hours wording** — Three honest hedges describe hours ("8ish–noon", "when we
   can, while it lasts", "~8am – noon"). Confirm the real schedule so the hedges
   stay charming and not confusing.
