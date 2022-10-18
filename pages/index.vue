<script lang="ts" setup>
useHead({
  titleTemplate: 'Matthew Gaunt'
})

const first = ref<HTMLElement>()
const m = ref<HTMLElement>()
const a = ref<HTMLElement>()
const g = ref<HTMLElement>()
const i = ref<HTMLElement>()
const c = ref<HTMLElement>()

const letters = [m, a, g, i, c]

useMotion(first, {
  initial: {
    opacity: 0,
    y: -20,
  },
  enter: {
    opacity: 1,
    y: 0,
    transition: {
      type: 'spring',
      stiffness: 200,
      damping: 10,
      delay: 100,
    },
  },
})

letters.forEach((ref, i) => {
  useMotion(ref, {
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
        delay: 200 + 50 * i,
      },
    },
  })
})
</script>

<template>
  <div flex bg-neutral-800 highlight lg:rounded-8 w-full relative>
    <main id="main" relative flex flex-col lg:overflow-y-auto lg:max-h-page w-full>
      <Container max-w-7xl pb-32>
        <div flex flex-col space-y-16 relative>
          <div absolute ambiance rotate-180>
            <Magic absolute particles rotate-20 />
          </div>

          <div grid grid-cols-8 gap-24 items-center>
            <div col-span-6 col-start-2>
              <div flex flex-col items-center space-y-16 py-32 relative>
                <div flex flex-col items-center text-center max-w-172 space-y-10 relative>
                  <h1 text-76px text-neutral-500 font-bold leading-20>
                    <span ref="first" text-white transition>
                      Development, with a little
                      <span text="#F9FD33" inline-flex mr-4>
                        <span ref="m" text="#42DC7F">M</span>
                        <span ref="a" text="#5BE692">a</span>
                        <span ref="g" text="#6BED9F">g</span>
                        <span ref="i" text="#7DF4AC">i</span>
                        <span ref="c" text="#84F7B1">c.</span>
                      </span>
                    </span>
                  </h1>

                  <div max-w-40em px-2>
                    <p text-para text-neutral-400 font-light leading-relaxed tracking-wide>
                      I’m an all-stack developer, semi-capable designer and full
                      time tinkerer. If you can’t find me writing code, or designing
                      in Figma, I’ll likely be crying in AWS console.
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
                <span text-base text-neutral-400 tracking-wide>
                  Recent Updates
                </span>

                <Icon
                  name="ArrowDown"
                  size="24"
                  text-neutral-400
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
              </div>
            </div>
          </div>
        </div>
      </Container>
    </main>
  </div>
</template>
