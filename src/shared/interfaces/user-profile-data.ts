import { Rating } from './rating'
import { User } from './user'

export interface UserProfileData {
  user: User
  ratings: Rating[]
  readPages: number
  ratedBooks: number
  readAuthors: number
  mostReadCategory: string
}
