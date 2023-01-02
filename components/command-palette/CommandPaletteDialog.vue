<script lang="ts" setup>
import type { ComponentPublicInstance } from 'vue'

const keys = useMagicKeys()
const command = useCommandStore()
const modal = useModalStore()

const commandPalette = ref<ComponentPublicInstance<HTMLInputElement>>()

// fetch commands
// fetch popular brands
// store pages

function onNavigate(): void {
  //
}

function onClose(): void {
  modal.close()
}

function onUpdate(): void {
  console.log()
}
</script>

<template>
  <div>
    <CommandPalette
      ref="commandPalette"
      by="id"
      placeholder
      placeholder-label="Search..."
      searchable
      :groups="command.groups"
    />
  </div>
</template>