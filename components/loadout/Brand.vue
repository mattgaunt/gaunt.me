<script lang="ts" setup>
defineProps({
  name: String,
  username: String,
  image: String,
})
</script>

<template>
  <article bg-white bg-opacity-5 rounded-8 min-w-64 relative>
    <div grid grid-flow-row gap-16 p-8>
      <div col-span-1 inline-flex>
        <div flex justify-center relative>
          <div rounded-7 overflow-hidden w-18>
            <div flex justify-center items-center>
              <img :src="image" :alt="name">
            </div>
          </div>
        </div>
      </div>
      <div col-span-1 space-y-4>
        <div inline-grid>
          <h3
            text-2xl
            text-white
            font-bold
            leading-snug
            line-clamp-2
          >
            {{ name }}
          </h3>
          <span text-zinc-400>
            @{{ username }}
          </span>
        </div>
      </div>
    </div>
  </article>
</template>