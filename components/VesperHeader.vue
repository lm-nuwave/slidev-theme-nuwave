<script setup lang="ts">
defineProps<{
  title?: string
  sectionNumber?: string
  author?: string
}>()
</script>

<template>
  <header class="vp-header">
    <div class="vp-header__inner">
      <span class="vp-header__deck vp-label">{{ $slidev?.configs?.deckTitle ?? $slidev?.configs?.title ?? '' }}</span>
      <span v-if="title || $frontmatter?.title" class="vp-header__title">{{ title || $frontmatter?.title }}</span>
      <span class="vp-header__author vp-label">{{ author ?? $slidev?.configs?.author ?? '' }}</span>
    </div>
    <div class="vp-header__rule"></div>
  </header>
</template>

<style scoped>
.vp-header {
  flex-shrink: 0;
}

.vp-header__inner {
  display: grid;
  grid-template-columns: minmax(0, 1fr) auto minmax(0, 1fr);
  align-items: center;
  padding: var(--space-2) var(--space-6);
  background: var(--color-bg-alt);
  border-bottom: 1px solid var(--vp-overlay1-alpha);
  gap: var(--space-4);
  min-height: 2rem;
}

.vp-header__deck {
  grid-column: 1;
  color: var(--color-fg-subtle);
  letter-spacing: 0.12em;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}

.vp-header__title {
  grid-column: 2;
  font-family: var(--font-label);
  font-size: var(--text-xs);
  font-weight: 600;
  letter-spacing: 0.10em;
  text-transform: uppercase;
  color: var(--color-fg);
  text-align: center;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}

.vp-header__author {
  grid-column: 3;
  color: var(--color-fg-subtle);
  letter-spacing: 0.12em;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  text-align: right;
}

.vp-header__rule {
  height: var(--rule-thick);
  background: var(--color-accent);
}
</style>
