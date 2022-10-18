<script setup>
defineProps({
  name: {
    type: String,
    required: true,
  },
})
</script>

<template>
  <div
    inline-flex
    shadow
    shadow-black
    shadow-opacity-5
    rounded-8
    transition
  >
    <div
      flex
      justify-center
      items-center
      relative
      bg-gradient-to-b
      from-white
      from-opacity-3
      to-white
      to-opacity-5
      rounded-8
      w-20
      h-20
      text-neutral-400
      before:mask
      before:opacity-50
      before:content-none
      before:rounded-inherit
      before:absolute
      before:inset-none
      before:pointer-events-none
      before:select-none
      before:p-px
    >
      <Icon :name="name" size="40" />
    </div>
  </div>
</template>