import React, { useState } from 'react'
import { useRouter } from 'next/router'
import { signIn } from 'next-auth/react'

const SignupPage = () => {
  const router = useRouter()
  const [email, setEmail] = useState('')
  const [name, setName] = useState('')
  const [password, setPassword] = useState('')
  const [confirmPassword, setConfirmPassword] = useState('')
  const [errorMessage, setErrorMessage] = useState('')

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    const target = event.target as typeof event.target & {
      email: { value: string }
      name: { value: string }
    }

    if (password !== confirmPassword) {
      setErrorMessage('Пароли не совпадают.')
      return
    }

    const data = {
      email: target.email.value,
      password: password,
      name: target.name.value,
    }

    try {
      const response = await fetch('/api/auth/signup', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      })

      if (response.ok) {
        const signInResponse = await signIn('credentials', {
          redirect: false,
          email: data.email,
          password: data.password,
        })

        if (signInResponse?.ok) {
          setEmail('')
          setName('')
          setPassword('')
          setConfirmPassword('')

          router.push('/')
        } else {
          setErrorMessage('Не удалось выполнить вход.')
        }
      } else {
        setErrorMessage('Произошла ошибка при регистрации.')
      }
    } catch (error) {
      console.error('Ошибка выполнения запроса:', error)

      if (error instanceof Error) {
        setErrorMessage(`Ошибка: ${error.message}`)
      } else {
        setErrorMessage('Неизвестная ошибка при регистрации.')
      }
    }
  }

  return (
    <form
      className="mx-auto w-[300px] p-8 bg-gray-50 dark:bg-gray-900 rounded-xl"
      onSubmit={handleSubmit}
    >
      <div className="mb-2">
        <label htmlFor="name">Имя:</label>
        <input
          className="flex w-full text-black text-lg rounded-md"
          id="name"
          name="name"
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          autoComplete="name"
          required
        />
      </div>
      <div className="mb-2">
        <label htmlFor="email">Электронная почта:</label>
        <input
          className="flex w-full text-black text-lg rounded-md"
          id="email"
          name="email"
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          autoComplete="email"
          required
        />
      </div>
      <div className="mb-2">
        <label htmlFor="password">Пароль:</label>
        <input
          className="flex w-full text-black text-lg rounded-md"
          id="password"
          name="password"
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
      </div>
      <div className="mb-2">
        <label htmlFor="confirmPassword">Повторите пароль:</label>
        <input
          className="flex w-full text-black text-lg rounded-md"
          id="confirmPassword"
          name="confirmPassword"
          type="password"
          value={confirmPassword}
          onChange={(e) => setConfirmPassword(e.target.value)}
          required
        />
      </div>
      <button
        className="flex text-align-center w-full justify-center rounded-md 
        mt-6 bg-indigo-600 py-3 text-lg font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
        type="submit"
      >
        Регистрация
      </button>
      {errorMessage && <p className="text-red-500">{errorMessage}</p>}
    </form>
  )
}

export default SignupPage
