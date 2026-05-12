# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working
with code in this repository.

## Running the theme

Dependencies are installed locally via pnpm:

```bash
pnpm slidev example.md          # dev server with hot reload (port 3030)
pnpm slidev build example.md    # static build
pnpm slidev export example.md   # export to PDF/PNG
```

Or use the package scripts: `pnpm dev`, `pnpm build`, `pnpm export`.

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
- `vite.config.ts` — ESM shim for lz-string; no other customizations

### Design token system

All visual values flow from CSS custom properties declared on `:root` in
`styles/index.css`. Dark mode is handled by redefining the same
properties under `.dark`. Nothing is hardcoded in components — always
use the `--color-*`, `--nw-*`, `--space-*`, `--text-*`, and `--rule-*`
variables.

**Palette structure:**
- `:root` — NuWave light mode (white background, Deep Ocean Navy text)
- `.dark` — NuWave dark mode (deep navy background, light text)
- Raw palette vars: `--nw-navy`, `--nw-cornflower`, `--nw-teal`,
  `--nw-orange`, `--nw-orange-rust`, `--nw-green`, `--nw-sky`,
  `--nw-silver`, `--nw-red`, `--nw-base`, `--nw-surface0/1/2`,
  `--nw-overlay0/1`, etc.
- Semantic aliases: `--color-bg`, `--color-fg`, `--color-accent`,
  `--color-accent-alt`, `--color-rule`, `--color-rule-light`,
  `--color-fg-muted`, `--color-fg-subtle`, `--color-bg-alt`,
  `--color-bg-panel`

Component CSS must use semantic `--color-*` vars, not raw `--nw-*`
palette vars, so both themes auto-update. Exception: `Block.vue` uses
`--nw-*` vars directly for per-type accent colors. SVG assets also use
`--nw-*` and `--color-*` vars directly in `fill`/`stroke` attributes.

### Layout anatomy

Every layout follows this structure:

```text
<NuWaveHeader>  ← 52px flex band; title left + logo right (or logo only)
<main content>  ← flex: 1, overflow: hidden
<NuWaveFooter>  ← flex-shrink: 0; date left · page/total right
```

The `.slidev-layout` root element is always `display: flex;
flex-direction: column` at 960×540px (16:9; renders at 1920×1080 at
2×). Layouts must not exceed this height.

**NuWaveHeader** is a real 52px flow element (not absolutely positioned).
It reads `$frontmatter.title` directly via the Slidev template global:
- With title: title left-aligned (`flex: 1`), logo right, Aqua Teal
  `box-shadow: inset` accent at bottom (inset shadow used instead of
  border-bottom to avoid layout shift between titled/untitled slides)
- Without title: `margin-left: auto` on logo keeps it upper-right

**NuWaveFooter** uses `$nav?.currentPage` (Vue template global) — not
`useNav()` from `@slidev/client`, which requires the package locally.

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

### SvgDiagram component

`components/SvgDiagram.vue` fetches and inlines an external SVG file at
runtime so that CSS custom properties (`--nw-*`, `--color-*`) in
`fill`/`stroke` attributes resolve correctly and respond to dark/light
mode toggling. Plain `<img>` tags cannot inherit CSS variables.

All SVG assets in `assets/` must use `var(--nw-*)` or `var(--color-*)`
vars — never hardcoded hex values — and `Source Sans 3` as the font.

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
- Right: standard content area (default slot)

### process-steps layout

`layouts/process-steps.vue` — 4-column horizontal process flow:
- Slots: `#step1`, `#step2`, `#step3`, `#step4`
- Props: `durations` (string[4]), `decisions` ((string|null)[4]),
  `title`, `sectionNumber`
- Each step auto-renders a `StepCircle`; duration badges and decision
  point labels are driven by front matter props

### image-left / image-right layouts

Both accept an `image` prop (string URL/path) and optional `imageClass`
as shorthand for a plain `<img>` without needing a named slot:

```yaml
image: ./assets/photo.jpg
imageClass: object-cover
```

If `image` is absent, falls back to `<slot name="image">`.

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
- No `colorSchema` is set in `package.json` — dark/light toggles freely
  with the `d` key. Dark mode is handled entirely by the `.dark` CSS
  selector in `styles/index.css`
- `canvasWidth`, `lineNumbers`, `katex`, and `mermaid` defaults live in
  `package.json` under `slidev.defaults` — do not duplicate in
  `example.md` headmatter
- Logo image at `public/nuwave-logo.png` — referenced as `/nuwave-logo.png`
  in `NuWaveHeader.vue`
- Git remote `origin` uses the `github-nuwave` SSH host alias:
  `git@github-nuwave:lm-nuwave/slidev-theme-nuwave.git`
- Git remote `upstream` points to the Vesper fork at
  `https://github.com/lukemcguire/slidev-theme-vesper.git`
