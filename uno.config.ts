import {
  defineConfig,
  presetAttributify,
  presetTypography,
  presetUno,
  transformerDirectives,
  transformerVariantGroup,
} from 'unocss'

export default defineConfig({
  shortcuts: [
    {
      'max-h-page': 'max-h-[calc(100vh_-_16px)]',
      'mask': '[mask-composite:xor] [mask:linear-gradient(black,black)_content-box_content-box,linear-gradient(black,black)] bg-gradient-to-b bg-gradient-from-white/5 bg-gradient-to-white/5',
      'glow': '[background:radial-gradient(ellipse_at_center,var(--un-gradient-stops))]',
      'highlight': 'shadow-px shadow-inset shadow-white/5',
      'shortcut': 'bg-white bg-opacity-4 rounded-md w-4.5',
      'py-default': 'py-2.5',
    },
  ],
  theme: {
    fontFamily: {
      heading: [
        'Satoshi Variable',
        'ui-sans-serif',
        'system-ui',
        '-apple-system',
        'BlinkMacSystemFont',
        'Segoe UI',
        'Roboto',
        'Helvetica Neue',
        'Arial',
        'Noto Sans',
        'sans-serif',
        'Apple Color Emoji',
        'Segoe UI Emoji',
        'Segoe UI Symbol',
        'Noto Color Emoji',
      ],
    },

    boxShadow: {
      px: 'var(--un-shadow-inset) 0 0 0 1px rgb(0 0 0 / 1)',
    },
  },
  presets: [
    presetUno(),
    presetAttributify(),
    presetTypography(),
  ],
  transformers: [
    transformerDirectives(),
    transformerVariantGroup(),
  ],
})
