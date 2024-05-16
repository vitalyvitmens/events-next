import type { AppRouter } from '@/server/routes'
import { inferRouterInputs, inferRouterOutputs } from '@trpc/server'
import { httpBatchLink } from '@trpc/client'
import { createTRPCNext } from '@trpc/next'
import { ssrPrepass } from '@trpc/next/ssrPrepass'
import superjson from 'superjson'

function getBaseUrl() {
  if (typeof window !== 'undefined') return ''

  // if (process.env.VERCEL_URL)
  //   return `https://${process.env.VERCEL_URL}`

  return `http://localhost:${process.env.PORT ?? 3000}`
}

export const trpc = createTRPCNext<AppRouter>({
  ssr: true,
  ssrPrepass,
  config(opts) {
    const { ctx } = opts
    if (typeof window !== 'undefined') {
      return {
        links: [
          httpBatchLink({
            url: '/api/trpc',
            transformer: superjson,
          }),
        ],
      }
    }

    const url = `${getBaseUrl()}/api/trpc`

    return {
      links: [
        httpBatchLink({
          url,
          headers() {
            if (!ctx?.req?.headers) {
              return {}
            }
            return {
              cookie: ctx.req.headers.cookie,
            }
          },
          transformer: superjson,
        }),
      ],
    }
  },
  transformer: superjson,
})

export type RouterInput = inferRouterInputs<AppRouter>
export type RouterOutput = inferRouterOutputs<AppRouter>

export * from './schema'
