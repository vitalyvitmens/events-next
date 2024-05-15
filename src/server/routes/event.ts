import { isAuth, procedure, router } from '../trpc'
import { prisma } from '../db'
import { CreateEventSchema, JoinEventSchema } from '@/shared/api/schema'

export const eventRouter = router({
  findMany: procedure.query(() => {
    return prisma.event.findMany()
  }),
  create: procedure
    .input(CreateEventSchema)
    .use(isAuth)
    .mutation(({ input, ctx: { user } }) => {
      return prisma.event.create({
        data: {
          authorId: user.id,
          ...input,
        },
      })
    }),
  join: procedure
    .input(JoinEventSchema)
    .use(isAuth)
    .mutation(({ input, ctx: { user } }) => {
      return prisma.participation.create({
        data: {
          userId: user.id,
          eventId: input.id,
        },
      })
    }),
})
