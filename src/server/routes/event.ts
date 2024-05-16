import { isAuth, procedure, router } from '../trpc'
import { prisma } from '../db'
import {
  CreateEventSchema,
  JoinEventSchema,
  UpdateEventSchema,
} from '@/shared/api'
import { z } from 'zod'

export const eventRouter = router({
  findMany: procedure.query(async ({ ctx: { user } }) => {
    const events = await prisma.event.findMany({
      include: {
        participations: true,
      },
    })

    return events.map(({ participations, ...event }) => ({
      ...event,
      isJoined: participations.some(({ userId }) => userId === user?.id),
    }))
  }),

  findUnique: procedure
    .input(
      z.object({
        id: z.number(),
      })
    )
    .use(isAuth)
    .query(({ input }) => {
      return prisma.event.findUnique({
        where: input,
        select: {
          authorId: true,
          title: true,
          description: true,
          date: true,
          participations: {
            select: {
              user: {
                select: { name: true },
              },
            },
          },
        },
      })
    }),

  create: procedure
    .input(CreateEventSchema)
    .use(isAuth)
    .mutation(({ input, ctx: { user } }) => {
      return prisma.event.create({
        data: {
          authorId: user.id,
          ...input,
        },
      })
    }),

  join: procedure
    .input(JoinEventSchema)
    .use(isAuth)
    .mutation(({ input, ctx: { user } }) => {
      return prisma.participation.create({
        data: {
          userId: user.id,
          eventId: input.id,
        },
      })
    }),

  update: procedure
    .input(UpdateEventSchema)
    .use(isAuth)
    .mutation(({ input }) => {
      return prisma.event.update({
        data: {
          title: input.title,
          description: input.description,
          date: input.date,
        },
        where: {
          id: input.id,
        },
      })
    }),

  leave: procedure
    .input(JoinEventSchema)
    .use(isAuth)
    .mutation(({ input, ctx: { user } }) => {
      return prisma.participation.delete({
        where: {
          userId_eventId: {
            eventId: input.id,
            userId: user.id,
          },
        },
      })
    }),
})
