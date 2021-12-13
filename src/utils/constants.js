export const pattern = {
    email: '^[^@\\s]+@[^@\\s]+\\.[^@\\s]+$',
    name: '^[a-zA-Zа-яА-ЯЁё\\s\\-]+$',
    phone: '^(\\+7||8)[\\s(]*\\d{3}[)\\s]*\\d{3}[\\s-]?\\d{2}[\\s-]?\\d{2}',
  }
  
  
  export const errorMessage = {
    emailandPasswordError: 'Ошибка авторизации. Неверный email или пароль.',
    tokenError: 'При авторизации произошла ошибка. Токен не передан или передан не в том формате.',
    registrationError: 'Пользователь с таким email уже существует.',
    searchError: 'Во время запроса произошла ошибка. Подождите немного и попробуйте ещё раз».',
    keywordNull: "Нужно ввести ключевое слово",
    badRequestErr: 'При обновлении профиля произошла ошибка.',
    internalServerErr: 'На сервере произошла ошибка.',
    emailError: 'Пользователь с таким email уже существует',
    registrError: 'При регистрации пользователя произошла ошибка.'
  }
  
  
  export const succesOk = {
    changeInfoUser: 'Данные успешно обновлены!',
    signinOk: 'Регистрация прошла успешно, ожидайте подтверждения',
    
  }
  
  export const infoMessage = {
    dontFindMovie: 'Ничего не найдено'
  }
  
  export const authErrors = {
    badRequestErr: 400,
    unauthorizedErr: 401,
    forbiddenErr: 403,
    notFoundErr: 404,
    conflictErr: 409,
    internalServerErr: 500,
    mongoErr: 11000,
  }