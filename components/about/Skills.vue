<script lang="ts" setup>
import { set } from '@vueuse/core'

const skills = [
  'Vue',
  'Nuxt',
  'Laravel',
  'Inertia',
  'Filament',
  'Node',
  'Tailwind CSS',
  'React',
  'Livewire'
]

const el = ref<HTMLElement>()
const hovered = useElementHover(el)
const items = ref(skills)
const { pause, resume, isActive } = useIntervalFn(() => {
  set(items, [...items.value.slice(1), items.value[0]])
}, 2000)

whenever(hovered, () => pause())
whenever(logicNot(hovered), () => resume())
</script>

<template>
  <Card overflow-hidden p-none>
    <div md="p-12" grid gap-8 lg:gap-20 p-10 w-full>
      <div col-span-12>
        <div flex items-center>
          <Heading type="h2" text-3xl leading-tight>
            Skills.
          </Heading>
        </div>
      </div>
      <div col-span-12>
        <div flex flex-col justify-center min-h-110 relative>
          <div ref="el">
            <template v-for="item, idx in items" :key="item">
              <AboutSkill
                :title="item"
                :items="items"
                :index="idx"
              />
            </template>
          </div>
        </div>
      </div>
    </div>
  </Card>
</template>
