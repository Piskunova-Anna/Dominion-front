import {useState, useCallback} from 'react';

export function useFormValidation(namevalues) {
  //хук управления формой и валидации формы
  const [ values, setValues ] = useState(namevalues);
  const [ errors, setErrors ] = useState({});
  const [ isValid, setIsValid ] = useState(true);
  const [emailError, setEmailError] = useState('')
  const [passwordError, setPasswordError] = useState('')
  const [nameError, setNameError] = useState('')
  const [surnameError, setSurnameError] = useState('')
  const [agencyError, setAgencyError] = useState('')
  const [phoneError, setPhoneError] = useState('')
  const [floorError, setFloorError] = useState('')
  const [infoError, setInfoError] = useState('')
  
  const handleChange = (e) => {
    const {name, value} = e.target
    setValues({...values, [name]: value});
    errorMessage(e)
    //setErrors({...errors, [name]: error.email})
    setIsValid(e.target.closest('form').checkValidity())

  };

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
      case 'name':
        if(value.length ===0) { 
          setNameError('Имя не может быть пустым')
        } else if(value.length<2) {
          setNameError('Минимальное количество символов: 2')
        } else {
          setNameError('')
        }
      break;
      case 'surname':
        if(value.length ===0) { 
          setSurnameError('Поле не может быть пустым')
        } else if(value.length<2) {
          setSurnameError('Минимальное количество символов: 2')
        } else {
          setSurnameError('')
        }
      break;
      case 'agency':
        if(value.length ===0) { 
          setAgencyError('Поле не может быть пустым')
        } else if(value.length<2) {
          setAgencyError('Минимальное количество символов: 2')
        } else {
          setAgencyError('')
        }
      break; 
      case 'phone':
        if(value.length ===0) { 
          setPhoneError('Поле не может быть пустым')
        } else if(value.length > 11) {
          setPhoneError('Максимальное количество символов: 11')
        } else {
          const re = /^(\+7||8)[\s(]*\d{3}[)\s]*\d{3}[\s-]?\d{2}[\s-]?\d{2}/;
          return re.test(value) && value.length > 3 ? setPhoneError('') : setPhoneError('Введите номер без пробелов, используя только')
        
        }
      break;
      
      //Валидация модального окна с добавлением карточки
      case 'floor':
        if(value.length ===0) { 
          setFloorError('Поле не может быть пустым')
        } else {
          const re = /^[0-9]{1,2}\/[0-9]{1,2}/;
          return re.test(value) ? setFloorError('') : setFloorError('Введите этаж в формате этаж/этажность')
        }
      break;
      case 'info':
        if(value.length ===0) { 
          setInfoError('Поле не может быть пустым')
        }  else if(value.length > 10000) {
          setInfoError(`Максимальное количество знаков: 10000. Введено на ${value.length-10000} больше`)
        }
        else if(value.length < 3) {
          setInfoError(`Минимальное количество знаков 3`)
        } else {
          setInfoError(``)
        }
      break;
    }
  }
  
  const resetForm = useCallback((newValues = {}, newErrors = {}, newIsValid = false) => {
    setValues(newValues);
    setErrors(newErrors);
    setIsValid(newIsValid);
    
  }, [setValues, setErrors, setIsValid]);
  
  return { 
    values, 
    handleChange, 
    isValid, 
    errors,
    emailError, 
    passwordError, 
    resetForm, 
    setValues, 
    setIsValid, 
    nameError,
    surnameError,
    agencyError,
    phoneError,
    floorError,
    infoError,
  }

}


