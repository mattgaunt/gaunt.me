<script lang="ts" setup>
defineProps({
  type: {
    type: String,
    default: 'note',
  },
  last: {
    type: Boolean,
    default: false,
  },
})
</script>

<template>
  <section grid grid-cols-8 gap-4 md:gap-6>
    <div col-span-8 md:col-span-1>
      <h2 id="2022-09-07-heading" text-sm text-neutral-500 font-mono py-1>
        <a href="#2022-09-07">Jan 15, 2022</a>
      </h2>
    </div>

    <div col-span-8 md:col-span-6>
      <div flex gap-6 relative h-full pb-8 md:pb-12>
        <div hidden md:flex justify-center min-w-8 h-full>
          <div :style="{ opacity: last ? '0%' : '100%' }" absolute top-2 w-px h-full bg-neutral-700 bg-opacity-50 />
          <div absolute top-none bg-neutral-700 bg-opacity-50 rounded-full p-2>
            <div bg-neutral-600 rounded-full aspect-square w-3 />
          </div>
        </div>
        
        <ChangelogUpdateTweet />
      </div>
    </div>
  </section>
</template>