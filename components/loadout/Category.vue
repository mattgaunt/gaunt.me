<script lang="ts" setup>
defineProps({
  name: String,
  count: String,
  icon: String,
})
</script>

<template>
  <article bg-neutral-800 rounded-8 min-w-64 relative>
    <div grid grid-flow-row gap-16 p-8>
      <div col-span-1 inline-flex>
        <div flex justify-center relative>
          <div
            flex
            justify-center
            items-center
            bg-neutral-700
            rounded-7
            overflow-hidden
            aspect-square
            w-18
          >
            <div inline-flex>
              <Icon
                :name="icon"
                size="40"
                text-neutral-400
              />
            </div>
          </div>
        </div>
      </div>
      <div col-span-1 space-y-4>
        <div inline-grid>
          <h3
            text-2xl
            text-white
            font-bold
            leading-snug
            line-clamp-2
          >
            {{ name }}
          </h3>
          <span text-neutral-400>
            {{ count }} products
          </span>
        </div>
      </div>
    </div>
  </article>
</template>