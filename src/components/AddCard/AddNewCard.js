import React from 'react';
import './AddNewCard.css';
import {useFormValidation} from '../../utils/Validator.js';
import {metro} from '../../utils/constants'
import {Selected} from './Selected'
import UploadAndDisplayImage from './newimg'

function AddNewCard(props) {
  const [totalArea, seTtotalArea] =  React.useState('');
  const { values, handleChange, errors, isValid } = useFormValidation({});

  const [elButtonActive, setElButtonActive] = React.useState(false);
  const [repButtonActive, setRapButtonActive] = React.useState(false);
  const [balButtonActive, setBalButtonActive] = React.useState(false);
  const [selectedImage, setSelectedImage] = React.useState({});

  function handleChange1 (event)  {
    setSelectedImage(event.target.files);
  }

  
  function handleSubmit(e) {
    e.preventDefault();
    props.onCardData([values, selectedImage])
  
    } 

    function handleElButtonClick() {
      setElButtonActive(!elButtonActive)
    }

    function handleRepButtonClick() {
      setRapButtonActive(!repButtonActive)
    }
    function handleBalButtonClick() {
      setBalButtonActive(!balButtonActive)
    }

    
  return (
    <div className={`popup popup_cards popup_type_${props.name} ${props.isOpen ? ('popup_opened') : ''}`} >
    <div className="popup__container popup__container_card">
      <button onClick={props.onClose} type="button" className="popup__close card__close" aria-label="Закрыть форму"></button>
      <h2 className="popup__title">{props.title}</h2>
      <form className="modal__form"  onSubmit={handleSubmit} >
      <fieldset className="add__form_fieldset add__form_type_name">
          <h2 className="modal__title modal__title_name">Тип недвижимости</h2>
          <select value={values.name} onChange={handleChange} placeholder="Выберите" name="name">
            <option>Квартира</option>
            <option>Дом</option>
          </select>
        </fieldset>
      <div className="modul">
      <fieldset className="add__form_fieldset add__form_type_rooms">
        <h2 className="modal__title modal__title_rooms">Количество комнат</h2>
        <label className="modal__label" htmlFor="studio">Студия</label>
        <input type="radio" value={'studio'} onChange={handleChange} className="form__item form__item_type_name" name="rooms" id="studio"/>
        <label className="modal__label" htmlFor="one">1</label>
        <input type="radio" value={'1'} onChange={handleChange} className="form__item form__item_type_name" name="rooms" id="one"/>
        <label className="modal__label" htmlFor="two">2</label>
        <input type="radio" value={'2'} onChange={handleChange} className="form__item form__item_type_name" name="rooms" id="two"/>
        <label className="modal__label" htmlFor="three">3</label>
        <input type="radio" value={'3'} onChange={handleChange} className="form__item form__item_type_name" name="rooms" id="three"/>
        <label className="modal__label" htmlFor="four">4</label>
        <input type="radio" value={'4'} onChange={handleChange} className="form__item form__item_type_name" name="rooms" id="four"/>
        <label className="modal__label" htmlFor="five">5+</label>
        <input type="radio" value={'5'} onChange={handleChange} className="form__item form__item_type_name" name="rooms" id="five"/>
        </fieldset>  

        <fieldset className="add__form_fieldset add__form_type_price">
         <label className="modal__label" htmlFor="price">Цена</label>
         <input type="text"value={values.price} onChange={handleChange} placeholder='Укажите цену' className="modal__item form__item_type_price" name="price" id="price"/>
        </fieldset>
        </div>
        <div className="modul">
        <fieldset className="add__form_fieldset add__form_type_area">
        <h2 className="modal__title modal__title_total-area">Площадь квартиры</h2>
        <label className="modal__label" htmlFor="totalArea">Общая площадь:</label>
        <input type="number" onChange={handleChange} value={values.totalArea} className="modal__item form__item_type_total-area" name="totalArea" id="totalArea"/>
        <label className="modal__label" htmlFor="kitchenArea">Площадь кухни:</label>
        <input type="number" onChange={handleChange}  value={values.kitchenArea} className="modal__item form__item_type_kitchen-area" name="kitchenArea" id="kitchenArea"/>
        </fieldset> 
        <fieldset className="add__form_fieldset add__form_type_transaction">
          <h2 className="modal__title modal__title_transaction">Тип сделки</h2>
          <select name="transaction" value={values.rent} onChange={handleChange} placeholder="Выберите">
            <option>Продажа</option>
            <option>Аренда</option>
          </select>
        </fieldset>
        </div>

      
       
        <div className="modul">
        <fieldset className="add__form_fieldset add__form_type_adress">
        <label className="modal__label" htmlFor="adress">Адрес</label>
         <input type="text"value={values.adress} onChange={handleChange} placeholder='Введите адрес' className="form__item form__item_type_adress" name="adress" id="adress"/>
        </fieldset>
        <fieldset className="add__form_fieldset add__form_type_addition">
          <button value={values.elevator= elButtonActive} className="add__form_button" name="elevator" id="elevator" onClick={handleElButtonClick}>Лифт</button>
          <button value={values.repair= repButtonActive} className="add__form_button" name="repair" onClick={handleRepButtonClick}>Ремонт</button>
          <button value={values.balcony= balButtonActive} className="add__form_button" name="balcony" onClick={handleBalButtonClick}>Балкон</button>
        </fieldset>
        </div>

        <div className="modul">
        <fieldset className="add__form_fieldset add__form_type_metro">
          <h2 className="modal__title modal__title_metro">Метро</h2>
          <select name="metro" value={values.metro} onChange={handleChange}>
          {
            metro.map((item, index)=> (
              <Selected item={item}/>
            ))
          }
          </select>
        </fieldset>
       

        <fieldset className="add__form_fieldset add__form_type_floor">
        <label className="modal__label" htmlFor="floor">Этаж</label>
         <input type="text"value={values.floor} onChange={handleChange} placeholder='Введите этаж' className="modal__item form__item_type_floor" name="floor" id="floor"/>
        </fieldset>
        </div>
        <div className="modul">
        <fieldset className="add__form_fieldset add__form_type_info">
        <label className="modal__label" htmlFor="info">Описание</label>
        <textarea value={values.info} onChange={handleChange} type="textarea" cols='50' min="0" max="1000" placeholder='Введите текст' autofocus className="form__item form__item_type_info" name="info" id="info" />  
        </fieldset>
        <fieldset className="add__form_type_image">
           <UploadAndDisplayImage selectedImage={selectedImage} onChange={handleChange1}/>
        </fieldset>
</div>
        <button className="modal__button " type="submit" aria-label='Сохранить'>Сохранить</button>
      </form>
    </div>
  </div>
   

  )

}

export default AddNewCard;