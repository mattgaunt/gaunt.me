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
  <div bg-zinc-900 bg-opacity-25 rounded-10 h-full>
    <NuxtLink to="/notes" hover="rotate-1 -translate-y-5" block transition duration-250 h-full>
      <Card from-opacity-4 to-opacity-6 overflow-hidden p-4>
        <div flex flex-col h-full gap-4>
          <div flex-1 flex justify-center pt-8>
            <Calendar />
          </div>
          <div flex-initial>
            <div flex justify-center w-full>
              <div space-y-8 text-left p-6>
                <div flex flex-col space-y-3 max-w-lg>
                  <p text-white text-opacity-75 tracking-wide>
                    8 Nov
                  </p> 

                  <h2 title-lg text-white leading-snug>
                    Publishable Models with Laravel
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