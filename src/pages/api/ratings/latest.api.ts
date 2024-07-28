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
    orderBy: {
      created_at: 'desc',
    },
    include: {
      book: true,
      user: true,
    },
    take: 5,
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
