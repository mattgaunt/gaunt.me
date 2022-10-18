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
          <div min-h-xs h-full px-8 pt-4>
            <div flex justify-center items-center relative>
              <!-- Preview -->
            </div>
          </div>
        </div>
      </div>
    </Card>
  </template>