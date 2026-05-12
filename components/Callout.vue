<script setup lang="ts">
import { computed } from 'vue'

const props = defineProps<{
  type?: 'warning' | 'note' | 'caution' | 'important'
  title?: string
}>()

const typeConfig = computed(() => {
  switch (props.type) {
    case 'warning':
      return { label: 'WARNING',   icon: '⚠', colorClass: 'callout--warning'   }
    case 'caution':
      return { label: 'CAUTION',   icon: '△', colorClass: 'callout--caution'   }
    case 'important':
      return { label: 'IMPORTANT', icon: '★', colorClass: 'callout--important' }
    default:
      return { label: 'NOTE',      icon: 'i', colorClass: 'callout--note'      }
  }
})
</script>

<template>
  <div :class="['nw-callout-box', typeConfig.colorClass]">
    <div class="callout-header">
      <span class="callout-icon">{{ typeConfig.icon }}</span>
      <span class="callout-label nw-label">{{ title || typeConfig.label }}</span>
    </div>
    <div class="callout-body">
      <slot />
    </div>
  </div>
</template>

<style scoped>
.nw-callout-box {
  border: 2px dashed var(--color-rule);
  padding: 0;
  position: relative;
  overflow: hidden;
  margin-bottom: var(--space-3);
  display: flex;
  flex-direction: column;
  flex-shrink: 0;
  min-height: 0;
}


.nw-callout-box:last-child {
  margin-bottom: 0;
}

/* Type variants */
.callout--warning {
  border-color: var(--nw-red);
  background: rgba(208, 64, 64, 0.08);
}

.callout--note {
  border-color: var(--nw-cornflower);
  background: rgba(43, 125, 200, 0.08);
}

.callout--caution {
  border-color: var(--nw-orange);
  background: rgba(224, 120, 32, 0.08);
}

.callout--important {
  border-color: var(--nw-teal);
  background: rgba(30, 173, 196, 0.08);
}

/* Dark mode adjustments */
:global(.dark) .callout--warning  { background: rgba(208, 64, 64, 0.12); }
:global(.dark) .callout--note     { background: rgba(43, 125, 200, 0.12); }
:global(.dark) .callout--caution  { background: rgba(224, 120, 32, 0.12); }
:global(.dark) .callout--important { background: rgba(30, 173, 196, 0.12); }

/* Header bar */
.callout-header {
  display: flex;
  align-items: center;
  gap: var(--space-2);
  padding: var(--space-2) var(--space-4) var(--space-1);
  border-bottom: 1px dashed currentColor;
}

.callout--warning  .callout-header  { background: rgba(208, 64, 64, 0.15);  border-bottom-color: var(--nw-red); }
.callout--note     .callout-header  { background: rgba(43, 125, 200, 0.15); border-bottom-color: var(--nw-cornflower); }
.callout--caution  .callout-header  { background: rgba(224, 120, 32, 0.15); border-bottom-color: var(--nw-orange); }
.callout--important .callout-header { background: rgba(30, 173, 196, 0.15); border-bottom-color: var(--nw-teal); }

.callout-icon {
  font-size: var(--text-md);
  flex-shrink: 0;
  line-height: 1;
}

.callout--warning  .callout-icon  { color: var(--nw-red); }
.callout--note     .callout-icon  { color: var(--nw-cornflower); }
.callout--caution  .callout-icon  { color: var(--nw-orange); }
.callout--important .callout-icon { color: var(--nw-teal); }

.callout-label {
  font-weight: 600;
  letter-spacing: 0.12em;
}

.callout--warning  .callout-label  { color: var(--nw-red); }
.callout--note     .callout-label  { color: var(--nw-cornflower); }
.callout--caution  .callout-label  { color: var(--nw-orange); }
.callout--important .callout-label { color: var(--nw-teal); }

/* Content */
.callout-body {
  padding: var(--space-1) var(--space-4) var(--space-3);
  font-size: var(--text-sm);
  color: var(--color-fg-muted);
  line-height: 1.6;
}
</style>
