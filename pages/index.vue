<script lang="ts" setup>
useHead({
  titleTemplate: 'Matthew Gaunt'
})

const first = ref<HTMLElement>()
const second = ref<HTMLElement>()
const third = ref<HTMLElement>()
const fourth = ref<HTMLElement>()
const m = ref<HTMLElement>()
const a = ref<HTMLElement>()
const g = ref<HTMLElement>()
const i = ref<HTMLElement>()
const c = ref<HTMLElement>()

const words = [first, second, third, fourth]
const letters = [m, a, g, i, c]

words.forEach((ref, i) => {
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
        stuffiness: 200,
        damping: 10,
        delay: 800 * i,
      },
    },
  })
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
      <Container max-w="77.5rem" pt-8 pb-32>
        <div flex flex-col space-y-8>
          <div grid grid-cols-8 gap-24 items-center>
            <div col-span-5>
              <div flex flex-col items-start space-y-12 py-12 md:py-24 md:px-12>
                <div w-full max-w-2xl relative>
                  <h1 text-7xl text-neutral-500 font-bold leading-20>
                    <span ref="first" text-white>
                      Developing with
                      <span text="#F9FD33" inline-flex mr-4>
                        <span ref="m">M</span>
                        <span ref="a">a</span>
                        <span ref="g">g</span>
                        <span ref="i">i</span>
                        <span ref="c">c.</span>
                      </span>
                    </span>
                    <span ref="second" text-neutral-500 text-opacity-75>And Strong Coffee.</span>&nbsp;
                    <span ref="third" text-neutral-500 text-opacity-75>And Something.</span>&nbsp;
                    <span ref="fourth" text-neutral-500 text-opacity-75>Remotely.</span>
                  </h1>
                </div>

                <p text-2xl text-neutral-400 leading-relaxed>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt
                  ut labore et dolore magna aliqua. Quis nostrud exercita ullamco nisi ut
                  aliquip ex ea commodo consequ. Duis aute irure dolor in reprehen
                  in voluptate velit esse cillum dolore eu fugiat nulla pariatur<span text-opacity-75>*</span>.
                </p>

                <NuxtLink
                  to="/about"
                  text-lg
                  font-medium
                  text-white
                  tracking-wide
                  underline
                  underline-neutral-500
                  underline-wavy
                >
                  Learn more →
                </NuxtLink>
              </div>
            </div>
            <div col-span-3>
              <Climbing text-neutral-400 max-w-58 mx-auto />
            </div>
          </div>
          
          <div grid grid-cols-12 gap-4>
            <div col-span-7>
              <div
                bg-neutral-700
                highlight
                rounded-8
                aspect-square
              />
            </div>
            <div col-span-5>
              <div
                bg-neutral-700
                highlight
                rounded-8
                h-full
              />
            </div>
            <div col-span-5>
              <div
                bg-neutral-700
                highlight
                rounded-8
                aspect-square
              />
            </div>
            <div col-span-7>
              <div
                bg-neutral-700
                highlight
                rounded-8
                h-full
              />
            </div>
          </div>
        </div>
      </Container>
    </main>
  </div>
</template>
