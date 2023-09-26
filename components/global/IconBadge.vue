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
    <div p-1>
      <Icon
        :name="name"
        size="48"
        fill-cyan
        fill-opacity-10
        stroke-cyan
        stroke-opacity-80
      />
    </div>
  </div>
</template>
