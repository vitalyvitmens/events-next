import { AppRouter } from '@/server/routes'
import { httpBatchLink } from '@trpc/client'
import { createTRPCNext } from '@trpc/next'

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
  config(opts) {
    return {
      links: [
        httpBatchLink({
          url: `${getBaseUrl()}/api/trpc`,
          async headers() {
            return {
              // authorization: getAuthCookie(),
            }
          },
        }),
      ],
    }
  },
  /**
   * @link https://trpc.io/docs/v11/ssr
   **/
  ssr: false,
})
