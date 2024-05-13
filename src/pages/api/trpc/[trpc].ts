import { appRouter } from '@/server/routes'
import * as trpcNext from '@trpc/server/adapters/next'

export default trpcNext.createNextApiHandler({
  router: appRouter,
  createContext: () => ({}),
})
