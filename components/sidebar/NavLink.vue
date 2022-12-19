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
      active-class="bg-zinc-800/70! text-white!"
      hover="bg-zinc-800/30"
      active="scale-98"
      transition
      flex
      flex-1
      items-center
      gap-3
      border
      border-transparent
      rounded-4
      px-4
      py-default
      text-sm
      text-zinc-400
      font-medium
    >
      <span flex items-center justify-center>
        <Icon :name="icon" size="18" />
      </span>
      <span flex-1>
        <span text-inherit truncate>
          <slot />
        </span>
      </span>

      <template v-if="external">
        <span flex items-center flex-none>
          <Icon name="External" size="12" opacity-50 />
        </span>
      </template>
    </NuxtLink>
  </div>
</template>