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
              <div flex flex-col space-y-3 max-w-lg>
                <Heading type="h2" text-3xl text-white>
                  Joined Mouseskins
                </Heading>
  
                <p text-lg text-zinc-400 leading-relaxed tracking-normal>
                  I've joined Mouseskins as their CTO. Super excited for what's coming
                  next year from them.
                </p>
              </div>
            </div>
          </div>
        </div>
        <div col-span-2>
          <div min-h-xs h-full px-8 pt-4>
            <div flex justify-center items-center relative>
              <!-- Preview -->
            </div>
          </div>
        </div>
      </div>
    </Card>
  </template>