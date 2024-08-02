import { useContext } from 'react'
import { Container, Overlay } from './styles'
import { SignInContext } from '@/contexts/SignInContext'
import { X } from '@phosphor-icons/react'
import { Button } from '../Button'
import Image from 'next/image'
import { SignInButton } from '../SignInButton'
import googleIcon from '@/assets/google-icon.svg'
import githubIcon from '@/assets/github-icon.svg'
import { signIn } from 'next-auth/react'
import { useRouter } from 'next/router'

export function SignInModal() {
  const router = useRouter()
  const { showModal, toggleShowModal } = useContext(SignInContext)

  function handleSignIn(provider: 'google' | 'github') {
    signIn(provider, { callbackUrl: router.asPath })
  }

  return (
    <Overlay data-show={showModal}>
      <Container>
        <Button onClick={() => toggleShowModal(false)}>
          <X size={24} />
        </Button>

        <span>Faça login para deixar sua avaliação</span>

        <div>
          <SignInButton onClick={() => handleSignIn('google')}>
            <Image src={googleIcon} alt="" />
            Entrar com Google
          </SignInButton>
          <SignInButton onClick={() => handleSignIn('github')}>
            <Image src={githubIcon} alt="" />
            Entrar com Github
          </SignInButton>
        </div>
      </Container>
    </Overlay>
  )
}
