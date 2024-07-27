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

export default function Home() {
  return (
    <Container>
      <Image src={home} alt="" height={680} />
      <SignInContainer>
        <SignInBox>
          <h1>Boas vindas!</h1>
          <span>Faça seu login ou acesse como visitante.</span>
          <SignInButtonsContainer>
            <SignInButton>
              <Image src={googleIcon} alt="" />
              Entrar com Google
            </SignInButton>
            <SignInButton>
              <Image src={githubIcon} alt="" />
              Entrar com Github
            </SignInButton>
            <SignInButton>
              <Image src={rocketIcon} alt="" />
              Acessar como visitante
            </SignInButton>
          </SignInButtonsContainer>
        </SignInBox>
      </SignInContainer>
    </Container>
  )
}
