<script lang="ts" setup>
useHead({
  titleTemplate: 'Matthew Gaunt'
})

const magic = ref<HTMLElement>()

useMotion(magic, {
  initial: {
    opacity: 0,
    y: -20,
  },
  enter: {
    opacity: 1,
    y: 0,
    transition: {
      type: 'spring',
      stiffness: 150,
      damping: 8,
      delay: 150,
    },
  },
})
</script>

<template>
  <div flex bg-zinc-800 bg-opacity-40 highlight rounded-l-6 rounded-r-2 w-full>
    <main id="main" relative flex flex-col lg:overflow-y-auto lg:max-h-page w-full>
      <HeroPattern />

      <Container max-w-7xl py-24>
        <div flex flex-col space-y-16 relative>
          <div grid grid-cols-6 gap-24 items-center>
            <div col-span-4 col-start-2>
              <div flex flex-col items-center space-y-16 py-32 relative>
                <div flex flex-col items-center text-center max-w-178 space-y-8 relative>
                  <h1 inline-block title-2xl lg:(title-3xl leading-20) text-white font-extrabold>
                    Development, with a little Magic.
                  </h1>

                  <div max-w-42em px-2>
                    <p text-xl text-zinc-400 font-normal leading-relaxed>
                      I’m a full-stack developer, semi-capable designer and notorious non-stop tinkerer.
                      If you can’t find me writing code, or designing in Figma, I’ll
                      likely be crying in AWS console.
                    </p>
                  </div>
                </div>

                <ButtonLink to="/projects" prefetch>
                  View Projects
                </ButtonLink>
              </div>
            </div>
          </div>

          <div grid grid-cols-8 gap-20>
            <div col-span-8>
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
            <div col-span-8>
              <div grid grid-cols-8 gap-8>
                <div col-span-3>
                  <RecentsNuxt3 />
                </div>
                <div col-span-5>
                  <RecentsAlwaysdead />
                </div>
                <div col-span-5>
                  <RecentsStack />
                </div>
                <div col-span-3>
                  <RecentsTweet />
                </div>
                <div col-span-3>
                  <RecentsPolywork />
                </div>
                <div col-span-5>
                  <RecentsLoadout />
                </div>
                <div col-span-5>
                  <RecentsLoadout />
                </div>
                <div col-span-3>
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
