import { EventDetail } from '@/entities/event'
import { trpc } from '@/shared/api'
import { useRouter } from 'next/router'

export default function Event() {
  const router = useRouter()

  const { data, isLoading } = trpc.event.findUnique.useQuery({
    id: Number(router.query.id),
  })

  if (isLoading) return <div>Loading...</div>

  if (!data) return <div>Event not found</div>

  return <EventDetail {...data} />
}
