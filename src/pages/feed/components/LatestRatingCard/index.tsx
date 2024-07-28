import Image from 'next/image'
import { Body, BookDetails, Container, Header } from './styles'
import { Rating } from '@/shared/interfaces/rating'
import { StarsRate } from '@/components/StarsRate'
import { formatDateFromNow } from '@/utils/format-date-from-now'

interface LatestRatingCardProps {
  rating: Rating
}

export function LatestRatingCard({ rating }: LatestRatingCardProps) {
  return (
    <Container>
      <Header>
        <Image width={38} height={38} src={rating.user.avatarUrl} alt="" />
        <div>
          <span>{rating.user.name}</span>
          <p>{formatDateFromNow(rating.createdAt)}</p>
        </div>
        <StarsRate rate={rating.rate} />
      </Header>
      <Body>
        <Image src={rating.book.coverUrl} width={108} height={152} alt="" />
        <BookDetails>
          <header>
            <span>{rating.book.name}</span>
            <p>{rating.book.author}</p>
          </header>
          <p>{rating.description}</p>
        </BookDetails>
      </Body>
    </Container>
  )
}
