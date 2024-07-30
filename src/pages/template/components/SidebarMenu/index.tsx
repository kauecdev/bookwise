import Image from 'next/image'
import { useRouter } from 'next/router'
import {
  ChartLineUp,
  Binoculars,
  SignOut,
  SignIn,
  User,
} from '@phosphor-icons/react'

import {
  ActiveLinkMarker,
  Container,
  Content,
  CustomLink,
  LinksContainer,
  SignInButton,
  UserProfileButton,
} from './styles'
import logo from '@/assets/logo.svg'
import { signOut, useSession } from 'next-auth/react'
import { Button } from '@/components/Button'
import Link from 'next/link'

export function SidebarMenu() {
  const session = useSession()

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

  if (session.status === 'authenticated') {
    navigationLinks.push({
      path: `/profile/${session.data.user.id}`,
      label: 'Perfil',
      icon: <User weight="bold" size={24} />,
    })
  }

  const router = useRouter()

  function handleSignOut() {
    signOut({
      callbackUrl: '/',
    })
  }

  function isLinkActive(linkPath: string) {
    return router.asPath.split('/')[1].includes(linkPath.split('/')[1])
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
                data-active={isLinkActive(link.path)}
              >
                {isLinkActive(link.path) && <ActiveLinkMarker />}
                {link.icon}
                {link.label}
              </CustomLink>
            ))}
          </LinksContainer>
        </div>
        <footer>
          {session.status === 'authenticated' ? (
            <div>
              <UserProfileButton
                href={`/profile/${session.data.user.id}`}
                as={Link}
              >
                <Image
                  width={32}
                  height={32}
                  src={session.data.user.avatar_url}
                  alt=""
                />
                <span>{session.data.user.name}</span>
              </UserProfileButton>
              <Button onClick={handleSignOut} size="sm" color="red">
                <SignOut weight="bold" size={20} />
              </Button>
            </div>
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
