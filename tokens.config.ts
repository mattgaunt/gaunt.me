import { defineTheme } from 'pinceau'

export default defineTheme({
  color: {
    primary: {
      50: '#f0fdfa',
      100: '#ccfbf1',
      200: '#99f6e4',
      300: '#5eead4',
      400: '#2dd4bf',
      500: '#14b8a6',
      600: '#0d9488',
      700: '#0f766e',
      800: '#115e59',
      900: '#134e4a',
    },
    zinc: {
      50: '#fafafa',
      100: '#f4f4f5',
      200: '#e4e4e7',
      300: '#d4d4d8',
      400: '#a1a1aa',
      500: '#71717a',
      600: '#52525b',
      700: '#3f3f46',
      800: '#27272a',
      900: '#18181b',
    },
  },
  elements: {
    $schema: {
      title: 'All the configurable tokens for your Elements.',
      tags: [
        '@studio-icon uiw:component',
      ],
    },
    color: {
      $schema: {
        title: 'Colors used in Elements.',
        tags: [
          '@studio-input design-token',
          '@studio-input-token-type color',
          '@studio-icon ph:palette',
        ],
      },
      text: {
        primary: {
          default: {
            initial: '{color.gray.900}',
            dark: '{color.gray.50}',
          },
          hover: {
            //
          },
        },
        secondary: {
          default: {
            initial: '{color.gray.500}',
            dark: '{color.gray.400}',
          },
          hover: {
            initial: '{color.gray.700}',
            dark: '{color.gray.200}',
          },
        },
      },
    },

    container: {
      $schema: {
        title: 'Main container sizings.',
        tags: [
          '@studio-input design-token',
          '@studio-input-token-type size',
          '@studio-icon material-symbols:width-full-outline',
        ],
      },
      maxWidth: '80rem',
      padding: {
        mobile: '{space.4}',
        xs: '{space.4}',
        sm: '{space.6}',
        md: '{space.6}',
      },
    },

    backdrop: {
      $schema: {
        title: 'Backdrops used in Elements.',
        tags: [
          '@studio-input design-token',
          '@studio-input-token-type size',
          '@studio-icon material-symbols:blur-circular',
        ],
      },
      filter: 'saturate(200%) blur(20px)',
      background: {
        initial: '#fffc',
        dark: '#0c0d0ccc',
      },
    },

    border: {
      $schema: {
        title: 'Borders used in Elements.',
        tags: [
          '@studio-input design-token',
          '@studio-input-token-type color',
          '@studio-icon material-symbols:border-all-outline-rounded',
        ],
      },
      primary: {
        default: {
          initial: '{color.gray.100}',
          dark: '{color.gray.900}',
        },
        hover: {
          initial: '{color.gray.200}',
          dark: '{color.gray.800}',
        },
      },
      secondary: {
        default: {
          initial: '{color.gray.200}',
          dark: '{color.gray.800}',
        },
        hover: {
          initial: '',
          dark: '',
        },
      },
    },

    surface: {
      $schema: {
        title: 'Surfaces used in Elements.',
        tags: [
          '@studio-input design-token',
          '@studio-input-token-type color',
          '@studio-icon fluent:surface-hub-20-filled',
        ],
      },
      background: {
        base: {
          initial: '{color.gray.100}',
          dark: '{color.gray.900}',
        },
      },
    },

    state: {
      $schema: {
        title: 'Color states used in Elements.',
        tags: [
          '@studio-input design-token',
          '@studio-input-token-type color',
          '@studio-icon mdi:palette-advanced',
        ],
      },
      primary: {
        color: {
          primary: {
            initial: '{color.primary.600}',
            dark: '{color.primary.400}',
          },
          secondary: {
            initial: '{color.primary.700}',
            dark: '{color.primary.200}',
          },
        },
        backgroundColor: {
          primary: {
            initial: '{color.primary.50}',
            dark: '{color.primary.900}',
          },
          secondary: {
            initial: '{color.primary.100}',
            dark: '{color.primary.800}',
          },
        },
        borderColor: {
          primary: {
            initial: '{color.primary.100}',
            dark: '{color.primary.800}',
          },
          secondary: {},
        },
      },
      info: {
        color: {
          primary: {
            initial: '{color.blue.500}',
            dark: '{color.blue.400}',
          },
          secondary: {
            initial: '{color.blue.600}',
            dark: '{color.blue.200}',
          },
        },
        backgroundColor: {
          primary: {
            initial: '{color.blue.50}',
            dark: '{color.blue.900}',
          },
          secondary: {
            initial: '{color.blue.100}',
            dark: '{color.blue.800}',
          },
        },
        borderColor: {
          primary: {
            initial: '{color.blue.100}',
            dark: '{color.blue.800}',
          },
          secondary: {},
        },
      },
      success: {
        color: {
          primary: {
            initial: '{color.green.500}',
            dark: '{color.green.400}',
          },
          secondary: {
            initial: '{color.green.600}',
            dark: '{color.green.200}',
          },
        },
        backgroundColor: {
          primary: {
            initial: '{color.green.50}',
            dark: '{color.green.900}',
          },
          secondary: {
            initial: '{color.green.100}',
            dark: '{color.green.800}',
          },
        },
        borderColor: {
          primary: {
            initial: '{color.green.100}',
            dark: '{color.green.800}',
          },
          secondary: {},
        },
      },
      warning: {
        color: {
          primary: {
            initial: '{color.yellow.600}',
            dark: '{color.yellow.400}',
          },
          secondary: {
            initial: '{color.yellow.700}',
            dark: '{color.yellow.200}',
          },
        },
        backgroundColor: {
          primary: {
            initial: '{color.yellow.50}',
            dark: '{color.yellow.900}',
          },
          secondary: {
            initial: '{color.yellow.100}',
            dark: '{color.yellow.800}',
          },
        },
        borderColor: {
          primary: {
            initial: '{color.yellow.100}',
            dark: '{color.yellow.800}',
          },
          secondary: {},
        },
      },
      danger: {
        color: {
          primary: {
            initial: '{color.red.500}',
            dark: '{color.red.300}',
          },
          secondary: {
            initial: '{color.red.600}',
            dark: '{color.red.200}',
          },
        },
        backgroundColor: {
          primary: {
            initial: '{color.red.50}',
            dark: '{color.red.900}',
          },
          secondary: {
            initial: '{color.red.100}',
            dark: '{color.red.800}',
          },
        },
        borderColor: {
          primary: {
            initial: '{color.red.100}',
            dark: '{color.red.800}',
          },
          secondary: {},
        },
      },
    },
  },
  typography: {
    $schema: {
      title: 'All the configurable tokens for your Typography.',
      tags: [
        '@studio-input design-token',
        '@studio-input-token-type color',
        '@studio-icon material-symbols:article',
      ],
    },
    verticalMargin: {
      $schema: {
        title: 'Vertical spacings between paragraphs.',
        tags: [
          '@studio-input design-token',
          '@studio-input-token-type size',
          '@studio-icon mingcute:line-height-line',
        ],
      },
      sm: '16px',
      base: '32px',
    },
    letterSpacing: {
      $schema: {
        title: 'Horizontal spacings between letters.',
        tags: [
          '@studio-input design-token',
          '@studio-input-token-type size',
          '@studio-icon mingcute:letter-spacing-line',
        ],
      },
      tight: '-0.025em',
      wide: '0.025em',
    },
    fontSize: {
      '$schema': {
        title: 'Horizontal spacings between letters.',
        tags: [
          '@studio-input design-token',
          '@studio-input-token-type font-size',
          '@studio-icon mingcute:font-size-fill',
        ],
      },
      'xs': '12px',
      'sm': '14px',
      'base': '16px',
      'lg': '18px',
      'xl': '20px',
      '2xl': '24px',
      '3xl': '30px',
      '4xl': '36px',
      '5xl': '48px',
      '6xl': '60px',
      '7xl': '72px',
      '8xl': '96px',
      '9xl': '128px',
    },
    fontWeight: {
      $schema: {
        title: 'Font weights used in typography.',
        tags: [
          '@studio-input design-token',
          '@studio-input-token-type font-size',
          '@studio-icon mingcute:bold-fill',
        ],
      },
      thin: '100',
      extralight: '200',
      light: '300',
      normal: '400',
      medium: '500',
      semibold: '600',
      bold: '700',
      extrabold: '800',
      black: '900',
    },
    lead: {
      $schema: {
        title: 'Line heights used in your typography.',
        tags: [
          '@studio-input design-token',
          '@studio-input-token-type font-size',
          '@studio-icon material-symbols:height-rounded',
        ],
      },
      none: '1',
      tight: '1.25',
      snug: '1.375',
      normal: '1.5',
      relaxed: '1.625',
      loose: '2',
    },
    color: {
      primary: {
        50: '{color.primary.50}',
        100: '{color.primary.100}',
        200: '{color.primary.200}',
        300: '{color.primary.300}',
        400: '{color.primary.400}',
        500: '{color.primary.500}',
        600: '{color.primary.600}',
        700: '{color.primary.700}',
        800: '{color.primary.800}',
        900: '{color.primary.900}',
      },
      secondary: {
        50: '{color.zinc.50}',
        100: '{color.zinc.100}',
        200: '{color.zinc.200}',
        300: '{color.zinc.300}',
        400: '{color.zinc.400}',
        500: '{color.zinc.500}',
        600: '{color.zinc.600}',
        700: '{color.zinc.700}',
        800: '{color.zinc.800}',
        900: '{color.zinc.900}',
      },
    },
  },
  prose: {
    $schema: {
      title: 'All the configurable tokens for your Prose components.',
      tags: [
        '@studio-input design-token',
        '@studio-input-token-type font-size',
        '@studio-icon lucide:component',
      ],
    },
    p: {
      fontSize: '{typography.fontSize.base}',
      lineHeight: '{typography.lead.normal}',
      margin: '{typography.verticalMargin.base} 0',
      br: {
        margin: '{typography.verticalMargin.base} 0 0 0',
      },
    },
    h1: {
      margin: '0 0 2rem',
      fontSize: '{typography.fontSize.5xl}',
      lineHeight: '{typography.lead.tight}',
      fontWeight: '{typography.fontWeight.bold}',
      letterSpacing: '{typography.letterSpacing.tight}',
      iconSize: '{typography.fontSize.3xl}',
    },
    h2: {
      margin: '3rem 0 2rem',
      fontSize: '{typography.fontSize.4xl}',
      lineHeight: '{typography.lead.tight}',
      fontWeight: '{typography.fontWeight.semibold}',
      letterSpacing: '{typography.letterSpacing.tight}',
      iconSize: '{typography.fontSize.2xl}',
    },
    h3: {
      margin: '3rem 0 2rem',
      fontSize: '{typography.fontSize.3xl}',
      lineHeight: '{typography.lead.snug}',
      fontWeight: '{typography.fontWeight.semibold}',
      letterSpacing: '{typography.letterSpacing.tight}',
      iconSize: '{typography.fontSize.xl}',
    },
    h4: {
      margin: '3rem 0 2rem',
      fontSize: '{typography.fontSize.2xl}',
      lineHeight: '{typography.lead.snug}',
      fontWeight: '{typography.fontWeight.semibold}',
      letterSpacing: '{typography.letterSpacing.tight}',
      iconSize: '{typography.fontSize.lg}',
    },
    h5: {
      margin: '3rem 0 2rem',
      fontSize: '{typography.fontSize.xl}',
      lineHeight: '{typography.lead.snug}',
      fontWeight: '{typography.fontWeight.semibold}',
      iconSize: '{typography.fontSize.lg}',
    },
    h6: {
      margin: '3rem 0 2rem',
      fontSize: '{typography.fontSize.lg}',
      lineHeight: '{typography.lead.normal}',
      fontWeight: '{typography.fontWeight.semibold}',
      iconSize: '{typography.fontSize.base}',
    },
    strong: {
      fontWeight: '{typography.fontWeight.semibold}',
    },
    img: {
      margin: '{typography.verticalMargin.base} 0',
    },
    a: {
      textDecoration: 'none',
      color: {
        light: {
          default: 'inherit',
          hover: '{typography.color.primary.500}',
        },
        dark: {
          default: 'inherit',
          hover: '{typography.color.primary.400}',
        },
      },
      borderBottom: '{prose.a.borderWidth} {prose.a.borderStyle.default} {prose.a.borderColor.light.default}',
      borderWidth: '1px',
      borderColor: {
        light: {
          default: '{typography.color.secondary.400}',
          hover: '{typography.color.primary.500}',
        },
        dark: {
          default: '{typography.color.secondary.400}',
          hover: '{typography.color.primary.500}',
        },
      },
      borderStyle: {
        default: 'dashed',
        hover: 'solid',
      },
      borderDistance: '2px',
      fontWeight: '{typography.fontWeight.medium}',
      hasCode: {
        borderBottom: 'none',
      },
      code: {
        border: '{prose.a.borderWidth} {prose.a.borderStyle} {prose.a.code.borderColor.light.default}',
        borderColor: {
          light: {
            default: '{typography.color.secondary.400}',
            hover: '{typography.color.primary.500}',
          },
          dark: {
            default: '{typography.color.secondary.600}',
            hover: '{typography.color.primary.600}',
          },
        },
        color: {
          light: {
            hover: '{typography.color.primary.500}',
          },
          dark: {
            hover: '{typography.color.primary.300}',
          },
        },
        background: {
          light: {
            hover: '{typography.color.primary.50}',
          },
          dark: {
            hover: '{typography.color.primary.900}',
          },
        },
      },
    },
    blockquote: {
      margin: '{typography.verticalMargin.base} 0',
      padding: '0 0 0 24px',
      quotes: '\'201C\' \'201D\' \'2018\' \'2019\'',
      color: {
        light: '{typography.color.secondary.500}',
        dark: '{typography.color.secondary.400}',
      },
      borderLeft: '1px solid {prose.blockquote.borderColor.light}',
      borderColor: {
        light: '{typography.color.secondary.200}',
        dark: '{typography.color.secondary.700}',
      },
    },
    ul: {
      listStyleType: 'disc',
      margin: '{typography.verticalMargin.base} 0',
      padding: '0 0 0 21px',
      li: {
        markerColor: {
          light: '{typography.color.secondary.300}',
          dark: '{typography.color.secondary.800}',
        },
      },
    },
    ol: {
      listStyleType: 'decimal',
      margin: '{typography.verticalMargin.base} 0',
      padding: '0 0 0 21px',
      li: {
        markerColor: {
          light: '{typography.color.secondary.500}',
          dark: '{typography.color.secondary.500}',
        },
      },
    },
    li: {
      margin: '{typography.verticalMargin.sm} 0',
      listStylePosition: 'outside',
    },
    hr: {
      margin: '{typography.verticalMargin.base} 0',
      style: 'solid',
      width: '1px',
      color: {
        light: '{typography.color.secondary.200}',
        dark: '{typography.color.secondary.800}',
      },
    },
    table: {
      margin: '{typography.verticalMargin.base} 0',
      textAlign: 'left',
      fontSize: '{typography.fontSize.sm}',
      lineHeight: 'inherit',
    },
    thead: {
      border: 'none',
      borderBottom: '1px solid {prose.thead.borderColor.light}',
      borderColor: {
        light: '{typography.color.secondary.300}',
        dark: '{typography.color.secondary.600}',
      },
    },
    th: {
      color: {
        light: '{typography.color.secondary.600}',
        dark: '{typography.color.secondary.400}',
      },
      padding: '0 {typography.verticalMargin.sm} {typography.verticalMargin.sm} {typography.verticalMargin.sm}',
      fontWeight: '{typography.fontWeight.semibold}',
    },
    tbody: {
      tr: {
        borderBottom: '1px dashed {prose.tbody.tr.borderColor.light}',
        borderColor: {
          light: '{typography.color.secondary.300}',
          dark: '{typography.color.secondary.700}',
        },
      },
      td: {
        padding: '{typography.verticalMargin.sm}',
      },
      code: {
        inline: {
          fontSize: '{typography.fontSize.sm}',
        },
      },
    },
    code: {
      block: {
        fontSize: '{typography.fontSize.sm}',
        margin: '{typography.verticalMargin.base} 0',
        borderColor: {
          light: '{typography.color.secondary.200}',
          dark: '{typography.color.secondary.800}',
        },
        color: {
          light: '{typography.color.secondary.700}',
          dark: '{typography.color.secondary.200}',
        },
        backgroundColor: {
          light: '{typography.color.secondary.100}',
          dark: '{typography.color.secondary.900}',
        },
        pre: {
          padding: '{typography.verticalMargin.sm}',
        },
      },
      inline: {
        borderRadius: '0.375rem',
        padding: '0.25rem 0.375rem 0.25rem 0.375rem',
        fontSize: '{typography.fontSize.sm}',
        fontWeight: '{typography.fontWeight.normal}',
        color: {
          light: '{typography.color.secondary.700}',
          dark: '{typography.color.secondary.200}',
        },
        backgroundColor: {
          light: '{typography.color.secondary.100}',
          dark: '{typography.color.secondary.800}',
        },
      },
    },
  },
})
