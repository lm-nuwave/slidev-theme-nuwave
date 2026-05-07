<script setup lang="ts">
defineProps<{
  text?: string
  variant?: 'default' | 'accent'
}>()
</script>

<template>
  <div :class="['vp-banner', variant === 'accent' ? 'vp-banner--accent' : '']">
    <span v-if="text" class="vp-banner__text">{{ text }}</span>
  </div>
</template>

<style scoped>
.vp-banner {
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 3px var(--space-4);
  background: var(--color-bg-alt);
  border-bottom: 1px solid var(--color-rule-light);
  flex-shrink: 0;
  min-height: 1.4rem;
}

.vp-banner--accent {
  background: var(--color-accent);
  border-bottom-color: var(--color-accent);
}

.vp-banner__text {
  font-family: var(--font-label);
  font-size: var(--text-xs);
  font-weight: 600;
  letter-spacing: 0.16em;
  text-transform: uppercase;
  color: var(--color-fg-muted);
}

.vp-banner--accent .vp-banner__text {
  color: var(--vp-base);
}
</style>
