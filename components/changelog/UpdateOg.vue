<template>
  <article bg="#333" rounded-3xl p-10 space-y-6>
    <div flex items-center gap-4>
      <div>
        <div bg-neutral-800 rounded-full aspect-square w-15 />
      </div>
      <div flex flex-col gap-px>
        <h4 text-lg font-semibold leading-tight>
          Tom MacWright
        </h4>
        <span text-neutral-400 tracking-wide>
          verse
        </span>
      </div>
    </div>
    <div flex flex-col space-y-8>
      <div space-y-6>
        <figure>
          <div aspect-2 bg-neutral-800 rounded-3xl />
        </figure>
        <p text-3xl font-medium leading-snug>
          Scream and shout from the rooftops. <span text-neutral-500>Let your voice be heard.</span>
        </p>
      </div>
      <div>
        <a href="#" font-medium>
          Learn more →
        </a>
      </div>
    </div>
  </article>
</template>