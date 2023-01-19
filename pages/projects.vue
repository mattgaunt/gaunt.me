<script lang="ts" setup>
useHead({
  title: 'Projects',
  meta: [
    { property: 'og:image', content: 'https://gaunt.me/og/projects.png' },
    { name: 'twitter:image', content: 'https://gaunt.me/og/projects.png' },
  ],
})

definePageMeta({
  changefreq: 'monthly',
})
</script>

<template>
  <div flex bg-zinc-800 bg-opacity-40 highlight rounded-6 lg:rounded-l-6 lg:rounded-r-2 w-full>
    <main id="main" relative flex flex-col lg:overflow-y-auto lg:max-h-page w-full>
      <Container max-w-6xl py-20 lg:py-32>
        <ListDetailView
          title="Projects"
          description="Some of the projects I've been heavily involved in over the last few years."
          icon="Code"
        >
          <div flex flex-col space-y-3>
            <div grid grid-cols-1 gap-4 md:gap-8>
              <div col-span-1>
                <ProjectAlwaysdead />
              </div>
              <div col-span-1>
                <div grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-8>
                  <div col-span-1 flex>
                    <ProjectCheckpoint />
                  </div>
                  <div col-span-1 flex>
                    <ProjectAlwaysdeadMobile />
                  </div>
                </div>
              </div>
              <div col-span-1>
                <ProjectMidnite />
              </div>
              <div col-span-1>
                <div grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-8>
                  <div col-span-1 flex>
                    <ProjectMidniteNft />
                  </div>
                  <div col-span-1 flex>
                    <ProjectForums />
                  </div>
                </div>
              </div>
              <div col-span-1>
                <ProjectLoadout />
              </div>
            </div>
          </div>
        </ListDetailView>
      </Container>
    </main>
  </div>
</template>
