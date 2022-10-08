<template>
  <div relative flex h-full min-h-screen w-full>
    <Sidebar />
    <Toolbar />
    <Contact />

    <div flex flex-1>
      <div lg="py-4 pr-4" flex w-full>
        <slot />
      </div>
    </div>
  </div>
</template>
