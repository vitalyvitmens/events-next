import { CreateEventForm } from '@/features/create-event'
import { CreateEventSchema, trpc } from '@/shared/api'
import { useRouter } from 'next/router'

export default function CreateEvent() {
  const router = useRouter()

  const { mutate } = trpc.event.create.useMutation({
    onSuccess: (data) => {
      router.replace(`/events/${data.id}`)
    },
  })

  const cancelHandler = () => {
    router.replace(`/`)
  }

  const handleSubmit = (data: CreateEventSchema) => {
    mutate(data)
  }

  return (
    <CreateEventForm onSubmit={handleSubmit} cancelHandler={cancelHandler} />
  )
}
