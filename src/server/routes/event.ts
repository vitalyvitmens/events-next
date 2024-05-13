import { procedure, router } from '../trpc'
import { prisma } from '../db'

export const eventRouter = router({
  findMany: procedure.query(() => {
    return prisma.event.findMany()
  }),
})
