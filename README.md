# slidev-theme-nuwave

A Slidev theme for NuWave Energy Solutions presentations. Source Sans 3
for body text, Fira Code for code and labels. Navy-dark mode by default,
with a light variant (Stone Fog background) available via the `d` key.

---

## Installation

**From GitHub** (no npm publish required — Slidev resolves themes directly from URLs):

```yaml
---
theme: https://github.com/lukemcguire/slidev-theme-vesper
---
```

Slidev will download and cache the theme automatically on first run.

**From a local clone:**

```bash
git clone https://github.com/lukemcguire/slidev-theme-vesper
```

Then reference it by path in your front matter:

```yaml
---
theme: ./path/to/slidev-theme-vesper
---
```

---

## Front Matter

```yaml
---
theme: slidev-theme-vesper
title: 'Your Presentation Title'   # → VesperHeader deck title (left)
author: 'Your Name'                 # → VesperHeader right slot
date: 'MONTH YEAR'                  # → VesperFooter center
colorSchema: dark                   # dark (default) | light
highlighter: shiki
lineNumbers: true
---
```

Per-slide overrides:

```yaml
---
layout: default
title: SLIDE TITLE        # → VesperHeader center slot
sectionNumber: 1-1        # → VesperFooter left slot
---
```

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
| `two-column` | Equal-width columns with center rule |
| `three-column` | Three equal columns with labeled headers |
| `callout` | Content area + prominent alert box at the bottom |
| `comparison` | Two labeled panels with accent-color borders |
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
| `end` | Closing slide with optional presenter photo and contact block |

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
- `type`: `'default'` (mauve) | `'info'` (blue) | `'success'` (green) | `'warning'` (yellow) | `'danger'` (red) | `'example'` (teal)
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
- `variant`: `'default'` (muted background) | `'accent'` (mauve background)

Used via `bannerText` prop on `cover`, `end`, and `image-full` layouts.

### `CodeBlock`

Inline code panel with border, header bar, and caption — available on any layout.

```vue
<CodeBlock title="CONFIG LOADER" lang="typescript" caption="src/config.ts">

```typescript
export const config = loadConfig()
```

</CodeBlock>
```

**Props:** `title`, `lang`, `caption`

### `FigureCaption`

Standardized figure label rendered below images.

```vue
<FigureCaption number="1-1" label="SYSTEM ARCHITECTURE DIAGRAM" />
```

Used automatically by image layouts via `figNumber` and `figLabel` front matter props.

### `NuWaveHeader` / `NuWaveFooter`

Included automatically by all layouts. `NuWaveHeader` renders the NuWave
logo top-right (absolute, no vertical space consumed). `NuWaveFooter`
props:
- `sectionNumber` — footer left slot
- `date` — footer center (falls back to global `date`)

---

## Color System

All colors flow from CSS custom properties. Toggle dark/light with the
`d` key during a presentation.

### NuWave Light Mode (default)

| Semantic Token | Value | Role |
|---|---|---|
| `--color-bg` | `#ECEEF2` Stone Fog | Slide background |
| `--color-bg-alt` | `#E2E4E8` | Secondary background, code headers |
| `--color-bg-panel` | `#D4D6DA` | Panel backgrounds |
| `--color-fg` | `#1B3A6B` Deep Ocean Navy | Primary foreground |
| `--color-fg-muted` | `#4A6080` | Secondary text |
| `--color-accent` | `#1EADC4` Aqua Teal | Primary accent |
| `--color-accent-alt` | `#2B7DC8` Cornflower | Secondary accent, links |
| `--color-rule` | `#8A96A3` | Dividing rules |

### NuWave Dark Mode (navy-based)

| Semantic Token | Value | Role |
|---|---|---|
| `--color-bg` | `#0F2340` | Deep navy background |
| `--color-fg` | `#E8EDF5` | Light foreground text |
| `--color-accent` | `#1EADC4` Aqua Teal | Stays consistent |

Additional brand vars: `--nw-navy`, `--nw-cornflower`, `--nw-teal`,
`--nw-orange`, `--nw-green`, `--nw-sky`, `--nw-silver` — available in
both modes.

---

## Mermaid Configuration

Set NuWave theme variables in your global front matter for consistent
diagram rendering:

```yaml
mermaid:
  theme: base
  themeVariables:
    background: '#ECEEF2'
    primaryColor: '#D4D6DA'
    primaryTextColor: '#1B3A6B'
    primaryBorderColor: '#B4B6BA'
    lineColor: '#1EADC4'
    mainBkg: '#D4D6DA'
    nodeBorder: '#B4B6BA'
```

---

## CSS Utilities

| Class | Description |
|---|---|
| `.nw-label` | Uppercase label style, tracked wide |
| `.nw-bracketed` | Corner brackets via `::before`/`::after` |
| `.nw-bracket-bl` / `.nw-bracket-br` | Bottom corner bracket spans |
| `.nw-image-frame` | Ruled frame with corner brackets around an image |
| `.nw-section-id` | Section number label style |

---

## License

MIT
