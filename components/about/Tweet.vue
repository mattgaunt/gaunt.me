<script lang="ts" setup>
const config = useAppConfig()

const at = ref<HTMLElement>()
const retweet = ref<HTMLElement>()
const hashtag = ref<HTMLElement>()
const like = ref<HTMLElement>()

const refs = [at, retweet, hashtag, like]

refs.forEach((ref, i) => {
  useMotion(ref, {
    initial: {
      opacity: 0,
      scale: 0.5,
    },
    visibleOnce: {
      opacity: 1,
      scale: 1,
      transition: {
        type: 'spring',
        stiffness: 400,
        damping: 8,
        delay: 100 * i,
      },
    },
  })
})
</script>

<template>
  <div bg-zinc-900 bg-opacity-25 rounded-10 h-full>
    <a :href="config.socials.twitter" target="_blank" hover="-rotate-1 -translate-y-5" block transition duration-250 h-full>
      <Card
        from="#3283FD/75"
        to="#3283FD/100"
        overflow-hidden
        min-h-124
        before:from-white
        before:from-opacity-15
        before:to-white
        before:to-opacity-15
      >
        <div flex flex-col h-full gap-4>
          <div flex-1>
            <div flex items-center relative>
              <img ref="at" alt="At" src="/recents/twitter/at.svg" class="absolute -left-8 top-4 max-w-24 md:max-w-42">
              <img ref="retweet" alt="Retweet" src="/recents/twitter/retweet.svg" class="absolute right-12 top-none max-w-24 md:max-w-42">
              <img ref="hashtag" alt="Hashtag" src="/recents/twitter/hashtag.svg" class="absolute left-16 top-32 md:top-42 max-w-24 md:max-w-42">
              <img ref="like" alt="Like" src="/recents/twitter/like.svg" class="absolute -right-8 top-40 md:top-48 max-w-24 md:max-w-42">
            </div>
          </div>
          <div flex-initial>
            <div flex justify-center w-full>
              <div space-y-8 text-left p-6>
                <div flex flex-col space-y-2 max-w-lg>
                  <p text-sm text-white text-opacity-75 font-medium>
                    18 Oct
                  </p>

                  <Heading type="h2" text-3xl text-white>
                    Livewire 3 has me very excited for building Loadout.co
                  </Heading>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Card>
    </a>
  </div>
</template>
