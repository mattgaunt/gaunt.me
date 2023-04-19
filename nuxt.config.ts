export default defineNuxtConfig({
  experimental: {
    reactivityTransform: true,
  },
  app: {
    head: {
      script: [
        {
          'defer': true,
          'src': 'https://plausible.io/js/script.js',
          'data-domain': 'gaunt.me',
        },
      ],
    },
  },
  runtimeConfig: {
    domain: 'https://gaunt.me',
  },
  nitro: {
    routeRules: {
      '/notes/hybridly-an-inertia-replacement': {
        redirect: '/notes/hybridly-an-inertia-alternative',
      },
    },
    prerender: {
      routes: ['/sitemap.xml'],
    },
  },
  modules: [
    '@unocss/nuxt',
    '@nuxt-themes/tokens',
    '@nuxt/content',
    '@nuxt/image-edge',
    '@vueuse/nuxt',
    '@vueuse/motion/nuxt',
    '@vue-macros/nuxt',
  ],
  css: [
    '@unocss/reset/tailwind.css',
    '~/styles/fonts.css',
    '~/styles/global.css',
  ],
  pinceau: {
    configFileName: 'tokens.config',
  },
  image: {
    provider: 'vercel',
  },
  content: {
    markdown: {
      remarkPlugins: ['remark-reading-time'],
    },
    highlight: {
      theme: 'dracula',
      preload: [
        'php',
        'js',
        'ts',
        'html',
        'css',
        'vue',
        'diff',
      ],
    },
  },
})
