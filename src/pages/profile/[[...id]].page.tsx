import { CaretLeft, User } from '@phosphor-icons/react'
import { Template } from '../template'
import { Container, Content, Header, RatingsContainer } from './styles'
import { useRouter } from 'next/router'
import { RatingCard } from './components/RatingCard'
import { useSession } from 'next-auth/react'
import { api } from '@/lib/axios'
import Link from 'next/link'
import { Button } from '@/components/Button'
import { useQuery } from '@tanstack/react-query'
import { SearchInput } from '@/components/SearchInput'
import { UserProfileData } from '@/shared/interfaces/user-profile-data'
import { ProfileInfoCard } from './components/ProfileInfoCard'
import { FormEvent, useState } from 'react'
import { Rating } from '@/shared/interfaces/rating'

export default function Profile() {
  const router = useRouter()
  const session = useSession()

  const [searchInputText, setSearchInputText] = useState('')
  const [ratingList, setRatingList] = useState<Rating[]>([])

  const routeId = router.query.id ? router.query.id[0] : ''
  const userId = routeId === 'me' ? session.data?.user.id : routeId

  async function getUserProfileData() {
    const response = await api.get<UserProfileData>(`/profile/${userId}`)

    setRatingList(response.data.ratings)

    return response.data
  }

  const { data: userProfileData } = useQuery<UserProfileData>({
    queryKey: ['user-profile', userId],
    queryFn: getUserProfileData,
    enabled: !!userId,
  })

  function handleSearchBookByName(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()

    if (userProfileData) {
      if (searchInputText.length === 0) {
        return setRatingList(userProfileData.ratings)
      }

      const filteredRatingList = userProfileData.ratings.filter((rating) => {
        console.log(rating.book.name, searchInputText)

        return rating.book.name
          .toLowerCase()
          .includes(searchInputText.toLowerCase())
      })

      setRatingList(filteredRatingList)
    }
  }

  if (!userId || !userProfileData) {
    return (
      <Template>
        <Container>
          <Header>
            <Button as={Link} href="/feed" size="sm" color="purple">
              <CaretLeft size={18} />
              Voltar
            </Button>
          </Header>
          <Container>
            <Header>Usuário não encontrado</Header>
          </Container>
        </Container>
      </Template>
    )
  }

  return (
    <Template>
      <Container>
        <Header>
          <User size={32} weight="bold" />
          Perfil
        </Header>
        <Content>
          <RatingsContainer>
            <form onSubmit={handleSearchBookByName}>
              <SearchInput
                placeholder="Buscar livro avaliado"
                onChange={(e) => setSearchInputText(e.target.value)}
              />
            </form>
            {ratingList.length > 0
              ? ratingList.map((rating) => (
                  <RatingCard key={rating.id} rating={rating} />
                ))
              : 'Nenhuma avaliação encontrada.'}
          </RatingsContainer>
          <ProfileInfoCard userProfileData={userProfileData} />
        </Content>
      </Container>
    </Template>
  )
}
