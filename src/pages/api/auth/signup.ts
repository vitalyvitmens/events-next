import { prisma } from '@/server/db'
import { hashPassword } from '@/shared/utils/auth'
import type { NextApiRequest, NextApiResponse } from 'next'
import { createContext } from '@/server/context'

export default async function signup(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const contextOptions = {
    req,
    res,
    info: {
      isBatchCall: false,
      calls: [],
    },
  }

  const context = await createContext(contextOptions)
  const session = context.user

  if (session) {
    res.status(400).json({ message: 'Пользователь уже вошел в систему' })
    return
  }

  const { email, password, name } = req.body

  const existingUser = await prisma.user.findUnique({
    where: { email },
  })

  if (existingUser) {
    res.status(400).json({ message: 'Пользователь уже существует' })
    return
  }

  try {
    const hashedPassword = await hashPassword(password)
    const user = await prisma.user.create({
      data: {
        name,
        email,
        password: hashedPassword,
      },
    })

    res.status(201).json({
      message: 'Пользователь успешно создан',
      redirectUrl: `${req.headers.origin}/api/auth/signin`,
    })
  } catch (error) {
    console.error('Ошибка при регистрации:', error)
    res.status(500).json({ message: 'Ошибка на сервере' })
  }
}
