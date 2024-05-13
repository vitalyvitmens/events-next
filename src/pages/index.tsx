import { EventCard } from '@/entities/event'
import { trpc } from '@/shared/api'

export default function Home() {
  const { data } = trpc.event.findMany.useQuery()
  return (
    <ul>
      {data?.map((event) => (
        <li key={event.id}>
          <EventCard {...event} />
        </li>
      ))}
    </ul>
  )
}
