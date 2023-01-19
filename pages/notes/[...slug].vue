<script lang="ts" setup>
const { path } = useRoute()
const data = await queryContent('notes').where({ _path: path }).findOne()

useHead({
  meta: [
    { property: 'og:type', content: 'article' },
    { property: 'article:published_time', content: data.updated_at ?? data.created_at },
    { property: 'article:author', content: 'Matthew Gaunt' },
    { property: 'article:published', content: 'https://twitter.com/mattgaunt' },
  ],
})

definePageMeta({
  changefreq: 'monthly',
})
</script>

<template>
  <div flex w-full relative>
    <main id="main" relative flex flex-col w-full>
      <Container max-w-3xl py-24>
        <ContentDoc prose prose-invert prose-zinc max-w-full />
      </Container>
    </main>
  </div>
</template>
