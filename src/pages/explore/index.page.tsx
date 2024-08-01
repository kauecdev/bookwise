import { Binoculars } from '@phosphor-icons/react'
import { Template } from '../template'
import {
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
import { BookDetailsPanel } from './BookDetailsPanel'
import { useState } from 'react'

export default function Explore() {
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
    const response = await api.get('/books')

    return response.data
  }

  const { data: books } = useQuery<Book[]>({
    queryKey: ['books'],
    queryFn: getAllBooks,
  })

  function handleOpenBookDetailsPanel(bookId: string) {
    setIsBookDetailsPanelOpen(true)
    setBookIdToShow(bookId)
  }

  function handleCloseBookDetailsPanel() {
    setIsBookDetailsPanelOpen(false)
    setBookIdToShow('')
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
            <SearchInput placeholder="Buscar livro ou autor" />
          </Header>
          <CategoryChipsContainer>
            <CategoryChip>Tudo</CategoryChip>
            {!!categories &&
              categories.map((category) => (
                <CategoryChip key={category.id}>{category.name}</CategoryChip>
              ))}
          </CategoryChipsContainer>
          <BooksContainer>
            {!!books &&
              books.map((book) => (
                <BookCard
                  key={book.name}
                  onClick={() => handleOpenBookDetailsPanel(book.id)}
                >
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
