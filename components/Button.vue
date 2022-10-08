<script lang="ts" setup>
defineProps({
  component: {
    type: String,
    default: 'button',
  },
})
</script>

<script lang="ts">
export default {
  inheritAttrs: false,
}
</script>

<template>
  <div
    hover="scale-105"
    active="scale-98"
    inline-flex
    shadow-md
    shadow-neutral-900
    shadow-opacity-10
    rounded-2xl
    transition
  >
    <Component
      :is="component"
      v-bind="$attrs"
      hover="bg-neutral-600 border-neutral-600"
      inline-flex
      items-center
      highlight
      bg-neutral-600
      rounded-2xl
      min-h-12
      px-8
      transition
    >
      <slot />
    </Component>
  </div>
</template>