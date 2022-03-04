//Компонент модального окна-шаблона для Жилых помещений

import React, { useRef} from 'react';
import './AddNewObject.css';
import {metro, transaction} from '../../utils/constants'
import {SelectedMetro} from './SelectedMetro'
import {SelectedTransaction} from './SelectedTransaction'
import SceletonImage from './SceletonImage'
import {pattern} from '../../utils/constants';


function AddNewObject(props) {
    const form = useRef()
 
  return (
    <div className={`popup popup__type_flats ${props.isOpen ? ('popup_opened') : ''}`} >
    <div className={`popup__container popup__container__type_flats`}>
      <button onClick={props.onClose} type="button" className={`popup__close popup__close_type_flats`} aria-label="Закрыть форму"></button>
      <h2 className="popup__title">Добавить новый объект</h2>
      <form ref={form} className="add-form"  onSubmit={props.onSubmit} encType="multipart/form-data" name="fileinfo">
        <div className="add-form__modul">
          <div className="add-form__modul_class"> 
         
            <fieldset className="add-form__fieldset add-form__type_rooms">
              <h2 className="add-form__title add-form__title_rooms">Количество комнат</h2>
              <ul>
                {!props.object === "Дом" &&
                <li>  
                  <label className="add-form__label add-form__label_num" htmlFor="studio">Студия</label>
                  <input type="radio" value='studio' checked={props.rooms ==='studio' ? true : false} onChange={props.onChange} className="add-form__item_type_rooms" name="rooms" id="studio" />
                </li>
                }
                <li>
                  <label className="add-form__label add-form__label_num" htmlFor="one">1</label>
                  <input type="radio" value={'1' || ''} checked={props.rooms ==='1' ? true : false} onChange={props.onChange} className="add-form__item_type_rooms" name="rooms" id="one"/>
                </li>
                <li>
                  <label className="add-form__label add-form__label_num" htmlFor="two">2</label>
                  <input type="radio" value={'2' || ''} checked={props.rooms ==='2' ? true : false} onChange={props.onChange} className="add-form__item_type_rooms" name="rooms" id="two"/>
                </li>
                <li>
                  <label className="add-form__label add-form__label_num" htmlFor="three">3</label>
                  <input type="radio"  value={'3' || ''} checked={props.rooms ==='3' ? true : false} onChange={props.onChange} className="add-form__item_type_rooms" name="rooms" id="three"/>
                </li>
                <li>
                  <label className="add-form__label add-form__label_num" htmlFor="four">4</label>
                  <input type="radio" value={'4' || ''} checked={props.rooms ==='4' ? true : false}  onChange={props.onChange} className="add-form__item_type_rooms" name="rooms" id="four"/>
                </li>
                <li>
                  <label className="add-form__label add-form__label_num" htmlFor="five">5+</label>
                  <input type="radio" value={'5' || ''} checked={props.rooms ==='5' ? true : false} onChange={props.onChange} className="add-form__item_type_rooms" name="rooms" id="five"/>
                </li>
              </ul>
            </fieldset>  
            <fieldset className="add-form__fieldset add-form__type_area">
              <label className="add-form__label" htmlFor="totalArea">Общая площадь:</label>
              <input type="number" onChange={props.onChange} value={props.totalArea || ''} className="add-form__item add-form__item_type_total-area" name="totalArea" id="totalArea"/>
              {props.totalArea==='' && <span className="email-error add-form__item-error">Поле не может быть пустым</span> }
              <label className="add-form__label" htmlFor="kitchenArea">Площадь кухни:</label>
              <input type="number" onChange={props.onChange}  value={props.kitchenArea || ''} className="add-form__item add-form__item_type_kitchen-area" name="kitchenArea" id="kitchenArea"/>
              {props.kitchenArea==='' && <span className="email-error add-form__item-error">Поле не может быть пустым</span> }
            </fieldset> 
            <fieldset className="add-form__fieldset add-form__fieldset_type_column add-form_type_adress">
              <label className="add-form__label" htmlFor="adress">Адрес</label>
              <input type="text" value={props.adress || ''} onChange={props.onChange} placeholder='Введите адрес' className="add-form__item add-form__item_type_adress" name="adress" id="adress"/>
              {props.adress==='' && <span className="email-error add-form__item-error">Поле не может быть пустым</span> }
            </fieldset>
            <fieldset className="add-form__fieldset_type_column add-form_type_district">
              <label className="add-form__label" htmlFor="district">Район</label>
              <input type="text"value={props.district || ''} onChange={props.onChange} placeholder='Введите район' className="add-form__item add-form__item_type_district" name="district" id="district"/>
              {props.district==='' && <span className="email-error add-form__item-error">Поле не может быть пустым</span> }
            </fieldset>
            {!props.object === "Дом" &&
            <fieldset className="add-form__fieldset add-form_type_metro">
              <h2 className="add-form__title add-form__title_metro">Метро</h2>
              <select name="metro" value={props.metro || ''} onChange={props.onChange}>
              <option value="none" name="none">Выберите метро</option>
                {metro.map((item, index)=> (
                  <SelectedMetro item={item} key={index}/>
                ))}
              </select>
            </fieldset> }
            <fieldset className="add-form__fieldset add-form__type_info">
              <label className="add-form__label" htmlFor="info">Описание</label>
              <textarea value={props.info || ''} onChange={props.onChange} type="textarea" cols='50' min="0" max="1000" placeholder='Введите текст от 3 до 10000 символов' autoFocus className="add-form__item add-form__item_type_info" name="info" id="info" />  
              {props.infoError && <span className="email-error add-form__item-error">{props.infoError}</span>}
            </fieldset>
          </div>
          <div className="add-form__modul_class">
            <fieldset className="add-form__fieldset_type_column add-form_type_price">
              <label className="add-form__label" htmlFor="price">Цена</label>
              <input type="number" value={props.price || ''} onChange={props.onChange} placeholder='Укажите цену' className="add-form__item add-form__item_type_price" name="price" id="price"/>
              {props.price==='' && <span className="email-error add-form__item-error">Поле не может быть пустым</span> }
            </fieldset>
            <fieldset className="add-form__fieldset add-form__type_transaction">
              <h2 className="add-form__title add-form__title_transaction">Тип сделки</h2>
              <select name="transaction" value={props.transaction || ''} onChange={props.onChange}>
              <option value="none" name="none">Выберите сделку</option>
                {transaction.map((item, index)=> (
                  <SelectedTransaction item={item} key={index}/>
                ))}
              </select>
            </fieldset>
            {props.object !== "Дом" &&
            <>
            <fieldset className="add-form__fieldset_type_column add-form_type_kadastr">
              <label className="add-form__label" htmlFor="kadastr">Кадастровый номер</label>
              <input type="text" value={props.kadastr || ''} onChange={props.onChange} placeholder='Введите номер' className="add-form__item add-form__item_type_kadastr" name="kadastr" id="kadastr"/>
              {props.kadastr==='' && <span className="email-error add-form__item-error">Поле не может быть пустым</span> }
            </fieldset>
            <fieldset className="add-form__fieldset add-form__type_addition">
              <button type="button" value={props.elevatior || props.elButtonActive} className={`add-form_button element__link ${props.elButtonActive ? 'add-form_button_active' : ''}`} name="elevator" id="elevator" onClick={props.handleElButtonClick}>Лифт</button>
              <button type="button" value={props.repair || props.repButtonActive} className={`add-form_button element__link ${props.repButtonActive ? 'add-form_button_active' : ''}`} name="repair" onClick={props.handleRepButtonClick}>Ремонт</button>
              <button type="button" value={props.balcony || props.balButtonActive} className={`add-form_button element__link ${props.balButtonActive ? 'add-form_button_active' : ''}`} name="balcony" onClick={props.handleBalButtonClick}>Балкон</button>
            </fieldset>
            <fieldset className="add-form__fieldset_type_column add-form_type_floor">
              <label className="add-form__label" htmlFor="floor">Этаж</label>
              <input type="text" pattern={pattern.floor} value={props.floor || ''} onChange={props.onChange} placeholder='Введите этаж в формате этаж/этажность' className="modal__item add-form__item_type_floor" name="floor" id="floor"/>
              {props.floorError && <span className="email-error add-form__item-error">{props.floorError}</span>}
            </fieldset>
            </>
            }
            <fieldset className="add-form__fieldset_type_column add-form_type_commission">
              <label className="add-form__label" htmlFor="commission">Комиссионные</label>
              <input type="text" value={props.commission || ''} onChange={props.onChange} placeholder='Введите вознаграждение' className="modal__item add-form__item_type_commission" name="commission" id="commission"/>
              {props.commission==='' && <span className="email-error add-form__item-error">Поле не может быть пустым</span> }
            </fieldset>
            <fieldset className="add-form_type_image">
              <SceletonImage selectedImage={props.selectedImage} isOpen={props.isOpen} imageBlob={props.imageBlob} onChange={props.uploadImage} onClick={props.handleNewImage} />
            </fieldset>
            {props.children} 
          </div>
        </div>
      
        <button className={`add-form__button  ${props.submitDisabled ? ('add-form__button_disabled') : 'element__link'}`} type="submit" disabled={props.submitDisabled ? true : ''} aria-label='Сохранить'>Сохранить</button>
        {props.rooms === undefined && <span className="email-error add-form__item-error">Заполните количество комнат</span>}
        {props.totalArea === undefined && <span className="email-error add-form__item-error">Заполните площадь объекта</span>}
        {props.kitchenArea === undefined && <span className="email-error add-form__item-error">Заполните площадь кухни</span>}
        {props.adress === undefined && <span className="email-error add-form__item-error">Заполните адрес</span>}
        {props.district === undefined && <span className="email-error add-form__item-error">Заполните район</span>}
        {(props.object !== 'Дом' && props.metro === undefined) && <span className="email-error add-form__item-error">Выберите метро</span>}
        {props.info === undefined && <span className="email-error add-form__item-error">Добавьте описание объекта</span>}
        {props.price === undefined && <span className="email-error add-form__item-error">Заполните цену</span>}
        {props.transaction === undefined && <span className="email-error add-form__item-error">Выберите тип сделки</span>}
        {(props.object !== 'Дом' && props.kadastr === undefined) && <span className="email-error add-form__item-error">Заполните кадастровый номер</span>}
        {(props.object !== 'Дом' && props.floor === undefined) && <span className="email-error add-form__item-error">Заполните этаж</span>}
        {props.commission === undefined &&  <span className="email-error add-form__item-error">Заполните комиссию</span> }
        {Object.keys(props.selectedImage).length === 0 && <span className="email-error add-form__item-error">Добавьте фотографию</span>}
        
      </form>
    </div>
    </div>
  )
}

export default AddNewObject;