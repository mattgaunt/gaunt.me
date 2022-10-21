<script lang="ts" setup>
const left = ref<HTMLElement>()
const right = ref<HTMLElement>()

const refs = [left, right]

refs.forEach((ref, i) => {
  useMotion(ref, {
    initial: {
      y: 20,
      scale: 0.9,
      opacity: 0,
    },
    visibleOnce: {
      y: 10,
      scale: 1,
      opacity: 1,
      transition: {
        type: 'spring',
        stiffness: 250,
        damping: 40,
        delay: 100 * i,
      },
    },
  })
})
</script>

<template>
  <Card min-h-130 overflow-hidden>
    <div grid grid-cols-2 gap-8>
      <div col-span-2>
        <div flex justify-center w-full>
          <div space-y-8 text-center pt-12 pb-6 px-6>
            <div flex flex-col space-y-4 max-w-lg>
              <h2 text-3xl text-white font-bold tracking-px>
                My Stack
              </h2>

              <p text-lg text-neutral-400 leading-relaxed tracking-wide>
                I’ve added a new section to the site that includes all of the
                tools and stack that I use daily.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div col-span-2>
        <div max-h-xs h-full px-8 pt-4>
          <div flex justify-center items-center relative>
            <div grid grid-cols-2 gap-4 w-full>
              <div rotate="-3" col-span-1 grid gap-4>
                <div
                  flex
                  flex-col
                  transition
                  duration-250
                  bg-white
                  bg-opacity-7
                  rounded-3xl
                  highlight
                  px-8
                  py-6
                >
                  <div flex flex-col items-center gap-4>
                    <div flex items-center flex-none py-6>
                      <div inline-flex rounded-8 overflow-hidden>
                        <img src="/stack/loom.webp" aspect-square max-w-20>
                      </div>
                    </div>
                    <div flex flex-1 justify-between w-full>
                      <div bg-neutral-800 rounded-xl h-6 w-20 />

                      <div flex gap-1>
                        <div
                          v-for="i in 2"
                          flex
                          items-center
                          bg-neutral-800
                          rounded-3xl
                          w-16
                          h-6
                          px-2
                        >
                          <div bg-white bg-opacity-12 rounded-xl w-full h-2 />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div
                  flex
                  flex-col
                  transition
                  duration-250
                  bg-white
                  bg-opacity-7
                  rounded-3xl
                  highlight
                  px-8
                  py-6
                >
                  <div flex flex-col items-center gap-4>
                    <div flex items-center flex-none py-6>
                      <div inline-flex rounded-8 overflow-hidden>
                        <img src="/stack/contrast.webp" aspect-square max-w-20>
                      </div>
                    </div>
                    <div flex flex-1 justify-between w-full>
                      <div bg-neutral-800 rounded-xl h-6 w-20 />

                      <div flex gap-1>
                        <div
                          v-for="i in 2"
                          flex
                          items-center
                          bg-neutral-800
                          rounded-3xl
                          w-16
                          h-6
                          px-2
                        >
                          <div bg-white bg-opacity-12 rounded-xl w-full h-2 />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div rotate="-3" col-span-1 grid gap-4>
                <div
                  flex
                  flex-col
                  transition
                  duration-250
                  bg-white
                  bg-opacity-7
                  rounded-3xl
                  highlight
                  px-8
                  py-6
                >
                  <div flex flex-col items-center gap-4>
                    <div flex items-center flex-none py-6>
                      <div inline-flex rounded-8 overflow-hidden>
                        <img src="/stack/contrast.webp" aspect-square max-w-20>
                      </div>
                    </div>
                    <div flex flex-1 justify-between w-full>
                      <div bg-neutral-800 rounded-xl h-6 w-20 />

                      <div flex gap-1>
                        <div
                          v-for="i in 2"
                          flex
                          items-center
                          bg-neutral-800
                          rounded-3xl
                          w-16
                          h-6
                          px-2
                        >
                          <div bg-white bg-opacity-12 rounded-xl w-full h-2 />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div
                  flex
                  flex-col
                  transition
                  duration-250
                  bg-white
                  bg-opacity-7
                  rounded-3xl
                  highlight
                  px-8
                  py-6
                >
                  <div flex flex-col items-center gap-4>
                    <div flex items-center flex-none py-6>
                      <div inline-flex rounded-8 overflow-hidden>
                        <img src="/stack/loom.webp" aspect-square max-w-20>
                      </div>
                    </div>
                    <div flex flex-1 justify-between w-full>
                      <div bg-neutral-800 rounded-xl h-6 w-20 />

                      <div flex gap-1>
                        <div
                          v-for="i in 2"
                          flex
                          items-center
                          bg-neutral-800
                          rounded-3xl
                          w-16
                          h-6
                          px-2
                        >
                          <div bg-white bg-opacity-12 rounded-xl w-full h-2 />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </Card>
</template>