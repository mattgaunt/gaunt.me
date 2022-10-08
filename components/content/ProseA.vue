<script setup lang="ts">
defineProps({
  href: {
    type: String,
    default: null,
  },
  blank: {
    type: Boolean,
    default: false,
  },
})
</script>

<template>
  <NuxtLink :href="href">
    <slot />
  </NuxtLink>
</template>
