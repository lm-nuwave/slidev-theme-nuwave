<!-- Layout: process-steps — 4-column horizontal process flow with numbered step circles -->
<script setup lang="ts">
import NuWaveHeader from '../components/NuWaveHeader.vue'
import NuWaveFooter from '../components/NuWaveFooter.vue'
import StepCircle from '../components/StepCircle.vue'

const props = defineProps<{
  title?: string
  durations?: string[]
  decisions?: (string | null)[]
}>()

const stepVariants = ['teal', 'navy', 'orange', 'silver'] as const
const stepColors = ['var(--nw-teal)', 'var(--nw-navy)', 'var(--nw-orange)', 'var(--nw-silver)']
</script>

<template>
  <div class="slidev-layout layout-process-steps">
    <NuWaveHeader />

    <div class="ps-body">
      <!-- Connector line + decision points row -->
      <div class="ps-connector-row">
        <template v-for="i in 4" :key="`conn-${i}`">
          <div class="ps-connector"></div>
          <div
            v-if="decisions?.[i - 1]"
            class="ps-decision"
          >
            {{ decisions[i - 1] }}
          </div>
        </template>
      </div>

      <!-- Step grid -->
      <div class="ps-grid">
        <div
          v-for="i in 4"
          :key="`step-${i}`"
          class="ps-step"
        >
          <!-- Circle -->
          <div class="ps-step__circle">
            <StepCircle :number="i" :variant="stepVariants[i - 1]" />
          </div>

          <!-- Content slot -->
          <div class="ps-step__content">
            <slot :name="`step${i}`" />
          </div>

          <!-- Duration badge -->
          <div
            v-if="durations?.[i - 1]"
            class="ps-duration"
            :style="{ borderColor: stepColors[i - 1], color: stepColors[i - 1] }"
          >
            {{ durations[i - 1] }}
          </div>
        </div>
      </div>
    </div>

    <NuWaveFooter />
  </div>
</template>

<style scoped>
.layout-process-steps {
  display: flex;
  flex-direction: column;
  padding: 0;
}

.ps-body {
  flex: 1;
  display: flex;
  flex-direction: column;
  padding: var(--space-3) var(--space-6) var(--space-2);
  overflow: hidden;
}

.ps-title-bar {
  flex-shrink: 0;
  margin-bottom: var(--space-3);
}

.ps-title-rule {
  height: var(--rule-thick);
  background: var(--color-rule);
  margin-bottom: var(--space-3);
}

.ps-title {
  font-family: var(--font-heading);
  font-size: var(--text-xl);
  font-weight: 700;
  color: var(--color-fg);
  margin: 0;
  line-height: 1.1;
}

/* Connector row: thin line running behind the step circles */
.ps-connector-row {
  display: none; /* connector drawn via ps-step border instead */
}

/* Step grid */
.ps-grid {
  flex: 1;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 0;
  overflow: hidden;
}

.ps-step {
  display: flex;
  flex-direction: column;
  padding: var(--space-3) var(--space-4) var(--space-3) var(--space-4);
  border-right: 1px solid var(--color-rule-light);
  position: relative;
}

.ps-step:last-child {
  border-right: none;
}

.ps-step__circle {
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: var(--space-4);
}

.ps-step__content {
  flex: 1;
  overflow: hidden;
  font-size: var(--text-sm);
}

/* Duration badge */
.ps-duration {
  margin-top: var(--space-3);
  flex-shrink: 0;
  border: 1px solid currentColor;
  padding: var(--space-1) var(--space-3);
  font-family: var(--font-label);
  font-size: var(--text-xs);
  font-weight: 700;
  letter-spacing: var(--tracking-wide);
  text-transform: uppercase;
  text-align: center;
  align-self: flex-start;
}

/* Decision point labels between steps */
.ps-decision {
  position: absolute;
  bottom: -16px;
  left: 50%;
  transform: translateX(-50%);
  background: var(--nw-green);
  color: #ffffff;
  font-family: var(--font-label);
  font-size: var(--text-xs);
  font-weight: 700;
  letter-spacing: var(--tracking-wide);
  text-transform: uppercase;
  padding: 2px var(--space-3);
  white-space: nowrap;
  z-index: 10;
}

/* Step heading styles */
.ps-step__content :deep(h3) {
  font-family: var(--font-label);
  font-size: var(--text-xs);
  font-weight: 700;
  letter-spacing: var(--tracking-wide);
  text-transform: uppercase;
  color: var(--color-accent-alt);
  margin: 0 0 var(--space-3);
  border: none;
  padding: 0;
}
</style>
