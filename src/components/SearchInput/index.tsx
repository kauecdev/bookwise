import { ComponentProps, ElementRef, forwardRef } from 'react'
import { Container, Input } from './styles'
import { MagnifyingGlass } from '@phosphor-icons/react'

export interface SearchInputProps extends ComponentProps<typeof Input> {}

export const SearchInput = forwardRef<
  ElementRef<typeof Input>,
  SearchInputProps
>((props: SearchInputProps, ref) => {
  return (
    <Container>
      <Input ref={ref} {...props} />
      <button type="submit">
        <MagnifyingGlass size={20} />
      </button>
    </Container>
  )
})

SearchInput.displayName = 'SearchInput'
