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
    fontSize: {
      button: '0.9375rem',
      para: '1.375rem',
    },
    boxShadow: {
      px: 'var(--un-shadow-inset) 0 0 2px 0 rgba(0, 0, 0, 1)',
    },
  },
  shortcuts: {
    'title-lg': 'text-1.75rem font-bold leading-tight',
    'title-xl': 'text-2.25rem font-bold leading-tight',
    'title-2xl': 'text-2.625rem font-bold leading-tight',
    'max-h-page': 'max-h-[calc(100vh_-_24px)]',
    'mask': '[mask-composite:xor] [mask:linear-gradient(black,black)_content-box_content-box,linear-gradient(black,black)] bg-gradient-to-b bg-gradient-from-white/5 bg-gradient-to-white/5',
    'mask-radial': '[background:radial-gradient(circle_at_bottom_center,var(--color),transparent_70%)]',
    'mask-glow': '[mask-image:radial-gradient(circle_at_center_center,black,transparent)]',
    'ambiance': '[--color:#666] pointer-events-none select-none relative mask-glow w-[min(var(--page-max-width),100%)] h-150 overflow-hidden before:content-none before:absolute before:inset-none before:mask-radial before:opacity-40',
    'particles': 'top-full left-50% rotate-20 -translate-50% mask-glow',
    'highlight': 'shadow-px shadow-inset shadow-white/10',
    'glow': '[background:radial-gradient(ellipse_at_center,var(--un-gradient-stops))]',
  },
})
