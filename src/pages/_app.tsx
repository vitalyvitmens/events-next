import type { AppProps } from 'next/app'
import { trpc } from '@/shared/api'
import '@/styles/globals.css'
import { SessionProvider } from 'next-auth/react'

function App({ Component, pageProps }: AppProps) {
  return (
    <div className="mx-auto max-w-4xl">
      <SessionProvider>
        <Component {...pageProps} />
      </SessionProvider>
    </div>
  )
}

export default trpc.withTRPC(App)
