import { styled } from '@/styles/stitches.config'

export const Button = styled('button', {
  all: 'unset',
  borderRadius: 4,
  display: 'flex',
  alignItems: 'center',
  gap: '$2',

  cursor: 'pointer',

  fontSize: '$md',
  fontWeight: '$bold',

  '&:not(:disabled):hover': {
    transition: 'all 0.2s ease-in',
    backgroundColor: '#171A1F',
  },

  '&:disabled': {
    opacity: 0.4,
    cursor: 'not-allowed',
  },

  variants: {
    backgroundColor: {
      primary: {
        backgroundColor: 'transparent',
        '&:not(:disabled):hover': {
          transition: 'all 0.2s ease-in',
          backgroundColor: '$gray500',
        },
      },
      secondary: {
        backgroundColor: '$gray600',
        '&:not(:disabled):hover': {
          transition: 'all 0.2s ease-in',
          backgroundColor: '$gray500',
        },
      },
    },
    color: {
      white: {
        color: '$gray100',
      },
      purple: {
        color: '$purple100',
      },
      red: {
        color: '#F75A68',
      },
      green: {
        color: '$green100',
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
    padding: {
      normal: {
        padding: '$1 $2',
      },
      distributed: {
        padding: '$2',
      },
    },
  },

  defaultVariants: {
    color: 'white',
    size: 'md',
    padding: 'normal',
  },
})
