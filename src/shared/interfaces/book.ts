import { Category } from './category'
import { Rating } from './rating'

export interface Book {
  id: string
  author: string
  coverUrl: string
  name: string
  rate: number
  ratings: Rating[]
  categories: Category[]
  totalPages: number
}
