import { prisma } from '@/server/db'
import { hashPassword } from '@/shared/utils/auth'
import type { NextApiRequest, NextApiResponse } from 'next'
import { createContext } from '@/server/context'
import { AUTH_MESSAGES, AUTH_ROUTES } from '@/features/auth/auth.constants'

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
    res.status(400).json({ message: AUTH_MESSAGES.UserAlreadyLoggedIn })
    return
  }

  const { email, password, name } = req.body

  const existingUser = await prisma.user.findUnique({
    where: { email },
  })

  if (existingUser) {
    res.status(400).json({ message: AUTH_MESSAGES.UserAlreadyExists })
    return
  }

  try {
    const hashedPassword = await hashPassword(password)
    await prisma.user.create({
      data: {
        name,
        email,
        password: hashedPassword,
      },
    })

    res.status(201).json({
      message: AUTH_MESSAGES.UserCreated,
      redirectUrl: req.headers.origin + AUTH_ROUTES.SignIn,
    })
  } catch (error) {
    console.error(AUTH_MESSAGES.SignUpError, error)
    res.status(500).json({ message: AUTH_MESSAGES.ServerError })
  }
}
