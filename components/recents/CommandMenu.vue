<script lang="ts" setup>
const { query, groups } = useCommandPalette()
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
  <Card min-h-142 overflow-hidden>
    <div grid grid-cols-2 gap-8>
      <div col-span-2>
        <div flex justify-center w-full>
          <div space-y-8 text-center pt-12 pb-6 px-6>
            <div flex flex-col space-y-3 max-w-lg>
              <div flex flex-col items-center gap-y-3>
                <kbd font-sans inline-flex items-center justify-center bg-zinc-900 highlight shadow-white shadow-opacity-9 rounded-xl h-9 w-14 text-xl>⌘K</kbd>
                <Heading type="h2" text-3xl text-white>
                  Command Palette for Vue
                </Heading>
              </div>

              <p text-lg text-zinc-400 leading-relaxed tracking-normal>
                Fast, unstyled command menu component built for your Vue applications, releasing soon.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div col-span-2>
        <div max-h-68 h-full lg:px-8>
          <div flex justify-center items-center relative>
            <CommandPalette
              ref="commandPalette"
              by="id"
              placeholder
              placeholder-label="Search..."
              searchable
              :groups="groups"
              max-w-full
            />
          </div>
        </div>
      </div>
    </div>
  </Card>
</template>
