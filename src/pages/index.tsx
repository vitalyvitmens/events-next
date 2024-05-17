import { EventCard } from '@/entities/event'
import { JoinEventButton } from '@/features/join-event'
import { LeaveEventButton } from '@/features/leave-event'
import { trpc } from '@/shared/api'
import { metadata } from '@/shared/api/metadata'
import Head from 'next/head'

export default function Home() {
  const { data, refetch } = trpc.event.findMany.useQuery()

  return (
    <>
      <Head>
        <title>{metadata.title}</title>
        <meta name="description" content={metadata.description} />
      </Head>

      <ul>
        {data?.map((event) => (
          <li key={event.id}>
            <EventCard
              {...event}
              action={
                !event.isJoined ? (
                  <JoinEventButton eventId={event.id} onSuccess={refetch} />
                ) : (
                  <LeaveEventButton eventId={event.id} onSuccess={refetch} />
                )
              }
            />
          </li>
        ))}
      </ul>
    </>
  )
}
