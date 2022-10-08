export default defineAppConfig({
  name: 'Matthew Gaunt',
  email: 'hello@gaunt.me',
  socials: {
    twitter: 'twitter.com/@mattgaunt',
    github: 'github.com/mattgaunt',
    polywork: 'polywork.com/mattgaunt',
    linkedin: 'linkedin.com/matthew.gaunt',
  },
})

declare module '@nuxt/schema' {
  interface AppConfigInput {
    name: string
    email: string,
    socials?: {
      twitter?: string
      github?: string
      polywork?: string
      linkedin?: string
    }
  }
}