import { Rating } from '@/shared/interfaces/rating'
import { Body, BookDetails, Container } from './styles'
import Image from 'next/image'
import { StarsRate } from '@/components/StarsRate'
import { formatDateFromNow } from '@/utils/format-date-from-now'

interface UserOwnRatingCardProps {
  rating: Rating
}

export function UserOwnRatingCard({ rating }: UserOwnRatingCardProps) {
  return (
    <Container>
      <Body>
        <Image src={rating.book.coverUrl} width={108} height={152} alt="" />
        <BookDetails>
          <header>
            <p>{formatDateFromNow(rating.createdAt)}</p>
            <StarsRate rate={rating.rate} />
          </header>
          <div>
            <span>{rating.book.name}</span>
            <p>{rating.book.author}</p>
          </div>
          <p>{rating.description}</p>
        </BookDetails>
      </Body>
    </Container>
  )
}
