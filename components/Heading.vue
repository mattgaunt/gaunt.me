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
    leading-tight
    tracking-normal
    text-white
    font-bold
  >
    <slot />
  </Component>
</template>