import type { EventHook } from '@vueuse/shared'

export function useContactModal() {
  const opened = useState<boolean>('use-contact-open', () => false)
  const openHook: EventHook = createEventHook()
  const closeHook: EventHook = createEventHook()

  function open() {
    opened.value = true
  }

  function close() {
    opened.value = false
  }

  return {
    onOpen: openHook.on,
    onClose: closeHook.on,
    isOpen: computed(() => opened.value),
    open,
    close,
  }
}