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
    bg-neutral-700
    rounded-3xl
    highlight
    px-8
    py-6
  >
    <div flex flex-col items-center gap-6 md:gap-8>
      <div flex items-center flex-none py-8>
        <div inline-flex rounded-7 overflow-hidden>
          <img loading="lazy" :src="item.image" aspect-square max-w-22>
        </div>
      </div>
      <div flex flex-1 items-center w-full>
        <h3 flex-1 text-xl font-bold line-clamp-1>
          {{ item.title }}
        </h3>

        <div flex gap-1>
          <span
            v-for="tag in item.tags"
            py="1.5"
            bg-neutral-600
            bg-opacity-75
            highlight
            rounded-3xl
            text-xs
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