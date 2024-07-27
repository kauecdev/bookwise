import Image from 'next/image'
import {
  Container,
  SignInBox,
  SignInButton,
  SignInButtonsContainer,
  SignInContainer,
} from './styles'

import home from '@/assets/home.png'
import googleIcon from '@/assets/google-icon.svg'
import githubIcon from '@/assets/github-icon.svg'
import rocketIcon from '@/assets/rocket-icon.svg'
import { signIn } from 'next-auth/react'
import { useRouter } from 'next/router'

export default function SignIn() {
  const router = useRouter()

  function handleSignIn(provider: 'google' | 'github') {
    signIn(provider, { callbackUrl: '/feed' })
  }

  async function handleAccessFeedAsVisitor() {
    await router.push('/feed')
  }

  return (
    <Container>
      <Image src={home} alt="" height={680} priority />
      <SignInContainer>
        <SignInBox>
          <h1>Boas vindas!</h1>
          <span>Faça seu login ou acesse como visitante.</span>
          <SignInButtonsContainer>
            <SignInButton onClick={() => handleSignIn('google')}>
              <Image src={googleIcon} alt="" />
              Entrar com Google
            </SignInButton>
            <SignInButton onClick={() => handleSignIn('github')}>
              <Image src={githubIcon} alt="" />
              Entrar com Github
            </SignInButton>
            <SignInButton onClick={handleAccessFeedAsVisitor}>
              <Image src={rocketIcon} alt="" />
              Acessar como visitante
            </SignInButton>
          </SignInButtonsContainer>
        </SignInBox>
      </SignInContainer>
    </Container>
  )
}
