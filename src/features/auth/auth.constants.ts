export const AUTH_MESSAGES = {
  ErrorMessage: 'Ошибка:',
  RequestExecutionError: 'Ошибка выполнения запроса:',
  UserAlreadyLoggedIn: 'Пользователь уже вошел в систему',
  UserAlreadyExists: 'Пользователь уже существует',
  UserCreated: 'Пользователь успешно создан',
  ServerError: 'Ошибка на сервере',
  PasswordsDoNotMatch: 'Пароли не совпадают',
  SignInError: 'Не удалось выполнить вход',
  SignUpError: 'Произошла ошибка при регистрации',
  UnknownSignUpError: 'Неизвестная ошибка при регистрации',
}

export const AUTH_ROUTES = {
  SignIn: '/api/auth/signin',
  SignUp: '/api/auth/signup',
}
