<script lang="ts" setup>
useHead({
  title: 'Notes',
  meta: [
    { name: 'og:image', content: 'https://gaunt.me/og/notes.png' },
  ],
})

const { data: posts } = await useAsyncData('notes', () => {
  return queryContent('notes').find()
})
</script>

<template>
  <div flex w-full gap-2>
    <div flex>
      <div
        relative
        bg-zinc-800
        bg-opacity-40
        highlight
        rounded-6
        h-full
        max-h-page
        flex-none
        overflow-y-auto
        w-90
        xl:w-100
      >
        <div flex-1 space-y-6 h-full p-3>
          <div flex flex-col gap-2>
            <div flex flex-col justify-center p-2>
              <div flex flex-none items-center justify-between>
                <span flex items-center space-x-3 px-2>
                  <h2 text-lg font-semibold tracking-wide line-clamp-1>
                    Notes
                  </h2>
                </span>
              </div>
            </div>

            <div flex flex-col gap-2>
              <template v-for="post in posts">
                <NuxtLink
                  :href="post._path"
                  :title="post.title"
                  hover="before:bg-zinc-800 before:bg-opacity-30 before:scale-100"
                  active-class="bg-zinc-800"
                  before:transition-all
                  before:scale-95
                  before:content-none
                  before:rounded-2xl
                  before:absolute
                  before:inset-none
                  flex
                  space-x-3
                  py-4
                  px-5
                  rounded-2xl
                  relative
                  transition
                >
                  <div flex flex-1 flex-col justify-center space-y-1 relative>
                    <div text-base font-semibold line-clamp-3>
                      {{ post.title }}
                    </div>

                    <div text-sm text-zinc-400 font-medium line-clamp-1>
                      {{ post.published }}
                    </div>
                  </div>
                </NuxtLink>
              </template>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div
      flex
      bg-zinc-800
      bg-opacity-40
      highlight
      rounded-l-6
      rounded-r-2
      overflow-y-auto
      max-h-page
      w-full
      relative
    >
      <NuxtPage />
    </div>
  </div>
</template>