import type { UseFuseOptions } from '@vueuse/integrations'
import { get, set } from '@vueuse/shared'

export interface Command {
  id: string | number
  prefix?: string
  suffix?: string
  icon?: string
  iconClass?: string
  chip?: string
  disabled?: boolean
  shortcuts?: string[]
  group?: string
  score?: number
  [key: string]: unknown
}

export interface CommandGroup {
  key: string
  active?: string
  inactive?: string
  commands: Command[]
  options?: Partial<UseFuseOptions<Command>>
  [key: string]: unknown
}

export function useCommandPalette() {
  const open = useState('use-command-palette', () => false)
  const query = useState('command-palette-query', () => null)
  const groups = ref(
    [
      {
        key: 'repositories',
        label: 'Repositories',
        active: 'Jump to...',
        commands: [
          {
            id: 100,
            name: '@ngine/cmdk',
            label: '@ngine/cmdk',
            to: {
              name: 'repository',
            },
          },
        ],
      },
      {
        key: 'actions',
        label: 'Actions',
        commands: [
          {
            id: 'theme',
            label: 'Toggle theme',
            disabled: false,
            icon: 'Sun',
            iconClass: 'text-white',
            click: () => {
              //
            },
          },
          {
            id: 'delete-all',
            label: 'Delete all',
            disabled: false,
            icon: 'Trash',
            iconClass: 'text-white',
            shortcuts: [
              '⌘', 'U',
            ],
          },
          {
            id: 'filters',
            label: 'Open filters',
            disabled: false,
            icon: 'Filter',
            iconClass: 'text-white',
            shortcuts: [
              'F',
            ],
          },
        ],
      },
    ],
  )

  function openCommandPalette() {
    set(open, true)
  }

  function closeCommandPalette() {
    set(open, false)
  }

  return {
    isCommandPaletteOpen: computed(() => get(open)),
    openCommandPalette,
    closeCommandPalette,
    query,
    groups,
  }
}
