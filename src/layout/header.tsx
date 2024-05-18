import { useSession } from 'next-auth/react'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

export const Header = () => {
  const { data: session, status } = useSession()

  return (
    <div className="fixed h-[88px] w-full top-0 left-0 bg-gradient-to-bl from-sky-200/90 to-indigo-600/90 z-50 flex justify-around text-sm py-6 border-b border-[#962433]">
      <div className="flex-none w-44 relative image-container">
        <Link href="/" className="absolute inset-0">
          <Image
            src="/rs.svg"
            alt="Result School"
            className="absolute inset-0 w-full h-full object-contain"
            fill
            sizes="(min-width: 75em) 33vw, (min-width: 48em) 50vw, 100vw"
            priority
          />
        </Link>
      </div>
      {status === 'unauthenticated' ? (
        <div className="flex gap-10">
          <Link href="/api/auth/signin">Войти</Link>
          <Link href="/signup">Регистрация</Link>
        </div>
      ) : (
        <>
          <div className="h-10 px-2 font-semibold text-gray-300 align-middle leading-10">
            {session?.user?.name} ←
          </div>
          <Link
            className="h-10 px-6 mr-4 font-semibold rounded-md bg-green-500 text-white align-middle leading-10"
            href="/events/create"
          >
            Создать событие
          </Link>
          <Link
            className="h-10 px-6 font-semibold rounded-md bg-red-500 text-white align-middle leading-10"
            href="/api/auth/signout"
          >
            Выйти
          </Link>
        </>
      )}
    </div>
  )
}
