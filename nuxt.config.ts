export default defineNuxtConfig({
  $production: {
    experimental: {
      noVueServer: true,
    },
  },

  experimental: {
    componentIslands: true,
    payloadExtraction: true,
    typedPages: true,
  },

  runtimeConfig: {
    public: {
      siteUrl: 'https://gaunt.me',
    },
  },

  nitro: {
    future: { nativeSWR: true },
    prerender: {
      concurrency: 12,
      crawlLinks: true,
      routes: [
        '/',
        '/about',
        '/projects',
        '/bookmarks',
        '/stack',
        '/sitemap.xml',
      ],
    },
  },

  routeRules: {
    '/notes/hybridly-an-inertia-replacement': {
      redirect: '/notes/hybridly-an-inertia-alternative',
    },
  },

  modules: [
    '@nuxt/content',
    '@nuxt/image',
    '@nuxt-themes/tokens',
    '@nuxtjs/plausible',
    '@unocss/nuxt',
    '@vueuse/nuxt',
    '@vueuse/motion/nuxt',
  ],

  css: [
    '@unocss/reset/tailwind.css',
    '~/styles/fonts.css',
    '~/styles/global.css',
  ],

  image: {
    provider: 'vercel',
    domains: [
      'opengraph.githubassets.com',
    ],
  },

  content: {
    highlight: {
      theme: 'dracula',
      preload: ['php', 'js', 'ts', 'vue', 'diff'],
    },
    markdown: {
      remarkPlugins: ['remark-reading-time'],
    },
  },
})
