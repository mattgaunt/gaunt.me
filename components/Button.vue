<script lang="ts" setup>
defineProps({
  component: {
    type: String,
    default: 'button',
  },
})

defineOptions({
  inheritAttrs: false,
})
</script>

<template>
  <div relative>
    <Component
      :is="component"
      v-bind="$attrs"
      inline-flex
      justify-center
      items-center
      backdrop-blur-lg
      bg-white
      bg-opacity-7
      hover:bg-opacity-15
      border
      border-white
      border-opacity-3
      rounded-5
      min-h-11
      px-6
      font-semibold
      transition-all
    >
      <slot />
    </Component>
  </div>
</template>
