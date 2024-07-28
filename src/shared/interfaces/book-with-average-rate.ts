import { Book } from './book'

export interface BookWithAverageRate extends Book {
  rate: number
}
