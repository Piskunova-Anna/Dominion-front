import React from 'react';
import './ModalInfo.css'
import succesOk from '../../images/succesOk.svg'
import succesError from '../../images/succesErr.svg'

function ModalInfo (props) {
 const succesIcon = props.icon ? succesOk : succesError
  
  return (
    <div className={`popup popup_type_${props.name} ${props.isOpen ? ('popup_opened') : ''}`} >
      <div className={`popup__container popup__container__type_${props.name}`}>   
        <button onClick={props.onClose} type="button" className="popup__close" aria-label="Закрыть форму"></button>
        <img className="popup__icon" src={succesIcon} alt="иконка подтверждения" />
        <h2 className="popup__title popup__title_modal-info">{props.textError}</h2>
      </div>
    </div>
  )
}

export default ModalInfo 