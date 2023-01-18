<script setup lang="ts">
import type { PropType } from 'vue'

const props = defineProps({
  tabs: {
    type: Array as PropType<{ label: string }[]>,
    required: true,
  },
  activeTabIndex: {
    type: Number,
    required: true,
  },
})

const emit = defineEmits(['update:activeTabIndex'])

const tabsRef = ref()

const highlightUnderline = ref()

const updateHighlightUnderlinePosition = (activeTab: any) => {
  if (!activeTab)
    return

  highlightUnderline.value.style.left = `${activeTab.offsetLeft}px`
  highlightUnderline.value.style.width = `${activeTab.clientWidth}px`
}

const updateTabs = ($event: any, i: any) => {
  emit('update:activeTabIndex', i)
  nextTick(() => updateHighlightUnderlinePosition($event.target))
}

watch(
  tabsRef,
  (newVal) => {
    if (!newVal)
      return

    setTimeout(() => {
      updateHighlightUnderlinePosition(tabsRef.value.children[props.activeTabIndex])
    }, 50)
  },
  {
    immediate: true,
  },
)
</script>

<template>
  <div class="tabs-header">
    <div v-if="tabs" ref="tabsRef" class="tabs">
      <button
        v-for="({ label }, i) in tabs"
        :key="`${i}${label}`"
        :class="[activeTabIndex === i ? 'active' : 'not-active']"
        @click="updateTabs($event, i)"
      >
        {{ label }}
      </button>
      <span
        ref="highlightUnderline"
        class="highlight-underline"
      >
        <span class="tab" />
      </span>
    </div>

    <slot name="footer" />
  </div>
</template>

<style scoped lang="ts">
css({
  ".tabs-header": {
    position: 'relative',
    background: '{color.zinc.200}',
    color: '{color.red.700}',
    borderBottom: '1px solid {elements.border.secondary.default}',
    '@dark': {
      color: '{color.red.500}',
      background: '{color.zinc.900}',
    },
    '.tabs': {
      position: 'relative',
      zIndex: 0,
      display: 'flex',
      px: '{space.2}',
      overflowX: 'auto',
      button: {
        py: '{space.rem.625}',
        px: '{space.4}',
        position: 'relative',
        fontFamily: '{font.mono}',
        fontSize: '{text.sm.fontSize}',
        lineHeight: '{text.sm.lineHeight}',
        letterSpacing: '{letterSpacing.tight}',
        userSelect: 'none',
        transition: 'color 100ms, background 100ms',
        '&.not-active': {
          color: '{color.zinc.700}',
          '&:hover': {
            color: '{color.zinc.800}',
            background: 'transparent'
          },
          '@dark': {
            color: '{color.zinc.400}',
            '&:hover': {
              color: '{color.zinc.200}',
              background: 'transparent'
            },
          }
        },
        '&.active': {
          color: '{color.gray.500}',
          '@dark': {
            color: '{color.white}',
          }
        }
      },
      '.highlight-underline': {
        position: 'absolute',
        zIndex: -1,
        bottom: 0,
        height: '1px',
        transition: 'left 150ms, width 150ms',
        '.tab': {
          display: 'flex',
          width: '100%',
          height: '1px',
          backgroundColor: '{color.primary.500}',
          '@dark': {
            backgroundColor: '{color.primary.500}',
          }
        }
      }
    }
  }
})
</style>
