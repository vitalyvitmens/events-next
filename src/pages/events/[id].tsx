import { EventDetail, StyledDiv } from '@/entities/event'
import { trpc } from '@/shared/api'
import { useRouter } from 'next/router'
import { useSession } from 'next-auth/react'

export default function Event() {
  const router = useRouter()
  const session = useSession()

  const { data, isLoading } = trpc.event.findUnique.useQuery({
    id: Number(router.query.id),
  })

  if (isLoading) return <StyledDiv text="Loading..." />

  if (session.status === 'unauthenticated')
    return <StyledDiv text="Forbidden" />

  if (!data) return <StyledDiv text="Event not found" />

  return <EventDetail {...data} />
}
