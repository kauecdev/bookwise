import { ReactNode } from 'react'
import { Container } from './styles'
import { SidebarMenu } from './components/SidebarMenu'
import { SignInModal } from '@/components/SignInModal'

interface TemplateProps {
  children: ReactNode
}

export function Template({ children }: TemplateProps) {
  return (
    <Container>
      <SidebarMenu />
      <SignInModal />
      {children}
    </Container>
  )
}
