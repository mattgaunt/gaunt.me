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
    visible: {
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
  <div bg-neutral-900 bg-opacity-25 rounded-12 h-full>
    <NuxtLink to="/notes" hover="-rotate-1 -translate-y-5" block transition duration-250 h-full>
      <Card from-opacity-4 to-opacity-6 overflow-hidden p-4>
        <div flex flex-col h-full gap-4>
          <div flex-1>
            <div flex items-center relative>
              <img ref="gem1" loading="lazy" src="/recents/nuxt/gem-1.svg" absolute left-36 top-38 max-w-46>
              <img ref="gem2" loading="lazy" src="/recents/nuxt/gem-2.svg" absolute right-12 top-24 max-w-24>
              <img ref="gem3" loading="lazy" src="/recents/nuxt/gem-3.svg" absolute left-12 top-64 max-w-36>
              <img ref="gem4" loading="lazy" src="/recents/nuxt/gem-4.svg" absolute left-12 top-8 max-w-60>
            
              <div from="#53E8AA/60" block absolute top-30 left-18 glow via-transparent blur-48 w-72 h-72 />
            </div>
          </div>
          <div flex-initial>
            <div flex justify-center w-full>
              <div space-y-8 text-left py-8 px-6>
                <div flex flex-col space-y-3 max-w-lg>
                  <p text-white text-opacity-75 tracking-wide>
                    17 Oct
                  </p> 

                  <h2 title-lg text-white leading-snug>
                    Creating themes with Nuxt 3
                  </h2>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Card>
    </NuxtLink>
  </div>
</template>