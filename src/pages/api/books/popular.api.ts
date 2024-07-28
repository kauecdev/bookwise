import { prisma } from '@/lib/prisma'
import { Rating } from '@prisma/client'
import { NextApiRequest, NextApiResponse } from 'next'

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse,
) {
  if (req.method !== 'GET') return res.status(405).end()

  const books = await prisma.book.findMany({
    orderBy: {
      ratings: {
        _count: 'desc',
      },
    },
    include: {
      ratings: true,
    },
    take: 4,
  })

  const parsedBooks = books.map((book) => ({
    name: book.name,
    author: book.author,
    coverUrl: book.cover_url,
    rate: getAverageRating(book.ratings),
  }))

  return res.json(parsedBooks)
}

function getAverageRating(ratings: Rating[]) {
  const ratingsSum = ratings.reduce((acc, current) => acc + current.rate, 0)

  return Math.floor(ratingsSum / ratings.length)
}
