<template>
  <div class="absolute inset-none mx-none max-w-none overflow-hidden">
    <div class="absolute left-1/2 top-0 ml-[-16rem] h-[10rem] w-[32rem] [mask-image:linear-gradient(white,transparent)]">
      <div class="absolute inset-0 bg-gradient-to-r from-cyan-200/20 to-cyan-600/30 opacity-100 [mask-image:radial-gradient(farthest-side_at_top,white,transparent)]">
        <GridPattern
          :width="40"
          :height="40"
          :x="-12"
          :y="4"
          :squares="[
            [4, 3],
            [2, 1],
            [7, 2],
            [10, 4],
          ]"
          class="absolute inset-x-0 inset-y-[-50%] h-[200%] w-full skew-y-[-20deg] fill-white/2.5 stroke-white/5 mix-blend-overlay"
        />
      </div>
    </div>
  </div>
</template>
