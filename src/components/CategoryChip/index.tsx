import { ComponentProps } from 'react'
import { Container } from './styles'

interface CategoryChipProps extends ComponentProps<typeof Container> {}

export function CategoryChip({ children, ...props }: CategoryChipProps) {
  return <Container {...props}>{children}</Container>
}
