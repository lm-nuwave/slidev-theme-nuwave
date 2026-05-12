<!-- Layout: stat-sidebar — Dark navy left column for stats, right panel for content -->
<script setup lang="ts">
import NuWaveHeader from '../components/NuWaveHeader.vue'
import NuWaveFooter from '../components/NuWaveFooter.vue'

defineProps<{
  title?: string
  sectionNumber?: string
}>()
</script>

<template>
  <div class="slidev-layout layout-stat-sidebar">
    <NuWaveHeader />

    <div class="ss-body">
      <!-- Left sidebar: dark navy, for MetricStat blocks and heading text -->
      <div class="ss-sidebar">
        <slot name="sidebar" />
      </div>

      <!-- Right content panel -->
      <div class="ss-content">
        <div class="ss-main">
          <slot />
        </div>
      </div>
    </div>

    <NuWaveFooter />
  </div>
</template>

<style scoped>
.layout-stat-sidebar {
  display: flex;
  flex-direction: column;
  padding: 0;
}

.ss-body {
  flex: 1;
  display: grid;
  grid-template-columns: 260px 1fr;
  overflow: hidden;
  min-height: 0;
}

/* Left dark navy sidebar */
.ss-sidebar {
  background: var(--nw-navy);
  color: #ffffff;
  padding: var(--space-6) var(--space-5);
  overflow: hidden;
  display: flex;
  flex-direction: column;
  justify-content: center;
}

/* Headings inside sidebar get light colors */
.ss-sidebar :deep(h1),
.ss-sidebar :deep(h2),
.ss-sidebar :deep(h3) {
  color: #ffffff;
  font-size: var(--text-lg);
  font-weight: 700;
  margin-bottom: var(--space-5);
}

/* List bullets in sidebar */
.ss-sidebar :deep(ul li::before) {
  color: var(--nw-teal);
}

.ss-sidebar :deep(p) {
  color: var(--nw-subtext1, #90A8C0);
  font-size: var(--text-sm);
}

/* Right content panel */
.ss-content {
  display: flex;
  flex-direction: column;
  padding: var(--space-4) var(--space-6) var(--space-3);
  overflow: hidden;
}

.ss-title-bar {
  flex-shrink: 0;
  margin-bottom: var(--space-3);
}

.ss-rule {
  height: var(--rule-thick);
  background: var(--color-rule);
  margin-bottom: var(--space-3);
}

.ss-title {
  font-family: var(--font-heading);
  font-size: var(--text-xl);
  font-weight: 700;
  color: var(--color-fg);
  margin: 0 0 var(--space-3);
  line-height: 1.1;
}

.ss-main {
  flex: 1;
  overflow: hidden;
}
</style>
