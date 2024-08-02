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
