import { prisma } from '@/lib/prisma'
import { NextApiRequest, NextApiResponse } from 'next'

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse,
) {
  if (req.method !== 'GET') {
    return res.status(405).end()
  }

  const ratings = await prisma.rating.findMany({
    include: {
      book: {
        select: {
          cover_url: true,
          name: true,
          author: true,
        },
      },
      user: {
        select: {
          id: true,
          avatar_url: true,
          name: true,
        },
      },
    },
  })

  const parsedRatings = ratings.map((rating) => ({
    id: rating.id,
    createdAt: rating.created_at,
    rate: rating.rate,
    description: rating.description,
    book: {
      coverUrl: rating.book.cover_url,
      name: rating.book.name,
      author: rating.book.author,
    },
    user: {
      id: rating.user.id,
      avatarUrl: rating.user.avatar_url,
      name: rating.user.name,
    },
  }))

  return res.status(200).json(parsedRatings)
}
