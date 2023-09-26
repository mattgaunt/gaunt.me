<script lang="ts" setup>
const one = ref<HTMLElement>()
const two = ref<HTMLElement>()
const three = ref<HTMLElement>()
const four = ref<HTMLElement>()
const five = ref<HTMLElement>()

useMotion(one, {
  initial: {
    y: 20,
    x: 0,
    rotate: 0,
    scale: 0.9,
    opacity: 0,
  },
  visibleOnce: {
    y: 10,
    x: -180,
    rotate: -8,
    scale: 1,
    opacity: 1,
    transition: {
      type: 'spring',
      stiffness: 250,
      damping: 40,
      delay: 200,
    },
  },
})

useMotion(two, {
  initial: {
    y: 20,
    x: 0,
    rotate: 0,
    scale: 0.9,
    opacity: 0,
  },
  visibleOnce: {
    y: 10,
    x: 180,
    rotate: 8,
    scale: 1,
    opacity: 1,
    transition: {
      type: 'spring',
      stiffness: 250,
      damping: 40,
      delay: 300,
    },
  },
})

useMotion(three, {
  initial: {
    y: 20,
    scale: 0.9,
    opacity: 0,
  },
  visibleOnce: {
    y: -20,
    scale: 1,
    opacity: 1,
    transition: {
      type: 'spring',
      stiffness: 300,
      damping: 15,
      delay: 50,
    },
  },
})

useMotion(four, {
  initial: {
    y: 20,
    x: 0,
    rotate: 0,
    scale: 0.9,
    opacity: 0,
  },
  visibleOnce: {
    y: 80,
    x: 260,
    rotate: 10,
    scale: 1,
    opacity: 1,
    transition: {
      type: 'spring',
      stiffness: 250,
      damping: 40,
      delay: 500,
    },
  },
})

useMotion(five, {
  initial: {
    y: 20,
    x: 0,
    rotate: 0,
    scale: 0.9,
    opacity: 0,
  },
  visibleOnce: {
    y: 80,
    x: -260,
    rotate: -10,
    scale: 1,
    opacity: 1,
    transition: {
      type: 'spring',
      stiffness: 250,
      damping: 40,
      delay: 400,
    },
  },
})
</script>

<template>
  <Card overflow-hidden p-none>
    <div grid items-center gap-8>
      <div col-span-12>
        <div flex justify-center w-full>
          <div space-y-8 text-center py-16 md:py-20 px-6>
            <div flex flex-col space-y-6 max-w-xl>
              <Heading type="h2" text="#27FFF2!" text-4xl lg:text-5xl lg:leading-14>
                Daily digest for your gaming habits.
              </Heading>

              <p text-lg text-zinc-400 leading-relaxed tracking-normal>
                Building the best way to consume your favourite
                gaming content for the topics you love, all in a
                single digestible feed.
              </p>
            </div>

            <Button
              component="a"
              href="https://alwaysdead.com"
              target="_blank"
              aria-label="Visit Alwaysdead"
              font-black
            >
              View Project
            </Button>
          </div>
        </div>
      </div>
      <div col-span-12 min-h-60 md:min-h-90 h-full relative>
        <div flex flex-col items-center transform scale-70 md:scale-100>
          <div ref="four" absolute top-none bg-zinc-900 bg-opacity-25 rounded-2xl max-w-82 w-full aspect-square />
          <div ref="five" absolute top-none bg-zinc-900 bg-opacity-25 rounded-2xl max-w-82 w-full aspect-square />

          <AlwaysdeadPost
            ref="one"
            image="/projects/alwaysdead/article-1.jpg"
            title="Tunic Is Coming To PS4 and PS5 in September"
            source="IGN"
            logo="/projects/alwaysdead/ign.jpg"
            date="Sep 20, 2022"
            reads="13 reads"
            max-w-82
            shadow-2xl
            shadow-zinc-900
            shadow-opacity-90
            absolute
            top-none
          />
          <AlwaysdeadPost
            ref="two"
            image="/projects/alwaysdead/article-2.jpg"
            title="Square Enix casually confirms there's a new Just Cause in development"
            source="Destructoid"
            logo="/projects/alwaysdead/destructoid.jpg"
            date="Sep 22, 2022"
            reads="47 reads"
            max-w-82
            shadow-2xl
            shadow-zinc-900
            shadow-opacity-80
            absolute
            top-none
          />
          <AlwaysdeadPost
            ref="three"
            image="/projects/alwaysdead/article-3.jpg"
            title="Overwatch 2 finally launches into early access for everyone in October"
            source="Kotaku"
            logo="/projects/alwaysdead/kotaku.jpg"
            date="Sep 17, 2022"
            reads="33 reads"
            max-w-82
            shadow-2xl
            shadow-zinc-900
            shadow-opacity-80
            absolute
            top-none
          />
        </div>
      </div>
    </div>
  </Card>
</template>
