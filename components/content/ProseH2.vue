<template>
  <h2 :id="id" text-2xl>
    <a :href="`#${id}`" font-bold decoration-none>
      <slot />
    </a>
  </h2>
</template>

<script lang="ts" setup>
defineProps<{
  id: string
}>()
</script>
