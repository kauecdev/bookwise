import { styled } from '@stitches/react'

export const Container = styled('form', {
  backgroundColor: '$gray700',
  borderRadius: 8,
  padding: '$6',
  marginBottom: '$3',

  '> header': {
    display: 'flex',
    alignItems: 'center',
    gap: '$4',
    '> span': {
      flex: 1,
    },
  },

  '> footer': {
    marginTop: '$3',
    display: 'flex',
    gap: '$2',
    justifyContent: 'flex-end',
  },
})

export const StarsInput = styled('div', {
  display: 'flex',
  gap: 3,
  svg: {
    cursor: 'pointer',
    color: '$purple100',
  },
})
