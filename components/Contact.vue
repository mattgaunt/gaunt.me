<script lang="ts" setup>
import {
  TransitionRoot,
  TransitionChild,
  Dialog,
  DialogTitle,
  DialogPanel,
} from '@headlessui/vue'

const config = useAppConfig()
const { isOpen, close } = useContactModal()

const links = [
  { label: 'Email me', href: `mailto:${config.email}`, icon: 'Mail' },
  { label: 'Book time', href: 'https://calendly.com/matthew.gaunt', icon: 'Calendar' },
  { label: 'Follow me', href: config.socials.twitter, icon: 'Twitter' },
  { label: 'Join my network', href: config.socials.linkedin, icon: 'LinkedIn' },
]
</script>

<template>
  <TransitionRoot appear :show="isOpen" as="template">
    <Dialog as="div" @close="close" relative z-10>
      <TransitionChild
        as="template"
        enter="duration-150 ease-out"
        enter-from="opacity-0"
        enter-to="opacity-100"
        leave="duration-150 ease-in"
        leave-from="opacity-100"
        leave-to="opacity-0"
      >
        <div bg-neutral-900 bg-opacity-80 backdrop-blur-md fixed inset-none />
      </TransitionChild>

      <div fixed inset-none overflow-y-auto>
        <div flex items-center justify-center min-h-full p-4 text-center>
          <TransitionChild
            as="template"
            enter="duration-150 ease-out"
            enter-from="opacity-0 translate-y-5 scale-95"
            enter-to="opacity-100 translate-y-none scale-100"
            leave="duration-150 ease-in"
            leave-from="opacity-100 translate-y-none scale-100"
            leave-to="opacity-0 translate-y-5 scale-95"
          >
            <DialogPanel
              transform
              w-full
              max-w-xl
              overflow-hidden
              bg-neutral-700
              rounded-8
              p-12
              space-y-12
              align-middle
              shadow-lg
              shadow-opacity-50
              transition-all
              text-left
            >
              <div flex flex-col items-start p-4>
                <div flex justify-between items-start w-full>
                  <button
                    hidden
                    justify-center
                    items-center
                    rounded-4
                    text-2xl
                    text-neutral-400
                    bg-neutral-600
                    p-2
                    @click="close"
                  >
                    <Icon name="Close" inline-flex />
                  </button>
                </div>
                <div flex flex-col text-center space-y-6>
                  <DialogTitle
                    as="h2"
                    text-4xl
                    font-bold
                    tracking-px
                  >
                    Hey there! 👋
                  </DialogTitle>
                  <div mt-2>
                    <p text-lg text-neutral-400 leading-relaxed tracking-wide>
                      We like to do things a little different. We'd love to discuss your
                      next project or great idea on discord, or DM us on twitter.
                    </p>
                  </div>
                </div>
              </div>
              <div flex flex-col gap-2>
                <div grid grid-cols-2 gap-4>
                  <template v-for="link, idx in links">
                    <div
                      v-motion="{
                        initial: {
                          y: 15,
                          opacity: 0
                        },
                        enter: {
                          y: 0,
                          opacity: 1,
                          transition: {
                            type: 'spring',
                            delay: 50 * idx,
                          },
                        },
                      }"
                      bg-neutral-900
                      bg-opacity-25
                      rounded-7
                    >
                      <a
                        :href="link.href"
                        :title="link.label"
                        target="_blank"
                        hover="opacity-75"
                        flex
                        flex-col
                        items-center
                        gap-4
                        bg-neutral-600
                        highlight
                        rounded-7
                        p-8
                        transition-all
                        duration-250
                      >
                        <Icon :name="link.icon" text-3xl text-neutral-400 />
                        <span text-lg text-white font-semibold tracking-wide>
                          {{ link.label }}
                        </span>
                      </a>
                    </div>
                  </template>
                </div>
              </div>
            </DialogPanel>
          </TransitionChild>
        </div>
      </div>
    </Dialog>
  </TransitionRoot>
</template>