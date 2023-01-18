<template>
  <div flex bg-zinc-800 bg-opacity-40 highlight rounded-6 w-full relative>
    <main id="main" relative flex flex-col lg:overflow-y-auto lg:max-h-page w-full>
      <Container max-w-5xl py-20 lg:py-32 h-screen>
        <ContentDoc>
          <template #not-found>
            <div grid grid-cols-8 gap-24 items-center h-full>
              <div col-span-6 col-start-2>
                <div flex flex-col items-center space-y-8 py-32>
                  <div flex flex-col items-center text-center space-y-4>
                    <Heading type="h1" text-5xl text-white>
                      You're lost.
                    </Heading>

                    <div max-w-xl>
                      <p text-xl text-zinc-400 leading-relaxed tracking-wide>
                        You've managed to stumble across a page that does not exist.
                        Go ahead and try again.
                      </p>
                    </div>
                  </div>

                  <ButtonLink to="/" prefetch>
                    Go Back
                  </ButtonLink>
                </div>
              </div>
            </div>
          </template>
        </ContentDoc>
      </Container>
    </main>
  </div>
</template>
