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
    active-class="text-white!"
    inline-flex
    rounded-4
    text-zinc-400
    transition
    duration-500
    p-10px
  >
    <Icon
      :name="icon"
      size="24"
    />
  </NuxtLink>
</template>