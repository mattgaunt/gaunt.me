<script lang="ts" setup>
const { data: notes } = await useAsyncData('notes', () => queryContent('notes').find())

const route = useRoute()
const isNotesPage = computed(() => route.name === 'notes')
const isNotePage = computed(() => route.name === 'notes-slug')

useHead({
  title: 'Notes',
  meta: [
    { property: 'og:image', content: '/og/notes.png' },
    { name: 'twitter:image', content: '/og/notes.png' },
  ],
})

definePageMeta({
  changefreq: 'daily',
})
</script>

<template>
  <div flex w-full lg:gap-2>
    <div flex flex-1>
      <div
        :class="{
          'hidden xl:flex': isNotePage,
        }"
        relative
        bg-zinc-800
        bg-opacity-40
        lg:highlight
        lg:rounded-6
        h-full
        lg:max-h-page
        flex-none
        overflow-y-auto
        w-full
        lg:w-84
        xl:w-100
      >
        <div flex-1 space-y-6 h-full p-3>
          <div flex flex-col gap-2>
            <div flex flex-col justify-center p-2>
              <div flex flex-none items-center justify-between>
                <span flex items-center space-x-3 px-2>
                  <h2 text-lg font-semibold line-clamp-1>
                    Notes
                  </h2>
                </span>
              </div>
            </div>

            <div flex flex-col gap-2>
              <template v-for="note in notes" :key="note.id">
                <NuxtLink
                  :href="note._path"
                  :title="note.title"
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
                      {{ note.title }}
                    </div>

                    <div text-sm text-zinc-400 font-medium line-clamp-1 v-text="formatDate(note.createdAt)" />
                  </div>
                </NuxtLink>
              </template>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div
      :class="{
        'hidden lg:flex': isNotesPage,
      }"
      bg-zinc-800
      bg-opacity-40
      lg:highlight
      rounded-none
      lg:rounded-l-6
      lg:rounded-r-2
      lg:overflow-y-auto
      lg:max-h-page
      w-full
      relative
    >
      <NuxtPage />
    </div>
  </div>
</template>
