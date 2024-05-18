import React, { useState } from 'react'
import { useRouter } from 'next/router'

const SignupPage = () => {
  const router = useRouter()
  const [email, setEmail] = useState('')
  const [name, setName] = useState('')
  const [password, setPassword] = useState('')
  const [confirmPassword, setConfirmPassword] = useState('')
  const [errorMessage, setErrorMessage] = useState('')

  // Функция для обработки формы регистрации
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
      // Отправка данных на API для регистрации
      const response = await fetch('/api/auth/signup', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      })

      if (response.ok) {
        const result = await response.json()
        // Перенаправление на URL, полученный из ответа сервера
        if (result.redirectUrl) {
          router.push(result.redirectUrl)
        }

        setEmail('')
        setName('')
        setPassword('')
        setConfirmPassword('')
      } else {
        // Проверка на тип содержимого ответа
        const contentType = response.headers.get('content-type')
        if (contentType && contentType.includes('application/json')) {
          const result = await response.json()
          setErrorMessage(result.message || 'Произошла ошибка при регистрации')
        } else {
          setErrorMessage('Произошла ошибка на сервере.')
        }
      }
    } catch (error) {
      console.error('Ошибка выполнения запроса:', error)
      setErrorMessage('Не удалось выполнить запрос.')
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
