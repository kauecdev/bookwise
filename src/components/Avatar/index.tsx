import { AvatarContainer } from './styles'

interface AvatarProps {
  avatarUrl: string
  size: 'sm' | 'md' | 'lg'
}

export function Avatar({ avatarUrl, size }: AvatarProps) {
  const avatarSize = {
    sm: 32,
    md: 40,
    lg: 72,
  }

  return (
    <AvatarContainer
      width={avatarSize[size]}
      height={avatarSize[size]}
      src={avatarUrl}
      alt=""
    />
  )
}
