import { styled } from '@stitches/react'

export const Container = styled('div', {
  marginTop: '3.25rem',
  marginLeft: '6rem',

  display: 'flex',
  flexDirection: 'column',
})

export const Header = styled('header', {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  color: '$gray100',

  '> section': {
    display: 'flex',
    alignItems: 'center',
    gap: '$3',

    '> svg': {
      color: '$green100',
    },
  },

  '> div': {
    width: '35%',
  },
})

export const CategoryChipsContainer = styled('div', {
  marginTop: '$10',
  display: 'flex',
  gap: '$3',
  flexWrap: 'wrap',
})

export const BooksContainer = styled('div', {
  marginTop: '3rem',
  display: 'grid',
  gridTemplateColumns: 'repeat(3, 1fr)',
  gap: '$5',
})

export const BookCard = styled('article', {
  backgroundColor: '$gray700',
  borderRadius: 8,
  padding: '1.125rem $5',

  cursor: 'pointer',

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
