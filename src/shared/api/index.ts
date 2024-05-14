import { AppRouter } from '@/server/routes'
import { httpBatchLink } from '@trpc/client'
import { createTRPCNext } from '@trpc/next'
import { ssrPrepass } from '@trpc/next/ssrPrepass'
import superjson from 'superjson'

function getBaseUrl() {
  if (typeof window !== 'undefined')
    // browser should use relative path
    return ''

  // if (process.env.VERCEL_URL)
  //   // reference for vercel.com
  //   return `https://${process.env.VERCEL_URL}`

  // assume localhost
  return `http://localhost:${process.env.PORT ?? 3000}`
}

export const trpc = createTRPCNext<AppRouter>({
  ssr: true,
  ssrPrepass,
  config(opts) {
    const { ctx } = opts
    if (typeof window !== 'undefined') {
      // during client requests
      return {
        links: [
          httpBatchLink({
            url: '/api/trpc',
            transformer: superjson, // Переместите transformer сюда
          }),
        ],
      }
    }

    // The server needs to know your app's full url
    const url = `${getBaseUrl()}/api/trpc`

    return {
      links: [
        httpBatchLink({
          url,
          headers() {
            if (!ctx?.req?.headers) {
              return {}
            }
            // To use SSR properly, you need to forward client headers to the server
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

export * from './schema'
