export default defineAppConfig({
  domain: 'https://gaunt.me',
  name: 'Matthew Gaunt',
  email: 'hello@gaunt.me',
  socials: {
    twitter: 'https://twitter.com/mattgaunt',
    github: 'https://github.com/mattgaunt',
    polywork: 'https://www.polywork.com/mattgaunt',
    linkedin: 'https://www.linkedin.com/in/matthew-gaunt-aa8769184/',
  },
})

declare module '@nuxt/schema' {
  interface AppConfigInput {
    domain: string
    name: string
    email: string
    socials?: {
      twitter?: string
      github?: string
      polywork?: string
      linkedin?: string
    }
  }
}
