import React from 'react';
import Form from '../Form/Form'
import './Register.css'
import {useFormValidation} from '../../utils/Validator.js';
import {pattern} from '../../utils/constants';

function Register(props) {
  const submitAuth = props.submitAuth;
  const { values, 
    handleChange, 
    isValid, 
    emailError, 
    passwordError, 
    nameError, 
    surnameError,
    agencyError,
    phoneError
  } = useFormValidation({
    email: '', password: '', surname:'', phone: '', agency: '' });
  const submitDisabled = values.email === '' || values.password === '' || values.agency === '' || values.surname === '' || values.phone === '' || !isValid || submitAuth;
      
  function handleSubmit(e) {
    e.preventDefault();
    props.onRegister(values.name,values.email, values.surname, values.phone, values.agency, values.password ) 
   
  } 

  return (
    <Form 
    title="Добро пожаловать!" 
    buttonName="Зарегистрироваться" 
    text="Уже зарегистрированы?"
    sign="Войти"
    rout="/signin"
    onRegister={props.onRegister}
    email={values.email}
    password={values.password}
    onSubmit={handleSubmit}
    onChange={handleChange}
    errorsEmail={emailError}
    errorsPassword={passwordError}
    submitDisabled={submitDisabled}
    >
    <label className="input__label" htmlFor="name">Имя</label>
    <input 
    onChange={handleChange} 
    autoComplete="off" 
    value={values.name} 
    type="text"
    className="form__item form__item_type_name" 
    name="name" 
    id="name" 
    required 
    minLength="2" 
    maxLength="40"
    pattern={pattern.name}
    />
    {nameError && <span className="email-error form__item-error">{nameError}</span>}
    <label className="input__label" htmlFor="surname">Фамилия</label>
    <input 
    onChange={handleChange} 
    autoComplete="off" 
    value={values.surname} 
    type="text"
    className="form__item form__item_type_surname" 
    name="surname" 
    id="surname" 
    required 
    minLength="2" 
    maxLength="40"
    pattern={pattern.name}
    />
    {surnameError && <span className="email-error form__item-error">{surnameError}</span>} 
    <label className="input__label" htmlFor="agency">Агенство</label>
    <input 
    onChange={handleChange} 
    autoComplete="off" 
    value={values.agency} 
    type="text"
    className="form__item form__item_type_agency" 
    name="agency" 
    id="agency" 
    required 
    minLength="2" 
    maxLength="40"
    pattern={pattern.name}
    />
    {agencyError && <span className="email-error form__item-error">{agencyError}</span>} 
    <label className="input__label" htmlFor="phone">Телефон</label>
    <input 
    onChange={handleChange} 
    autoComplete="off" 
    value={values.phone} 
    type="tel"
    className="form__item form__item_type_phone" 
    name="phone" 
    id="phone" 
    required 
    pattern={pattern.phone}
    />
    {phoneError && <span className="email-error form__item-error">{phoneError}</span>}    
    </Form>    
  )
}
 
export default Register;