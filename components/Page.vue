<template>
  <div flex bg-neutral-800 highlight lg:rounded-8 w-full relative>
    <main id="main" relative flex flex-col lg:overflow-y-auto lg:max-h-page w-full>
      <Container max-w-5xl py-20 lg:py-32>
        <slot />
      </Container>
    </main>

    <LazyMask />
  </div>
</template>