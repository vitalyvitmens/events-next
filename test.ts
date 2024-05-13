import { PrismaClient } from '@prisma/client'

const db = new PrismaClient()

const main = async () => {
  const user = await db.user.create({
    data: {
      name: 'Пользователь 3',
      email: '8g0@example.com',
      password: 'qwerty123',
      events: {
        create: {
          title: 'Заголовок события',
          description: 'Описание события',
          date: new Date(),
        },
      },
    },
    select: {
      id: true,
      name: true,
      events: {
        select: {
          id: true,
          date: true,
        },
      },
    },
  })

  console.log(user)
}

main().then(() => db.$disconnect())
