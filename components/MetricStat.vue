<script setup lang="ts">
defineProps<{
  value: string
  label: string
  light?: boolean
}>()
</script>

<template>
  <div class="nw-metric-stat" :class="{ 'nw-metric-stat--light': light }">
    <div class="nw-metric-stat__value">{{ value }}</div>
    <div class="nw-metric-stat__label">{{ label }}</div>
  </div>
</template>

<style scoped>
.nw-metric-stat {
  margin-bottom: var(--space-5);
}

.nw-metric-stat:last-child {
  margin-bottom: 0;
}

.nw-metric-stat__value {
  font-family: var(--font-heading);
  font-size: var(--text-2xl);
  font-weight: 700;
  line-height: 1.1;
  color: var(--nw-navy);
}

.nw-metric-stat__label {
  font-family: var(--font-label);
  font-size: var(--text-xs);
  font-weight: 600;
  letter-spacing: var(--tracking-wide);
  text-transform: uppercase;
  color: var(--nw-cornflower);
  margin-top: var(--space-1);
}

/* Light variant — for use on dark (navy) backgrounds */
.nw-metric-stat--light .nw-metric-stat__value {
  color: #ffffff;
}

.nw-metric-stat--light .nw-metric-stat__label {
  color: var(--nw-sky);
}
</style>
