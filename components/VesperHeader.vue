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
      <span class="vp-header__deck vp-label">{{ $slidev?.configs?.title ?? '' }}</span>
      <span v-if="title" class="vp-header__title">{{ title }}</span>
      <span v-if="author ?? $slidev?.configs?.author" class="vp-header__author vp-label">
        {{ author ?? $slidev?.configs?.author ?? '' }}
      </span>
    </div>
    <div class="vp-header__rule"></div>
  </header>
</template>

<style scoped>
.vp-header {
  flex-shrink: 0;
}

.vp-header__inner {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: var(--space-2) var(--space-6);
  background: var(--color-bg-alt);
  border-bottom: 1px solid var(--vp-overlay1-alpha);
  gap: var(--space-4);
  min-height: 2rem;
}

.vp-header__deck {
  color: var(--color-fg-subtle);
  letter-spacing: 0.12em;
  flex-shrink: 0;
  max-width: 28%;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}

.vp-header__title {
  font-family: var(--font-label);
  font-size: var(--text-xs);
  letter-spacing: 0.10em;
  text-transform: uppercase;
  color: var(--color-fg-subtle);
  text-align: center;
  flex: 1;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}

.vp-header__author {
  color: var(--color-fg-subtle);
  letter-spacing: 0.12em;
  flex-shrink: 0;
  max-width: 28%;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}

.vp-header__rule {
  height: var(--rule-thick);
  background: var(--color-accent);
}
</style>
