import { get, set } from '@vueuse/shared'

export function useSidebar() {
  const opened = useState<boolean>('sidebar-open', () => false)

  function openSidebar() {
    set(opened, true)
  }

  function closeSidebar() {
    set(opened, false)
  }

  return {
    isOpen: computed(() => get(opened)),
    openSidebar,
    closeSidebar,
  }
}