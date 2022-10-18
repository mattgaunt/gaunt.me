<script lang="ts">
export default {
  inheritAttrs: false,
}
</script>

<template>
  <div>
    <NuxtLink
      v-bind="$attrs"
      hover="bg-opacity-15"
      inline-flex
      justify-center
      items-center
      backdrop-blur-lg
      bg-white
      bg-opacity-8
      border
      border-white
      border-opacity-3
      rounded-2xl
      min-h-11
      px-6
      tracking-wide
      text-button
      font-semibold
      transition-all
    >
      <slot />
    </NuxtLink>
  </div>
</template>