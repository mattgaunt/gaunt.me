<script lang="ts" setup>
defineProps<{
  width: number,
  height: number,
  x: number,
  y: number,
  squares: any,
}>()

const patternId = useId()
</script>

<template>
  <svg aria-hidden="true">
    <defs>
      <pattern
        :id="patternId"
        :width="width"
        :height="height"
        patternUnits="userSpaceOnUse"
        :x="x"
        :y="y"
      >
        <path :d="`M.5 ${height}V.5H${width}`" fill="none" />
      </pattern>
    </defs>
    <rect
      width="100%"
      height="100%"
      strokeWidth="0"
      :fill="`url(#${patternId})`"
    />

    <template v-if="squares">
      <svg :x="x" :y="y" class="overflow-visible">
        <template v-for="[x, y] in squares" :key="`${x}-${y}`">
          <rect
            strokeWidth="0"
            :width="width + 1"
            :height="height + 1"
            :x="x * width"
            :y="y * height"
          />
        </template>
      </svg>
    </template>
  </svg>
</template>