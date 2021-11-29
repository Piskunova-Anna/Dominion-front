import React from 'react';
import './Form.css'
import { Link } from 'react-router-dom';
import {pattern} from '../../utils/constants';

function Form(props) {

  
 return (
    <div className="form__container">
      <h2 className="form__title">{props.title}</h2>
      <form className="form__info" onSubmit={props.onSubmit} disabled={props.submitDisabled ? true : ''}>
        <fieldset className="form__data">
        {props.children}
          <label className="input__label" htmlFor="email">E-mail</label>
          <input 
          autoComplete="off" 
          type="email" 
          onChange={props.onChange} 
          value={props.email} 
          placeholder="" 
          className="form__item form__item_type_email" 
          name="email" 
          id="email" 
          pattern={pattern.email}
          required/>
          {props.errorsEmail && <span className="email-error form__item-error">{props.errorsEmail}</span>}
          
          <label className="input__label" htmlFor="password">Пароль</label>
          <input 
          autoComplete="off" 
          type="password" 
          onChange={props.onChange} 
          value={props.password} 
          placeholder="" 
          className="form__item form__item_type_password" 
          name="password" 
          id="password" 
          required minLength="8" 
          maxLength="40"/>
          {props.errorsPassword && <span className="password-error form__item-error">{props.errorsPassword}</span>}
          

        </fieldset>
        <button disabled={props.submitDisabled ? true : ''} className={`form__button ${props.submitDisabled ? ('form__button_disabled') : 'section__link'}`} type="submit" aria-label={props.buttonName}>{props.buttonName}</button> 
      </form>
      <div className="form__signup">
        <p className="form__text">{props.text}</p>
        <Link to={props.rout} className="form__link section__link">{props.sign}</Link>
      </div>
    </div> 
  )
}
 
  export default Form;