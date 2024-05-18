import { prisma } from '@/server/db'
import { hashPassword } from '@/shared/utils/auth'
import type { NextApiRequest, NextApiResponse } from 'next'
import { createContext } from '@/server/context'

export default async function signup(
  req: NextApiRequest,
  res: NextApiResponse
) {
  // Обновляем свойство info, чтобы оно соответствовало типу TRPCRequestInfo
  const contextOptions = {
    req,
    res,
    info: {
      isBatchCall: false, // Пример значения, вам нужно будет установить правильное значение
      calls: [], // Пример значения, вам нужно будет установить правильное значение
    },
  }

  // Вызываем createContext с обновленным объектом contextOptions
  const context = await createContext(contextOptions)
  const session = context.user

  // Проверяем, есть ли сессия пользователя
  if (session) {
    // Пользователь уже вошел в систему
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

// Отправляем JSON-ответ с сообщением об успешной регистрации
// и URL для перенаправления
    res.status(201).json({
      message: 'Пользователь успешно создан',
      redirectUrl: `${req.headers.origin}/api/auth/signin`,
    })
    // res.redirect(`${req.headers.origin}/`)
  } catch (error) {
    console.error('Ошибка при регистрации:', error)
    res.status(500).json({ message: 'Ошибка на сервере' })
  }
}
