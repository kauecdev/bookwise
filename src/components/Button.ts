import { styled } from '@/styles/stitches.config'

export const Button = styled('button', {
  all: 'unset',
  padding: '$1 $2',
  borderRadius: 4,
  display: 'flex',
  alignItems: 'center',

  cursor: 'pointer',

  fontSize: '$md',
  fontWeight: '$bold',

  '&:not(:disabled):hover': {
    backgroundColor: '#171A1F',
  },

  '&:disabled': {
    opacity: 0.4,
    cursor: 'not-allowed',
  },

  variants: {
    color: {
      white: {
        color: '$gray100',
      },
      purple: {
        color: '$purple100',
      },
    },
    size: {
      sm: {
        fontSize: '$sm',
      },
      md: {
        fontSize: '$md',
      },
      lg: {
        fontSize: '$lg',
      },
    },
  },

  defaultVariants: {
    color: 'white',
    size: 'md',
  },
})
