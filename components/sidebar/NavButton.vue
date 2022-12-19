<script lang="ts" setup>
defineProps({
  icon: {
    type: String,
    required: true,
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
        <Icon :name="icon" size="18" />
      </span>
      <span flex-1>
        <span text-inherit truncate>
          <slot />
        </span>
      </span>
    </button>
  </div>
</template>