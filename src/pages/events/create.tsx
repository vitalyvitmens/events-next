import { CreateEventForm, CreateEventValues } from '@/features/create-event'
import { trpc } from '@/shared/api'
import { useRouter } from 'next/router'

export default function CreateEvent() {
  const router = useRouter()

  const { mutate } = trpc.event.create.useMutation({
    onSuccess: (data) => {
      router.push(`/events/${data.id}`)
    },
  })

  const handleSubmit = (data: CreateEventValues) => {
    mutate(data)
  }

  return (
    <div className="py-4">
      <CreateEventForm onSubmit={handleSubmit} />
    </div>
  )
}
