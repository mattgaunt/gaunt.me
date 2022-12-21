<script lang="ts" setup>
const left = ref<HTMLElement>()
const right = ref<HTMLElement>()

const refs = [left, right]

refs.forEach((ref, index) => {
  useMotion(ref, {
    initial: {
      y: 80,
      scale: 0.9,
      opacity: 0,
    },
    visibleOnce: {
      y: 0,
      scale: 1,
      opacity: 1,
      transition: {
        type: 'spring',
        stiffness: 200,
        damping: 15,
        delay: 200 * index,
      },
    },
  })
})
</script>

<template>
  <Card overflow-hidden p-none>
    <div flex flex-col items-stretch p-10 md:p-20>
      <div grid grid-cols-6 gap-6 md:gap-12>
        <div col-span-6 md:col-span-3>
          <div flex items-center w-full>
            <div flex flex-col items-start space-y-12 md:py-4>
              <h2 text-5xl font-extrabold leading-tight>
                A Full-Stack Developer and Designer
                Based in the UK.
              </h2>

              <Button
                component="a"
                href="https://polywork.com/mattgaunt"
                target="_blank"
                aria-label="View Changelog"
                font-black
              >
                Changelog
              </Button>
            </div>
          </div>
        </div>
        <div col-span-6 md:col-span-3>
          <div flex items-center w-full>
            <div flex flex-col space-y-6>
              <div prose text-xl text-zinc-300 tracking-wide max-w-full>
                <p>
                  Hey, I'm Matthew. I'm a full-stack developer, budding designer and all round tinkerer. I was most recently
                  leading frontend engineering at <a href="https://midnite.com/" font-medium text-white underline-zinc-500 underline-wavy>Midnite</a>, before leaving earlier this year to persuit
                  my own enthusiasm of building product.
                </p>
                <p>
                  Before Midnite, I co-founded <a href="https://stormfoundry.co/" font-medium text-white underline-zinc-500 underline-wavy>Stormfoundry</a>, a development studio working primarily with companies in gaming and esports.
                </p>
                <p>
                  I've developed everything from in-game content portals, to tournament platforms and sportsbooks. I thrive in an early-stage environment where it's all about getting a product in the hands of the users.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </Card>
</template>
