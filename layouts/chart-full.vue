<!-- Layout: chart-full — Chart/diagram takes 70% of slide height, title above, caption below -->
<script setup lang="ts">
import NuWaveHeader from '../components/NuWaveHeader.vue'
import NuWaveFooter from '../components/NuWaveFooter.vue'
import FigureCaption from '../components/FigureCaption.vue'

defineProps<{
  title?: string
  sectionNumber?: string
  figNumber?: string | number
  figLabel?: string
}>()
</script>

<template>
  <div class="slidev-layout layout-chart-full">
    <NuWaveHeader />

    <div class="cf-body">
      <!-- Title bar -->
      <div class="cf-title-bar">
      </div>

      <!-- Chart area — main visual field -->
      <div class="cf-chart-area">
        <slot name="chart">
          <slot>
            <div class="cf-chart-placeholder"></div>
          </slot>
        </slot>
      </div>

      <!-- Caption bar -->
      <div class="cf-caption-bar">
        <FigureCaption :number="figNumber ?? ''" :label="figLabel ?? ''" />
        <div class="cf-source">
          <slot name="source" />
        </div>
      </div>
    </div>

    <NuWaveFooter />
  </div>
</template>

<style scoped>
.layout-chart-full {
  display: flex;
  flex-direction: column;
  padding: 0;
}

.cf-body {
  flex: 1;
  display: flex;
  flex-direction: column;
  padding: var(--space-4) var(--space-6) var(--space-2);
  overflow: hidden;
  min-height: 0;
}

.cf-title-bar {
  flex-shrink: 0;
  margin-bottom: var(--space-3);
}

.cf-title {
  font-family: var(--font-heading);
  font-size: var(--text-xl);
  font-weight: 900;
  margin: 0;
  line-height: 1.1;
}

.cf-chart-area {
  flex: 1;
  overflow: hidden;
  position: relative;
  border: var(--rule-mid) solid var(--color-rule);
  background-image:
    linear-gradient(to right, var(--nw-surface0-alpha) 1px, transparent 1px),
    linear-gradient(to bottom, var(--nw-surface0-alpha) 1px, transparent 1px);
  background-size: 30px 30px;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: var(--space-3);
}

.cf-chart-placeholder {
  position: absolute;
  inset: 0;
}

.cf-chart-placeholder::before {
  content: '';
  position: absolute;
  inset: 10% 10% 15% 10%;
  background: var(--nw-surface0-alpha);
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

.cf-chart-placeholder::after {
  content: '';
  position: absolute;
  inset: 10% 10% 15% 10%;
  border-bottom: 1px solid var(--color-rule-light);
  border-left: 1px solid var(--color-rule-light);
}

.cf-caption-bar {
  flex-shrink: 0;
  margin-top: var(--space-2);
  display: flex;
  align-items: baseline;
  justify-content: space-between;
}

.cf-source {
  font-family: var(--font-mono);
  font-size: var(--text-xs);
  color: var(--color-fg-subtle);
}
</style>
