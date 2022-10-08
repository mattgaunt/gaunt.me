<template>
  <div bg-neutral-900 bg-opacity-25 rounded-8 md:rounded-10>
    <a
      href="https://twitter.com/mattgaunt"
      target="_blank"
      hover="-rotate-1 -translate-y-5"
      bg="#168DFF"
      highlight
      flex
      rounded-8
      md:rounded-10
      overflow-hidden
      transition
      duration-250
      min-h-124
      h-full
    >
      <div md="p-12" flex flex-col justify-between gap-16 p-10 h-full>
        <div flex-1>
          <div inline-flex>
            <Icon
              name="Twitter"
              size="50"
              text-white
            />
          </div>
        </div>
        <div space-y-8>
          <div flex flex-col space-y-6 max-w-xl>
            <h2
              text="#AAD5FF"
              text-3xl
              md:text-4xl
              leading-tight
              md:leading-tight
              font-medium
            >
              Livewire 3 has me very excited for building <span text-white font-bold>Forums.so</span>
            </h2>
          </div>

          <div>
            <span text-white font-medium>
              24m ago
            </span>
          </div>
        </div>
      </div>
    </a>
  </div>
</template>
