import { styled } from '@/styles/stitches.config'

export const Container = styled('main', {
  marginTop: '3.25rem',
  marginLeft: '6rem',

  display: 'flex',
  flexDirection: 'column',
})

export const Header = styled('h2', {
  display: 'flex',
  alignItems: 'center',
  gap: '$3',
  color: '$gray100',

  svg: {
    color: '$green100',
  },
})

export const Content = styled('div', {
  marginTop: '$10',
  display: 'grid',
  gridTemplateColumns: '1fr 324px',
  alignItems: 'start',
  gap: '4rem',
})

export const LatestRatingsContainer = styled('div', {
  display: 'flex',
  flexDirection: 'column',

  '> span': {
    fontSize: '$sm',
    marginBottom: '$4',
  },

  '> div': {
    display: 'flex',
    flexDirection: 'column',
    gap: '$3',
  },
})

export const PopularBooksContainer = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  gap: '$2',

  width: '100%',

  header: {
    flex: 1,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',

    span: {
      fontSize: '$sm',
    },
  },

  '> div': {
    display: 'flex',
    flexDirection: 'column',
    gap: '$3',
  },
})
