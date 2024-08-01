import Image from 'next/image'
import {
  BookDetailsContainer,
  BookDetailsFooter,
  Container,
  Overlay,
  RatingCard,
  RatingList,
  RatingsContainer,
} from './styles'
import { ComponentProps } from 'react'
import { api } from '@/lib/axios'
import { useQuery } from '@tanstack/react-query'
import { StarsRate } from '@/components/StarsRate'
import { BookmarkSimple, BookOpen, X } from '@phosphor-icons/react'
import { Button } from '@/components/Button'
import { Book } from '@/shared/interfaces/book'
import { Avatar } from '@/components/Avatar'
import { formatDateFromNow } from '@/utils/format-date-from-now'

interface BookDetailsPanelProps extends ComponentProps<typeof Overlay> {
  isOpen: boolean
  bookId: string
  onClose: () => void
}

export function BookDetailsPanel({
  isOpen = false,
  bookId,
  onClose,
}: BookDetailsPanelProps) {
  async function getBookDetailsById(bookId: string) {
    if (bookId) {
      const response = await api.get(`/books/${bookId}`)

      return response.data
    }
  }

  const { data: bookDetails } = useQuery<Book>({
    queryKey: ['book-details', bookId],
    queryFn: () => getBookDetailsById(bookId),
    enabled: isOpen,
  })

  return (
    <Overlay data-show={isOpen}>
      <Container>
        <Button onClick={onClose}>
          <X size={24} />
        </Button>
        {bookDetails && (
          <BookDetailsContainer>
            <div>
              <Image
                src={bookDetails.coverUrl}
                width={171}
                height={242}
                alt=""
              />
              <div>
                <header>
                  <span>{bookDetails.name}</span>
                  <p>{bookDetails.author}</p>
                </header>
                <div>
                  <StarsRate rate={bookDetails.rate} />
                  <span>{bookDetails.ratings.length} avaliações</span>
                </div>
              </div>
            </div>
            <BookDetailsFooter>
              <div>
                <BookmarkSimple size={24} />
                <div>
                  <span>Categoria</span>
                  <p>
                    {bookDetails.categories
                      .map((category) => category.name)
                      .join(', ')}
                  </p>
                </div>
              </div>
              <div>
                <BookOpen size={24} />
                <div>
                  <span>Páginas</span>
                  <p>{bookDetails.totalPages}</p>
                </div>
              </div>
            </BookDetailsFooter>
          </BookDetailsContainer>
        )}
        <RatingsContainer>
          <header>
            <span>Avaliações</span>
            <Button color="purple" size="sm">
              Avaliar
            </Button>
          </header>

          <RatingList>
            {bookDetails &&
              bookDetails.ratings.map((rating) => (
                <RatingCard key={rating.id}>
                  <header>
                    <div>
                      <Avatar avatarUrl={rating.user.avatarUrl} size="md" />
                      <div>
                        <span>{rating.user.name}</span>
                        <p>{formatDateFromNow(rating.createdAt)}</p>
                      </div>
                    </div>
                    <StarsRate rate={rating.rate} />
                  </header>
                  <p>{rating.description}</p>
                </RatingCard>
              ))}
          </RatingList>
        </RatingsContainer>
      </Container>
    </Overlay>
  )
}
