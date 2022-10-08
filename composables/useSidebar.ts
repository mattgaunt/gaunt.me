import { get, set } from '@vueuse/shared'

export function useSidebar() {
  const opened = useState<boolean>('sidebar-open', () => false)
  const open = () => set(opened, true)
  const close = () => set(opened, false)

  return {
    isOpen: computed(() => get(opened)),
    open,
    close,
  }
}