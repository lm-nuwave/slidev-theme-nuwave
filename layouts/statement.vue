<!-- Layout: statement — Single large pull quote or key statement, centered with decorative rules -->
<script setup lang="ts">
import NuWaveHeader from '../components/NuWaveHeader.vue'
import NuWaveFooter from '../components/NuWaveFooter.vue'

defineProps<{
  sectionNumber?: string
}>()
</script>

<template>
  <div class="slidev-layout layout-statement">
    <NuWaveHeader />
    <div class="statement-body">
      <div class="statement-rule-top"></div>
      <div class="statement-content">
        <slot />
      </div>
      <div class="statement-rule-bottom"></div>
    </div>
    <NuWaveFooter />
  </div>
</template>

<style scoped>
.layout-statement {
  display: flex;
  flex-direction: column;
  background: var(--color-bg) !important;
  padding: 0;
}

.statement-body {
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: var(--space-6) var(--space-8);
  text-align: center;
}

.statement-rule-top,
.statement-rule-bottom {
  width: 120px;
  height: 3px;
  background: var(--nw-orange);
}

.statement-rule-top { margin-bottom: var(--space-7); }
.statement-rule-bottom { margin-top: var(--space-7); }

.statement-content {
  max-width: 760px;
}

.statement-content :deep(h1),
.statement-content :deep(h2),
.statement-content :deep(p) {
  font-family: var(--font-heading);
  font-size: clamp(1.6rem, 3.4vw, 2.8rem);
  font-weight: 700;
  line-height: 1.2;
  color: var(--color-fg);
  margin: 0;
  font-style: italic;
}
</style>
