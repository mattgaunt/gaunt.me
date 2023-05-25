<script lang="ts" setup>
defineOptions({
  inheritAttrs: false,
})
</script>

<template>
  <div inline-flex>
    <NuxtLink
      v-bind="$attrs"
      inline-flex
      justify-center
      items-center
      bg-white
      bg-opacity-8
      hover:bg-opacity-10
      ring
      ring-inset
      ring-white
      ring-opacity-5
      rounded-full
      min-h-12
      px-6
      font-semibold
      transition-all
    >
      <slot />
    </NuxtLink>
  </div>
</template>
