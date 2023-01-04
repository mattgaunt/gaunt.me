<script lang="ts" setup>
import type { ComponentPublicInstance, ComputedRef, PropType } from 'vue'
import { groupBy, map } from 'lodash-es'
import { defu } from 'defu'
import { useFuse, UseFuseOptions } from '@vueuse/integrations/useFuse'
import { Combobox, ComboboxInput, ComboboxOptions } from '@headlessui/vue'
import type { CommandPaletteGroup, CommandPaletteCommand } from '~/composables/useCommandPalette'

const $props = defineProps({
  modelValue: {
    type: [String, Number, Object],
    default: null,
  },
  by: {
    type: String,
    default: 'id',
  },
  multiple: {
    type: Boolean,
    default: false,
  },
  nullable: {
    type: Boolean,
    default: false,
  },
  searchable: {
    type: Boolean,
    default: true,
  },
  placeholder: {
    type: Boolean,
    default: true,
  },
  placeholderLabel: {
    type: String,
    default: 'Search...',
  },
  groups: {
    type: Array as PropType<CommandPaletteGroup[]>,
    default: () => [],
  },
  groupAttribute: {
    type: String,
    default: 'label',
  },
  commandAttribute: {
    type: String,
    default: 'label',
  },
  options: {
    type: Object as PropType<Partial<UseFuseOptions<CommandPaletteCommand>>>,
    default: () => ({}),
  },
  autoselect: {
    type: Boolean,
    default: true,
  },
})

const $emit = defineEmits<{
  (e: 'update:modelValue', ...args: unknown[]): void
  (e: 'close'): void
}>()

const query = ref()
const comboboxInput = ref<ComponentPublicInstance<HTMLInputElement>>()
const comboboxApi = ref(null)

const commands: ComputedRef = computed(() => $props.groups.reduce((acc, group) => {
  return acc.concat(group.commands.map(command => ({ ...command, group: group.key })))
}, [] as CommandPaletteCommand[]))

const options: ComputedRef<Partial<UseFuseOptions<CommandPaletteCommand>>> = computed(() => defu({}, $props.options, {
  resultLimit: 12,
  matchAllWhenSearchEmpty: true,
  fuseOptions: {
    keys: [$props.commandAttribute],
  },
}))

const { results } = useFuse(query, commands, options)

const groups = computed(() => map(groupBy(results.value, command => command.item.group), (results, key) => {
  const commands = results.map(result => {
    const { item, ...data } = result

    return {
      ...item,
      ...data,
    }
  })

  return {
    ...$props.groups.find(group => group.key.startsWith(key)),
    commands: commands.slice(0, options.value.resultLimit)
  } as CommandPaletteGroup
}))

function onSelect(option: CommandPaletteCommand): void {
  $emit('update:modelValue', option, { query: query.value })
}

defineExpose({
  comboboxApi,
  results,
})
</script>

<template>
  <div bg-white bg-opacity-6 rounded-2xl highlight>
    <div flex flex-col gap-y-2 min-w-lg>
      <Combobox
        ref="comboboxRef"
        :by="by"
        :modelValue="modelValue"
        :multiple="multiple"
        :nullable="nullable"
        @update:modelValue="onSelect"
      >
        <div flex flex-col flex-1 min-h-none>
          <div flex flex-col divide-y divide-white divide-opacity-10>
            <template v-if="searchable">
              <div flex items-center gap-y-2>
                <div flex items-center w-full relative>
                  <Icon name="Search" aria-hidden="true" pointer-events-none absolute left-5 text-lg text-zinc-400 />
                  <ComboboxInput
                    ref="comboboxInput"
                    :value="query"
                    :placeholder="placeholderLabel"
                    autocomplete="off"
                    @change="query = $event.target.value"
                    transition
                    focus-visible:ring-none
                    focus-within:outline-none
                    bg-transparent
                    border-none
                    placeholder-zinc-400
                    w-full
                    h-13
                    pr-4
                    pl-12
                  />
                </div>
              </div>
            </template>

            <template v-if="groups.length">
              <div flex-1 divide-y scroll-py-2 relative>
                <ComboboxOptions static hold overflow-y-auto divide-y divide-white divide-opacity-10>
                  <CommandPaletteGroup
                    v-for="group of groups"
                    :key="group.key"
                    :group="group"
                    :group-attribute="groupAttribute"
                    :command-attribute="commandAttribute"
                  >
                    <template v-for="(_, name) in $slots" #[name]="slotData">
                      <slot :name="name" v-bind="slotData" />
                    </template>
                  </CommandPaletteGroup>
                </ComboboxOptions>
              </div>
            </template>

            <template v-else-if="placeholder">
              <div
                flex
                flex-col
                items-center
                justify-center
                gap-y-4
                flex-1
                p-14
              >
                <Icon name="Search" aria-hidden="true" text-2xl />
                <p text-sm text-zinc-400 text-center>
                  We couldn't find anything.
                </p>
              </div>
            </template>
          </div>
        </div>
      </Combobox>
    </div>
  </div>
</template>