<template>
  <div class="absolute inset-none mx-none max-w-none overflow-hidden">
    <div class="absolute left-1/2 top-0 ml-[-50rem] h-[32rem] w-[100rem] [mask-image:linear-gradient(white,transparent)]">
      <div class="absolute inset-0 bg-gradient-to-r from-cyan-300/30 to-cyan-700/30 opacity-100 [mask-image:radial-gradient(farthest-side_at_top,white,transparent)]">
        <GridPattern
          :width="60"
          :height="60"
          :x="-12"
          :y="4"
          :squares="[
            [7, 1],
            [10, 4],
            [12, 7],
            [16, 7],
            [13, 4],
          ]"
          class="absolute inset-x-0 inset-y-[-50%] h-[200%] w-full skew-y-[-30deg] fill-white/2.5 stroke-white/5 mix-blend-overlay"
        />
      </div>
    </div>
  </div>
</template>