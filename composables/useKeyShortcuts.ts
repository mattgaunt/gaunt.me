export function useKeyShortcuts() {
  const keys = useMagicKeys()
  const { open } = useContactModal()

  function setupShortcuts(): void {
    whenever(keys['1'], () => navigateTo('/'))
    whenever(keys['2'], () => navigateTo('/about'))
    whenever(keys['3'], () => navigateTo('/projects'))
    whenever(keys['4'], () => navigateTo('/stack'))
    whenever(keys['5'], () => navigateTo('/bookmarks'))
    whenever(keys['6'], () => navigateTo('/notes'))
    whenever(keys['/'], () => open())
  }

  return {
    setupShortcuts,
  }
}