import { initTRPC, TRPCError } from '@trpc/server'
import superjson from 'superjson'
import { Context } from './context'

export const trpc = initTRPC.context<Context>().create({
  transformer: superjson,
})

export const router = trpc.router
export const procedure = trpc.procedure

export const isAuth = trpc.middleware(async (opts) => {
  const { ctx } = opts

  if (!ctx.user) {
    throw new TRPCError({ code: 'UNAUTHORIZED' })
  }
  
  return opts.next({
    ctx: {
      user: ctx.user,
    },
  })
})
