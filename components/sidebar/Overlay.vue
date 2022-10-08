<script setup>
const { isOpen, close } = useSidebar()
</script>

<template>
  <div
    fixed
    inset-none
    bg-black
    bg-opacity-50
    transition
    duration-200
    ease-in-out
    @click.prevent="close"
  />
</template>