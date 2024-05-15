import { CreateEventForm, CreateEventValues } from '@/features/create-event'
import { trpc } from '@/shared/api'

export default function CreateEvent() {
  const { mutate } = trpc.event.create.useMutation()

  const handleSubmit = (data: CreateEventValues) => {
    mutate(data)
  }

  return (
    <div className="py-4">
      <CreateEventForm onSubmit={handleSubmit} />
    </div>
  )
}
