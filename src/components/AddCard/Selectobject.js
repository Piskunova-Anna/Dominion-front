import React from 'react';
import '../ModalInfo/ModalInfo.css'

function SelectObject (props) {
 
  function handleSubmit(event) {
    event.preventDefault();
    if (props.object === 'Квартира') {
        props.onNext()
    }
} 

  return (
    <div className={`popup  popup__type_${props.name} ${props.isOpen ? ('popup_opened') : ''}`} >
      <div className={`popup__container popup__container_type_${props.name}`}>
      <button onClick={props.onClose} type="button" className="popup__close card__close" aria-label="Закрыть форму"></button>
      <form className="add-form"  onSubmit={handleSubmit} name="objinfo">
        <fieldset className="add-form__fieldset add-form__type_select">
          <h2 className="add-form__title add-form__title_select">Тип недвижимости</h2>
          <select onChange={props.onChange} placeholder="Выберите" name="object">
            <option value="none" name="none">Выберите объект</option>
            <option value="Квартира" name="flat">Квартира</option>
            <option value="Дом"  name="home">Дом</option>
          </select>
        </fieldset>
        <button className="add-form__button" type="submit" aria-label='далее'>Далее</button>
      
        </form>
      </div>
    </div>
  )
}

export default SelectObject 