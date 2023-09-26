<script setup>
defineProps({
  label: {
    type: String,
    required: false,
  },
})
</script>

<template>
  <section flex flex-col gap-1>
    <template v-if="label">
      <div flex items-center p-2>
        <h3 text-sm font-semibold text-white>
          {{ label }}
        </h3>
      </div>
    </template>

    <slot />
  </section>
</template>
