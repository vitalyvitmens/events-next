import { EventDetail } from '@/entities/event'
import { trpc } from '@/shared/api'
import { useRouter } from 'next/router'
import { useSession } from 'next-auth/react'

export default function Event() {
  const router = useRouter()
  const session = useSession()

  const { data, isLoading } = trpc.event.findUnique.useQuery({
    id: Number(router.query.id),
  })

  if (isLoading) return <div>Loading...</div>

  if (!data) return <div>Event not found</div>

  if (session.status === 'unauthenticated') return <div>Forbidden</div>

  return <EventDetail {...data} />
}
