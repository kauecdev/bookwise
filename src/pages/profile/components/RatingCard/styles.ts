import { styled } from '@/styles/stitches.config'

export const Container = styled('div', {
  '> span': {
    color: '$gray300',
    fontSize: '$sm',
    display: 'block',
    marginBottom: '$2',
  },
})

export const CardContainer = styled('article', {
  borderRadius: 8,
  padding: '$6',
  background: '$gray700',

  '> div': {
    display: 'flex',
    gap: '$6',
    marginBottom: '$6',
  },

  '> div > div': {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
  },

  header: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'start',
    justifyContent: 'start',

    span: {
      display: '-webkit-box',
      textOverflow: 'ellipsis',
      overflow: 'hidden',
      '-webkit-line-clamp': 2,
      '-webkit-box-orient': 'vertical',
    },
    p: {
      color: '$gray400',
      fontSize: '$sm',
    },
  },

  '> p': {
    fontSize: '$sm',
    color: '$gray300',
  },
})
