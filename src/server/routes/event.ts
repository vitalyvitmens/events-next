import { isAuth, procedure, router } from '../trpc'
import { prisma } from '../db'
import { CreateEventSchema } from '@/shared/api/schema'

export const eventRouter = router({
  findMany: procedure.query(() => {
    return prisma.event.findMany()
  }),
  create: procedure
    .input(CreateEventSchema)
    .use(isAuth)
    .mutation(async ({ input, ctx: { user } }) => {
      await prisma.user.findFirstOrThrow()

      return prisma.event.create({
        data: {
          authorId: user.id,
          ...input,
        },
      })
    }),
})
