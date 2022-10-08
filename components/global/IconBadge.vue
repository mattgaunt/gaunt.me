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
    shadow-lg
    shadow-black
    shadow-opacity-20
    rounded-8
    transition
  >
    <div
      from="neutral-700/25"
      to="neutral-600/70"
      flex
      justify-center
      items-center
      bg-gradient-radial
      highlight
      rounded-7
      w-20
      h-20
      text-neutral-400
    >
      <Icon :name="name" size="40" />
    </div>
  </div>
</template>