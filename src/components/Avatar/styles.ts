import { styled } from '@/styles/stitches.config'
import Image from 'next/image'

export const AvatarContainer = styled(Image, {
  borderRadius: '$full',
  background: '$gradient-vertical',
  padding: 1,
})
