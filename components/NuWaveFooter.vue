<script setup lang="ts">
defineProps<{
  date?: string
}>()
</script>

<template>
  <footer class="nw-footer">
    <div class="nw-footer__rule"></div>
    <div class="nw-footer__inner">
      <span class="nw-footer__date nw-label">
        {{ date ?? $slidev?.configs?.date ?? '' }}
      </span>
      <span class="nw-footer__page nw-section-id">
        {{ $nav?.currentPage ?? '' }}
        <template v-if="$nav?.total"> / {{ $nav.total }}</template>
      </span>
    </div>
  </footer>
</template>

<style scoped>
.nw-footer {
  flex-shrink: 0;
}

.nw-footer__rule {
  height: var(--rule-thick);
  background: var(--color-accent);
}

.nw-footer__inner {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: var(--space-2) var(--space-6);
  background: var(--color-bg-alt);
}

.nw-footer__date {
  color: var(--color-fg-subtle);
  letter-spacing: 0.10em;
}

.nw-footer__page {
  color: var(--nw-cornflower);
  flex-shrink: 0;
}
</style>
