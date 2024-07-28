import { styled } from '@/styles/stitches.config'

export const Container = styled('article', {
  borderRadius: 8,
  padding: '$6',
  background: '$gray600',
})

export const Body = styled('div', {
  display: 'flex',
  gap: '$5',
})

export const BookDetails = styled('div', {
  flex: 1,
  display: 'flex',
  flexDirection: 'column',
  gap: '$5',

  '> div': {
    span: {
      display: 'block',
      fontSize: '$md',
      fontWeight: '$bold',
      lineHeight: '$short',
    },
    p: {
      fontSize: '$sm',
      color: '$gray400',
    },
  },

  header: {
    display: 'flex',
    justifyContent: 'space-between',

    p: {
      color: '$gray300',
      fontSize: '$sm',
    },
  },

  '> p': {
    color: '$gray300',
    display: '-webkit-box',
    textOverflow: 'ellipsis',
    overflow: 'hidden',
    '-webkit-line-clamp': 4,
    '-webkit-box-orient': 'vertical',
  },
})
