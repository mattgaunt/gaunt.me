<script lang="ts" setup>
defineProps<{
  url: string
  title: string
  description: string
  image: string
}>()
</script>

<template>
  <Card rounded-3xl shadow-lg shadow-neutral-900 shadow-opacity-25 my-8>
    <NuxtLink :href="url" target="_blank" rel="noopener noreferrer" decoration-none>
      <div flex flex-col gap-y-4>
        <figure
          inline-flex
          bg-neutral-800
          rounded-2xl
          overflow-hidden
          object-cover
          m-none
        >
          <img :src="image" loading="lazy" inline-flex />
        </figure>

        <div flex flex-col gap-y-1>
          <h3 text-2xl font-bold m-none>{{ title }}</h3>
          <span text-neutral-400>
            {{ description }}
          </span>
        </div>
      </div>
    </NuxtLink>
  </Card>
</template>