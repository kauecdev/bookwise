import { Binoculars } from '@phosphor-icons/react'
import { Template } from '../template'
import {
  AlreadyReadLabel,
  BookCard,
  BooksContainer,
  CategoryChipsContainer,
  Container,
  Header,
} from './styles'
import { SearchInput } from '@/components/SearchInput'
import { api } from '@/lib/axios'
import { useQuery } from '@tanstack/react-query'
import { CategoryChip } from '@/components/CategoryChip'
import { Category } from '@/shared/interfaces/category'
import { Book } from '@/shared/interfaces/book'
import Image from 'next/image'
import { StarsRate } from '@/components/StarsRate'
import { BookDetailsPanel } from './components/BookDetailsPanel'
import { ChangeEvent, useState } from 'react'
import { usePathname, useSearchParams } from 'next/navigation'
import { useRouter } from 'next/router'
import { UserProfileData } from '@/shared/interfaces/user-profile-data'
import { useSession } from 'next-auth/react'

export default function Explore() {
  const session = useSession()
  const userId = session.data?.user.id
  const searchParams = useSearchParams()
  const pathname = usePathname()
  const { replace } = useRouter()

  const [isBookDetailsPanelOpen, setIsBookDetailsPanelOpen] = useState(false)
  const [bookIdToShow, setBookIdToShow] = useState('')

  async function getBookCategories() {
    const response = await api.get('/categories')

    return response.data
  }

  const { data: categories } = useQuery<Category[]>({
    queryKey: ['categories'],
    queryFn: getBookCategories,
  })

  async function getAllBooks() {
    const response = await api.get('/books', {
      params: {
        categories: searchParams.getAll('categories'),
        searchText: searchParams.get('searchText'),
      },
    })

    return response.data
  }

  const { data: books } = useQuery<Book[]>({
    queryKey: ['books', searchParams.toString()],
    queryFn: getAllBooks,
  })

  async function getUserProfileData() {
    const response = await api.get<UserProfileData>(`/profile/${userId}`)

    return response.data
  }

  const { data: userProfileData } = useQuery<UserProfileData>({
    queryKey: ['user-profile', userId],
    queryFn: getUserProfileData,
    enabled: !!userId,
  })

  function handleOpenBookDetailsPanel(bookId: string) {
    setIsBookDetailsPanelOpen(true)
    setBookIdToShow(bookId)
  }

  function handleCloseBookDetailsPanel() {
    setIsBookDetailsPanelOpen(false)
    setBookIdToShow('')
  }

  function handleAddCategoryToQuery(category: string) {
    const params = new URLSearchParams(searchParams)

    if (params.has('categories', category)) {
      params.delete('categories', category)

      if (params.size === 0) {
        params.delete('categories')
      }
    } else if (params.has('categories')) {
      params.append('categories', category)
    } else {
      params.set('categories', category)
    }

    replace(`${pathname}?${params.toString()}`)
  }

  function handleClearCategoriesFromQueryParams() {
    const params = new URLSearchParams(searchParams)

    if (params.has('categories')) {
      params.delete('categories')

      replace(`${pathname}?${params.toString()}`)
    }
  }

  function handleOnChangeSearchInput(event: ChangeEvent<HTMLInputElement>) {
    const params = new URLSearchParams(searchParams)

    const value = event.target.value

    if (value) {
      params.set('searchText', value)
    } else {
      params.delete('searchText')
    }

    replace(`${pathname}?${params.toString()}`)
  }

  return (
    <>
      <BookDetailsPanel
        isOpen={isBookDetailsPanelOpen}
        bookId={bookIdToShow}
        onClose={handleCloseBookDetailsPanel}
      />
      <Template>
        <Container>
          <Header>
            <section>
              <Binoculars size={32} weight="bold" />
              <h2>Explorar</h2>
            </section>
            <SearchInput
              placeholder="Buscar livro ou autor"
              value={searchParams.get('searchText') || ''}
              onChange={handleOnChangeSearchInput}
            />
          </Header>
          <CategoryChipsContainer>
            <CategoryChip
              data-active={searchParams.size === 0}
              onClick={handleClearCategoriesFromQueryParams}
            >
              Tudo
            </CategoryChip>
            {!!categories &&
              categories.map((category) => (
                <CategoryChip
                  onClick={() => handleAddCategoryToQuery(category.name)}
                  key={category.id}
                  data-active={searchParams.has('categories', category.name)}
                >
                  {category.name}
                </CategoryChip>
              ))}
          </CategoryChipsContainer>
          <BooksContainer>
            {!!books &&
              books.map((book) => (
                <BookCard
                  key={book.name}
                  onClick={() => handleOpenBookDetailsPanel(book.id)}
                >
                  {userProfileData?.ratings.some(
                    (rating) => rating.book.id === book.id,
                  ) && <AlreadyReadLabel>Lido</AlreadyReadLabel>}
                  <Image src={book.coverUrl} width={108} height={152} alt="" />
                  <div>
                    <header>
                      <span>{book.name}</span>
                      <p>{book.author}</p>
                    </header>
                    <StarsRate rate={book.rate} />
                  </div>
                </BookCard>
              ))}
          </BooksContainer>
        </Container>
      </Template>
    </>
  )
}
