<script lang="ts" setup>
import { useMotion } from '@vueuse/motion'

const mobile = ref<HTMLElement>()

useMotion(mobile, {
  initial: {
    y: 80,
    scale: 0.8,
    opacity: 0,
  },
  visibleOnce: {
    y: 0,
    scale: 1,
    opacity: 1,
    transition: {
      type: 'spring',
      stiffness: 200,
      damping: 30,
      delay: 100,
    },
  },
})
</script>

<template>
  <div bg-neutral-700 highlight rounded-8 md:rounded-10 overflow-hidden>
    <div grid items-stretch gap-4 h-full>
      <div col-span-12>
        <div flex justify-center p-10 md:p-12>
          <h2 text-3xl md:text-4xl text-neutral-500 font-medium leading-tight md:leading-tight>
            <span text-white font-bold block>Digest on the go.</span> Great gaming content,
            at your fingertips.
          </h2>
        </div>
      </div>
      <div col-span-12>
        <div flex justify-center>
          <img
            ref="mobile"
            src="/projects/alwaysdead/mobile.png"
            alt="Alwaysdead Mobile"
            w-full
          />
        </div>
      </div>
    </div>
  </div>
</template>
