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
})
</script>

<script lang="ts">
export default {
  inheritAttrs: false,
}
</script>

<template>
  <div flex gap-x-1 group>
    <button
      v-bind="$attrs"
      hover="bg-zinc-700/20"
      active="scale-98"
      transition
      flex
      flex-1
      items-center
      gap-3
      rounded-4
      px-3
      py-default
      text-sm
      text-zinc-400
      text-left
      font-medium
    >
      <span flex items-center justify-center>
        <Icon
          :name="icon"
          size="20"
          fill-white
          fill-opacity-10
          stroke-zinc-500
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
    </button>
  </div>
</template>