<script lang="ts" setup>
import { useMotion } from '@vueuse/motion'

const wolf1 = ref<HTMLElement>()
const wolf2 = ref<HTMLElement>()
const wolf3 = ref<HTMLElement>()
const wolf4 = ref<HTMLElement>()
const wolf5 = ref<HTMLElement>()
const wolf6 = ref<HTMLElement>()

const first = [wolf1, wolf3, wolf5]
const second = [wolf2, wolf4, wolf6]

first.forEach((ref, index) => {
  useMotion(ref, {
    initial: {
      rotate: 0,
      opacity: 0,
      scale: 0.7,
    },
    visibleOnce: {
      rotate: -6,
      opacity: 1,
      scale: 1,
      transition: {
        type: 'spring',
        stiffness: 300,
        damping: 10,
        delay: 100 * index,
      },
    },
  })
})

second.forEach((ref, index) => {
  useMotion(ref, {
    initial: {
      rotate: 0,
      opacity: 0,
      scale: 0.7,
    },
    visibleOnce: {
      rotate: 6,
      opacity: 1,
      scale: 1,
      transition: {
        type: 'spring',
        stiffness: 300,
        damping: 10,
        delay: 100 * index,
      },
    },
  })
})
</script>

<template>
  <div bg-neutral-700 highlight rounded-8 md:rounded-10 overflow-hidden>
    <div grid items-stretch gap-4 h-full>
      <div col-span-12>
        <div flex justify-center p-10 md:p-12>
          <h2 text-3xl md:text-4xl text-neutral-500 font-medium leading-tight md:leading-tight>
            <span text-white font-bold block>Midnite Wolf Pack.</span> Supercharged fandom through NFTs.
          </h2>
        </div>
      </div>
      <div col-span-12>
        <div flex flex-col justify-center h-full py-8>
          <div grid grid-cols-3 gap-12 lg:gap-16 w-full>
            <div col-span-1>
              <figure ref="wolf1" relative overflow-hidden aspect-square rounded-3xl>
                <NuxtImg
                  src="/projects/wolfpack/wolf-001.png"
                  absolute
                  inset-none
                  object-cover
                  w-full
                  h-full
                />
              </figure>
            </div>
            <div col-span-1>
              <figure ref="wolf2" relative overflow-hidden aspect-square rounded-3xl>
                <NuxtImg
                  src="/projects/wolfpack/wolf-002.png"
                  absolute
                  inset-none
                  object-cover
                  w-full
                  h-full
                />
              </figure>
            </div>
            <div col-span-1>
              <figure ref="wolf3" relative overflow-hidden aspect-square rounded-3xl>
                <NuxtImg
                  src="/projects/wolfpack/wolf-003.png"
                  absolute
                  inset-none
                  object-cover
                  w-full
                  h-full
                />
              </figure>
            </div>
            <div col-span-1>
              <figure ref="wolf4" relative overflow-hidden aspect-square rounded-3xl>
                <NuxtImg
                  src="/projects/wolfpack/wolf-004.png"
                  absolute
                  inset-none
                  object-cover
                  w-full
                  h-full
                />              
              </figure>
            </div>
            <div col-span-1>
              <figure ref="wolf5" relative overflow-hidden aspect-square rounded-3xl>
                <NuxtImg
                  src="/projects/wolfpack/wolf-005.png"
                  absolute
                  inset-none
                  object-cover
                  w-full
                  h-full
                />              
              </figure>
            </div>
            <div col-span-1>
              <figure ref="wolf6" relative overflow-hidden aspect-square rounded-3xl>
                <NuxtImg
                  src="/projects/wolfpack/wolf-006.png"
                  absolute
                  inset-none
                  object-cover
                  w-full
                  h-full
                />
              </figure>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
