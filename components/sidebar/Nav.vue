<script setup>
const config = useAppConfig()
const { data: navigation } = await useAsyncData('navigation', () => {
  return fetchContentNavigation()
})
</script>

<template>
  <div flex flex-col gap-4>
    <div flex flex-col justify-center p-2>
      <div flex flex-none items-center justify-between>
        <span flex items-center space-x-3>
          <h2 font-medium tracking-wide line-clamp-1>
            {{ config.name }}
          </h2>
        </span>
      </div>
    </div>

    <nav flex flex-col gap-6>
      <SidebarSection>
        <SidebarNavigationLink
          v-for="item in navigation"
          :href="item._path"
          :icon="item.icon"
          :key="item._path"
        >
          {{ item.title }}
        </SidebarNavigationLink>
      </SidebarSection>
    </nav>
  </div>
</template>