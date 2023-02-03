<script lang="ts" setup>
const { setupShortcuts } = useKeyShortcuts()

setupShortcuts()
</script>

<template>
  <div relative h-full min-h-screen w-full>
    <div flex gap-x-2 min-h-screen lg:p-2>
      <Sidebar />
      <Toolbar />
      <Contact />

      <div flex flex-1 max-w-full>
        <div flex w-full>
          <slot />
        </div>
      </div>
    </div>
  </div>
</template>
