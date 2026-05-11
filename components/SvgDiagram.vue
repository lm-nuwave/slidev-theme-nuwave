<script setup lang="ts">
import { ref, onMounted, watch } from 'vue'

const props = defineProps<{ src: string }>()
const svgContent = ref('')

async function load(src: string) {
  if (!src) return
  try {
    const res = await fetch(src)
    svgContent.value = await res.text()
  } catch {
    svgContent.value = ''
  }
}

onMounted(() => load(props.src))
watch(() => props.src, load)
</script>

<template>
  <div class="svg-diagram" v-html="svgContent" />
</template>

<style scoped>
.svg-diagram {
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
}

.svg-diagram :deep(svg) {
  width: 100%;
  height: 100%;
  display: block;
}
</style>
