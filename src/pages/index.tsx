import { trpc } from '@/shared/api'

export default function Home() {
  const { data } = trpc.hello.useQuery({ name: 'Name 77' })
  return (
    <pre>
      {data?.greeting},{' '}
      {data?.date.toISOString().slice(0, 10).replaceAll('-', '.')}
    </pre>
  )
}
