<script lang="ts" setup>
const left = ref<HTMLElement>()
const right = ref<HTMLElement>()

useMotion(left, {
  initial: {
    rotate: 0,
    scale: 0.95,
    x: 25,
  },
  visibleOnce: {
    rotate: -3,
    x: 0,
    transition: {
      type: 'spring',
      stiffness: 150,
      damping: 30,
      delay: 150,
    },
  },
})

useMotion(right, {
  initial: {
    rotate: 0,
    scale: 0.95,
    x: -25,
  },
  visibleOnce: {
    rotate: 3,
    x: 0,
    transition: {
      type: 'spring',
      stiffness: 150,
      damping: 30,
      delay: 150,
    },
  },
})
</script>

<template>
  <Card min-h-142 overflow-hidden pb-none>
    <div grid grid-cols-2 gap-y-8 items-stretch>
      <div col-span-2>
        <div flex justify-center w-full relative z-10>
          <div space-y-8 text-center pt-12 pb-6 px-6>
            <div flex flex-col space-y-3 max-w-lg>
              <Heading type="h2" text-3xl text-white>
                Next Level Betting
              </Heading>

              <p text-lg text-zinc-400 leading-relaxed tracking-normal>
                Building the next generation of betting for esports and sports as a senior frontend engineer.
              </p>
            </div>

            <Button
              component="a"
              href="https://www.midnite.com"
              target="_blank"
              aria-label="Visit Midnite"
              font-black
            >
              View Project
            </Button>
          </div>
        </div>
      </div>
      <div col-span-2>
        <div overflow-visible h-full max-h-48>
          <div flex justify-center items-center relative>
            <NuxtImg
              src="/projects/midnite/wave.svg"
              alt="Midnite"
              mt="-32"
              select-none
              relative
              w-full
              min-w-220
            />
          </div>
        </div>
      </div>
    </div>
  </Card>
</template>
