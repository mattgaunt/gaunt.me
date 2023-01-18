<script lang="ts" setup>
const config = useAppConfig()

const title = $ref('Matthew Gaunt')
const description = $ref('Full-stack developer, budding designer, and tinkerer, working remotely.')

useHead({
  title: title,
  titleTemplate: `%s - ${config.name}`,
  link: [
    { rel: 'icon', href: '/favicon.ico', sizes: 'any' },
    { rel: 'icon', type: 'image/svg+xml', href: '/favicon.svg' },
    { rel: 'apple-touch-icon', href: '/meta/apple-touch-icon.png' },
    { rel: 'mask-icon', href: '/meta/mask-icon.svg' },
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
    { name: 'description', content: description },
    { property: 'og:title', content: title },
    { property: 'og:description', content: description },
    { property: 'og:image', content: 'https://gaunt.me/og/default.png' },
    { property: 'og:url', content: 'https://gaunt.me' },
    { property: 'og:type', content: 'website' },
    { name: 'twitter:creator', content: '@mattgaunt' },
    { name: 'twitter:site', content: '@mattgaunt' },
    { name: 'twitter:card', content: 'summary_large_image' },
    { name: 'twitter:image', content: 'https://gaunt.me/og/default.png' },
    { name: 'theme-color', content: '#fff', media: '(prefers-color-scheme: light)' },
    { name: 'theme-color', content: 'rgb(23, 23, 23)', media: '(prefers-color-scheme: dark)' },
  ],
  htmlAttrs: {
    lang: 'en',
  },
})
</script>

<template>
  <Body antialiased />
  
  <NuxtLayout>
    <NuxtPage />
  </NuxtLayout>
</template>
