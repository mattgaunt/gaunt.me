<template>
  <div class="absolute inset-none mx-none max-w-none overflow-hidden">
    <div class="absolute left-1/2 top-0 ml-[-38rem] h-[32rem] w-[81.25rem] [mask-image:linear-gradient(white,transparent)]">
      <div class="absolute inset-0 bg-gradient-to-r from-indigo-500/30 to-[#DBFF75]/30 opacity-100 [mask-image:radial-gradient(farthest-side_at_top,white,transparent)]">
        <GridPattern
          :width="80"
          :height="80"
          :x="-12"
          :y="4"
          :squares="[
            [4, 3],
            [2, 1],
            [7, 4],
            [10, 2],
          ]"
          class="absolute inset-x-0 inset-y-[-50%] h-[200%] w-full skew-y-[0deg] fill-white/2.5 stroke-white/5 mix-blend-overlay"
        />
      </div>
    </div>
  </div>
</template>