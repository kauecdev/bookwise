import { ComponentProps } from 'react'
import { Container } from './styles'

interface SignInButtonProps extends ComponentProps<typeof Container> {}

export function SignInButton({ children, ...props }: SignInButtonProps) {
  return <Container {...props}>{children}</Container>
}
