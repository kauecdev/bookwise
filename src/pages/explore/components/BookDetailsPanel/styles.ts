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
  zIndex: 99,
  backgroundColor: 'rgba(0, 0, 0, 0.7)',
  overflowY: 'auto',

  '&::-webkit-scrollbar': {
    width: 6,
  },

  '&::-webkit-scrollbar-track': {
    backgroundColor: '$gray700',
  },

  '&::-webkit-scrollbar-thumb': {
    backgroundColor: '$gray600',
  },
})

export const Container = styled('aside', {
  backgroundColor: '$gray800',
  width: 'calc(660px - 6rem)',
  marginLeft: 'auto',
  padding: '$6 3rem',

  '> button': {
    marginBottom: '$4',
    marginLeft: 'auto',
  },
})

export const BookDetailsContainer = styled('div', {
  backgroundColor: '$gray700',
  borderRadius: '$md',
  padding: '$6 $8',

  display: 'flex',
  flexDirection: 'column',
  gap: '$10',

  '> div': {
    borderRadius: 8,

    display: 'flex',
    gap: '$7',

    '> div': {
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'space-between',
      gap: '$1',
      color: '$gray400',
      fontSize: '$sm',
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
  },
})

export const BookDetailsFooter = styled('footer', {
  borderTop: '1px solid $gray600',
  padding: '$6 0',
  display: 'flex',
  gap: '3.5rem',

  '> div': {
    display: 'flex',
    alignItems: 'center',
    gap: '$4',

    '> svg': {
      color: '$green100',
    },

    span: {
      color: '$gray300',
      fontSize: '$sm',
    },

    p: {
      color: '$gray200',
      fontWeight: '$bold',
    },
  },
})

export const RatingsContainer = styled('div', {
  marginTop: '3rem',

  header: {
    display: 'flex',
    justifyContent: 'space-between',
    marginBottom: '$4',

    '> span': {
      fontSize: '$sm',
      color: '$gray200',
    },
  },
})

export const RatingList = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  gap: '$3',
})

export const RatingCard = styled('article', {
  padding: '$6',
  backgroundColor: '$gray700',
  borderRadius: 8,

  '> header': {
    '> div': {
      display: 'flex',
      gap: '$4',
      '> div': {
        '> span': {
          fontWeight: '$bold',
        },
        '> p': {
          fontSize: '$sm',
          color: '$gray400',
        },
      },
    },
    svg: {
      color: '$purple100',
    },
  },

  '> p': {
    marginTop: '$5',
    color: '$gray300',
  },
})
