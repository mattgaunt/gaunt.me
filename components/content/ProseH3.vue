<script setup lang="ts">
defineProps<{ id: string }>()
</script>

<template>
  <h3 :id="id" text-xl>
    <a :href="`#${id}`" font-bold decoration-none>
      <slot />
    </a>
  </h3>
</template>
