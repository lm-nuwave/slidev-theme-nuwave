<!-- Layout: callout — Main content with a prominent WARNING/NOTE/CAUTION box -->
<script setup lang="ts">
import NuWaveHeader from '../components/NuWaveHeader.vue'
import NuWaveFooter from '../components/NuWaveFooter.vue'
import Callout from '../components/Callout.vue'

defineProps<{
  title?: string
  calloutType?: 'warning' | 'note' | 'caution' | 'important'
  calloutTitle?: string
  sectionNumber?: string
}>()
</script>

<template>
  <div class="slidev-layout layout-callout">
    <NuWaveHeader />

    <div class="ca-body">
      <!-- Main content area -->
      <div class="ca-content">
        <div class="ca-main">
          <slot />
        </div>
      </div>

      <!-- Callout box -->
      <Callout
        :type="calloutType ?? 'note'"
        :title="calloutTitle ?? ''"
      >
        <slot name="callout" />
      </Callout>
    </div>

    <NuWaveFooter />
  </div>
</template>

<style scoped>
.layout-callout {
  display: flex;
  flex-direction: column;
  padding: 0;
}

.ca-body {
  flex: 1;
  display: flex;
  flex-direction: column;
  padding: var(--space-3) var(--space-6) var(--space-2);
  overflow: hidden;
  gap: var(--space-3);
  min-height: 0;
}

.ca-content {
  flex: 1;
  overflow: hidden;
  display: flex;
  flex-direction: column;
}

.ca-rule {
  height: var(--rule-thick);
  background: var(--color-rule);
  margin-bottom: var(--space-3);
}

.ca-title {
  font-family: var(--font-heading);
  font-size: var(--text-xl);
  font-weight: 900;
  margin: 0 0 var(--space-3);
  line-height: 1.1;
}

.ca-main {
  flex: 1;
  overflow: hidden;
}
</style>
