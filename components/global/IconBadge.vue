<script setup>
defineProps({
  name: {
    type: String,
    required: true,
  },
})
</script>

<template>
  <div inline-flex>
    <div
      flex
      items-center
      justify-center
      rounded-7
      bg-white
      bg-opacity-5
      ring-1
      ring-white
      ring-opacity-10
      backdrop-blur-2
      transition
      duration-300
      w-18
      h-18
    >
      <Icon
        :name="name"
        size="40"
        fill-white
        fill-opacity-10
        stroke-zinc-400
      />
    </div>
  </div>
</template>