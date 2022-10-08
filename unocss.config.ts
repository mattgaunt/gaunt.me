import {
  defineConfig,
  presetAttributify,
  presetTypography,
  presetUno,
  transformerDirectives,
  transformerVariantGroup,
} from 'unocss'

export default defineConfig({
  presets: [
    presetUno(),
    presetAttributify(),
    presetTypography(),
  ],
  transformers: [
    transformerDirectives(),
    transformerVariantGroup(),
  ],
  theme: {
    colors: {
      neutral: {
        50: '#FAFAFA',
        100: '#F5F5F5',
        200: '#E5E5E5',
        300: '#D4D4D4',
        400: '#A3A3A3',
        500: '#7E7E7E',
        600: '#404040',
        700: '#303030',
        800: '#232323',
        900: '#161616',
      },
    },
    fontFamily: {
      sans: ['PolySans', 'sans-serif'],
      mono: ['Menlo', 'sans-serif'],
    },
    boxShadow: {
      px: 'var(--un-shadow-inset) 0 1px 0 0 rgba(0,0,0,0.1)',
    },
  },
  shortcuts: {
    'max-h-page': 'max-h-[calc(100vh_-_32px)]',
    'highlight': 'shadow-px shadow-inset shadow-white/5'
  },
})
