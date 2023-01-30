<script lang="ts" setup>
const title = ref<HTMLElement>()
const text = ref<HTMLElement>()
const button = ref<HTMLElement>()

const refs = [title, text, button]

refs.forEach((ref, i) => {
  useMotion(ref, {
    initial: {
      opacity: 0,
      y: 40,
    },
    enter: {
      opacity: 1,
      y: 0,
      transition: {
        type: 'spring',
        stiffness: 40,
        damping: 6,
        delay: 150 * i,
      },
    },
  })
})

useHead({
  title: 'Matthew Gaunt',
  titleTemplate: '%s - Full-stack developer',
})

definePageMeta({
  changefreq: 'monthly',
})
</script>

<template>
  <div flex bg-zinc-800 bg-opacity-40 lg:highlight rounded-none lg:rounded-l-6 lg:rounded-r-2 lg:overflow-hidden w-full>
    <main id="main" relative flex flex-col lg:overflow-y-auto lg:max-h-page w-full>
      <HeroPattern />

      <Container max-w-7xl py-24>
        <div flex flex-col space-y-16 relative>
          <div grid grid-cols-1 gap-24>
            <div col-span-1>
              <div flex flex-col items-center space-y-16 py-8 lg:py-32 relative>
                <div flex flex-col items-center text-center max-w-178 space-y-8 relative>
                  <h1 ref="title" font-heading text-5xl leading-tight lg:text-7xl lg:leading-20 text-white font-black>
                    Development, with a little Magic.
                  </h1>

                  <div max-w-42em px-2>
                    <p ref="text" text-xl text-zinc-400 font-normal leading-relaxed>
                      I’m a full-stack developer, semi-capable designer and notorious non-stop tinkerer.
                      If you can’t find me writing code, or designing in Figma, I’ll
                      be toying with game development.
                    </p>
                  </div>
                </div>

                <ButtonLink ref="button" to="/projects" prefetch>
                  View Projects
                  <svg viewBox="0 0 20 20" fill="none" aria-hidden="true" class="mt-0.5 h-6 w-6 -mr-2">
                    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="m11.5 6.5 3 3.5m0 0-3 3.5m3-3.5h-9" />
                  </svg>
                </ButtonLink>
              </div>
            </div>
          </div>

          <div grid grid-cols-1 gap-12 lg:gap-20>
            <div col-span-1>
              <div flex flex-col items-center gap-2>
                <span text-base text-zinc-400 tracking-wide>
                  Recent Updates
                </span>

                <Icon
                  name="ArrowDown"
                  size="24"
                  text-zinc-400
                />
              </div>
            </div>
            <div col-span-1>
              <div grid grid-cols-1 gap-4 lg:grid-cols-8 lg:gap-8>
                <div col-span-1 lg:col-span-3>
                  <RecentsNuxt3 />
                </div>
                <div col-span-1 lg:col-span-5>
                  <RecentsCommandMenu />
                </div>
                <div col-span-1 lg:col-span-5>
                  <RecentsStack />
                </div>
                <div col-span-1 lg:col-span-3>
                  <RecentsTweet />
                </div>
                <div col-span-1 lg:col-span-3>
                  <RecentsPolywork />
                </div>
                <div col-span-1 lg:col-span-5>
                  <RecentsAlwaysdead />
                </div>
                <div col-span-1 lg:col-span-5>
                  <RecentsLoadout />
                </div>
                <div col-span-1 lg:col-span-3>
                  <RecentsPublish />
                </div>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </main>
  </div>
</template>
