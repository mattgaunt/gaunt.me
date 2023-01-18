<script lang="ts" setup>
import type { PropType } from 'vue'
import { ComboboxOption } from '@headlessui/vue'
import type { CommandGroup } from '~/composables/useCommandPalette'

defineProps({
  group: {
    type: Object as PropType<CommandGroup>,
    required: true,
  },
  groupAttribute: {
    type: String,
    required: true,
  },
  commandAttribute: {
    type: String,
    required: true,
  },
})
</script>

<template>
  <li p-2>
    <template v-if="group[groupAttribute]">
      <h2 text-xs font-medium text-zinc-400 px-3 my-2>
        {{ group[groupAttribute] }}
      </h2>
    </template>

    <ul text-sm text-zinc-200>
      <ComboboxOption
        v-for="(command, idx) of group.commands"
        v-slot="{ active }"
        :key="`${group.key}-${idx}`"
        as="template"
        :value="command"
        :disabled="command.disabled"
      >
        <li :class="[{ 'bg-white/8 text-zinc-200': active }, command.disabled ? 'cursor-not-allowed' : 'cursor-pointer']" flex justify-between items-center gap-3 select-none rounded-xl relative p-3>
          <div flex items-center gap-3>
            <template v-if="command.icon">
              <Icon
                :name="command.icon"
                :class="{ 'text-opacity-40': !active }"
                aria-hidden="true"
                flex-shrink-none
                text-lg
                text-white
                fill-zinc-500
              />
            </template>

            <div flex items-center gap-2 min-w-none>
              <slot :name="`${group.key}-command`" :group="group" :command="command">
                <span font-medium truncate>
                  {{ command[commandAttribute] }}
                </span>
              </slot>
            </div>
          </div>

          <slot :name="`${group.key}-inactive`" :group="group" :command="command">
            <template v-if="command.shortcuts?.length">
              <span flex-shrink-none text-xs font-semibold text-zinc-400>
                <kbd v-for="shortcut of command.shortcuts" :key="shortcut" font-sans>
                  {{ shortcut }}
                </kbd>
              </span>
            </template>
          </slot>
        </li>
      </ComboboxOption>
    </ul>
  </li>
</template>
