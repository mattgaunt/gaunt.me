<script setup lang="ts">
defineProps({
  src: {
    type: String,
    default: null,
  },
  alt: {
    type: String,
    default: null,
  },
  width: {
    type: [String, Number],
    default: undefined,
  },
  height: {
    type: [String, Number],
    default: undefined,
  },
})
</script>

<template>
  <NuxtImg
    :src="src"
    :alt="alt"
    :width="width"
    :height="height"
  />
</template>
