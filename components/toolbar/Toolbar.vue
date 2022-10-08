<script lang="ts" setup>
const tabs = [
  { path: '/', name: 'index', label: 'Recents', icon: 'House' },
  { path: '/about', name: 'about', label: 'About', icon: 'User' },
  { path: '/projects', name: 'projects', label: 'Projects', icon: 'Code' },
  { path: '/stack', name: 'stack', label: 'Stack', icon: 'Stack' },
  { path: '/bookmarks', name: 'bookmarks', label: 'Bookmarks', icon: 'Bookmark' },
  { path: '/notes', name: 'notes', label: 'Notes', icon: 'Notes' },
]

const target = ref<HTMLElement>()
const { transform } = useElementTransform(target)
const route = useActiveRoute()
const activeIdx = computed(() => {
  return tabs.findIndex(t => t.name === route.name)
})

watch(activeIdx, () => transform.x = 52 * activeIdx.value)

transform.x = 52 * activeIdx.value
</script>

<template>
  <div flex md:hidden justify-center items-center fixed inset-x-none bottom-8 z-100>
    <div flex highlight bg-neutral-700 rounded-3xl overflow-hidden relative h-15 px-4>
      <div
        ref="target"
        transition
        duration-500
        absolute
        left-4
        inset-y-2
        inline-flex
        bg-neutral-600
        highlight
        rounded-2xl
        w-11
        h-11
      />

      <div flex items-center w-full h-full relative gap-2>
        <ToolbarTab
          v-for="tab in tabs"
          :aria-label="tab.label"
          :icon="tab.icon"
          :href="tab.path"
        />
      </div>
    </div>
  </div>
</template>