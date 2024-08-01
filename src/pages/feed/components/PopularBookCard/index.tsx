import { Container } from './styles'
import Image from 'next/image'
import { StarsRate } from '@/components/StarsRate'
import { Book } from '@/shared/interfaces/book'

interface PopularBookCardProps {
  book: Book
}

export function PopularBookCard({ book }: PopularBookCardProps) {
  return (
    <Container>
      <Image src={book.coverUrl} width={64} height={94} alt="" />
      <div>
        <header>
          <span>{book.name}</span>
          <p>{book.author}</p>
        </header>
        <StarsRate rate={book.rate} />
      </div>
    </Container>
  )
}
