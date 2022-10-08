<template>
  <div grid grid-cols-1 gap-none>
    <ChangelogUpdate
      id="2022-09-07"
      aria-labelledby="2022-09-07-heading"
      type="tweet"
    />

    <ChangelogUpdate
      id="2022-09-06"
      aria-labelledby="2022-09-06-heading"
      type="post"
    />

    <section id="2022-09-07" aria-labelledby="2022-09-07-heading" grid grid-cols-8 gap-4 md:gap-6>
      <div col-span-8 md:col-span-1>
        <h2 id="2022-09-07-heading" text-sm text-neutral-500 font-mono py-1>
          <a href="#2022-09-07">Sep 22, 2022</a>
        </h2>
      </div>

      <div col-span-8 md:col-span-6>
        <div flex gap-6 relative h-full pb-8 md:pb-12>
          <div hidden md:flex justify-center min-w-8 h-full>
            <div absolute top-2 w-px h-full bg-neutral-700 bg-opacity-50 />
            <div absolute top-none bg-neutral-700 bg-opacity-50 rounded-full p-2>
              <div bg-neutral-600 rounded-full aspect-square w-3 />
            </div>
          </div>
          <article bg-neutral-700 rounded-3xl p-10 space-y-6>
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
        </div>
      </div>
    </section>

    <ChangelogUpdate
      id="2022-09-03"
      aria-labelledby="2022-09-03-heading"
      type="tweet"
      last
    />
  </div>
</template>