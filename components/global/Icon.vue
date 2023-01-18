<script lang="ts" setup>
const props = defineProps({
  name: {
    type: String,
    required: true,
  },
  size: {
    type: String,
    default: null,
  },
})

const nuxtApp = useNuxtApp()
const component = computed(() => nuxtApp.vueApp.component(`Icons${props.name}`))
const sSize = computed(() => {
  const size = props.size || '1em'
  if (String(Number(size)) === size)
    return `${size}px`

  return size
})
</script>

<template>
  <Component
    :is="component"
    :width="sSize"
    :height="sSize"
    inline-block
    align-middle
  />
</template>
