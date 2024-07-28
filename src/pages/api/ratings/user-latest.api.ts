import { prisma } from '@/lib/prisma'
import { NextApiRequest, NextApiResponse } from 'next'
import { getServerSession } from 'next-auth'
import { buildNextAuthOptions } from '../auth/[...nextauth].api'

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse,
) {
  if (req.method !== 'GET') return res.status(405).end()

  const session = await getServerSession(
    req,
    res,
    buildNextAuthOptions(req, res),
  )

  if (!session) {
    return res.status(401).end('User not authenticated.')
  }

  const userLastRating = await prisma.rating.findFirst({
    where: {
      user_id: String(session?.user?.id),
    },
    orderBy: {
      created_at: 'desc',
    },
    include: {
      book: true,
    },
  })

  if (!userLastRating) {
    return res.status(404).json({ message: 'User does not have ratings.' })
  }

  const parsedRatings = {
    id: userLastRating.id,
    createdAt: userLastRating.created_at,
    rate: userLastRating.rate,
    description: userLastRating.description,
    book: {
      coverUrl: userLastRating.book.cover_url,
      name: userLastRating.book.name,
      author: userLastRating.book.author,
    },
  }

  return res.status(200).json(parsedRatings)
}
