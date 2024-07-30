import { styled } from '@/styles/stitches.config'

export const Button = styled('button', {
  all: 'unset',
  padding: '$1 $2',
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
