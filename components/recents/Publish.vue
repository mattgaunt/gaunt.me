<template>
  <div bg-zinc-900 bg-opacity-25 rounded-10 h-full>
    <NuxtLink to="/notes/publishable-models-with-laravel" hover="rotate-1 -translate-y-5" block transition duration-250 h-full>
      <Card min-h-142 overflow-hidden p-4>
        <div flex flex-col h-full gap-4>
          <div flex-1 flex justify-center pt-8>
            <Calendar />
          </div>
          <div flex-initial>
            <div flex justify-center w-full>
              <div space-y-8 text-left p-6>
                <div flex flex-col space-y-2 max-w-lg>
                  <p text-sm text-zinc-400 font-medium tracking-normal>
                    8 Nov
                  </p>

                  <Heading type="h2" text-3xl text-white>
                    Publishable Models with Laravel
                  </Heading>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Card>
    </NuxtLink>
  </div>
</template>
