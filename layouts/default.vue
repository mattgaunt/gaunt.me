<template>
  <div relative flex h-full min-h-screen w-full>
    <Sidebar />
    <Toolbar />
    <Contact />

    <div flex flex-1>
      <div flex w-full lg:py-3 lg:pr-3>
        <slot />
      </div>
    </div>
  </div>
</template>
