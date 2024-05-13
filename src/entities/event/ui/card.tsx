import Image from 'next/image'
import Link from 'next/link'

type EventCardProps = {
  id: number
  title: string
  description: string | null
  date: Date
}

export const EventCard = ({ id, title, description, date }: EventCardProps) => {
  return (
    <div className="flex font-sans shadow-xl">
      <div className="flex-none w-48 relative">
        <Image
          src="/poster.png"
          alt=""
          className="absolute inset-0 w-full h-full object-cover"
          fill
        />
      </div>
      <div className="flex-auto p-6">
        <div className="flex flex-wrap -mt-6 pt-6 pb-6">
          <h1 className="flex-auto text-lg font-semibold text-slate-900">
            {title}
          </h1>
          <div className="text-lg font-semibold text-slate-500">
            {date.toDateString()}
          </div>
          <div className="w-full flex-none text-sm font-medium text-slate-700 mt-2">
            {description}
          </div>
        </div>
        <div className="flex space-x-4 text-sm font-medium">
          <div className="flex-auto flex space-x-4">
            <button className="h-10 px-6 font-semibold rounded-md bg-black text-white">
              Присоединиться
            </button>
            <Link
              href={`/event/${id}`}
              className="h-10 px-6 font-semibold rounded-md border border-slate-200 text-slate-900 align-middle leading-7"
            >
              Подробнее
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}
