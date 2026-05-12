<script setup lang="ts">
defineProps<{
  lang?: string
  title?: string
  lineNumbers?: boolean
  rulers?: boolean
  caption?: string
}>()
</script>

<template>
  <div class="nw-code-container">
    <!-- Corner bracket decorations (top pair via CSS ::before/::after) -->
    <span class="nw-code-bl"></span>
    <span class="nw-code-br"></span>

    <!-- Header bar (shown only when title or lang is provided) -->
    <div v-if="title || lang" class="nw-code-header">
      <div class="nw-code-header-left">
        <div class="nw-code-indicator"></div>
        <span class="nw-code-title">{{ title ?? '' }}</span>
      </div>
      <span v-if="lang" class="nw-code-lang-badge">[ {{ lang.toUpperCase() }} ]</span>
    </div>

    <!-- Code body -->
    <div class="nw-code-body">
      <div class="nw-code-content" :class="{ 'nw-code-content--rulers': rulers }">
        <slot />
      </div>
    </div>

    <!-- Footer caption -->
    <div v-if="caption || $slots.caption" class="nw-code-footer">
      <slot name="caption">{{ caption }}</slot>
    </div>
  </div>
</template>

<style scoped>
/* Fully self-contained — does not rely on code.css for any layout properties. */

.nw-code-container {
  display: flex;
  flex-direction: column;
  border: var(--rule-mid) solid var(--color-rule);
  background: var(--color-bg-alt);
  position: relative;
  overflow: hidden;
}

/* Corner brackets — top pair via ::before/::after, bottom pair via spans */
.nw-code-container::before,
.nw-code-container::after {
  content: '';
  position: absolute;
  width: 10px;
  height: 10px;
  z-index: 5;
  pointer-events: none;
}
.nw-code-container::before { top: 0; left: 0;  border-top: 2px solid var(--color-rule-light); border-left:  2px solid var(--color-rule-light); }
.nw-code-container::after  { top: 0; right: 0; border-top: 2px solid var(--color-rule-light); border-right: 2px solid var(--color-rule-light); }

.nw-code-bl,
.nw-code-br {
  position: absolute;
  width: 10px;
  height: 10px;
  z-index: 5;
  pointer-events: none;
}
.nw-code-bl { bottom: 0; left: 0;  border-bottom: 2px solid var(--color-rule-light); border-left:  2px solid var(--color-rule-light); }
.nw-code-br { bottom: 0; right: 0; border-bottom: 2px solid var(--color-rule-light); border-right: 2px solid var(--color-rule-light); }

/* Header bar */
.nw-code-header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: var(--space-2) var(--space-5);
  background: var(--color-bg-alt);
  border-bottom: 2px solid var(--color-rule-light);
  flex-shrink: 0;
}

.nw-code-header-left {
  display: flex;
  align-items: center;
  gap: var(--space-3);
}

.nw-code-indicator {
  width: 8px;
  height: 8px;
  border-radius: 50%;
  background: var(--nw-orange);
  flex-shrink: 0;
}

.nw-code-title {
  font-family: var(--font-mono);
  font-size: var(--text-sm);
  font-weight: 700;
  letter-spacing: var(--tracking-wider);
  text-transform: uppercase;
  color: var(--color-fg-muted);
}

.nw-code-lang-badge {
  font-family: var(--font-mono);
  font-size: var(--text-xs);
  letter-spacing: var(--tracking-wide);
  text-transform: uppercase;
  color: var(--color-rule-light);
  border: 1px solid var(--color-rule-light);
  padding: 1px 6px;
}

/* Code body */
.nw-code-body {
  display: flex;
  flex: 1;
  overflow: hidden;
  position: relative;
}

.nw-code-content {
  flex: 1;
  overflow: auto;
  padding: var(--space-2) 0;
}

.nw-code-content :deep(.shiki),
.nw-code-content :deep(.slidev-code) {
  background: transparent !important;
}

.nw-code-content :deep(pre) {
  padding: var(--space-2) var(--space-4);
  margin: 0;
}

/* 5-line ruler variant */
.nw-code-content--rulers :deep(.line:nth-child(5n)) {
  border-bottom: 1px solid var(--nw-overlay1-alpha);
}

/* Footer caption */
.nw-code-footer {
  padding: var(--space-2) var(--space-5);
  border-top: 1px solid var(--color-rule-light);
  background: var(--nw-surface0-alpha);
  font-family: var(--font-mono);
  font-size: var(--text-xs);
  letter-spacing: var(--tracking-wide);
  text-transform: uppercase;
  color: var(--color-fg-subtle);
  flex-shrink: 0;
}
</style>
