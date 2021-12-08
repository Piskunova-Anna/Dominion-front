import React from 'react';
import Form from '../Form/Form'
import './Register.css'
import {useFormValidation} from '../../utils/Validator.js';
import {pattern} from '../../utils/constants';

function Register(props) {
  const submitAuth = props.submitAuth;
  const { values, handleChange, errors, isValid } = useFormValidation({
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
    errorsEmail={errors.email}
    errorsPassword={errors.password}
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
    {errors.name && <span className="email-error form__item-error">{errors.name}</span>}
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
    {errors.surname && <span className="email-error form__item-error">{errors.surname}</span>} 
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
    {errors.agency && <span className="email-error form__item-error">{errors.agency}</span>} 
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
    {errors.phone && <span className="email-error form__item-error">{errors.phone}</span>}    
    </Form>    
  )
}
 
export default Register;