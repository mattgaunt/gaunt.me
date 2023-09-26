<script lang="ts" setup>
defineProps({
  name: String,
  brand: String,
  image: String,
})
</script>

<template>
  <article bg-white bg-opacity-5 rounded-8 relative>
    <div grid grid-flow-row gap-4 p-8>
      <div col-span-1>
        <div
          inline-flex
          items-center
          bg-zinc-700
          bg-opacity-50
          rounded-xl
          px-3
          space-x-2
          h-8
        >
          <LoadoutIcon text="#D5FE7F" w-4 />
          <span text="#D5FE7F sm" font-semibold>
            Casual Gamer
          </span>
        </div>
      </div>
      <div col-span-1>
        <div bg-transparent rounded-2xl w-full>
          <figure inline-flex overflow-hidden>
            <NuxtImg :src="image" :alt="name" max-w-72 />
          </figure>
        </div>
      </div>
      <div col-span-1 space-y-4>
        <div inline-grid>
          <span text-zinc-400>
            {{ brand }}
          </span>

          <h3
            text-2xl
            text-white
            font-bold
            leading-snug
            line-clamp-2
          >
            {{ name }}
          </h3>
        </div>
      </div>
    </div>
  </article>
</template>
