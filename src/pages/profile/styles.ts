import { styled } from '@/styles/stitches.config'

export const Container = styled('div', {
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

  '> svg': {
    color: '$green100',
  },
})

export const Content = styled('div', {
  marginTop: '$10',
  display: 'grid',
  gridTemplateColumns: '1fr 308px',
  alignItems: 'start',
  gap: '4rem',
})

export const RatingsContainer = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  gap: '$6',
})
