export default defineNuxtConfig({
  experimental: {
    reactivityTransform: true,
  },
  app: {
    head: {
      script: [
        {
          defer: true,
          src: 'https://plausible.io/js/script.js',
          'data-domain': 'gaunt.me',
        },
      ],
    },
  },
  modules: [
    '@nuxt/content',
    '@nuxt/image-edge',
    '@vueuse/nuxt',
    '@vueuse/motion/nuxt',
    '@unocss/nuxt',
  ],
  content: {
    documentDriven: true,
    highlight: {
      theme: 'dracula',
    },
  },
  unocss: {
    preflight: true,
  },
})
