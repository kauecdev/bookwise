import { Button } from '@/components/Button'
import { styled } from '@/styles/stitches.config'
import Link from 'next/link'

export const Container = styled('aside', {
  width: 232,
  height: 'calc(100vh - (36px + 64px))',
  borderRadius: 12,
  padding: '$10 3.25rem $6',
  backgroundColor: '$gray700',

  position: 'relative',
  overflow: 'hidden',

  'div[data-id=ellipse-top-left]': {
    backgroundColor: '$green200',
    borderRadius: '$full',
    width: 221,
    height: 221,
    opacity: 0.8,
    filter: 'blur(100px)',

    position: 'absolute',
    top: '-10%',
    left: '-20%',
    transform: 'translate(20%, 10%)',
  },

  'div[data-id=ellipse-top-right]': {
    backgroundColor: '$purple200',
    borderRadius: '$full',
    width: 221,
    height: 221,
    opacity: 0.8,
    filter: 'blur(100px)',

    position: 'absolute',
    top: '-10%',
    right: '-20%',
    transform: 'translate(20%, 10%)',
  },
})

export const Content = styled('div', {
  height: '100%',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'space-between',
  position: 'relative',
  zIndex: 999,

  '> div': {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
})

export const LinksContainer = styled('div', {
  marginTop: 64,
  display: 'flex',
  flexDirection: 'column',
  gap: '$4',
})

export const CustomLink = styled(Link, {
  color: '$gray100',
  textDecoration: 'none',
  display: 'flex',
  alignItems: 'center',
  gap: '$3',

  fontSize: '$md',
  fontWeight: '$bold',

  position: 'relative',

  '&[data-active=false]': {
    color: '$gray400',
  },

  '&[data-active=false]:hover': {
    color: '$gray100',
  },
})

export const ActiveLinkMarker = styled('div', {
  width: 4,
  left: '-1rem',
  height: '100%',
  position: 'absolute',
  borderRadius: '$full',
  background: '$colors$gradient-vertical',
})

export const SignInButton = styled(Button, {
  gap: '$3',
  svg: {
    color: '$green100',
  },
})

export const SignOutButton = styled(Button, {
  gap: '$3',

  img: {
    borderRadius: '$full',
  },

  svg: {
    color: '#F75A68',
  },
})
