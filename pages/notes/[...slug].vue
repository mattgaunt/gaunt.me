<template>
  <div flex bg-neutral-800 highlight rounded-8 w-full relative>
    <main id="main" relative flex flex-col max-h-page overflow-y-auto w-full>
      <Container max-w-3xl py-24>
        <ContentDoc
          prose
          prose-invert
          prose-neutral
          text-lg
          max-w-full
        />
      </Container>
    </main>

    <LazyMask />
  </div>
</template>