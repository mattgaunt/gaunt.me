<template>
  <h3 :id="id">
    <a :href="`#${id}`" font-bold decoration-none>
      <slot />
    </a>
  </h3>
</template>

<script setup lang="ts">
defineProps<{ id: string }>()
</script>
