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
  <div flex items-stretch space-x-1 group>
    <button
      v-bind="$attrs"
      hover="bg-neutral-700/20"
      active="scale-98"
      transition
      flex
      flex-1
      items-center
      gap-3
      rounded-2xl
      px-4
      py-3
      text-base
      text-neutral-500
      text-left
      font-medium
    >
      <span flex items-center justify-center>
        <Icon :name="icon" size="22" />
      </span>
      <span flex-1>
        <span text-white font-medium tracking-wide>
          <slot />
        </span>
      </span>
    </button>
  </div>
</template>