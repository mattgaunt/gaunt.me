<script lang="ts" setup>
const route = useRoute()
const config = useAppConfig()

useHead({
  htmlAttrs: { lang: 'en' },
  title: () => route.meta.title as string,
  titleTemplate: title => (title ? `${title} - ${config.name}` : config.name),
  link: [
    { rel: 'icon', href: '/favicon.ico', sizes: 'any' },
    { rel: 'icon', type: 'image/svg+xml', href: '/favicon.svg' },
    { rel: 'apple-touch-icon', href: '/meta/apple-touch-icon.png' },
    { rel: 'mask-icon', href: '/meta/mask-icon.svg' },
    { rel: 'manifest', href: '/meta/site.webmanifest' },
    {
      rel: 'preload',
      as: 'font',
      type: 'font/woff2',
      href: '/fonts/Satoshi-Variable.woff2',
      crossorigin: 'anonymous',
    },
    {
      rel: 'preload',
      as: 'font',
      type: 'font/woff2',
      href: '/fonts/Satoshi-VariableItalic.woff2',
      crossorigin: 'anonymous',
    },
  ],
  meta: [
    { name: 'description', content: config.description },
    { property: 'og:title', content: (route.meta.title as string) || config.name },
    { property: 'og:description', content: config.description },
    { property: 'og:image', content: `https://gaunt.me/og/default.png`, key: 'og:image' },
    { property: 'og:url', content: config.domain as string },
    { property: 'og:type', content: 'website' },
    { name: 'twitter:creator', content: '@mattgaunt' },
    { name: 'twitter:site', content: '@mattgaunt' },
    { name: 'twitter:card', content: 'summary_large_image' },
    { name: 'twitter:image', content: '/og/default.png' },
    { name: 'theme-color', content: '#fff', media: '(prefers-color-scheme: light)' },
    { name: 'theme-color', content: 'rgb(23, 23, 23)', media: '(prefers-color-scheme: dark)' },
  ],
})
</script>

<template>
  <Body antialiased="~" />

  <NuxtLayout>
    <NuxtPage />
  </NuxtLayout>
</template>
