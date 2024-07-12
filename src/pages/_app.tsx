import type { AppProps } from 'next/app'
import { trpc } from '@/shared/api'
import '@/styles/globals.css'
import { getSession, SessionProvider } from 'next-auth/react'
import { NextPageContext } from 'next'
import { Footer, Header } from '@/layout'

function App({ Component, pageProps }: AppProps) {
  return (
    <div className="flex flex-col min-h-screen-minus-footer mx-auto mt-[88px] max-w-4xl rounded-md bg-transparent">
      <SessionProvider session={pageProps.session}>
        <Header />
        <Component {...pageProps} />
        <Footer />
      </SessionProvider>
    </div>
  )
}

App.getStaticProps = async (context: { ctx: NextPageContext }) => {
  const session = await getSession({ req: context.ctx.req })

  return {
    pageProps: {
      session,
    },
  }
}

export default trpc.withTRPC(App)
