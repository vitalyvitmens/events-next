import { EventDetail, StyledDiv } from '@/entities/event'
import { trpc } from '@/shared/api'
import { useRouter } from 'next/router'
import { useSession } from 'next-auth/react'
import Link from 'next/link'

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

  return (
    <>
      <EventDetail {...data} />
      {data?.authorId === session.data?.user.id && (
        <div className="flex justify-end">
          <Link
            className="h-10 mt-2 px-6 font-semibold rounded-md bg-indigo-500 text-white align-middle leading-10"
            href={`/events/${router.query.id}/edit`}
          >
            Редактировать
          </Link>
        </div>
      )}
    </>
  )
}
