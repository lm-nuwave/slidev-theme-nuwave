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
  <div :class="['vp-callout-box', typeConfig.colorClass]">
    <div class="callout-header">
      <span class="callout-icon">{{ typeConfig.icon }}</span>
      <span class="callout-label vp-label">{{ title || typeConfig.label }}</span>
    </div>
    <div class="callout-body">
      <slot />
    </div>
  </div>
</template>

<style scoped>
.vp-callout-box {
  border: 2px dashed var(--color-rule);
  padding: 0;
  position: relative;
  overflow: hidden;
  margin-bottom: var(--space-3);
  display: flex;
  flex-direction: column;
}


.vp-callout-box:last-child {
  margin-bottom: 0;
}

/* Type variants */
.callout--warning {
  border-color: var(--vp-red);
  background: rgba(242, 139, 168, 0.10);
}

.callout--note {
  border-color: var(--vp-blue);
  background: rgba(137, 180, 250, 0.10);
}

.callout--caution {
  border-color: var(--vp-peach);
  background: rgba(250, 179, 135, 0.10);
}

.callout--important {
  border-color: var(--vp-mauve);
  background: rgba(203, 166, 247, 0.10);
}

/* Dark mode: Latte palette uses different values for the same vars */
:global(.dark) .callout--warning  { background: rgba(243, 139, 168, 0.12); }
:global(.dark) .callout--note     { background: rgba(137, 180, 250, 0.12); }
:global(.dark) .callout--caution  { background: rgba(250, 179, 135, 0.12); }
:global(.dark) .callout--important { background: rgba(203, 166, 247, 0.12); }

/* Header bar */
.callout-header {
  display: flex;
  align-items: center;
  gap: var(--space-2);
  padding: var(--space-2) var(--space-4) var(--space-1);
  border-bottom: 1px dashed currentColor;
}

.callout--warning  .callout-header  { background: rgba(242, 139, 168, 0.15); border-bottom-color: var(--vp-red); }
.callout--note     .callout-header  { background: rgba(137, 180, 250, 0.15); border-bottom-color: var(--vp-blue); }
.callout--caution  .callout-header  { background: rgba(250, 179, 135, 0.15); border-bottom-color: var(--vp-peach); }
.callout--important .callout-header { background: rgba(203, 166, 247, 0.15); border-bottom-color: var(--vp-mauve); }

.callout-icon {
  font-size: var(--text-md);
  flex-shrink: 0;
  line-height: 1;
}

.callout--warning  .callout-icon  { color: var(--vp-red); }
.callout--note     .callout-icon  { color: var(--vp-blue); }
.callout--caution  .callout-icon  { color: var(--vp-peach); }
.callout--important .callout-icon { color: var(--vp-mauve); }

.callout-label {
  font-weight: 600;
  letter-spacing: 0.12em;
}

.callout--warning  .callout-label  { color: var(--vp-red); }
.callout--note     .callout-label  { color: var(--vp-blue); }
.callout--caution  .callout-label  { color: var(--vp-peach); }
.callout--important .callout-label { color: var(--vp-mauve); }

/* Content */
.callout-body {
  padding: var(--space-1) var(--space-4) var(--space-3);
  font-size: var(--text-sm);
  color: var(--color-fg-muted);
  line-height: 1.6;
}
</style>
