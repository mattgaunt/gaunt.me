<template>
  <div bg-neutral-700 highlight rounded-8 md:rounded-10 overflow-hidden>
    <div grid items-stretch gap-4>
      <div col-span-12>
        <div flex justify-center w-full>
          <div space-y-8 text-center py-16 md:py-20 px-6>
            <div flex flex-col space-y-6 max-w-lg>
              <h2 text="#FFEA28" text-4xl md:text-5xl font-bold tracking-px>
                Loadout with style.
              </h2>

              <p text-lg text-neutral-400 leading-relaxed tracking-wide>
                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text, forever.
              </p>
            </div>

            <Button
              component="a"
              href="https://www.loadout.xyz"
              target="_blank"
              aria-label="Visit Loadout"
              font-black
            >
              View Project
            </Button>
          </div>
        </div>
      </div>
      <div col-span-12 min-h-xs h-full>
        <div flex justify-center items-center>
          <!-- Image -->
        </div>
      </div>
    </div>
  </div>
</template>
