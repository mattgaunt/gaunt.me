<script lang="ts" setup>
const title = $ref('Matthew Gaunt')
const description = $ref('Full-stack developer, budding designer, and tinkerer, working remotely.')

useHead({
  title: title,
  link: [
    { rel: 'icon', href: '/favicon.ico', sizes: 'any' },
    { rel: 'icon', type: 'image/svg+xml', href: '/favicon.svg', sizes: 'any' },
    { rel: 'mask-icon', href: '/meta/mask-icon.svg' },
    { rel: 'apple-touch-icon', href: '/meta/apple-touch-icon.png' },
  ],
  meta: [
    { name: 'description', content: description },
    { name: 'og:title', content: title },
    { name: 'og:description', content: description },
    { name: 'og:url', content: 'https://gaunt.me' },
    { name: 'og:type', content: 'website' },
    { name: 'og:image', content: 'https://gaunt.me/og/default.png' },
    { name: 'twitter:creator', content: '@mattgaunt' },
    { name: 'twitter:card', content: 'summary_large_image' },
    { name: 'twitter:image', content: 'https://gaunt.me/og/default.png' },
    { name: 'theme-color', content: '#fff', media: '(prefers-color-scheme: light)' },
    { name: 'theme-color', content: 'rgb(23, 23, 23)', media: '(prefers-color-scheme: dark)' },
  ],
})
</script>

<template>
  <NuxtLayout>
    <NuxtPage />
  </NuxtLayout>
</template>

<style>
* {
  scrollbar-width: thin;
  scrollbar-color: #2e2e2e transparent;
}

:root {
  --body-margin-left: max(24px, env(safe-area-inset-left));
  --body-margin-right: max(24px, env(safe-area-inset-right));
  --body-background-color: #1c1c1c;
  --content-width: 640px;
  --scrollbar-width: 12px;
  --scrollbar-color: #333;
}

body {
  @apply bg-neutral-900;
  @apply flex;
  @apply flex-col;
  @apply h-full;
  @apply min-h-screen;
  @apply antialiased;
  @apply font-sans;
  @apply text-white;
}

::-webkit-scrollbar {
  width: var(--scrollbar-width);
  height: var(--scrollbar-width);
}

::-webkit-scrollbar-thumb {
  background-color: var(--scrollbar-color);
  border-radius: var(--scrollbar-width);
  border: 3px solid transparent;
  background-clip: content-box;
  -webkit-transition: background .2s ease;
  transition: background .2s ease;
}

::-webkit-scrollbar-thumb:hover {
  --scrollbar-color: #707070;
}

::-webkit-scrollbar-thumb:active {
  --scrollbar-color: #a0a0a0;
}

::-webkit-scrollbar-track {
  background: transparent;
}
</style>
