export const SHARED_ROUTES = {
  Home: '/',
  Events: '/events',
  CreateEvent: '/events/create',
  SignIn: '/auth/signin',
  SignUp: '/signup',
}

export const WEATHER_API_KEY = process.env.NEXT_PUBLIC_WEATHER_API_KEY

export const weather_api_base_url = (key: string | undefined) =>
  `https://api.openweathermap.org/data/2.5/weather?q=Minsk&units=metric&lang=ru&appid=${key}`
