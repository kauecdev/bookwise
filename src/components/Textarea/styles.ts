import { styled } from '@/styles/stitches.config'

export const Container = styled('div', {
  backgroundColor: '$gray800',
  borderRadius: 4,
  border: '1px solid $gray500',
  padding: '0.875rem $5',
  position: 'relative',

  '> span': {
    position: 'absolute',
    bottom: '$1',
    right: '$2',
    color: '#7C7C8A',
    fontSize: '$sm',
  },
})

export const CustomTextarea = styled('textarea', {
  backgroundColor: 'transparent',
  border: 0,
  width: '100%',
  resize: 'none',
  fontFamily: '$default',
  color: '$gray100',

  '&:placeholder': {
    fontSize: '$sm',
    color: '$gray400',
  },

  '&:focus': {
    outline: 0,
  },
})
