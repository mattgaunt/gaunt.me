<script lang="ts" setup>
defineProps({
  icon: {
    type: String,
    required: true,
  },
  external: {
    type: Boolean,
    default: false,
  },
})
</script>

<script lang="ts">
export default {
  inheritAttrs: false,
}
</script>

<template>
  <div flex items-stretch space-x-1 group>
    <NuxtLink
      prefetch
      v-bind="$attrs"
      active-class="bg-white/8! border-white/4 text-white!"
      hover="bg-neutral-700/20"
      active="scale-98"
      transition
      flex
      flex-1
      items-center
      gap-3
      border
      border-transparent
      rounded-2xl
      px-4
      py-3
      text-base
      text-neutral-500
      font-medium
    >
      <span flex items-center justify-center>
        <Icon :name="icon" size="24" />
      </span>
      <span flex-1>
        <span text-white font-medium tracking-wide>
          <slot />
        </span>
      </span>

      <template v-if="external">
        <span flex items-center flex-none>
          <Icon name="External" />
        </span>
      </template>
    </NuxtLink>
  </div>
</template>