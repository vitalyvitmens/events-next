import type { AppProps } from 'next/app'
import { trpc } from '@/shared/api'
import '@/styles/globals.css'
import { getSession, SessionProvider } from 'next-auth/react'
import { NextPageContext } from 'next'
import { Header } from '@/layout'

function App({ Component, pageProps }: AppProps) {
  return (
    <div className="mx-auto mt-24 mb-2 max-w-4xl rounded-md bg-transparent">
      <SessionProvider session={pageProps.session}>
        <Header />
        <Component {...pageProps} />
      </SessionProvider>
    </div>
  )
}

App.getInitialProps = async (context: { ctx: NextPageContext }) => {
  const session = await getSession({ req: context.ctx.req })

  return {
    pageProps: {
      session,
    },
  }
}

export default trpc.withTRPC(App)
