<script setup lang="ts">
defineProps<{
  type?: 'default' | 'info' | 'success' | 'warning' | 'danger' | 'example'
  title?: string
  compact?: boolean
}>()
</script>

<template>
  <div
    :class="[
      'nw-block',
      `nw-block--${type ?? 'default'}`,
      { 'nw-block--compact': compact, 'nw-block--titled': !!title }
    ]"
  >
    <!-- Bottom corner brackets (top pair via ::before/::after) -->
    <span class="nw-block-bl"></span>
    <span class="nw-block-br"></span>

    <!-- Header bar (only when title is provided) -->
    <div v-if="title" class="nw-block__header">
      <span class="nw-block__title">{{ title }}</span>
      <span class="nw-block__badge">[ {{ (type ?? 'default').toUpperCase() }} ]</span>
    </div>

    <!-- Content -->
    <div class="nw-block__body">
      <slot />
    </div>
  </div>
</template>

<style scoped>
/* ── Block type accent colors ─────────────────────────────────────────────── */
.nw-block--default  { --block-accent: var(--nw-cornflower); }
.nw-block--info     { --block-accent: var(--nw-teal); }
.nw-block--success  { --block-accent: var(--nw-green); }
.nw-block--warning  { --block-accent: var(--nw-orange); }
.nw-block--danger   { --block-accent: var(--nw-red); }
.nw-block--example  { --block-accent: var(--nw-sky); }

/* ── Container ────────────────────────────────────────────────────────────── */
.nw-block {
  position: relative;
  border: 1px solid var(--block-accent);
  background: var(--color-bg-panel);
  display: flex;
  flex-direction: column;
  margin-bottom: var(--space-2);
  /* Corner brackets reuse the nw-bracketed system via --bracket-color */
  --bracket-color: var(--block-accent);
  --bracket-size: 12px;
  --bracket-weight: 2px;
}

.nw-block:last-child {
  margin-bottom: 0;
}

/* Top corner brackets via pseudo-elements */
.nw-block::before,
.nw-block::after {
  content: '';
  position: absolute;
  width: var(--bracket-size);
  height: var(--bracket-size);
  pointer-events: none;
  z-index: 10;
}

.nw-block::before {
  top: -1px;
  left: -1px;
  border-top: var(--bracket-weight) solid var(--bracket-color);
  border-left: var(--bracket-weight) solid var(--bracket-color);
}

.nw-block::after {
  top: -1px;
  right: -1px;
  border-top: var(--bracket-weight) solid var(--bracket-color);
  border-right: var(--bracket-weight) solid var(--bracket-color);
}

/* Bottom corner brackets */
.nw-block-bl,
.nw-block-br {
  position: absolute;
  width: var(--bracket-size);
  height: var(--bracket-size);
  pointer-events: none;
  z-index: 10;
}

.nw-block-bl {
  bottom: -1px;
  left: -1px;
  border-bottom: var(--bracket-weight) solid var(--bracket-color);
  border-left: var(--bracket-weight) solid var(--bracket-color);
}

.nw-block-br {
  bottom: -1px;
  right: -1px;
  border-bottom: var(--bracket-weight) solid var(--bracket-color);
  border-right: var(--bracket-weight) solid var(--bracket-color);
}

/* ── Header bar ───────────────────────────────────────────────────────────── */
.nw-block__header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: var(--space-2) var(--space-4);
  background: var(--block-accent);
  flex-shrink: 0;
}

.nw-block__title {
  font-family: var(--font-label);
  font-size: var(--text-xs);
  font-weight: 600;
  letter-spacing: 0.10em;
  text-transform: uppercase;
  color: #ffffff;
}

.nw-block__badge {
  font-family: var(--font-mono);
  font-size: var(--text-xs);
  letter-spacing: 0.06em;
  text-transform: uppercase;
  color: #ffffff;
  opacity: 0.75;
  padding: 1px 4px;
  border: 1px solid rgba(255, 255, 255, 0.3);
}

/* ── Body ─────────────────────────────────────────────────────────────────── */
.nw-block__body {
  padding: var(--space-2) var(--space-4);
  font-size: var(--text-sm);
  color: var(--color-fg);
  line-height: 1.6;
}

.nw-block--compact .nw-block__body {
  padding: var(--space-1) var(--space-3);
}

/* Titleless variant: left accent border instead of header bar */
.nw-block:not(.nw-block--titled) .nw-block__body {
  border-left: 3px solid var(--block-accent);
  padding-left: calc(var(--space-4) - 3px);
}

/* ── Prose inside body ────────────────────────────────────────────────────── */
.nw-block__body :deep(p) {
  margin: 0 0 var(--space-2);
  font-size: var(--text-sm);
}

.nw-block__body :deep(p:last-child) {
  margin-bottom: 0;
}

.nw-block__body :deep(ul),
.nw-block__body :deep(ol) {
  margin: 0 0 var(--space-2);
}
</style>
