<script lang="ts" setup>
const config = useAppConfig()

const beard = ref<HTMLElement>()
const robot = ref<HTMLElement>()
const headphones = ref<HTMLElement>()
const wave = ref<HTMLElement>()
const spring = ref<HTMLElement>()

const refs = [beard, robot, headphones, wave, spring]

refs.forEach((ref, i) => {
  useMotion(ref, {
    initial: {
      opacity: 0,
      y: -30,
    },
    visibleOnce: {
      opacity: 1,
      y: 0,
      transition: {
        type: 'spring',
        stiffness: 500,
        damping: 8,
        delay: 150 * i,
      },
    },
  })
})
</script>

<template>
  <div bg-zinc-900 bg-opacity-25 rounded-10 h-full>
    <a :href="config.socials.polywork" target="_blank" hover="-rotate-1 -translate-y-5" block transition duration-250 h-full>
      <Card
        from="#7B61FF/80"
        to="#7B61FF/100"
        overflow-hidden
        before:from-white
        before:from-opacity-15
        before:to-white
        before:to-opacity-15
        min-h-142
      >
        <div flex flex-col h-full gap-4>
          <div flex-1>
            <div flex items-center relative>
              <img ref="spring" alt="Spring" src="/recents/polywork/spring.png" class="absolute -right-4 top-38 max-w-46">
              <img ref="headphones" alt="Headphones" src="/recents/polywork/headphones.png" class="absolute left-32 top-64 max-w-24">
              <img ref="beard" alt="Beard" src="/recents/polywork/beard.png" class="absolute -left-4 top-24 max-w-36">
              <img ref="wave" alt="Wave" src="/recents/polywork/wave.png" class="absolute left-none -top-24 max-w-60">
              <img ref="robot" alt="Robot" src="/recents/polywork/robot.png" class="absolute -right-6 -top-4 max-w-56">
            </div>
          </div>
          <div flex-initial>
            <div flex justify-center w-full>
              <div space-y-6 text-center py-8 px-6>
                <div flex flex-col space-y-3 max-w-lg>
                  <Heading type="h2" text-3xl text-white>
                    I'm On Polywork
                  </Heading>

                  <p text-lg text-white text-opacity-75 tracking-normal>
                    I plan on keeping a regular changelog of what I'm building. Let's connect!
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Card>
    </a>
  </div>
</template>
