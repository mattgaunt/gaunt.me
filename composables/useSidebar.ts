import type { EventHook } from '@vueuse/shared'
import { get, set } from '@vueuse/shared'

export function useSidebar() {
  const opened = useState<boolean>('sidebar-open', () => false)
  const openHook: EventHook = createEventHook()
  const closeHook: EventHook = createEventHook()

  function openSidebar() {
    set(opened, true)
  }

  function closeSidebar() {
    set(opened, false)
  }

  return {
    onOpen: openHook.on,
    onClose: closeHook.on,
    isOpen: computed(() => get(opened)),
    openSidebar,
    closeSidebar,
  }
}
