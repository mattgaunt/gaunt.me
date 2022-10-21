<script lang="ts" setup>
defineProps({
  title: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  icon: {
    type: String,
    required: true,
  },
})
</script>

<template>
  <div flex flex-col items-center space-y-16 md:space-y-24>
    <div flex flex-col items-center space-y-20>
      <div flex flex-col items-center gap-6>
        <IconBadge :name="icon" />

        <div
          flex
          flex-col
          text-center
          gap-4
          max-w-md
        >
          <Heading type="h1" text-4xl md:text-5xl leading-tight>
            {{ title }}
          </Heading>

          <p text-lg md:text-xl text-neutral-400 font-light leading-relaxed md:leading-relaxed tracking-wide>
            {{ description }}
          </p>
        </div>
      </div>
    </div>
    
    <div flex flex-col w-full>
      <div id="list" min-h-full w-full>
        <slot />
      </div>
    </div>
  </div>
</template>