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

  const { 'categories[]': categories, searchText } = req.query

  const books = await prisma.book.findMany({
    where: {
      ...(categories
        ? {
            categories: {
              some: {
                category: {
                  name: {
                    in: Array.isArray(categories)
                      ? categories
                      : ([categories] as string[]),
                  },
                },
              },
            },
          }
        : {}),
      ...(searchText
        ? {
            OR: [
              {
                name: {
                  contains: String(searchText),
                  mode: 'insensitive',
                },
              },
              {
                author: {
                  contains: String(searchText),
                  mode: 'insensitive',
                },
              },
            ],
          }
        : {}),
    },
    include: {
      ratings: true,
      categories: {
        select: {
          category: true,
        },
      },
    },
  })

  const parsedBooks = books.map((book) => ({
    id: book.id,
    name: book.name,
    author: book.author,
    coverUrl: book.cover_url,
    rate: getAverageRating(book.ratings),
    categories: book.categories.map((category) => category.category),
  }))

  return res.json(parsedBooks)
}

function getAverageRating(ratings: Rating[]) {
  const ratingsSum = ratings.reduce((acc, current) => acc + current.rate, 0)

  return Math.floor(ratingsSum / ratings.length)
}
