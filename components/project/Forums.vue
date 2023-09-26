<template>
  <div flex bg-zinc-900 bg-opacity-25 rounded-10>
    <a href="https://forums.so/" target="_blank" hover="rotate-1 -translate-y-5" transition duration-250>
      <Card
        from="#7B61FF/80!"
        to="#7B61FF/100!"
        overflow-hidden
        p-none
        min-h-112
        before:from-white
        before:from-opacity-15
        before:to-white
        before:to-opacity-15
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
          <div flex flex-col space-y-2>
            <Heading type="h2" text-3xl text-white>
              Forums.so
            </Heading>

            <p text-xl md:text-2xl text-white text-opacity-70 leading-tight>
              Helping to create engaging online communities.
            </p>
          </div>
        </div>
      </Card>
    </a>
  </div>
</template>
