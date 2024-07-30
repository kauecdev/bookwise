import { UserProfileData } from '@/shared/interfaces/user-profile-data'
import { Container, Header, InfoItem, InfoList, Separator } from './styles'
import { Avatar } from '@/components/Avatar'
import {
  BookmarkSimple,
  BookOpen,
  Books,
  UserList,
} from '@phosphor-icons/react'

interface ProfileInfoCardProps {
  userProfileData: UserProfileData
}

export function ProfileInfoCard({ userProfileData }: ProfileInfoCardProps) {
  return (
    <Container>
      <Header>
        <Avatar avatarUrl={userProfileData.user.avatarUrl} size="lg" />
        <div>
          <span>{userProfileData.user.name}</span>
          <p>
            membro desde{' '}
            {new Date(userProfileData.user.createdAt).getFullYear()}
          </p>
        </div>
      </Header>
      <Separator />
      <InfoList>
        <InfoItem>
          <BookOpen size={32} />
          <div>
            <span>{userProfileData.readPages}</span>
            <p>Páginas lidas</p>
          </div>
        </InfoItem>
        <InfoItem>
          <Books size={32} />
          <div>
            <span>{userProfileData.ratedBooks}</span>
            <p>Livros avaliados</p>
          </div>
        </InfoItem>
        <InfoItem>
          <UserList size={32} />
          <div>
            <span>{userProfileData.readAuthors}</span>
            <p>Autores lidos</p>
          </div>
        </InfoItem>
        <InfoItem>
          <BookmarkSimple size={32} />
          <div>
            <span>{userProfileData.mostReadCategory}</span>
            <p>Categoria mais lida</p>
          </div>
        </InfoItem>
      </InfoList>
    </Container>
  )
}
