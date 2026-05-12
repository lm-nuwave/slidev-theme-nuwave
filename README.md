# slidev-theme-nuwave

A Slidev theme for NuWave Energy Solutions presentations. Source Sans 3
for body text, Fira Code for code and labels. Light mode by default
(white background, Deep Ocean Navy text); dark mode (deep navy) available
via the `d` key.

---

## Installation

**From GitHub** (no npm publish required — Slidev resolves themes
directly from URLs):

```yaml
---
theme: https://github.com/lm-nuwave/slidev-theme-nuwave
---
```

Slidev will download and cache the theme automatically on first run.

**From a local clone:**

```bash
git clone https://github.com/lm-nuwave/slidev-theme-nuwave
```

Then reference it by path in your front matter:

```yaml
---
theme: ./path/to/slidev-theme-nuwave
---
```

---

## Front Matter

Global (deck-level) options — set once in the first slide's front matter:

```yaml
---
theme: ./
title: 'Your Deck Title'     # → NuWaveHeader left; browser tab title
author: 'Your Name'
date: 'MONTH YEAR'           # → NuWaveFooter left
layout: cover
---
```

`canvasWidth`, `lineNumbers`, `katex`, and `mermaid` defaults are set
in `package.json` and apply automatically to all decks using this theme.

Per-slide overrides:

```yaml
---
layout: default
title: 1-1. SLIDE TITLE      # → NuWaveHeader left, accent underline
---
```

Slides without a `title` prop show only the logo (top-right). Slides
with `title` show the title left-aligned + logo right in the 52px
header band with an Aqua Teal accent border below.

---

## Layouts

| Layout | Description |
|---|---|
| `cover` | Title slide with corner brackets and optional Banner labels |
| `table-of-contents` | Dot-leader ToC with chapter and section entries |
| `section` | Chapter/section divider — large display title + descriptor |
| `default` | Primary content layout: prose, lists, tables |
| `statement` | Single centered text, no chrome |
| `quote` | Attributed quotation with name/title/affiliation |
| `two-column` | Equal-width columns with center diamond rule |
| `three-column` | Three equal columns with labeled section headers |
| `callout` | Content area + prominent alert box at the bottom |
| `comparison` | Two labeled panels with accent-color borders and VS divider |
| `image-right` | Text left, image panel right (with figure caption) |
| `image-left` | Image panel left, text right (with figure caption) |
| `image-full` | Full-bleed background image, gradient overlay, title bottom-left |
| `image-top` | Horizontal image band top, content area below |
| `image-bottom` | Content area top, horizontal image band bottom |
| `two-images` | Two side-by-side image panels with independent captions |
| `code-right` | Prose left, styled code panel right |
| `code-full` | Full-area code panel with prominent title bar |
| `chart-right` | Prose left, Mermaid diagram right |
| `chart-left` | Mermaid diagram left, prose right |
| `chart-full` | Full-area Mermaid diagram with title bar |
| `dashboard` | Six-panel grid (3×2) for status overviews and KPIs |
| `timeline` | Vertical chronological sequence |
| `stat-sidebar` | Dark navy sidebar (260px) for MetricStat blocks + content panel |
| `process-steps` | 4-column horizontal process flow with StepCircle numbers |
| `end` | Closing slide with optional presenter photo and contact block |

### Image layout shorthand

`image-right` and `image-left` accept an `image` prop as a shorthand
for a plain `<img>` — avoids needing a named slot for simple cases:

```yaml
---
layout: image-right
image: ./assets/photo.jpg
imageClass: object-cover
---
```

---

## Components

### `Block`

Titled content panel with solid accent header bar and corner brackets.

```vue
<Block type="info" title="API AUTHENTICATION">

All requests require a bearer token. Tokens expire after 24 hours.

</Block>
```

**Props:**
- `type`: `'default'` (cornflower) | `'info'` (teal) | `'success'`
  (green) | `'warning'` (orange) | `'danger'` (red) | `'example'` (sky)
- `title`: string (optional — omit for left-border-only titleless variant)
- `compact`: boolean (reduces body padding)

### `Callout`

Inline advisory notice with left-border accent and tinted background.

```vue
<Callout type="warning">**WARNING.** This action cannot be undone.</Callout>
```

**Props:**
- `type`: `'warning'` | `'caution'` | `'note'` | `'important'`

### `Banner`

Full-width label strip for persistent deck identity.

```vue
<Banner text="INTERNAL — NOT FOR DISTRIBUTION" variant="accent" />
```

**Props:**
- `text`: string (renders nothing if absent)
- `variant`: `'default'` (muted background) | `'accent'` (Aqua Teal)

Used via `bannerText` prop on `cover`, `end`, and `image-full` layouts.

### `CodeBlock`

Inline code panel with border, header bar, and caption — available on
any layout.

```vue
<CodeBlock title="CONFIG LOADER" lang="typescript" caption="src/config.ts">

```typescript
export const config = loadConfig()
```

</CodeBlock>
```

**Props:** `title`, `lang`, `caption`

### `SvgDiagram`

Inlines an external SVG file so CSS custom properties (`--nw-*`,
`--color-*`) resolve inside it — enabling dark/light mode on diagrams.
Plain `<img>` tags cannot inherit CSS variables.

```vue
<SvgDiagram src="./assets/fig_1-1.svg" />
```

### `MetricStat`

Large bold metric value with label, designed for use inside the
`stat-sidebar` left column.

```vue
<MetricStat value="40+" label="Projects Completed" :light="true" />
```

**Props:**
- `value`: string — the headline number/figure
- `label`: string — descriptive label below the value
- `light`: boolean (default `false`) — white/sky text for dark backgrounds

### `StepCircle`

Colored numbered circle for process step diagrams.

```vue
<StepCircle :number="1" variant="teal" />
```

**Props:**
- `number`: required — step number (1–4 auto-assigns color)
- `variant`: optional override — `'teal'` | `'navy'` | `'orange'`
  | `'silver'`

Auto-color by number: 1 → teal, 2 → navy, 3 → orange, 4 → silver.

### `FigureCaption`

Standardized figure label rendered below images.

```vue
<FigureCaption number="1-1" label="SYSTEM ARCHITECTURE DIAGRAM" />
```

Used automatically by image layouts via `figNumber` and `figLabel`
front matter props.

### `NuWaveHeader` / `NuWaveFooter`

Included automatically by all layouts.

**NuWaveHeader** — 52px fixed-height flex band. Reads `$frontmatter.title`
directly: if set, renders title left-aligned + logo right with an Aqua
Teal accent border below. If no title, logo only at upper-right.

**NuWaveFooter** — shows `date` left and `page / total` right.

---

## Color System

All colors flow from CSS custom properties. Toggle dark/light with the
`d` key during a presentation.

### Light Mode (default)

| Semantic Token | Value | Role |
|---|---|---|
| `--color-bg` | `#FFFFFF` White | Slide background |
| `--color-bg-alt` | `#E2E4E8` | Secondary background |
| `--color-bg-panel` | `#D4D6DA` | Panel backgrounds |
| `--color-fg` | `#1B3A6B` Deep Ocean Navy | Primary foreground |
| `--color-fg-muted` | `#4A6080` | Secondary text |
| `--color-accent` | `#1EADC4` Aqua Teal | Primary accent |
| `--color-accent-alt` | `#2B7DC8` Cornflower | Secondary accent |
| `--color-rule` | `#8A96A3` | Dividing rules |

### Dark Mode (navy-based)

| Semantic Token | Value | Role |
|---|---|---|
| `--color-bg` | `#0F2340` | Deep navy background |
| `--color-fg` | `#E8EDF5` | Light foreground text |
| `--color-accent` | `#1EADC4` Aqua Teal | Unchanged in dark mode |
| `--color-accent-alt` | `#5BB8E8` Sky | Lightened for dark bg |

Additional brand vars available in both modes: `--nw-navy`,
`--nw-cornflower`, `--nw-teal`, `--nw-orange`, `--nw-orange-rust`,
`--nw-green`, `--nw-sky`, `--nw-silver`, `--nw-red`.

---

## CSS Utilities

| Class | Description |
|---|---|
| `.nw-label` | Uppercase monospaced label, tracked wide |
| `.nw-bracketed` | Corner brackets via `::before`/`::after` (top pair) |
| `.nw-bracket-bl` / `.nw-bracket-br` | Bottom corner bracket spans |

---

## License

MIT
