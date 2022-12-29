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
            <div flex flex-col items-start space-y-3 min-h-36>
              <div flex items-center space-x-1 bg-zinc-800 bg-opacity-60 rounded-xl px-2 h-8>
                <div inline-flex items-center rounded-md overflow-hidden>
                  <img
                    :src="logo"
                    :alt="source"
                    inline-flex
                    aspect-square
                    w-4
                  >
                </div>
                <span text-xs text-white font-semibold px-1>
                  {{ source }}
                </span>
              </div>

              <h3 text-xl text-white font-bold line-clamp-3>
                {{ title }}
              </h3>
            </div>

            <div flex justify-between items-center>
              <div flex gap-2>
                <span text-xs text-zinc-400 font-medium>{{ date }}</span>
                <span text-xs text-zinc-400 font-medium>&middot;</span>
                <span text-xs text-zinc-400 font-medium>{{ reads }}</span>
              </div>
              <div flex gap-1>
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
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill-zinc-400 w-4 h-4>
                      <path fill-rule="evenodd" d="M4.848 2.771A49.144 49.144 0 0112 2.25c2.43 0 4.817.178 7.152.52 1.978.292 3.348 2.024 3.348 3.97v6.02c0 1.946-1.37 3.678-3.348 3.97a48.901 48.901 0 01-3.476.383.39.39 0 00-.297.17l-2.755 4.133a.75.75 0 01-1.248 0l-2.755-4.133a.39.39 0 00-.297-.17 48.9 48.9 0 01-3.476-.384c-1.978-.29-3.348-2.024-3.348-3.97V6.741c0-1.946 1.37-3.68 3.348-3.97zM6.75 8.25a.75.75 0 01.75-.75h9a.75.75 0 010 1.5h-9a.75.75 0 01-.75-.75zm.75 2.25a.75.75 0 000 1.5H12a.75.75 0 000-1.5H7.5z" clip-rule="evenodd" />
                    </svg>
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
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill-zinc-400 w-4 h-4>
                      <path fill-rule="evenodd" d="M6.32 2.577a49.255 49.255 0 0111.36 0c1.497.174 2.57 1.46 2.57 2.93V21a.75.75 0 01-1.085.67L12 18.089l-7.165 3.583A.75.75 0 013.75 21V5.507c0-1.47 1.073-2.756 2.57-2.93z" clip-rule="evenodd" />
                    </svg>
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
