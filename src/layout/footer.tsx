import { weather_api_base_url, WEATHER_API_KEY } from '@/shared/constants'
import Link from 'next/link'
import React, { useEffect, useState } from 'react'
import Image from 'next/image'
import { scrollToTop } from '@/shared/utils/scroll'

export const Footer = () => {
  const [city, setCity] = useState<string>('Minsk')
  const [temperature, setTemperature] = useState<number | null>(null)
  const [weather, setWeather] = useState<string>('')

  useEffect(() => {
    fetch(weather_api_base_url(WEATHER_API_KEY))
      .then((res) => res.json())
      .then(({ name, main, weather }) => {
        setCity(name)
        setTemperature(Math.round(main.temp))
        setWeather(weather[0].description)
      })
  }, [temperature])

  return (
    <>
      <div className="h-2"></div>
      <div className="h-[88px] w-full mt-auto bottom-0 bg-gradient-to-bl from-sky-200/90 to-indigo-600/90 z-50 flex justify-around text-sm py-6 border-t border-l border-r border-[#962433] rounded-t-md">
        <div className="flex-none text-black font-bold">
          <Link
            href="https://vitalyvitmens.github.io/my-portfolio/"
            target="_blank"
          >
            <div>Events</div>
            <div>
              ©{' '}
              {new Date().toLocaleString('en', {
                year: 'numeric',
              })}{' '}
              vitalyvitmens. All rights reserved.
            </div>
          </Link>
        </div>
        <a
          onClick={scrollToTop}
          className="cursor-pointer shadow-lg shadow-gray-900 hover:opacity-70 transition duration-300 rounded-full bg-gray-300"
        >
          <Image src="/to-up.svg" alt="To up" width={40} height={40} priority />
        </a>
        <div className="flex-none text-black font-bold">
          <div>
            {city}{' '}
            {new Date().toLocaleString('ru', {
              day: 'numeric',
              month: 'long',
              year: 'numeric',
            })}
          </div>
          <div>
            {temperature}
            {'°C, '} {weather}
          </div>
        </div>
      </div>
    </>
  )
}
