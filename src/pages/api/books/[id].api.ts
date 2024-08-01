import { prisma } from '@/lib/prisma'
import { Rating } from '@prisma/client'
import { NextApiRequest, NextApiResponse } from 'next'

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse,
) {
  if (req.method !== 'GET') {
    return res.status(405).end()
  }

  const bookId = String(req.query.id)

  const book = await prisma.book.findUniqueOrThrow({
    where: {
      id: bookId,
    },
    include: {
      ratings: {
        include: {
          user: true,
        },
      },
      categories: {
        select: {
          category: true,
        },
      },
    },
  })

  const parsedRatings = book.ratings.map((rating) => ({
    id: rating.id,
    rate: rating.rate,
    description: rating.description,
    createdAt: rating.created_at,
    user: {
      avatarUrl: rating.user.avatar_url,
      name: rating.user.name,
    },
  }))

  const parsedBook = {
    id: book.id,
    name: book.name,
    author: book.author,
    coverUrl: book.cover_url,
    rate: getAverageRating(book.ratings),
    ratings: parsedRatings,
    categories: book.categories.map((category) => category.category),
    totalPages: book.total_pages,
  }

  return res.json(parsedBook)
}

function getAverageRating(ratings: Rating[]) {
  const ratingsSum = ratings.reduce((acc, current) => acc + current.rate, 0)

  return Math.floor(ratingsSum / ratings.length)
}
