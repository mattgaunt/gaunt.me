<template>
  <div flex bg-neutral-900 bg-opacity-25 rounded-10>
    <a
      href="https://checkpoint.live/"
      target="_blank"
      hover="-rotate-1 -translate-y-5"
      bg="#0082FF"
      highlight
      rounded-8
      md:rounded-10
      overflow-hidden
      transition
      duration-250
      min-h-124
    >
      <div flex flex-col justify-between p-10 md:p-12 h-full>
        <div flex-1>
          <div inline-flex>
            <Icon
              name="Checkpoint"
              size="48"
              text-white
            />
          </div>
        </div>
        <div space-y-12>
          <div flex flex-col space-y-6 max-w-xl>
            <h2 text="#88C5FF" text-3xl md:text-4xl font-medium leading-tight md:leading-tight>
              <span text-white font-bold>Powerful events for gaming.</span> Providing an
              unrivalled event experiences.
            </h2>
          </div>

          <div>
            <a
              href="https://checkpoint.live"
              target="_blank"
              title="Visit Checkpoint"
              text-white
              font-medium
              tracking-wide
            >
              Checkpoint.live
            </a>
          </div>
        </div>
      </div>
    </a>
  </div>
</template>
