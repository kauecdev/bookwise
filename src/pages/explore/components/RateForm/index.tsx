import { Avatar } from '@/components/Avatar'
import { Container, StarsInput } from './styles'
import { useSession } from 'next-auth/react'
import { Check, Star, X } from '@phosphor-icons/react'
import { ChangeEvent, FormEvent, useState } from 'react'
import { Textarea } from '@/components/Textarea'
import { Button } from '@/components/Button'
import { RatingFormData } from '../BookDetailsPanel'

interface RateFormProps {
  onClose: () => void
  onSubmit: (data: RatingFormData) => void
}

export function RateForm({ onClose, onSubmit }: RateFormProps) {
  const session = useSession()

  const [rate, setRate] = useState(0)
  const [rateDescription, setRateDescription] = useState('')

  if (session.status !== 'authenticated') {
    return
  }

  function handleSetRate(rate: number) {
    setRate(rate)
  }

  function handleOnChangeDescription(event: ChangeEvent<HTMLTextAreaElement>) {
    setRateDescription(event.target.value)
  }

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()

    onSubmit({
      rate,
      rateDescription,
    })
  }

  return (
    <Container onSubmit={handleSubmit}>
      <header>
        <Avatar avatarUrl={session.data.user.avatar_url} size="md" />
        <span>{session.data.user.name}</span>
        <StarsInput>
          {Array.from({ length: 5 }).map((_, index) => (
            <Star
              weight={index <= rate ? 'fill' : 'regular'}
              key={index}
              size={28}
              onClick={() => handleSetRate(index)}
            />
          ))}
        </StarsInput>
      </header>
      <Textarea
        placeholder="Escreva sua avaliação"
        maxLength={450}
        rows={5}
        value={rateDescription}
        onChange={handleOnChangeDescription}
      />
      <footer>
        <Button
          color="purple"
          padding="distributed"
          backgroundColor="secondary"
          onClick={onClose}
        >
          <X size={24} />
        </Button>
        <Button
          type="submit"
          color="green"
          padding="distributed"
          backgroundColor="secondary"
        >
          <Check size={24} />
        </Button>
      </footer>
    </Container>
  )
}
