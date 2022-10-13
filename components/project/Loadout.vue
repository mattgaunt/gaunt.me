<script lang="ts" setup>
const one = ref<HTMLElement>(null)
const two = ref<HTMLElement>(null)
const three = ref<HTMLElement>(null)
const four = ref<HTMLElement>(null)
const five = ref<HTMLElement>(null)

const refs = [one, two, three, four, five]

refs.forEach((ref, index) => {
  useMotion(ref, {
    initial: {
      y: -20,
      opacity: 0,
    },
    visibleOnce: {
      y: 0,
      opacity: 1,
      transition: {
        type: 'spring',
        stiffness: 200,
        damping: 8,
        delay: 200 * index,
      },
    }
  })
})
</script>

<template>
  <div bg-neutral-700 highlight rounded-8 md:rounded-10 overflow-hidden>
    <div grid grid-cols-2 items-stretch gap-4>
      <div col-span-2>
        <div flex justify-center w-full>
          <div space-y-8 text-center py-16 md:py-20 px-6>
            <div flex flex-col space-y-6 max-w-lg>
              <h2 text="#FF5E33" text-4xl md:text-5xl font-bold tracking-px>
                Loadout with style.
              </h2>

              <p text-lg text-neutral-400 leading-relaxed tracking-wide>
                The discovery platform for great gaming gear. It helps you become a better gamer, streamer or
                content creator by matching with the pros.
              </p>
            </div>

            <Button
              component="a"
              href="https://www.loadout.xyz"
              target="_blank"
              aria-label="Visit Loadout"
              font-black
            >
              View Project
            </Button>
          </div>
        </div>
      </div>
      <div col-span-2 max-h-md h-full>
        <div flex justify-center items-center>
          <div flex items-start justify-center gap-5 w-full px-16>
            <div grid grid-flow-row gap-6 pt-12>
              <LoadoutCategory
                ref="one"
                name="Mice"
                count="423"
                icon="Mouse"
              />
              <LoadoutBrand
                ref="four"
                name="Fnatic Gear"
                username="fnatic"
                image="/projects/loadout/fnatic.png"
              />
            </div>
            <div grid grid-flow-row gap-6>
              <LoadoutProduct
                ref="two"
                name="Arctis Pro Wireless"
                brand="SteelSeries"
                image="/projects/loadout/headset.png"
              />
            </div>
            <div grid grid-flow-row gap-6 pt-24>
              <LoadoutBrand
                ref="three"
                name="Logitech"
                username="logitech"
                image="/projects/loadout/logitech.png"
              />
              <LoadoutCategory
                ref="five"
                name="Keyboards"
                count="178"
                icon="Keyboard"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
