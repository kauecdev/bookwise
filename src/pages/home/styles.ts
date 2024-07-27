import { styled } from '@/styles/stitches.config'

export const Container = styled('main', {
  padding: '$5',
  display: 'flex',
  alignItems: 'center',
})

export const SignInContainer = styled('div', {
  flex: 1,
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
})

export const SignInBox = styled('div', {
  h1: {
    fontSize: '$lg',
    fontWeight: '$bold',
    marginBottom: '$1',
  },
})

export const SignInButtonsContainer = styled('div', {
  marginTop: '$10',
  display: 'flex',
  flexDirection: 'column',
  gap: '$4',
})

export const SignInButton = styled('button', {
  all: 'unset',
  width: '100%',
  padding: '$5 $6',
  backgroundColor: '$gray600',
  borderRadius: 8,
  display: 'flex',
  alignItems: 'center',
  gap: '$5',
  cursor: 'pointer',

  '&:not(:disabled):hover': {
    backgroundColor: '$gray500',
  },

  '&:disabled': {
    opacity: 0.4,
    cursor: 'not-allowed',
  },
})
