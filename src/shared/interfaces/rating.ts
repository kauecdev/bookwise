import { Book } from './book'
import { User } from './user'

export interface Rating {
  id: string
  createdAt: Date
  description: string
  rate: number
  book: Book
  user: User
}
