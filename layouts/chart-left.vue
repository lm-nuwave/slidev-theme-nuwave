<!-- Layout: chart-left — Mirror of chart-right: chart panel left, text right -->
<script setup lang="ts">
import VesperHeader from '../components/VesperHeader.vue'
import VesperFooter from '../components/VesperFooter.vue'
import FigureCaption from '../components/FigureCaption.vue'

defineProps<{
  title?: string
  sectionNumber?: string
  figNumber?: string | number
  figLabel?: string
}>()
</script>

<template>
  <div class="slidev-layout layout-chart-left">
    <VesperHeader
      :title="title ?? ''"
      :section-number="sectionNumber ?? ''"

    />

    <div class="cl-body">
      <!-- Left chart panel -->
      <div class="cl-chart-panel">
        <div class="cl-chart-label vp-label">DATA / CHART</div>
        <div class="cl-chart-area">
          <slot name="chart">
            <div class="cl-chart-placeholder"></div>
          </slot>
        </div>
        <FigureCaption :number="figNumber ?? ''" :label="figLabel ?? ''" />
        <div class="cl-source">
          <slot name="source" />
        </div>
      </div>

      <!-- Right text column -->
      <div class="cl-text">
        <div v-if="title" class="cl-rule"></div>
        <h2 v-if="title" class="cl-title">{{ title }}</h2>
        <div class="cl-content">
          <slot />
        </div>
      </div>
    </div>

    <VesperFooter :section-number="sectionNumber ?? ''" />
  </div>
</template>

<style scoped>
.layout-chart-left {
  display: flex;
  flex-direction: column;
  padding: 0;
}

.cl-body {
  flex: 1;
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: var(--space-5);
  padding: var(--space-4) var(--space-6) var(--space-2);
  overflow: hidden;
  min-height: 0;
}

.cl-chart-panel {
  display: flex;
  flex-direction: column;
  overflow: hidden;
}

.cl-chart-label {
  color: var(--color-rule-light);
  letter-spacing: var(--tracking-widest);
  margin-bottom: var(--space-2);
}

.cl-chart-area {
  flex: 1;
  overflow: hidden;
  position: relative;
  background-image:
    linear-gradient(to right, var(--vp-surface0-alpha) 1px, transparent 1px),
    linear-gradient(to bottom, var(--vp-surface0-alpha) 1px, transparent 1px);
  background-size: 24px 24px;
  border: 1px solid var(--vp-overlay1-alpha);
  display: flex;
  align-items: center;
  justify-content: center;
}

.cl-chart-placeholder {
  position: absolute;
  inset: 0;
}

.cl-chart-placeholder::before {
  content: '';
  position: absolute;
  inset: 10% 10% 15% 10%;
  background: var(--vp-surface0-alpha);
  clip-path: polygon(
    0% 100%,
    0% 60%, 16.7% 60%,
    16.7% 40%, 33.3% 40%,
    33.3% 18%, 50% 18%,
    50% 32%, 66.7% 32%,
    66.7% 55%, 83.3% 55%,
    83.3% 72%, 100% 72%,
    100% 100%
  );
}

.cl-chart-placeholder::after {
  content: '';
  position: absolute;
  inset: 10% 10% 15% 10%;
  border-bottom: 1px solid var(--color-rule-light);
  border-left: 1px solid var(--color-rule-light);
}

.cl-source {
  font-family: var(--font-mono);
  font-size: var(--text-xs);
  color: var(--color-fg-subtle);
  margin-top: var(--space-1);
}

.cl-text {
  display: flex;
  flex-direction: column;
  border-left: var(--rule-mid) solid var(--color-rule);
  padding-left: var(--space-5);
  overflow: hidden;
}

.cl-rule {
  height: var(--rule-thick);
  background: var(--color-rule);
  margin-bottom: var(--space-3);
}

.cl-title {
  font-family: var(--font-heading);
  font-size: var(--text-xl);
  font-weight: 900;
  margin: 0 0 var(--space-4);
  line-height: 1.1;
}

.cl-content {
  flex: 1;
  overflow: hidden;
}
</style>
