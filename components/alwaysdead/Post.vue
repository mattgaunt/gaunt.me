<script lang="ts" setup>
defineProps({
  title: {
    type: String,
    required: true,
  },
  image: {
    type: String,
    required: true,
  },
  source: {
    type: String,
    required: true,
  },
  logo: {
    type: String,
    required: true,
  },
  date: {
    type: String,
    required: true,
  },
  reads: {
    type: String,
    required: true,
  },
})
</script>

<template>
  <article bg="#39393b" rounded-3xl overflow-hidden>
    <div group>
      <div flex flex-col space-y-4 p-4>
        <div flex flex-col flex-auto>
          <div bg-zinc-800 rounded-2xl w-full>
            <figure group-hover="opacity-80" flex-initial duration-250>
              <img
                :src="image"
                inline-flex
                items-center
                image-render-auto
                aspect-video
                object-cover
                rounded-xl
                w-full
              >
            </figure>
          </div>
        </div>
        <div flex-initial px-1>
          <div flex flex-col space-y-4>
            <div flex flex-col items-start space-y-4 min-h-38>
              <div flex items-center space-x-1 bg-zinc-800 bg-opacity-60 rounded-xl p-2>
                <div inline-flex items-center rounded-md overflow-hidden>
                  <img
                    :src="logo"
                    :alt="source"
                    inline-flex
                    aspect-square
                    w-5
                  >
                </div>
                <span text-sm text-white font-semibold px-1>
                  {{ source }}
                </span>
              </div>

              <h3 text-xl text-white font-bold line-clamp-3>
                {{ title }}
              </h3>
            </div>

            <div flex justify-between items-center>
              <div flex gap-2>
                <span text-sm text-zinc-300 font-medium>{{ date }}</span>
                <span text-sm text-zinc-300 font-medium>&middot;</span>
                <span text-sm text-zinc-300 font-medium>{{ reads }}</span>
              </div>
              <div flex gap-2>
                <button
                  aria-label="Comment"
                  hover="text-white"
                  flex
                  flex-col
                  transition
                  rounded-xl
                  text-zinc-300
                  p-1
                >
                  <div self-center text-xl>
                    <Icon name="Chat" />
                  </div>
                </button>
                <button
                  aria-label="Bookmark"
                  hover="text-white"
                  flex
                  flex-col
                  transition
                  rounded-xl
                  text-zinc-300
                  p-1
                >
                  <div self-center text-xl>
                    <Icon name="Bookmark" />
                  </div>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </article>
</template>
