<script lang="ts" setup>
import {
  Dialog,
  DialogPanel,
  DialogTitle,
  TransitionChild,
  TransitionRoot,
} from '@headlessui/vue'

const config = useAppConfig()
const { isOpen, closeContactModal } = useContactModal()

const links: { label: string; href: string; icon: string }[] = [
  { label: 'Email me', href: `mailto:${config.email}`, icon: 'Mail' },
  { label: 'Book time', href: 'https://calendly.com/matthew.gaunt', icon: 'Calendar' },
  { label: 'Follow me', href: config.socials.twitter, icon: 'Twitter' },
  { label: 'Join my network', href: config.socials.linkedin, icon: 'LinkedIn' },
]
</script>

<template>
  <TransitionRoot appear :show="isOpen" as="template">
    <Dialog as="div" relative z-10 @close="closeContactModal">
      <TransitionChild
        as="template"
        enter="duration-200 ease-out"
        enter-from="opacity-0"
        enter-to="opacity-100"
        leave="duration-150 ease-in"
        leave-from="opacity-100"
        leave-to="opacity-0"
      >
        <div fixed inset-none bg-zinc-900 bg-opacity-85 backdrop-blur />
      </TransitionChild>

      <div fixed inset-none overflow-y-auto>
        <div flex items-center justify-center min-h-full p-4 text-center>
          <TransitionChild
            as="template"
            enter="duration-200 ease-out"
            enter-from="opacity-0 -translate-y-3"
            enter-to="opacity-100 translate-y-none"
            leave="duration-150 ease-in"
            leave-from="opacity-100 translate-y-none"
            leave-to="opacity-0 -translate-y-3"
          >
            <DialogPanel
              transform
              w-full
              max-w-lg
              overflow-hidden
              bg-white
              bg-opacity-8
              backdrop-blur-xl
              highlight
              rounded-8
              p-12
              align-middle
              transition-all
              text-left
            >
              <ContactPattern />

              <div relative space-y-8>
                <div flex flex-col items-start p-4>
                  <div flex justify-between items-start w-full>
                    <button
                      hidden
                      justify-center
                      items-center
                      rounded-4
                      text-2xl
                      text-zinc-400
                      bg-zinc-600
                      p-2
                      @click="closeContactModal"
                    >
                      <Icon name="Close" inline-flex />
                    </button>
                  </div>
                  <div flex flex-col text-center space-y-6>
                    <DialogTitle as="h2" font-heading text-4xl font-black>
                      Hey there! 👋
                    </DialogTitle>
                    <div mt-2>
                      <p font-medium text-zinc-400 leading-relaxed tracking-wide>
                        Thanks for wanting to reach out! You can find me anywhere below, or feel free to
                        DM me on Twitter to have a chat.
                      </p>
                    </div>
                  </div>
                </div>
                <div flex flex-col gap-2>
                  <div grid grid-cols-2 gap-4>
                    <template v-for="link, idx in links" :key="idx">
                      <div>
                        <a
                          :href="link.href"
                          :title="link.label"
                          target="_blank"
                          group
                          flex
                          flex-col
                          items-center
                          gap-4
                          bg-white
                          bg-opacity-3
                          hover:bg-opacity-8
                          border
                          border-white
                          border-opacity-8
                          rounded-7
                          p-8
                          transition-all
                        >
                          <div class="flex h-8 w-8 items-center justify-center rounded-full ring-1 backdrop-blur-[2px] transition duration-300 bg-white/3 ring-white/25 group-hover:bg-cyan-300/10 group-hover:ring-cyan-400">
                            <Icon :name="link.icon" size="18" class="transition-colors duration-300 fill-white/10 stroke-zinc-400 group-hover:fill-cyan-300/10 group-hover:stroke-cyan-400" />
                          </div>

                          <span text-sm text-white font-semibold>
                            {{ link.label }}
                          </span>
                        </a>
                      </div>
                    </template>
                  </div>
                </div>
              </div>
            </DialogPanel>
          </TransitionChild>
        </div>
      </div>
    </Dialog>
  </TransitionRoot>
</template>
