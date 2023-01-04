<template>
  <h4 :id="id" text-lg>
    <a :href="`#${id}`" font-bold decoration-none>
      <slot />
    </a>
  </h4>
</template>

<script setup lang="ts">
defineProps<{ id: string }>()
</script>
