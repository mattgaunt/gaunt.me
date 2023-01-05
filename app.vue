<script lang="ts" setup>
const config = useAppConfig()

const title = $ref('Matthew Gaunt')
const description = $ref('Full-stack developer, budding designer, and tinkerer, working remotely.')

useHead({
  title: title,
  titleTemplate: `%s - ${config.name}`,
  link: [
    { rel: 'icon', href: '/favicon.ico', sizes: 'any' },
    { rel: 'icon', type: 'image/svg+xml', href: '/favicon.svg', sizes: 'any' },
    { rel: 'mask-icon', href: '/meta/mask-icon.svg' },
    { rel: 'apple-touch-icon', href: '/meta/apple-touch-icon.png' },
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
  --body-background-color: #1c1c1c;
  --body-margin-left: max(24px, env(safe-area-inset-left));
  --body-margin-right: max(24px, env(safe-area-inset-right));
  --page-max-width: 1200px;
  --page-padding-default: 32px;
  --content-width: 640px;
  --scrollbar-color: theme('colors.zinc.800');
  --scrollbar-color-hover: theme('colors.zinc.700');
  --scrollbar-color-active: theme('colors.zinc.600');
  --scrollbar-width: 16px;
}

@layer base {
  body {
    @apply bg-zinc-900;
    @apply flex;
    @apply flex-col;
    @apply h-full;
    @apply min-h-screen;
    @apply antialiased;
    @apply font-sans;
    @apply text-white;
  }

  ::-webkit-scrollbar {
    @apply w-[var(--scrollbar-width)];
    @apply h-[var(--scrollbar-width)];
  }

  ::-webkit-scrollbar-thumb {
    @apply bg-[var(--scrollbar-color)];
    @apply rounded-[var(--scrollbar-width)];
    @apply border-5;
    @apply border-transparent;
    @apply bg-clip-content;
    @apply transition-colors;
    @apply transition-ease;
    @apply duration-200;
  }

  ::-webkit-scrollbar-thumb:hover {
    --scrollbar-color: var(--scrollbar-color-hover);
  }

  ::-webkit-scrollbar-thumb:active {
    --scrollbar-color: var(--scrollbar-color-active);
  }

  ::-webkit-scrollbar-track {
    @apply bg-transparent;
    @apply border-l;
    @apply border-white/5;
  }
}
</style>
