<script lang="ts" setup>
defineProps({
  type: {
    type: String,
    default: 'h2',
  },
})
</script>

<template>
  <Component
    :is="type"
    font-heading
    leading-tight
    tracking-normal
    text-white
    font-black
  >
    <slot />
  </Component>
</template>