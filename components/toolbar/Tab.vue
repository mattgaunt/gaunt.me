<script lang="ts" setup>
defineProps({
  icon: {
    type: String,
    required: true,
  },
})
</script>

<template>
  <NuxtLink
    active-class="fill-cyan/15! stroke-cyan/80!"
    inline-flex
    rounded-4
    text-zinc-400
    transition
    duration-500
    fill-zinc-800
    stroke-zinc-600
    p-10px
  >
    <Icon
      :name="icon"
      size="24"
      stroke-inherit
      fill-inherit
    />
  </NuxtLink>
</template>
