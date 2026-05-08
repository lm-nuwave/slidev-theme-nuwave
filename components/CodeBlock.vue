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
  <div class="vp-code-container">
    <!-- Corner bracket decorations (top pair via CSS ::before/::after) -->
    <span class="vp-code-bl"></span>
    <span class="vp-code-br"></span>

    <!-- Header bar (shown only when title or lang is provided) -->
    <div v-if="title || lang" class="vp-code-header">
      <div class="vp-code-header-left">
        <div class="vp-code-indicator"></div>
        <span class="vp-code-title">{{ title ?? '' }}</span>
      </div>
      <span v-if="lang" class="vp-code-lang-badge">[ {{ lang.toUpperCase() }} ]</span>
    </div>

    <!-- Code body -->
    <div class="vp-code-body">
      <div class="vp-code-content" :class="{ 'vp-code-content--rulers': rulers }">
        <slot />
      </div>
    </div>

    <!-- Footer caption -->
    <div v-if="caption || $slots.caption" class="vp-code-footer">
      <slot name="caption">{{ caption }}</slot>
    </div>
  </div>
</template>

<style scoped>
/* Fully self-contained — does not rely on code.css for any layout properties. */

.vp-code-container {
  display: flex;
  flex-direction: column;
  border: var(--rule-mid) solid var(--color-rule);
  background: var(--color-bg-alt);
  position: relative;
  overflow: hidden;
}

/* Corner brackets — top pair via ::before/::after, bottom pair via spans */
.vp-code-container::before,
.vp-code-container::after {
  content: '';
  position: absolute;
  width: 10px;
  height: 10px;
  z-index: 5;
  pointer-events: none;
}
.vp-code-container::before { top: 0; left: 0;  border-top: 2px solid var(--color-rule-light); border-left:  2px solid var(--color-rule-light); }
.vp-code-container::after  { top: 0; right: 0; border-top: 2px solid var(--color-rule-light); border-right: 2px solid var(--color-rule-light); }

.vp-code-bl,
.vp-code-br {
  position: absolute;
  width: 10px;
  height: 10px;
  z-index: 5;
  pointer-events: none;
}
.vp-code-bl { bottom: 0; left: 0;  border-bottom: 2px solid var(--color-rule-light); border-left:  2px solid var(--color-rule-light); }
.vp-code-br { bottom: 0; right: 0; border-bottom: 2px solid var(--color-rule-light); border-right: 2px solid var(--color-rule-light); }

/* Header bar */
.vp-code-header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: var(--space-2) var(--space-5);
  background: var(--color-bg-alt);
  border-bottom: 2px solid var(--color-rule-light);
  flex-shrink: 0;
}

.vp-code-header-left {
  display: flex;
  align-items: center;
  gap: var(--space-3);
}

.vp-code-indicator {
  width: 8px;
  height: 8px;
  border-radius: 50%;
  background: var(--vp-red);
  flex-shrink: 0;
}

.vp-code-title {
  font-family: var(--font-mono);
  font-size: var(--text-sm);
  font-weight: 700;
  letter-spacing: var(--tracking-wider);
  text-transform: uppercase;
  color: var(--color-fg-muted);
}

.vp-code-lang-badge {
  font-family: var(--font-mono);
  font-size: var(--text-xs);
  letter-spacing: var(--tracking-wide);
  text-transform: uppercase;
  color: var(--color-rule-light);
  border: 1px solid var(--color-rule-light);
  padding: 1px 6px;
}

/* Code body */
.vp-code-body {
  display: flex;
  flex: 1;
  overflow: hidden;
  position: relative;
}

.vp-code-content {
  flex: 1;
  overflow: auto;
  padding: var(--space-2) 0;
}

.vp-code-content :deep(.shiki),
.vp-code-content :deep(.slidev-code) {
  background: transparent !important;
}

.vp-code-content :deep(pre) {
  padding: var(--space-2) var(--space-4);
  margin: 0;
}

/* 5-line ruler variant */
.vp-code-content--rulers :deep(.line:nth-child(5n)) {
  border-bottom: 1px solid var(--vp-overlay1-alpha);
}

/* Footer caption — matches code-right style */
.vp-code-footer {
  padding: var(--space-2) var(--space-5);
  border-top: 1px solid var(--color-rule-light);
  background: var(--vp-surface0-alpha);
  font-family: var(--font-mono);
  font-size: var(--text-xs);
  letter-spacing: var(--tracking-wide);
  text-transform: uppercase;
  color: var(--color-fg-subtle);
  flex-shrink: 0;
}
</style>
