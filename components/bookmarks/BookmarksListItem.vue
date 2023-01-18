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
    flex
    flex-col
    transition
    duration-250
    relative
    rounded-3xl
    bg-zinc-800
    h-full
    hover:scale-101
    before:mask
    before:content-none
    before:rounded-inherit
    before:absolute
    before:inset-none
    before:pointer-events-none
    before:select-none
    before:p-px
    px-6
    lg:px-8
    py-6
  >
    <div flex items-center gap-6>
      <div flex flex-none>
        <div inline-flex rounded-5 overflow-hidden>
          <img loading="lazy" :src="bookmark.image" aspect-square max-w-16>
        </div>
      </div>
      <div flex flex-1 flex-col space-y-1>
        <h3 text-xl font-semibold line-clamp-1>
          {{ bookmark.title }}
        </h3>
        <span text-zinc-400 leading-normal tracking-wide>
          {{ bookmark.website }}
        </span>
      </div>
    </div>
  </a>
</template>
