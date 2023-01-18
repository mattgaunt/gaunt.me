<script setup>
useHead({
  title: 'Bookmarks',
  meta: [
    { property: 'og:image', content: 'https://gaunt.me/og/bookmarks.png' },
    { name: 'twitter:image', content: 'https://gaunt.me/og/bookmarks.png' },
  ],
})

const { data: bookmarks } = await useAsyncData('bookmarks', () => {
  return queryContent('bookmarks').find()
})
</script>

<template>
  <Page>
    <ListDetailView
      title="Bookmarks"
      description="Everything from dev tips, design tricks and useful learning materials."
      icon="Bookmark"
    >
      <div flex flex-col space-y-3>
        <BookmarksList>
          <template v-for="bookmark, i in bookmarks" :key="bookmark._path">
            <div
              v-motion="{
                initial: {
                  y: 20,
                  opacity: 0,
                },
                enter: {
                  y: 0,
                  opacity: 1,
                  transition: {
                    type: 'spring',
                    delay: 50 * i,
                  },
                },
              }"
              flex
              flex-col
              bg-zinc-900
              bg-opacity-25
              rounded-3xl
            >
              <BookmarksListItem
                :bookmark="bookmark"
              />
            </div>
          </template>
        </BookmarksList>
      </div>
    </ListDetailView>
  </Page>
</template>
