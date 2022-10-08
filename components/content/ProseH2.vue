<template>
  <h2 :id="id">
    <a :href="`#${id}`" font-bold decoration-none>
      <slot />
    </a>
  </h2>
</template>

<script setup lang="ts">
defineProps<{ id: string }>()
</script>
