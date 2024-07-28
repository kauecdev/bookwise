import { Star } from '@phosphor-icons/react'
import { Container } from './styles'

interface StartsRateProps {
  rate: number
}

export function StarsRate({ rate }: StartsRateProps) {
  return (
    <Container>
      {Array.from({ length: 5 }).map((_, index) =>
        index + 1 <= rate ? (
          <Star key={index} weight="fill" />
        ) : (
          <Star key={index} weight="regular" />
        ),
      )}
    </Container>
  )
}
