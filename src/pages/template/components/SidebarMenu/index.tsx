import Image from 'next/image'
import { useRouter } from 'next/router'
import { ChartLineUp, Binoculars, SignOut, SignIn } from '@phosphor-icons/react'

import {
  ActiveLinkMarker,
  Container,
  Content,
  CustomLink,
  LinksContainer,
  SignInButton,
  SignOutButton,
} from './styles'
import logo from '@/assets/logo.svg'
import { signOut, useSession } from 'next-auth/react'

export function SidebarMenu() {
  const session = useSession()

  console.log(session)

  const navigationLinks = [
    {
      path: '/feed',
      label: 'Início',
      icon: <ChartLineUp weight="bold" size={24} />,
    },
    {
      path: '/explore',
      label: 'Explorar',
      icon: <Binoculars weight="bold" size={24} />,
    },
  ]

  const router = useRouter()

  function handleSignOut() {
    signOut({
      callbackUrl: '/',
    })
  }

  return (
    <Container>
      <div data-id="ellipse-top-left" />
      <div data-id="ellipse-top-right" />

      <Content>
        <div>
          <Image src={logo} alt="Bookwise" />

          <LinksContainer>
            {navigationLinks.map((link) => (
              <CustomLink
                href={link.path}
                key={link.path}
                data-active={router.asPath === link.path}
              >
                {router.asPath === link.path && <ActiveLinkMarker />}
                {link.icon}
                {link.label}
              </CustomLink>
            ))}
          </LinksContainer>
        </div>
        <footer>
          {session.status === 'authenticated' ? (
            <SignOutButton onClick={handleSignOut} size="sm">
              <Image
                width={32}
                height={32}
                src={session.data.user.avatar_url}
                alt=""
              />
              <span>{session.data.user.name}</span>
              <SignOut weight="bold" size={20} />
            </SignOutButton>
          ) : (
            <SignInButton>
              Fazer login <SignIn weight="bold" size={20} />{' '}
            </SignInButton>
          )}
        </footer>
      </Content>
    </Container>
  )
}
