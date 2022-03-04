import React from 'react';
import "./Card.css";

function ImagePopup(props) {
  
  function handlerCounterAfter() {
    
  
  }
  function handlerCounterBefore() {
   
  
  }
  return(
    <div className={`popup popup_type_${props.name} ${props.card ? ('popup_opened') : ''}`}>
      <div className="popup__list">
        <div onClick={handlerCounterBefore} className="object__arrow object__arrow_left"></div>
        <div onClick={handlerCounterAfter} className="object__arrow object__arrow_right"></div>
        <button onClick={props.onClose} type="button" className="popup__close" aria-label="Закрыть форму"></button>
        <img className="popup__image" src={props.card ? props.card : ''} alt="Увеличенное фото" />
      </div>
    </div>
  )
}

export default ImagePopup;