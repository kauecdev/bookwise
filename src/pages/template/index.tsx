import { ReactNode } from 'react'
import { Container } from './styles'
import { SidebarMenu } from './components/SidebarMenu'

interface TemplateProps {
  children: ReactNode
}

export function Template({ children }: TemplateProps) {
  return (
    <Container>
      <SidebarMenu />
      {children}
    </Container>
  )
}
