import { prisma } from '@/lib/prisma'
import { NextApiRequest, NextApiResponse } from 'next'

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse,
) {
  if (req.method !== 'POST') {
    return res.status(405).end()
  }

  const { rate, rateDescription, bookId, userId } = req.body

  await prisma.rating.create({
    data: {
      rate,
      description: rateDescription,
      book_id: bookId,
      user_id: userId,
    },
  })

  return res.status(201).end()
}
