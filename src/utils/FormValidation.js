import {useState, useCallback, useEffect} from 'react';


export const useInput = (initialValue, validations) => {
  const [value, setValue] = useState(initialValue);
  const [emailError, setEmailError] = useState('')
  const [passwordError, setPasswordError] = useState('')


  const onChange = (e) => {
    const {name, value} = e.target
    setValue(value)
    errorMessage(e)

  }
  
  const errorMessage = (e) => {
    const {name, value} = e.target
      switch(name) {
        case 'email': 
         if(value.length === 0) {
            setEmailError('Поле не может быть пустым')
         } else {
            const re = /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/;
            return re.test(String(value).toLowerCase()) ? setEmailError(false) : setEmailError('Введен неккоректный email. Введите email в формате example@example.ru')
         }
          
          break;
        case 'password':
          if(value.length ===0) { 
           setPasswordError('Пароль не может быть пустым')
          } else {
            const re = /^(?=.*\d)(?=.*[!@#$%^&*])(?=.*[a-z])(?=.*[A-Z]).{8,}$/;
            return re.test(value) && value.length > 3 ? setPasswordError('') : setPasswordError('Минимальное количество символов: 8. Используйте 1строчную и 1 прописную буквы, числа и спецсимволы !@#$%^&*')
          }
          break;
         
      }
    }

  return {
    value,
    onChange,
    emailError,
    passwordError,

  }
}