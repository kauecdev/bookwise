import { styled } from '@/styles/stitches.config'

export const Container = styled('article', {
  backgroundColor: '$gray700',
  borderRadius: 8,
  padding: '1.125rem $5',

  display: 'flex',
  gap: '$5',

  '> div': {
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
})
