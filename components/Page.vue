<template>
  <div flex bg-zinc-800 bg-opacity-40 highlight rounded-l-8 rounded-r-2 w-full>
    <main id="main" relative flex flex-col lg:overflow-y-auto lg:max-h-page w-full>
      <Container max-w-5xl py-20 lg:py-32>
        <slot />
      </Container>
    </main>
  </div>
</template>