import { styled } from '@/styles/stitches.config'

export const Container = styled('button', {
  all: 'unset',
  padding: '$1 $4',
  borderRadius: '$full',
  border: '1px solid $purple100',

  color: '$purple100',
  fontSize: '$md',

  cursor: 'pointer',

  '&:not(:disabled):hover': {
    backgroundColor: '$purple100',
    color: '$gray100',
    transition: '0.2s all ease-out',
  },

  '&[data-active=true]': {
    backgroundColor: '$purple200',
    color: '$gray100',
    border: '1px solid $purple200',
  },
})
