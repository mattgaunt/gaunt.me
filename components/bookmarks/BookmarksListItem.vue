<script lang="ts" setup>
defineProps({
  bookmark: {
    type: Object,
    required: true,
  },
})
</script>

<template>
  <a
    :href="bookmark.source"
    target="_blank"
    hover="scale-102.5"
    transition
    duration-250
    bg-neutral-700
    rounded-3xl
    highlight
    px-6
    md:px-8
    py-6
  >
    <div flex items-center gap-6 md:gap-8>
      <div flex flex-none>
        <div inline-flex rounded-5 overflow-hidden>
          <img loading="lazy" :src="bookmark.image" aspect-square max-w-16>
        </div>
      </div>
      <div flex flex-1 flex-col space-y-1>
        <h3 text-xl font-semibold line-clamp-1>
          {{ bookmark.title }}
        </h3>
        <span text-neutral-400 leading-normal tracking-wide>
          {{ bookmark.website }}
        </span>
      </div>
    </div>
  </a>
</template>