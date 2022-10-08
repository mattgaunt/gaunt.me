<script setup lang="ts">
defineProps({
  code: {
    type: String,
    default: null,
  },
  language: {
    type: String,
    default: null,
  },
  filename: {
    type: String,
    default: null,
  },
  highlights: {
    type: Array as () => number[],
    default: () => [],
  },
})
</script>

<template>
  <div bg-neutral-700 bg-opacity-50 rounded-xl>
    <slot />
  </div>
</template>

<style>
pre code .line {
  display: block;
  min-height: 1rem;
}
</style>
