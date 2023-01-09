<template>
  <Card min-h-130 overflow-hidden>
    <div grid grid-cols-2 gap-4>
      <div col-span-2>
        <div flex justify-center w-full>
          <div space-y-8 text-center pt-12 pb-6 px-6>
            <div flex flex-col space-y-3 max-w-lg>
              <Heading type="h2" text-3xl text-white>
                Joined Mouseskins
              </Heading>

              <p text-lg text-zinc-400 leading-relaxed tracking-normal>
                We're building next generation products for all players seeking to define
                their hardware and stand out from the crowd.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div col-span-2>
        <div max-h-xs h-full px-8>
          <div flex justify-center items-center relative>
            <img
              alt="Gaming Mice"
              src="/recents/mouseskins/render.png"
              block
              max-w-160
              w-full
            />
          </div>
        </div>
      </div>
    </div>
  </Card>
</template>