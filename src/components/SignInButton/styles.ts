import { styled } from '@/styles/stitches.config'

export const Container = styled('button', {
  all: 'unset',
  padding: '$5 $6',
  backgroundColor: '$gray600',
  borderRadius: 8,
  display: 'flex',
  alignItems: 'center',
  gap: '$5',
  cursor: 'pointer',

  '&:not(:disabled):hover': {
    backgroundColor: '$gray500',
  },

  '&:disabled': {
    opacity: 0.4,
    cursor: 'not-allowed',
  },
})
