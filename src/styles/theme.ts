import { extendTheme } from '@chakra-ui/react';

export const theme = extendTheme({
  colors: {
    green: {
      '700': '#1d7850',
      '500': '#009c6b',
      '300': '#6ac48e',
      '200': '#4a9e1d',
      '100': '#70cf3c',
      '50': '#C0FFC0',
    },
  },

  fonts: {
    heading: 'verdana, sans-serif',
    body: 'verdana, sans-serif',
  },

  styles: {
    global: {
      html: {
        fontSize: '12px',
        textAlign: 'center',
      },
      input: {
        textAlign: 'center',
      },
      body: {
        bg: '#fff',
        color: 'gray.700',
        overflow: 'hidden',
        w: '100vw',
        h: '100vh',
      },
      table: {
        th: {
          fontSize: '0.875rem !important',
        },
        td: {
          fontSize: '0.75rem',
        },
      },
    },
  },

  components: {
    Table: {
      variants: {
        // General
        'custom-striped': {
          th: {
            color: '#fff',
            bgColor: 'green.400',
            borderX: '1px solid #fff',
            '&:first-of-type': {
              borderLeft: 0,
            },
            '&:last-of-type': {
              borderRight: 0,
            },
            _hover: { filter: 'brightness(0.9)' },
          },
          td: {
            bgColor: '#dee2e6',
            borderX: '1px solid #fff',
            '&:first-of-type': {
              borderLeft: 0,
            },
            '&:last-of-type': {
              borderRight: 0,
            },
          },
          tbody: {
            tr: {
              '&:nth-of-type(even)': {
                'td:not(.chakra-popover__popper td), td:not(.chakra-popover__popper td)':
                  {
                    bgColor: '#f8f9fa',
                    borderX: '1px solid #fff',
                    '&:first-of-type': {
                      borderLeft: 0,
                    },
                    '&:last-of-type': {
                      borderRight: 0,
                    },
                  },
                'td:not(.chakra-popover__popper td)': {
                  bgColor: '#f8f9fa',
                },
              },
              '&:hover': {
                'td:not(.chakra-popover__popper td)': {
                  bgColor: 'green.50',
                  borderX: '1px solid #fff',
                  '&:first-of-type': {
                    borderLeft: 0,
                  },
                  '&:last-of-type': {
                    borderRight: 0,
                  },
                },
              },
            },
          },
        },
        // consultas/produtos
        'custom-striped-products': {
          th: {
            color: '#fff',
            bgColor: 'green.400',
            borderX: '1px solid #fff',
            '&:first-of-type': {
              borderLeft: 0,
            },
            '&:last-of-type': {
              borderRight: 0,
            },
            _hover: { filter: 'brightness(0.9)' },
          },
          td: {
            bgColor: '#dee2e6',
            borderX: '1px solid #fff',
            '&:first-of-type': {
              borderLeft: 0,
            },
            '&:last-of-type': {
              borderRight: 0,
            },
          },
          tbody: {
            tr: {
              '&:nth-of-type(even)': {
                'td:not(.chakra-popover__popper td)': {
                  bgColor: '#f8f9fa',
                  borderX: '1px solid #fff',
                  '&:first-of-type': {
                    borderLeft: 0,
                  },
                  '&:last-of-type': {
                    borderRight: 0,
                  },
                },
              },
              '&:hover': {
                'td:not(.chakra-popover__popper td)': {
                  bgColor: 'green.50',
                  borderX: '1px solid #fff',
                  '&:first-of-type': {
                    borderLeft: 0,
                  },
                  '&:last-of-type': {
                    borderRight: 0,
                  },
                },
              },
            },
          },
        },
        // Table inside popover on other table cell
        'custom-striped-without-hover': {
          th: {
            color: '#fff',
            bgColor: 'green.400',
            borderX: '1px solid #fff',
            '&:first-of-type': {
              borderLeft: 0,
            },
            '&:last-of-type': {
              borderRight: 0,
            },
          },
          td: {
            bgColor: '#dee2e6',
            borderX: '1px solid #fff',
            '&:first-of-type': {
              borderLeft: 0,
            },
            '&:last-of-type': {
              borderRight: 0,
            },
          },
          tbody: {
            tr: {
              '&:nth-of-type(even)': {
                'th, td': {
                  bgColor: '#f8f9fa',
                  borderX: '1px solid #fff',
                  '&:first-of-type': {
                    borderLeft: 0,
                  },
                  '&:last-of-type': {
                    borderRight: 0,
                  },
                },
                td: {
                  bgColor: '#f8f9fa',
                },
              },
            },
          },
        },
        // consultas/produtos => detalhes
        'custom-expanded': {
          th: {
            color: '#2d3748',
            bgColor: '#ebb894',
            borderX: '1px solid #fff',
            '&:first-of-type': {
              borderLeft: 0,
            },
            '&:last-of-type': {
              borderRight: 0,
            },
            _hover: { filter: 'brightness(0.9)' },
          },
          td: {
            color: '#2d3748',
            bgColor: '#dee2e6',
            borderX: '1px solid #fff',
            '&:first-of-type': {
              borderLeft: 0,
            },
            '&:last-of-type': {
              borderRight: 0,
            },
          },
          // tbody: {
          //   tr: {
          //     '&[data-expanded=true]': {
          //       th: {
          //         borderX: '1px solid #fff',
          //       },
          //       td: {
          //         // border: 'none',
          //         bgColor: '#f8f9fa',
          //       },
          //     },
          //     '&:hover': {
          //       td: {
          //         borderX: '1px solid #fff',
          //         bgColor: 'green.50',
          //       },
          //     },
          //   },
          // },
        },
      },
    },
  },
});
