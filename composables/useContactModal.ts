import type { EventHook } from '@vueuse/shared'
import { get, set } from '@vueuse/shared'

export function useContactModal() {
  const opened = useState<boolean>('use-contact-open', () => false)
  const openHook: EventHook = createEventHook()
  const closeHook: EventHook = createEventHook()

  function openContactModal() {
    set(opened, true)
  }

  function closeContactModal() {
    set(opened, false)
  }

  return {
    onOpen: openHook.on,
    onClose: closeHook.on,
    isOpen: computed(() => get(opened)),
    openContactModal,
    closeContactModal,
  }
}
