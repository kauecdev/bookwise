import { styled } from '@/styles/stitches.config'

export const Container = styled('div', {
  padding: '0 3.5rem $5',
  borderLeft: '1px solid $gray700',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  gap: '$7',
})

export const Header = styled('header', {
  display: 'flex',
  flexDirection: 'column',
  gap: '$5',
  alignItems: 'center',

  '> div': {
    textAlign: 'center',
  },

  span: {
    fontSize: '$md',
    fontWeight: '$bold',
    color: '$gray100',
  },

  p: {
    fontSize: '$sm',
    color: '$gray400',
  },
})

export const Separator = styled('hr', {
  width: 32,
  height: 4,
  border: 0,
  borderRadius: '$full',
  background: '$gradient-horizontal',
  justifySelf: 'center',
})

export const InfoList = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  gap: '$10',
  padding: '$5',
})

export const InfoItem = styled('div', {
  display: 'flex',
  alignItems: 'center',
  gap: '$5',

  '> div': {
    span: {
      fontWeight: '$bold',
      color: '$gray200',
    },
    p: {
      color: '$gray300',
    },
  },

  svg: {
    color: '$green100',
  },
})
