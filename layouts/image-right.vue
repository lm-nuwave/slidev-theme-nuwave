<!-- Layout: image-right — Text 55% left, bracketed image frame 45% right with caption slot -->
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
  <div class="slidev-layout layout-image-right">
    <NuWaveHeader />

    <div class="ir-body">
      <!-- Left text column -->
      <div class="ir-text">
        <div class="ir-content">
          <slot />
        </div>
      </div>

      <!-- Right image column -->
      <div class="ir-image-col">
        <div class="ir-image-frame nw-bracketed">
          <span class="nw-bracket-bl"></span>
          <span class="nw-bracket-br"></span>
          <slot name="image">
            <div class="ir-image-placeholder">
              <span class="ir-placeholder-label nw-label">IMAGE</span>
            </div>
          </slot>
        </div>
        <FigureCaption
          :number="figNumber ?? ''"
          :label="figLabel ?? ''"
        />
        <div class="ir-caption">
          <slot name="caption" />
        </div>
      </div>
    </div>

    <NuWaveFooter />
  </div>
</template>

<style scoped>
.layout-image-right {
  display: flex;
  flex-direction: column;
  padding: 0;
}

.ir-body {
  flex: 1;
  display: grid;
  grid-template-columns: 55fr 45fr;
  gap: var(--space-6);
  padding: var(--space-4) var(--space-6) var(--space-3);
  overflow: hidden;
  min-height: 0;
}

.ir-text {
  display: flex;
  flex-direction: column;
  overflow: hidden;
}

.ir-rule {
  height: var(--rule-thick);
  background: var(--color-rule);
  margin-bottom: var(--space-3);
}

.ir-title {
  font-family: var(--font-heading);
  font-size: var(--text-xl);
  font-weight: 900;
  color: var(--color-fg);
  margin: 0 0 var(--space-4);
  line-height: 1.1;
}

.ir-content {
  flex: 1;
  overflow: hidden;
}

.ir-image-col {
  display: flex;
  flex-direction: column;
  overflow: hidden;
}

.ir-image-frame {
  flex: 1;
  border: var(--rule-thick) solid var(--color-rule);
  overflow: hidden;
  display: flex;
  align-items: center;
  justify-content: center;
  min-height: 0;
}

.ir-image-frame :deep(img) {
  width: 100%;
  height: 100%;
  object-fit: contain;
  display: block;
}

.ir-image-placeholder {
  width: 100%;
  height: 100%;
  background: var(--nw-surface1);
  display: flex;
  align-items: center;
  justify-content: center;
  min-height: 160px;
}

.ir-placeholder-label {
  color: var(--color-rule-light);
  letter-spacing: var(--tracking-widest);
}

.ir-caption {
  font-family: var(--font-mono);
  font-size: var(--text-xs);
  color: var(--color-fg-subtle);
  margin-top: var(--space-1);
}
</style>
