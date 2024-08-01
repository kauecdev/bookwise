import { CaretRight, ChartLineUp } from '@phosphor-icons/react'
import { Template } from '../template'
import { Container, Content, Header, RatingsContainer } from './styles'
import { LatestRatingCard } from './components/LatestRatingCard'
import { useQuery } from '@tanstack/react-query'
import { api } from '@/lib/axios'
import { Rating } from '@/shared/interfaces/rating'
import { Button } from '@/components/Button'
import { PopularBookCard } from './components/PopularBookCard'
import { useSession } from 'next-auth/react'
import { UserOwnRatingCard } from './components/UserOwnRatingCard'
import { Book } from '@/shared/interfaces/book'

export default function Feed() {
  const session = useSession()

  async function getLatestRatings() {
    const response = await api.get('/ratings/latest')

    return response.data
  }

  async function getPopularBooks() {
    const response = await api.get('/books/popular')

    return response.data
  }

  async function getLatestUserRating() {
    const response = await api.get('/ratings/user-latest')

    return response.data
  }

  const { data: latestRatings } = useQuery<Rating[]>({
    queryKey: ['latest-ratings'],
    queryFn: getLatestRatings,
  })

  const { data: popularBooks } = useQuery<Book[]>({
    queryKey: ['popular-books'],
    queryFn: getPopularBooks,
  })

  const { data: latestUserRating } = useQuery<Rating>({
    queryKey: ['latest-user-rating', session.data?.user.id],
    queryFn: getLatestUserRating,
    enabled: session.status === 'authenticated',
  })

  return (
    <Template>
      <Container>
        <Header>
          <ChartLineUp size={32} weight="bold" />
          Início
        </Header>
        <Content>
          <RatingsContainer>
            {session.status === 'authenticated' && latestUserRating && (
              <>
                <header>
                  <span>Sua última leitura</span>
                  <Button size="sm" color="purple">
                    Ver todos <CaretRight size={18} />
                  </Button>
                </header>
                <UserOwnRatingCard rating={latestUserRating} />
              </>
            )}
            <span>Avaliações mais recentes</span>
            <div>
              {latestRatings &&
                latestRatings.map((rating) => (
                  <LatestRatingCard key={rating.id} rating={rating} />
                ))}
            </div>
          </RatingsContainer>
          <RatingsContainer>
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
          </RatingsContainer>
        </Content>
      </Container>
    </Template>
  )
}
