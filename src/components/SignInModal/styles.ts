import { styled } from '@/styles/stitches.config'

export const Overlay = styled('div', {
  '&[data-show=true]': {
    transition: 'all 0.5s',
  },

  '&[data-show=false]': {
    opacity: 0,
    zIndex: -1,
  },

  position: 'fixed',
  width: '100%',
  height: '100%',
  top: 0,
  left: 0,
  zIndex: 999,
  backgroundColor: 'rgba(0, 0, 0, 0.7)',

  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
})

export const Container = styled('div', {
  padding: '3.5rem 4.5rem',
  backgroundColor: '$gray700',
  position: 'relative',

  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
  gap: '$10',
  borderRadius: 12,

  '> button': {
    position: 'absolute',
    top: '$4',
    right: '$4',
    color: '$gray400',
  },

  '> div': {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    gap: '$4',
  },
})
