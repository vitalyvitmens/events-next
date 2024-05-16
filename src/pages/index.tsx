import { EventCard } from '@/entities/event'
import { JoinEventButton } from '@/features/join-event'
import { LeaveEventButton } from '@/features/leave-event'
import { trpc } from '@/shared/api'

export default function Home() {
  const { data, refetch } = trpc.event.findMany.useQuery()

  return (
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
  )
}
