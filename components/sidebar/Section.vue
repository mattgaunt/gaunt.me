<script setup>
defineProps({
  label: {
    type: String,
    required: false,
  },
})
</script>

<template>
  <section flex flex-col gap-2>
    <div flex items-center px-2>
      <h4 text-sm text-neutral-400 font-medium tracking-wide>
        {{ label }}
      </h4>
    </div>

    <slot />
  </section>
</template>