<script lang="ts" setup>
const { data: stack } = await useAsyncData('stack', () => {
  return queryContent('stack').find()
})

useHead({
  title: 'Stack',
  meta: [
    { property: 'og:image', content: '/og/stack.png' },
    { name: 'twitter:image', content: '/og/stack.png' },
  ],
})

definePageMeta({
  changefreq: 'weekly',
})
</script>

<template>
  <Page>
    <ListDetailView
      title="My Stack"
      description="All of the tools and resources I rely on or strive to use on the daily."
      icon="Stack"
    >
      <div flex flex-col space-y-3>
        <StackList>
          <template v-for="item, idx in stack" :key="item._path">
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
                    delay: 50 * idx,
                  },
                },
              }"
              bg-zinc-900
              bg-opacity-25
              rounded-3xl
            >
              <StackListItem :item="item" />
            </div>
          </template>
        </StackList>
      </div>
    </ListDetailView>
  </Page>
</template>
