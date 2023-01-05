<script lang="ts" setup>
import { computed } from 'vue'

const props = defineProps<{
  title: string
  items: string[]
  index: number
}>()

const { lgAndLarger } = useBreakpoint()

const relativePos = computed(() => props.index - (props.items.length - 5))
const y = computed(() => relativePos.value * -60)
const opacity = computed(() => 1 - Math.abs(relativePos.value) / 4)
</script>

<template>
  <div
    flex
    items-center
    absolute
    text-4xl
    transform
    transition
    duration-500
    :style="{
      transform: `translate(0, ${y}px)`,
      opacity: opacity,
    }"
  >
    <h3 text-white font-medium>
      {{ title }}
    </h3>
  </div>
</template>