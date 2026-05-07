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
      <span class="vp-code-title">{{ title ?? '' }}</span>
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
/*
  Core .vp-code-container styles are in styles/code.css (shared with layouts).
  Scoped styles here ensure the component renders correctly in any layout context.
*/

.vp-code-container {
  border: var(--rule-mid) solid var(--color-rule);
  background: var(--color-bg-panel);
}

.vp-code-header {
  background: var(--color-bg-alt);
}

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

/* Shiki code inside the component */
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
</style>
