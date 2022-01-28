//Компонент модального окна для добавления квартир

import React, { useRef} from 'react';
import './AddNewFlats.css';
import {useFormValidation} from '../../utils/Validator.js';
import {metro} from '../../utils/constants'
import {SelectedMetro} from './SelectedMetro'
import SceletonImage from './SceletonImage'
import {pattern} from '../../utils/constants';

function AddNewFlats(props) {
 
  const { values, handleChange, errors, isValid } = useFormValidation({});
  const [elButtonActive, setElButtonActive] = React.useState(false);
  const [repButtonActive, setRapButtonActive] = React.useState(false);
  const [balButtonActive, setBalButtonActive] = React.useState(false);
  const [selectedImage, setSelectedImage] = React.useState({});
  const form = useRef()
  const [imageBlob, setImageBlob] = React.useState([]);
  let copy = Object.assign([], imageBlob);
  const object= props.object;
  const submitDisabled = 
    values.adress === '' ||
    values.floor === '' || 
    values.info === '' ||
    values.kitchenArea === '' ||
    values.metro === '' ||
    values.rooms === '' ||
    values.totalArea === '' ||
    values.transaction === '' ||
    values.price === '' ||
    values.kadastr === '' ||
    values.district === '' ||
    values.commission === '' ||
    copy.length === 0 ||
     !isValid;

    React.useEffect(()=> {
      form.current.reset()
    },  [props.isOpen])

  function  uploadImage(e) {
    setSelectedImage(e.target.files);
    const imgarr = Object.values(e.target.files);
    imgarr.map((item) => {
      let reader = new FileReader();
      reader.readAsDataURL(item)
      reader.onload = function() {
        copy.push(reader.result)
      };
      reader.onerror = function() {
        console.log(reader.error);
      };
    })
    setImageBlob(copy)
  }
 
  function handleSubmit(event) {
    event.preventDefault();
    props.onCardData([values, imageBlob, object])
   
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
    <div className={`popup popup__type_${props.name} ${props.isOpen ? ('popup_opened') : ''}`} >
    <div className={`popup__container popup__container__type_${props.name}`}>
      <button onClick={props.onClose} type="button" className={`popup__close popup__close_type_${props.name}`} aria-label="Закрыть форму"></button>
      <h2 className="popup__title">{props.title}</h2>
      <form ref={form} className="add-form"  onSubmit={handleSubmit} encType="multipart/form-data" name="fileinfo">
        <div className="add-form__modul">
          <div className="add-form__modul_class"> 
            <fieldset className="add-form__fieldset add-form__type_rooms">
                <h2 className="add-form__title add-form__title_rooms">Количество комнат</h2>
              
              <label className="add-form__label" htmlFor="studio">Студия</label>
              <input type="radio" value={'studio'} onChange={handleChange} className="add-form__item_type_rooms" name="rooms" id="studio"/>
              <label className="add-form__label" htmlFor="one">1</label>
              <input type="radio" value={'1'} onChange={handleChange} className="add-form__item_type_rooms" name="rooms" id="one"/>
              <label className="add-form__label" htmlFor="two">2</label>
              <input type="radio" value={'2'} onChange={handleChange} className="add-form__item_type_rooms" name="rooms" id="two"/>
              <label className="add-form__label" htmlFor="three">3</label>
              <input type="radio" value={'3'} onChange={handleChange} className="add-form__item_type_rooms" name="rooms" id="three"/>
              <label className="add-form__label" htmlFor="four">4</label>
              <input type="radio" value={'4'} onChange={handleChange} className="add-form__item_type_rooms" name="rooms" id="four"/>
              <label className="add-form__label" htmlFor="five">5+</label>
              <input type="radio" value={'5'} onChange={handleChange} className="add-form__item_type_rooms" name="rooms" id="five"/>
            </fieldset>  
            <fieldset className="add-form__fieldset add-form__type_area">
              <h2 className="add-form__title add-form__title_total-area">Площадь квартиры</h2>
              <label className="add-form__label" htmlFor="totalArea">Общая площадь:</label>
              <input type="number" onChange={handleChange} value={values.totalArea} className="add-form__item add-form__item_type_total-area" name="totalArea" id="totalArea"/>
              <label className="add-form__label" htmlFor="kitchenArea">Площадь кухни:</label>
              <input type="number" onChange={handleChange}  value={values.kitchenArea} className="add-form__item add-form__item_type_kitchen-area" name="kitchenArea" id="kitchenArea"/>
            </fieldset> 
            <fieldset className="add-form__fieldset add-form__fieldset_type_column add-form_type_adress">
              <label className="add-form__label" htmlFor="adress">Адрес</label>
              <input type="text"value={values.adress} onChange={handleChange} placeholder='Введите адрес' className="add-form__item add-form__item_type_adress" name="adress" id="adress"/>
            </fieldset>
            <fieldset className="add-form__fieldset_type_column add-form_type_district">
              <label className="add-form__label" htmlFor="district">Район</label>
              <input type="text"value={values.district} onChange={handleChange} placeholder='Введите район' className="add-form__item add-form__item_type_district" name="district" id="district"/>
            </fieldset>
            <fieldset className="add-form__fieldset add-form_type_metro">
              <h2 className="add-form__title add-form__title_metro">Метро</h2>
              <select name="metro" value={values.metro} onChange={handleChange}>
              <option value="none" name="none">Выберите метро</option>
                {metro.map((item, index)=> (
                  <SelectedMetro item={item} key={index}/>
                ))}
              </select>
            </fieldset>
            <fieldset className="add-form__fieldset add-form__type_info">
              <label className="add-form__label" htmlFor="info">Описание</label>
              <textarea value={values.info} onChange={handleChange} type="textarea" cols='50' min="0" max="1000" placeholder='Введите текст' autoFocus className="add-form__item add-form__item_type_info" name="info" id="info" />  
            </fieldset>
          </div>
          <div className="add-form__modul_class">
            <fieldset className="add-form__fieldset_type_column add-form_type_price">
              <label className="add-form__label" htmlFor="price">Цена</label>
              <input type="number" value={values.price} onChange={handleChange} placeholder='Укажите цену' className="add-form__item add-form__item_type_price" name="price" id="price"/>
              {errors.price && <span className="email-error add-form__item-error">{errors.price}</span>}
            </fieldset>
            <fieldset className="add-form__fieldset add-form__type_transaction">
              <h2 className="add-form__title add-form__title_transaction">Тип сделки</h2>
              <select name="transaction" value={values.rent} onChange={handleChange} placeholder="Выберите">
                <option value="none" name="none">Выберите сделку</option>
                <option value="Продажа">Продажа</option>
                <option value="Аренда">Аренда</option>
              </select>
            </fieldset>
            <fieldset className="add-form__fieldset_type_column add-form_type_kadastr">
              <label className="add-form__label" htmlFor="kadastr">Кадастровый номер</label>
              <input type="text"value={values.kadastr} onChange={handleChange} placeholder='Введите номер' className="add-form__item add-form__item_type_kadastr" name="kadastr" id="kadastr"/>
            </fieldset>
            <fieldset className="add-form__fieldset add-form__type_addition">
              <button value={values.elevator= elButtonActive} className={`add-form_button element__link ${elButtonActive ? 'add-form_button_active' : ''}`} name="elevator" id="elevator" onClick={handleElButtonClick}>Лифт</button>
              <button value={values.repair= repButtonActive} className={`add-form_button element__link ${repButtonActive ? 'add-form_button_active' : ''}`} name="repair" onClick={handleRepButtonClick}>Ремонт</button>
              <button value={values.balcony= balButtonActive} className={`add-form_button element__link ${balButtonActive ? 'add-form_button_active' : ''}`} name="balcony" onClick={handleBalButtonClick}>Балкон</button>
            </fieldset>
            <fieldset className="add-form__fieldset_type_column add-form_type_floor">
              <label className="add-form__label" htmlFor="floor">Этаж</label>
              <input type="text" pattern={pattern.floor} value={values.floor} onChange={handleChange} placeholder='Введите этаж' className="modal__item add-form__item_type_floor" name="floor" id="floor"/>
              {errors.floor && <span className="email-error add-form__item-error">{errors.floor}</span>}
            </fieldset>
            <fieldset className="add-form__fieldset_type_column add-form_type_commission">
              <label className="add-form__label" htmlFor="commission">Комиссионные</label>
              <input type="text" pattern={pattern.commission} value={values.commission} onChange={handleChange} placeholder='Введите вознаграждение' className="modal__item add-form__item_type_commission" name="commission" id="commission"/>
              {errors.commission && <span className="email-error add-form__item-error">{errors.commission}</span>}
            </fieldset>
            <fieldset className="add-form_type_image">
              <SceletonImage selectedImage={selectedImage} imageBlob={imageBlob} onChange={uploadImage} />
            </fieldset>
          </div>
        </div>
        
        <button className={`add-form__button  ${submitDisabled ? ('add-form__button_disabled') : 'element__link'}`} type="submit" disabled={submitDisabled ? true : ''} aria-label='Сохранить'>Сохранить</button>
        {errors.name && <span className="email-error add-form__item-error">{errors.name}</span>}
      </form>
    </div>
    </div>
  )
}

export default AddNewFlats;