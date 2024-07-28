import { CaretRight, ChartLineUp } from '@phosphor-icons/react'
import { Template } from '../template'
import {
  Container,
  Content,
  Header,
  LatestRatingsContainer,
  PopularBooksContainer,
} from './styles'
import { LatestRatingCard } from './components/LatestRatingCard'
import { useQuery } from '@tanstack/react-query'
import { api } from '@/lib/axios'
import { Rating } from '@/shared/interfaces/rating'
import { Button } from '@/components/Button'
import { PopularBookCard } from './components/PopularBookCard'
import { BookWithAverageRate } from '@/shared/interfaces/book-with-average-rate'

export default function Feed() {
  async function getLatestRatings() {
    const response = await api.get('/ratings/latest')

    return response.data
  }

  async function getPopularBooks() {
    const response = await api.get('/books/popular')

    return response.data
  }

  const { data: latestRatings } = useQuery<Rating[]>({
    queryKey: ['latest-ratings'],
    queryFn: getLatestRatings,
  })

  const { data: popularBooks } = useQuery<BookWithAverageRate[]>({
    queryKey: ['popular-books'],
    queryFn: getPopularBooks,
  })

  console.log(popularBooks)

  return (
    <Template>
      <Container>
        <Header>
          <ChartLineUp size={32} weight="bold" />
          Início
        </Header>
        <Content>
          <LatestRatingsContainer>
            <span>Avaliações mais recentes</span>
            <div>
              {latestRatings &&
                latestRatings.map((rating) => (
                  <LatestRatingCard key={rating.id} rating={rating} />
                ))}
            </div>
          </LatestRatingsContainer>
          <PopularBooksContainer>
            <header>
              <span>Livros populares</span>
              <Button size="sm" color="purple">
                Ver todos <CaretRight size={18} />
              </Button>
            </header>
            <div>
              {popularBooks &&
                popularBooks.map((book) => (
                  <PopularBookCard key={book.name} book={book} />
                ))}
            </div>
          </PopularBooksContainer>
        </Content>
      </Container>
    </Template>
  )
}
