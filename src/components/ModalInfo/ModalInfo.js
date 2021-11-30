import React from 'react';
import './ModalInfo.css'
import succesOk from '../../images/succesOk.svg'
import succesError from '../../images/succesErr.svg'

function ModalInfo (props) {
 const succesIcon = props.icon ? succesOk : succesError

  
  return (
    <div className={`popup ${props.isOpen ? ('popup_opened') : ''}`} >
      <div className="popup__container">   
        <button onClick={props.onClose} type="button" className="popup__close" aria-label="Закрыть форму"></button>
        <img className="popup__icon" src={succesIcon} alt="иконка подтверждения" />
        <h2 className="popup__title">{props.textError}</h2>
      </div>
    </div>
  )
}

export default ModalInfo 