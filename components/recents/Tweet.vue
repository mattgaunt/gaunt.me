<script lang="ts" setup>
const at = ref<HTMLElement>()
const retweet = ref<HTMLElement>()
const hashtag = ref<HTMLElement>()
const like = ref<HTMLElement>()

const refs = [at, retweet, hashtag, like]

refs.forEach((ref, i) => {
  useMotion(ref, {
    initial: {
      opacity: 0,
      y: -20,
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: 'spring',
        stiffness: 200,
        damping: 10,
        delay: 100 * i,
      },
    },
  })
})
</script>

<template>
  <div bg-neutral-900 bg-opacity-25 rounded-12 h-full>
    <a href="https://twitter.com/mattgaunt" target="_blank" hover="rotate-1 -translate-y-5" block transition duration-250 h-full>
      <Card
        from="#3283FD/75"
        to="#3283FD/100"
        overflow-hidden
        before:from-white
        before:from-opacity-15
        before:to-white
        before:to-opacity-15
      >
        <div flex flex-col h-full gap-4>
          <div flex-1>
            <div flex items-center relative>
              <img ref="at" src="/recents/twitter/at.svg" class="absolute -left-8 top-4 max-w-42">
              <img ref="retweet" src="/recents/twitter/retweet.svg" class="absolute right-12 top-none max-w-42">
              <img ref="hashtag" src="/recents/twitter/hashtag.svg" class="absolute left-16 top-42 max-w-42">
              <img ref="like" src="/recents/twitter/like.svg" class="absolute -right-8 top-48 max-w-42">
            </div>
          </div>
          <div flex-initial>
            <div flex justify-center w-full>
              <div space-y-8 text-left py-8 px-6>
                <div flex flex-col space-y-3 max-w-lg>
                  <p text-white text-opacity-75 tracking-wide>
                    18 Oct
                  </p> 

                  <h2 title-lg text-white>
                    Livewire 3 has me very excited for building Loadout.co
                  </h2>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Card>
    </a>
  </div>
</template>