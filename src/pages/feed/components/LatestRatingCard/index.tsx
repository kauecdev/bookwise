import Image from 'next/image'
import { Body, BookDetails, Container, Header } from './styles'
import { Rating } from '@/shared/interfaces/rating'
import { StarsRate } from '@/components/StarsRate'
import { formatDateFromNow } from '@/utils/format-date-from-now'
import { Avatar } from '@/components/Avatar'
import Link from 'next/link'

interface LatestRatingCardProps {
  rating: Rating
}

export function LatestRatingCard({ rating }: LatestRatingCardProps) {
  return (
    <Container>
      <Header>
        <Link href={`/profile/${rating.user.id}`}>
          <Avatar avatarUrl={rating.user.avatarUrl} size="md" />
          <div>
            <span>{rating.user.name}</span>
            <p>{formatDateFromNow(rating.createdAt)}</p>
          </div>
        </Link>
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
