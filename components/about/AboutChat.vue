<script lang="ts" setup>
const { openContactModal } = useContactModal()

const message = ref<HTMLElement>()
const reply = ref<HTMLElement>()

const refs = [message, reply]

refs.forEach((ref, i) => {
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
        delay: 200 * i,
      },
    },
  })
})
</script>

<template>
  <Card overflow-hidden p-none>
    <div grid grid-cols-6 items-stretch gap-12 py-16 lg:py-20>
      <div col-span-6>
        <div flex justify-center w-full>
          <div space-y-8 text-center px-6>
            <div flex flex-col space-y-6 max-w-lg>
              <Heading type="h2" text="#C1FA6B" text-4xl lg:text-5xl>
                Let's chat.
              </Heading>

              <p text-lg text-zinc-400 leading-relaxed>
                Want to work together, or just want to chat? I'm always open to see how I can help, or we can
                just play games together.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div col-span-6>
        <div flex flex-col items-center space-y-20 py-4>
          <div grid grid-cols-1 gap-none lg:grid-cols-2 lg:gap-8 max-w-3xl px-8>
            <div col-span-1 pr-12 lg:pr-none>
              <div ref="message" flex flex-col items-end relative>
                <div bg-white bg-opacity-10 rounded-t-3xl rounded-bl-3xl p-6>
                  <p text-lg text-white font-medium tracking-wide>
                    Hey, I'm Matthew! I'm free to chat anytime you want. Just let
                    me know below.
                  </p>
                </div>

                <svg width="48" height="16" viewBox="0 0 48 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M8 0H48V6.7861C48 13.4175 40.3953 17.1697 35.1325 13.135L24.461 4.95345C20.2709 1.74105 15.1385 0 9.85866 0H8Z" fill-white fill-opacity-10 />
                </svg>
              </div>
            </div>
            <div col-span-1 pt-12 pl-12 lg:pt-20 lg:pl-none>
              <div ref="reply" flex flex-col relative>
                <div bg="#C1FA6B" rounded-t-3xl rounded-br-3xl p-6>
                  <p text-lg text-zinc-900 font-medium tracking-wide>
                    Sure! Sounds good.
                  </p>
                </div>

                <svg width="48" height="16" viewBox="0 0 48 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M40 0H0V6.7861C0 13.4175 7.60471 17.1697 12.8675 13.135L23.539 4.95345C27.7291 1.74105 32.8615 0 38.1413 0H40Z" fill="#C1FA6B" />
                </svg>
              </div>
            </div>
          </div>

          <Button
            aria-label="Contact modal"
            font-semibold
            @click="openContactModal"
          >
            Get in touch
          </Button>
        </div>
      </div>
    </div>
  </Card>
</template>
