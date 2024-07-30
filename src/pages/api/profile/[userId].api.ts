import { prisma } from '@/lib/prisma'
import { NextApiRequest, NextApiResponse } from 'next'

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse,
) {
  if (req.method !== 'GET') {
    return res.status(405).end()
  }

  const userId = String(req.query.userId)

  if (!userId) {
    return res.status(400).json({ message: 'UserID not provided.' })
  }

  const userProfile = await prisma.user.findUnique({
    where: {
      id: userId,
    },
    include: {
      ratings: {
        include: {
          book: {
            include: {
              categories: {
                include: {
                  category: true,
                },
              },
            },
          },
        },
        orderBy: {
          created_at: 'desc',
        },
      },
    },
  })

  if (!userProfile) {
    return res.status(404).json({ message: 'User not found.' })
  }

  const readPages = userProfile.ratings.reduce(
    (acc, rating) => acc + rating.book.total_pages,
    0,
  )
  const ratedBooks = userProfile.ratings.length

  const readAuthors = userProfile.ratings.reduce((acc, rating) => {
    if (!acc.includes(rating.book.author)) {
      acc.push(rating.book.author)
    }
    return acc
  }, [] as string[])

  const categories = userProfile.ratings.flatMap((rating) =>
    rating.book.categories.flatMap((category) => category.category.name),
  )

  const parsedRatings = userProfile.ratings.map((rating) => ({
    id: rating.id,
    createdAt: rating.created_at,
    rate: rating.rate,
    description: rating.description,
    book: {
      coverUrl: rating.book.cover_url,
      name: rating.book.name,
      author: rating.book.author,
    },
  }))

  const profileData = {
    user: {
      avatarUrl: userProfile.avatar_url,
      name: userProfile.name,
      createdAt: userProfile.created_at,
    },
    ratings: parsedRatings,
    readPages,
    ratedBooks,
    readAuthors: readAuthors.length,
    mostReadCategory: getMostReadCategory(categories),
  }

  return res.status(200).json(profileData)
}

function getMostReadCategory(categories: string[]) {
  const categoriesWithCount = categories.reduce<{ [key: string]: number }>(
    (acc, category) => {
      acc[category] = (acc[category] || 0) + 1
      return acc
    },
    {},
  )

  const mostReadCategory = Object.entries(categoriesWithCount).reduce<{
    category: string | null
    count: number
  }>(
    (acc, [category, count]) => {
      return count > acc.count ? { category, count } : acc
    },
    { category: null, count: 0 },
  )

  return mostReadCategory.category
}
