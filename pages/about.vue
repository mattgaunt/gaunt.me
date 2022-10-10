<script lang="ts" setup>
useHead({
  title: 'About',
})
</script>

<template>
  <div flex bg-neutral-800 highlight lg:rounded-8 w-full relative>
    <main id="main" relative flex flex-col lg:overflow-y-auto lg:max-h-page  w-full>
      <Container max-w-6xl py-20 lg:py-32>
        <ListDetailView
          title="About"
          description="Welcome to my little corner of the internet. It's not much, but it's something."
          icon="User"
        >
          <div flex flex-col space-y-3>
            <div grid grid-cols-1 gap-6 md:gap-8>
              <div col-span-1>
                <AboutBlurb />
              </div>
              <div col-span-1>
                <div grid grid-cols-1 md:grid-cols-2 gap-6>
                  <div col-span-1 flex>
                    <AboutTweet />
                  </div>
                  <div col-span-1>
                    <AboutSkills />
                  </div>
                </div>
              </div>
              <div col-span-1>
                <AboutChat />
              </div>
            </div>
          </div>
        </ListDetailView>
      </Container>
    </main>

    <LazyMask />
  </div>
</template>
