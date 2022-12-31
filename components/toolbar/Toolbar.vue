<script lang="ts" setup>
const tabs = [
  { path: '/', name: 'index', label: 'Recents', icon: 'Shapes' },
  { path: '/about', name: 'about', label: 'About', icon: 'User' },
  { path: '/projects', name: 'projects', label: 'Projects', icon: 'Code' },
  { path: '/stack', name: 'stack', label: 'Stack', icon: 'Stack' },
  { path: '/bookmarks', name: 'bookmarks', label: 'Bookmarks', icon: 'Bookmark' },
  { path: '/notes', name: 'notes', label: 'Notes', icon: 'Notes' },
]

const target = ref<HTMLElement>()
const { transform } = useElementTransform(target)
const route = useRoute()
const activeIdx = computed(() => {
  return tabs.findIndex(t => (route.name as string).startsWith(t.name))
})

watch(activeIdx, () => transform.x = 52 * activeIdx.value)

transform.x = 52 * activeIdx.value
</script>

<template>
  <div flex lg:hidden justify-center items-center fixed inset-x-none bottom-5 z-100>
    <div flex bg-zinc-900 bg-opacity-92 backdrop-blur rounded-3xl overflow-hidden relative shadow-lg shadow-opacity-10 h-15 px-3>
      <div
        ref="target"
        transition
        duration-500
        absolute
        left-3
        inset-y-2
        inline-flex
        bg-white
        bg-opacity-3
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