<template>
  <div
    my-6
    flex
    gap-3
    rounded-2xl
    border
    bg-cyan-500
    bg-opacity-5
    p-4
    leading-6
    text-cyan-900
    border-cyan-500
    border-opacity-30
    text-cyan-200
  >
    <Icon name="Info" class="mt-1 h-4 w-4 flex-none fill-cyan-200/20 stroke-cyan-200" />
    <div class="[&>:first-child]:mt-0 [&>:last-child]:mb-0">
      <slot />
    </div>
  </div>
</template>