<script lang="ts" setup>
defineProps({
  item: {
    type: Object,
    required: true,
  },
})
</script>

<template>
  <a
    :href="item.website"
    target="_blank"
    hover="-rotate-1 -translate-y-3"
    flex
    flex-col
    transition
    duration-250
    relative
    rounded-3xl
    bg-zinc-800
    h-full
    before:mask
    before:content-empty
    before:rounded-inherit
    before:absolute
    before:inset-none
    before:pointer-events-none
    before:select-none
    before:p-px
    px-8
    py-6
  >
    <div flex flex-col items-center gap-6>
      <div flex items-center flex-none py-8>
        <div inline-flex rounded-7 overflow-hidden>
          <NuxtImg
            loading="lazy"
            :src="item.image"
            aspect-square
            max-w-22
          />
        </div>
      </div>
      <div flex flex-1 items-center w-full>
        <h3 flex-1 text-xl font-bold line-clamp-1>
          {{ item.title }}
        </h3>

        <div flex gap-1>
          <span
            v-for="tag in item.tags"
            :key="tag"
            py="1.5"
            bg-zinc-500
            bg-opacity-10
            highlight
            rounded-3xl
            text-xs
            text-zinc-300
            font-medium
            leading-normal
            tracking-wide
            px-3
          >
            {{ tag }}
          </span>
        </div>
      </div>
    </div>
  </a>
</template>
