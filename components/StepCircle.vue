<script setup lang="ts">
const props = defineProps<{
  number: number | string
  variant?: 'teal' | 'navy' | 'orange' | 'silver'
}>()

const autoVariant = (n: number | string): 'teal' | 'navy' | 'orange' | 'silver' => {
  if (props.variant) return props.variant
  const num = Number(n)
  if (num === 1) return 'teal'
  if (num === 2) return 'navy'
  if (num === 3) return 'orange'
  return 'silver'
}
</script>

<template>
  <div
    class="nw-step-circle"
    :class="`nw-step-circle--${autoVariant(number)}`"
  >
    {{ number }}
  </div>
</template>

<style scoped>
.nw-step-circle {
  width: 48px;
  height: 48px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-family: var(--font-heading);
  font-size: var(--text-lg);
  font-weight: 700;
  color: #ffffff;
  flex-shrink: 0;
}

.nw-step-circle--teal   { background: var(--nw-teal); }
.nw-step-circle--navy   { background: var(--nw-navy); }
.nw-step-circle--orange { background: var(--nw-orange); }
.nw-step-circle--silver { background: var(--nw-silver); }
</style>
