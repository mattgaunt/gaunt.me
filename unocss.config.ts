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
    ['max-h-page', 'max-h-[calc(100vh_-_24px)]'],
    ['title-lg', 'text-1.75rem font-bold leading-tight'],
    ['title-xl', 'text-2.25rem font-bold leading-tight'],
    ['title-2xl', 'text-2.625rem font-bold leading-tight'],
    ['title-3xl', 'text-4.75rem font-bold leading-tight'],
    ['magic-gradient', 'bg-gradient-to-r from-[#A6A5F2] via-[#727EFD] to-[#A6A5F2]'],
    ['magic', 'magic-gradient text-transparent bg-clip-text animate-[magic] bg-[length:200%]'],
    ['mask', '[mask-composite:xor] [mask:linear-gradient(black,black)_content-box_content-box,linear-gradient(black,black)] bg-gradient-to-b bg-gradient-from-white/5 bg-gradient-to-white/5'],
    ['mask-radial', '[background:radial-gradient(circle_at_bottom_center,var(--color),transparent_70%)]'],
    ['mask-glow', '[mask-image:radial-gradient(circle_at_center_center,black,transparent)]'],
    ['ambiance', '[--color:#666] pointer-events-none select-none relative mask-glow w-[min(var(--page-max-width),100%)] h-150 overflow-hidden before:content-none before:absolute before:inset-none before:mask-radial before:opacity-40'],
    ['particles', 'top-full left-50% rotate-20 -translate-50% mask-glow'],
    ['glow', '[background:radial-gradient(ellipse_at_center,var(--un-gradient-stops))]'],
    ['highlight', 'shadow-px shadow-inset shadow-white/10'],
  ],
  theme: {
    colors: {
      neutral: {
        50: '#FAFAFA',
        100: '#F5F5F5',
        200: '#E5E5E5',
        300: '#D4D4D4',
        400: '#A3A3A3',
        500: '#A5A4AA',
        600: '#3E3D43',
        700: '#323137',
        800: '#212026',
        900: '#18171C',
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
