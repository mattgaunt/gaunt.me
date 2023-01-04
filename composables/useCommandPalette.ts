import type { UseFuseOptions } from '@vueuse/integrations/useFuse'
import { get, set } from '@vueuse/shared'

export interface CommandPaletteGroup {
  key: string
  active?: string
  inactive?: string
  commands: CommandPaletteCommand[]
  options?: Partial<UseFuseOptions<CommandPaletteCommand>>
  [key: string]: unknown
}

export interface CommandPaletteCommand {
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
            name: 'ngine',
            label: 'ngine/bits',
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
            id: 'delete-all',
            label: 'Delete all',
            disabled: false,
            icon: 'Bookmark',
            iconClass: 'text-white',
            shortcuts: [
              '⌘', 'U',
            ]
          },
          {
            id: 'filters',
            label: 'Open filters',
            disabled: false,
            icon: 'Bookmark',
            iconClass: 'text-white',
            shortcuts: [
              'F',
            ],
          },
          {
            id: 'theme',
            label: 'Toggle theme',
            disabled: false,
            icon: 'Bookmark',
            iconClass: 'text-white',
            click: () => {
              console.log('toggle theme')
            },
          },
        ],
      }
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