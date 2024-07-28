import dayjs from 'dayjs'
import { capitalize } from './capitalize'

export function formatDateFromNow(date: Date) {
  return capitalize(dayjs(date).fromNow())
}
