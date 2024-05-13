import { z } from 'zod'
import { procedure, router } from '../trpc'

export const appRouter = router({
  hello: procedure
    .input(
      z.object({
        name: z.string(),
      })
    )
    .query(({ input }) => {
      return {
        greeting: `Hello ${input.name}`,
        date: new Date(),
      }
    }),
})

export type AppRouter = typeof appRouter
