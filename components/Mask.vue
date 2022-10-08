<template>
  <div
    mask-spacer
    pointer-events-none
    select-none
    backdrop-blur-5px
    absolute
    inset-x-2
    bottom-none
    rounded-b-3xl
    bg-gradient-to-t
    from-neutral-800
    to-neutral-800
    to-opacity-0
    via-neutral-800
    via-opacity-60
    opacity-95
    h-32
  />
</template>

<style>
[mask-spacer] {
  -webkit-mask-image: linear-gradient(to top, #000 25%, transparent);
  mask-image: linear-gradient(to top, #000 25%, transparent);
}
</style>