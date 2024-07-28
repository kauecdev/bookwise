import { styled } from '@/styles/stitches.config'

export const Container = styled('article', {
  borderRadius: 8,
  padding: '$6',
  background: '$gray700',
})

export const Header = styled('header', {
  display: 'flex',
  alignItems: 'flex-start',
  justifyContent: 'space-between',
  gap: '$4',

  img: {
    borderRadius: '$full',
    background: '$gradient-vertical',
    padding: 1,
  },

  '> div': {
    flex: 1,
    span: {
      display: 'block',
    },
    p: {
      color: '$gray400',
      fontSize: '$sm',
    },
  },
})

export const Body = styled('div', {
  marginTop: '$8',
  display: 'flex',
  gap: '$5',
})

export const BookDetails = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  gap: '$5',

  header: {
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

  '> p': {
    color: '$gray300',
    display: '-webkit-box',
    textOverflow: 'ellipsis',
    overflow: 'hidden',
    '-webkit-line-clamp': 4,
    '-webkit-box-orient': 'vertical',
  },
})
