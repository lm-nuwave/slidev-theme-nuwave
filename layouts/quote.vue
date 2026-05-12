<!-- Layout: quote — Attributed quotation with large decorative quotation mark and name/title/affiliation attribution -->
<script setup lang="ts">
import NuWaveHeader from '../components/NuWaveHeader.vue'
import NuWaveFooter from '../components/NuWaveFooter.vue'

defineProps<{
  attribution?: string
  rank?: string
  unit?: string
  sectionNumber?: string
}>()
</script>

<template>
  <div class="slidev-layout layout-quote">
    <NuWaveHeader />
    <div class="quote-body">
      <!-- Giant decorative quotation mark -->
      <div class="quote-mark" aria-hidden="true">"</div>

      <div class="quote-content-area">
        <div class="quote-rule-top"></div>

        <blockquote class="quote-text">
          <slot />
        </blockquote>

        <div class="quote-rule-bottom"></div>

        <!-- Attribution block -->
        <div class="quote-attribution">
          <span v-if="rank" class="quote-rank nw-label">{{ rank }}</span>
          <span v-if="attribution" class="quote-name">{{ attribution }}</span>
          <span v-if="unit" class="quote-unit nw-label">{{ unit }}</span>
        </div>
      </div>
    </div>

    <NuWaveFooter />
  </div>
</template>

<style scoped>
.layout-quote {
  display: flex;
  flex-direction: column;
  background: var(--color-bg-alt) !important;
  padding: 0;
}

.quote-body {
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: var(--space-5) var(--space-8);
  position: relative;
  gap: var(--space-5);
}

/* Giant decorative opening quotation mark */
.quote-mark {
  font-family: var(--font-heading);
  font-size: clamp(6rem, 15vw, 11rem);
  font-weight: 900;
  color: var(--color-rule);
  opacity: 0.18;
  line-height: 1;
  flex-shrink: 0;
  align-self: flex-start;
  margin-top: -0.1em;
  user-select: none;
}

.quote-content-area {
  flex: 1;
  max-width: 680px;
}

.quote-rule-top,
.quote-rule-bottom {
  height: 1px;
  background: var(--color-rule-light);
}

.quote-rule-top { margin-bottom: var(--space-5); }
.quote-rule-bottom { margin-top: var(--space-5); margin-bottom: var(--space-4); }

.quote-text {
  font-family: var(--font-heading);
  font-size: clamp(1.4rem, 2.8vw, 2.2rem);
  font-style: italic;
  font-weight: 700;
  line-height: 1.35;
  color: var(--color-fg);
  margin: 0;
  padding: 0;
  border: none;
}

.quote-attribution {
  display: flex;
  align-items: baseline;
  gap: var(--space-3);
}

.quote-rank {
  color: var(--nw-orange);
  letter-spacing: var(--tracking-widest);
}

.quote-name {
  font-family: var(--font-body);
  font-size: var(--text-md);
  font-weight: 600;
  color: var(--color-fg);
}

.quote-unit {
  color: var(--color-rule-light);
  letter-spacing: var(--tracking-wide);
}
</style>
