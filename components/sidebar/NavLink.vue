<script lang="ts" setup>
defineProps({
  icon: {
    type: String,
    required: true,
  },
  shortcut: {
    type: String,
    default: null,
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
  <div flex gap-x-1 group>
    <NuxtLink
      prefetch
      v-bind="$attrs"
      active-class="bg-zinc-800/70! text-white! stroke-cyan/80! fill-cyan/12!"
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
      px-3
      py-default
      text-sm
      text-zinc-400
      fill-white
      fill-opacity-10
      stroke-zinc-500
      font-medium
    >
      <span flex items-center justify-center>
        <Icon
          :name="icon"
          size="20"
          stroke-inherit
          fill-inherit
        />
      </span>
      <span flex-1>
        <span text-inherit truncate>
          <slot />
        </span>
      </span>

      <template v-if="shortcut">
        <span flex items-center flex-none>
          <span inline-flex justify-center shortcut>
            <kbd text-2xs text-zinc-500 font-semibold>{{ shortcut }}</kbd>
          </span>
        </span>
      </template>

      <template v-if="external">
        <span flex items-center flex-none>
          <Icon name="External" size="18" opacity-40 />
        </span>
      </template>
    </NuxtLink>
  </div>
</template>