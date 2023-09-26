<script lang="ts" setup>
const route = useRoute()
const data = await queryContent('notes').where({ _path: route.path }).findOne()

route.meta.title = data.title

definePageMeta({
  changefreq: 'monthly',
})

useServerHead({
  meta: [
    { property: 'og:type', content: 'article' },
    { property: 'article:published_time', content: data.updatedAt ?? data.createdAt },
    { property: 'article:author', content: 'Matthew Gaunt' },
    { property: 'article:published', content: 'https://twitter.com/mattgaunt' },
  ],
})
</script>

<template>
  <div flex w-full relative>
    <main id="main" relative flex flex-col w-full>
      <Container max-w-3xl py-8 lg:py-24 relative>
        <div flex flex-col gap-y-8 p-3>
          <NuxtLink
            aria-label="Go back to notes"
            href="/notes"
            class="
              group
              h-9 w-9
              flex
              items-center
              justify-center
              rounded-full
              bg-zinc-800
              shadow-md shadow-zinc-800/5
              ring-1 ring-white/8
              transition
              hover:border-zinc-700
              hover:ring-white/10
              xl:hidden
            "
          >
            <Icon name="ArrowLeft" text-xl text-zinc-400 group-hover:text-zinc-200 />
          </NuxtLink>

          <article flex flex-col relative>
            <header flex flex-col gap-y-4>
              <h1 font-heading text-4xl lg:text-5xl font-black leading-tight mb-6>
                {{ data.title }}
              </h1>
              <time datetime="data.createdAt" order-first flex items-center gap-2 text-base text-zinc-500>
                <span text-sm font-medium v-text="formatDate(data?.createdAt)" />
                <span text-sm font-medium>•</span>
                <span text-sm font-medium v-text="data?.readingTime?.text" />
              </time>
            </header>

            <div prose="~">
              <ContentDoc prose-invert prose-zinc max-w-full />
            </div>
          </article>
        </div>
      </Container>
    </main>
  </div>
</template>
