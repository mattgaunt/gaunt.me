export default defineNuxtPlugin(() => {
  useHead({
    script: [
      {
        'body': true,
        'defer': true,
        'src': 'https://plausible.io/js/plausible.js',
        'data-domain': 'gaunt.me',
      },
    ],
  })
})
