<!-- Layout: two-images — Side-by-side images each with figure captions, text block above -->
<script setup lang="ts">
import VesperHeader from '../components/VesperHeader.vue'
import VesperFooter from '../components/VesperFooter.vue'
import FigureCaption from '../components/FigureCaption.vue'

defineProps<{
  title?: string
  sectionNumber?: string
  fig1Number?: string | number
  fig1Label?: string
  fig2Number?: string | number
  fig2Label?: string
}>()
</script>

<template>
  <div class="slidev-layout layout-two-images">
    <VesperHeader
      :title="title ?? ''"
      :section-number="sectionNumber ?? ''"

    />

    <!-- Top text strip -->
    <div class="ti-top">
      <div v-if="title" class="ti-rule"></div>
      <h2 v-if="title" class="ti-title">{{ title }}</h2>
      <div class="ti-caption">
        <slot />
      </div>
    </div>

    <!-- Image pair -->
    <div class="ti-images">
      <div class="ti-image-col">
        <div class="ti-image-frame vp-bracketed">
          <span class="vp-bracket-bl"></span>
          <span class="vp-bracket-br"></span>
          <slot name="image1">
            <div class="ti-placeholder">
              <span class="vp-label" style="color: var(--color-rule-light);">IMAGE A</span>
            </div>
          </slot>
        </div>
        <FigureCaption :number="fig1Number ?? '1'" :label="fig1Label ?? ''" />
      </div>

      <div class="ti-divider"></div>

      <div class="ti-image-col">
        <div class="ti-image-frame vp-bracketed">
          <span class="vp-bracket-bl"></span>
          <span class="vp-bracket-br"></span>
          <slot name="image2">
            <div class="ti-placeholder">
              <span class="vp-label" style="color: var(--color-rule-light);">IMAGE B</span>
            </div>
          </slot>
        </div>
        <FigureCaption :number="fig2Number ?? '2'" :label="fig2Label ?? ''" />
      </div>
    </div>

    <VesperFooter :section-number="sectionNumber ?? ''" />
  </div>
</template>

<style scoped>
.layout-two-images {
  display: flex;
  flex-direction: column;
  padding: 0;
}

.ti-top {
  padding: var(--space-3) var(--space-6) 0;
  flex-shrink: 0;
}

.ti-rule {
  height: var(--rule-thick);
  background: var(--color-rule);
  margin-bottom: var(--space-2);
}

.ti-title {
  font-family: var(--font-heading);
  font-size: var(--text-lg);
  font-weight: 900;
  margin: 0 0 var(--space-2);
  line-height: 1.1;
}

.ti-caption {
  font-family: var(--font-body);
  font-size: var(--text-sm);
  color: var(--color-fg-muted);
  margin-bottom: var(--space-3);
}

.ti-images {
  flex: 1;
  display: flex;
  gap: 0;
  padding: 0 var(--space-6) var(--space-2);
  overflow: hidden;
  min-height: 0;
}

.ti-image-col {
  flex: 1;
  display: flex;
  flex-direction: column;
  overflow: hidden;
}

.ti-divider {
  width: var(--rule-mid);
  background: var(--color-rule);
  margin: 0 var(--space-3);
  flex-shrink: 0;
}

.ti-image-frame {
  flex: 1;
  border: var(--rule-thick) solid var(--color-rule);
  overflow: hidden;
  display: flex;
  align-items: center;
  justify-content: center;
  min-height: 0;
}

.ti-image-frame :deep(img) {
  width: 100%;
  height: 100%;
  object-fit: cover;
  display: block;
  filter: sepia(0.12) contrast(1.05);
}

.ti-placeholder {
  width: 100%;
  height: 100%;
  background: var(--vp-surface1);
  display: flex;
  align-items: center;
  justify-content: center;
  min-height: 100px;
}
</style>
