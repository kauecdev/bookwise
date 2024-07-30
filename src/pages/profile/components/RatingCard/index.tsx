import { Rating } from '@/shared/interfaces/rating'
import { CardContainer, Container } from './styles'
import Image from 'next/image'
import { formatDateFromNow } from '@/utils/format-date-from-now'
import { StarsRate } from '@/components/StarsRate'

interface RatingCardProps {
  rating: Rating
}

export function RatingCard({ rating }: RatingCardProps) {
  return (
    <Container>
      <span>{formatDateFromNow(rating.createdAt)}</span>
      <CardContainer>
        <div>
          <Image src={rating.book.coverUrl} width={64} height={94} alt="" />
          <div>
            <header>
              <span>{rating.book.name}</span>
              <p>{rating.book.author}</p>
            </header>
            <StarsRate rate={rating.rate} />
          </div>
        </div>
        <p>{rating.description}</p>
      </CardContainer>
    </Container>
  )
}
