import Error from 'next/error'

export default function HelloPage() {
  return (
    <div className="mx-auto w-full p-8 bg-gray-50 dark:bg-gray-900 rounded-xl">
      <Error statusCode={404} />
    </div>
  )
}
