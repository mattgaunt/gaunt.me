<script lang="ts" setup>
const gem1 = ref<HTMLElement>()
const gem2 = ref<HTMLElement>()
const gem3 = ref<HTMLElement>()
const gem4 = ref<HTMLElement>()

const gems = [gem1, gem2, gem3, gem4]

gems.forEach((ref, i) => {
  useMotion(ref, {
    initial: {
      opacity: 0,
      y: -30,
      scale: 0.9,
    },
    visibleOnce: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        type: 'spring',
        stiffness: 200,
        damping: 50,
        delay: 150 * i,
      },
    },
  })
})
</script>

<template>
  <div bg-zinc-900 bg-opacity-25 rounded-10 h-full>
    <NuxtLink to="/notes/creating-themes-with-nuxt-3" hover="-rotate-1 -translate-y-5" block transition duration-250 h-full>
      <Card min-h-142 overflow-hidden p-4>
        <div flex flex-col h-full gap-4>
          <div flex-1>
            <div flex items-center relative>
              <img ref="gem1" loading="lazy" alt="Gem" src="/recents/nuxt/gem-1.svg" absolute left-36 top-38 max-w-46>
              <img ref="gem2" loading="lazy" alt="Gem" src="/recents/nuxt/gem-2.svg" absolute right-12 top-24 max-w-24>
              <img ref="gem3" loading="lazy" alt="Gem" src="/recents/nuxt/gem-3.svg" absolute left-12 top-64 max-w-36>
              <img ref="gem4" loading="lazy" alt="Gem" src="/recents/nuxt/gem-4.svg" absolute left-12 top-8 max-w-60>

              <div from="#53E8AA/60" block absolute top-30 left-18 glow via-transparent blur-48 w-72 h-72 />
            </div>
          </div>
          <div flex-initial>
            <div flex justify-start w-full>
              <div space-y-8 text-left p-6>
                <div flex flex-col space-y-2 max-w-lg>
                  <p text-sm text-zinc-400 font-medium tracking-normal>
                    17 Oct
                  </p>

                  <Heading type="h2" text-3xl text-white>
                    Creating themes with Nuxt 3
                  </Heading>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Card>
    </NuxtLink>
  </div>
</template>
