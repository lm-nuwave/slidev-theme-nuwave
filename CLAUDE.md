# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working
with code in this repository.

## Running the theme

There are no local `node_modules` — the theme is loaded directly by a
globally installed Slidev CLI:

```bash
npx slidev example.md          # dev server with hot reload
npx slidev build example.md    # static build
npx slidev export example.md   # export to PDF/PNG
```

## Architecture

This is a **Slidev theme package** for NuWave Energy Solutions with no
build step of its own. Slidev loads files directly from the directory at
runtime via Vite.

### How Slidev resolves theme files

- `styles/index.css` — auto-loaded globally; defines all CSS custom
  properties and base styles
- `styles/code.css` — auto-loaded globally; styles the `.nw-code-container`
  system used by `CodeBlock.vue` and the `code-right`/`code-full` layouts
- `layouts/*.vue` — resolved by name when a slide front matter specifies
  `layout: <name>`
- `components/*.vue` — auto-imported globally into all layouts and slides
  by name
- `setup/shiki.ts` — must export a **plain default function** (no imports
  from `@slidev/types`; the package is not installed locally). Slidev
  calls `mod.default()` to get the Shiki theme config.

### Design token system

All visual values flow from CSS custom properties declared on `:root` in
`styles/index.css`. Dark mode is handled by redefining the same
properties under `.dark`. Nothing is hardcoded in components — always
use the `--color-*`, `--nw-*`, `--space-*`, `--text-*`, and `--rule-*`
variables.

**Palette structure:**
- `:root` — NuWave light mode (Stone Fog background, Deep Ocean Navy text)
- `.dark` — NuWave dark mode (deep navy background, light text)
- Raw palette vars: `--nw-navy`, `--nw-cornflower`, `--nw-teal`,
  `--nw-orange`, `--nw-green`, `--nw-sky`, `--nw-silver`, `--nw-base`,
  `--nw-surface0/1/2`, `--nw-overlay1`, etc.
- Semantic aliases: `--color-bg`, `--color-fg`, `--color-accent`,
  `--color-accent-alt`, `--color-rule`, `--color-rule-light`,
  `--color-fg-muted`, `--color-fg-subtle`, `--color-bg-alt`,
  `--color-bg-panel`

Component CSS must use semantic `--color-*` vars, not raw `--nw-*`
palette vars, so both themes auto-update. Exception: `Block.vue` uses
`--nw-*` vars directly for per-type accent colors.

### Layout anatomy

Every layout follows this structure:

```text
<NuWaveHeader>  ← position: absolute top-right; NuWave logo image only
<main content>  ← flex: 1, overflow: hidden
<NuWaveFooter>  ← flex-shrink: 0; section number · date · page/total
```

The `.slidev-layout` root element is always `display: flex;
flex-direction: column` at 960×540px (16:9; renders at 1920×1080 at
2×). Layouts must not exceed this height.

**NuWaveHeader** is absolutely positioned (height: 0, overflow: visible)
so it does not consume vertical space — the logo floats over slide
content.

**Footer uses `$nav?.currentPage` (Vue template global)** — not
`useNav()` from `@slidev/client`, which requires the package to be
installed locally.

### CodeBlock / code panel system

`styles/code.css` defines `.nw-code-container` and its child classes
(`.nw-code-header`, `.nw-code-body`, `.nw-code-content`, `.nw-code-footer`,
corner bracket spans). This system is shared between:
- `components/CodeBlock.vue` — standalone component for use inline on
  any slide; has scoped CSS so it renders correctly in all layout contexts
- `layouts/code-right.vue` — duplicates the header/badge/body/caption
  structure directly using scoped `cdr-*` classes (does not use
  `CodeBlock.vue`)
- `layouts/code-full.vue` — same, using `cdf-*` classes

### Block component

`components/Block.vue` is a titled content panel with a solid accent
header bar. Props:
- `type`: `'default' | 'info' | 'success' | 'warning' | 'danger' |
  'example'` (default: `'default'`)
- `title`: optional string; if omitted, no header bar — left accent
  border only
- `compact`: boolean (default: `false`) — reduces body padding

Type-to-color mapping via `--block-accent` CSS custom property:
- `default` → `--nw-cornflower`; `info` → `--nw-teal`;
  `success` → `--nw-green`
- `warning` → `--nw-orange`; `danger` → `--nw-red`;
  `example` → `--nw-sky`

Corner brackets on Block use `--bracket-color: var(--block-accent)`
override so they match the block's accent, not the global bracket color.

### CSS corner brackets

Implemented as sibling `<span>` elements (`.nw-bracket-bl`,
`.nw-bracket-br`) inside the bracketed container plus `::before`/`::after`
pseudo-elements for the top pair. The `nw-bracketed` utility class in
`index.css` handles the top corners; bottom corners require explicit
`<span class="nw-bracket-bl"></span><span class="nw-bracket-br"></span>`
in the template.

### Banner component

`components/Banner.vue` is a full-width label strip. Props:
- `text`: optional string (renders nothing if absent)
- `variant`: `'default' | 'accent'` — default uses `--color-bg-alt`
  background; accent uses `--color-accent`

No default text — the banner is always opt-in via `bannerText` prop on
layouts that support it (`cover`, `end`, `image-full`).

### StepCircle component

`components/StepCircle.vue` renders a colored numbered circle for
process step diagrams. Props:
- `number`: required — the step number (1–4 auto-assigns color)
- `variant`: optional override — `'teal' | 'navy' | 'orange' | 'silver'`

Auto-color: 1 → teal, 2 → navy, 3 → orange, 4 → silver.

### MetricStat component

`components/MetricStat.vue` renders a large bold metric value with a
label below it. Props:
- `value`: string (e.g. `"40+"`, `"$50M"`)
- `label`: string (e.g. `"Projects Completed"`)
- `light`: boolean (default: `false`) — use white/sky text for dark
  backgrounds (e.g. inside `stat-sidebar`)

### stat-sidebar layout

`layouts/stat-sidebar.vue` — two-column layout:
- Left: 260px dark navy column (use `::sidebar` slot with `MetricStat`
  components)
- Right: standard content area with optional `title` prop

### process-steps layout

`layouts/process-steps.vue` — 4-column horizontal process flow:
- Slots: `#step1`, `#step2`, `#step3`, `#step4`
- Props: `durations` (string[4]), `decisions` ((string|null)[4]),
  `title`, `sectionNumber`
- Each step auto-renders a `StepCircle`; duration badges and decision
  point labels are driven by front matter props

### CSS class prefix

All utility classes and component classes use the `nw-` prefix.
Layout-specific scoped CSS uses short two-letter prefixes (e.g. `.cdr-`
for code-right, `.cdf-` for code-full) to avoid collisions.

## Key constraints

- `setup/shiki.ts` must export a **bare function**, not an object, and
  must have **no imports**
- Component CSS must use semantic `--color-*` vars (never raw hex or
  `--nw-*` raw palette vars), except inside `Block.vue` where
  `--block-accent` and raw `--nw-*` vars set per-type colors
- Layout scoped styles use short two-letter prefixes to avoid collisions
  across layouts
- The `colorSchema: dark` in `package.json` sets dark mode as default;
  toggle with `d` key during presentation. Dark mode uses deep navy
  background (not Catppuccin Mocha)
- Logo image at `public/nuwave-logo.png` — referenced as `/nuwave-logo.png`
  in `NuWaveHeader.vue`
