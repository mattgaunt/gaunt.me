<script lang="ts" setup>
defineProps<{
  url: string
  title: string
  description: string
  image: string
}>()
</script>

<template>
  <Card hover="-translate-y-1" rounded-3xl shadow-lg shadow-neutral-900 shadow-opacity-25 my-8 duration-250>
    <NuxtLink :href="url" target="_blank" rel="noopener noreferrer" decoration-none>
      <div flex flex-col gap-y-3>
        <figure
          inline-flex
          aspect-video
          bg-neutral-900
          rounded-2xl
          overflow-hidden
          m-none
        >
          <NuxtImg :src="image" loading="lazy" object-cover inline-flex />
        </figure>

        <div flex flex-col gap-y-1 px-2>
          <h3 text-2xl font-bold m-none>{{ title }}</h3>
          <span text-neutral-400>
            {{ description }}
          </span>
        </div>
      </div>
    </NuxtLink>
  </Card>
</template>