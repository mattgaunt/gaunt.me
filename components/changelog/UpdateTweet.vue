<script setup>
defineProps({
  url: {
    type: String,
    required: true,
  },
})
</script>

<template>
  <article bg="#333" rounded-3xl p-10 space-y-6>
    <div flex items-center gap-4>
      <div>
        <div bg-neutral-800 rounded-full aspect-square w-15 />
      </div>
      <div flex flex-col gap-px>
        <h4 text-lg font-semibold leading-tight>
          Matthew Gaunt
        </h4>
        <span text-neutral-400 tracking-wide>
          mattgaunt
        </span>
      </div>
    </div>
    <div flex flex-col space-y-8>
      <div>
        <p text-3xl font-medium leading-snug>
          I'm launching something fun on Monday. <span text-neutral-500>If you like gaming, you're in luck.</span>
        </p>
      </div>
      <div>
        <a href="#" font-medium>
          Learn more →
        </a>
      </div>
    </div>
  </article>
</template>