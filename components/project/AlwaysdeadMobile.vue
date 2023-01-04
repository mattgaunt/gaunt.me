<script lang="ts" setup>
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
  <Card overflow-hidden p-none>
    <div grid items-stretch gap-4 h-full>
      <div col-span-12>
        <div flex flex-col gap-2 p-10 md:p-12>
          <Heading type="h2" text-3xl text-white>
            Digest on the go.
          </Heading>

          <p text-xl md:text-2xl text-zinc-400 leading-tight>
            Great gaming content, at your fingertips.
          </p>
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
  </Card>
</template>
