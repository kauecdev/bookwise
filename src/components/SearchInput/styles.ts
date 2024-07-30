import { styled } from '@/styles/stitches.config'

export const Container = styled('div', {
  padding: '0.875rem $5',
  backgroundColor: 'transparent',
  borderRadius: 4,
  border: '1px solid $gray500',

  '&:has(input:focus)': {
    borderColor: '$green200',
  },

  '&:has(input:disabled)': {
    opacity: 0.5,
    cursor: 'not-allowed',
  },

  display: 'flex',
  alignItems: 'center',
  gap: '$2',

  svg: {
    color: '$gray400',
    cursor: 'pointer',
  },

  button: {
    all: 'unset',
  },
})

export const Input = styled('input', {
  all: 'unset',

  flex: 1,
  color: '$gray100',

  '&:placeholder': {
    color: '$gray400',
  },

  '&:focus': {
    outline: 0,
  },
})
