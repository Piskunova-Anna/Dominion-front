//Компонент модального окна для редактирования квартир

import React, { useRef} from 'react';
import './AddNewObject.css';
import {useFormValidation} from '../../utils/Validator.js';
import {metro} from '../../utils/constants'
import {SelectedMetro} from './SelectedMetro'
import SceletonImage from './SceletonImage'
import {pattern} from '../../utils/constants';
import Resizer from "react-image-file-resizer";

function EditFlats(props) {
  const editCardData = props.card
  const { 
    values, 
    handleChange,
    setValues,
    resetForm,
    floorError,
    infoError
 } = useFormValidation({});
  const [elButtonActive, setElButtonActive] = React.useState(false);
  const [repButtonActive, setRapButtonActive] = React.useState(false);
  const [balButtonActive, setBalButtonActive] = React.useState(false);
  const [selectedImage, setSelectedImage] = React.useState({});
  const form = useRef()
  const [imageBlob, setImageBlob] = React.useState([]);
  const object= props.object;
  let resImage = []
  const submitDisabled = 
    values.rooms === undefined || values.rooms === '' ||  
    values.totalArea === undefined || values.totalArea === '' || 
    values.kitchenArea === undefined || values.kitchenArea === '' ||
    values.adress === undefined ||  values.adress === '' ||
    values.district === undefined || values.district ===  '' ||
    values.metro === '' ||
    values.info === undefined || values.info === '' || 
    values.price === undefined || values.price === '' ||
    values.transaction === undefined || values.transaction === '' ||
    values.floor === '' || 
    values.kadastr === '' || selectedImage === 0 ||
    (object === 'Новостройка' && values.deadline === undefined) || (object === 'Новостройка' && values.deadline === '') ||
    (object === 'Комната' &&  values.roomarea === undefined) || (object === 'Комната' && values.roomarea === '') ||
    object !== 'Дом' ? (values.metro === undefined || values.floor === undefined || values.kadastr === undefined) :
    object === 'Дом' ? (values.plotarea === undefined || values.jurstatus === undefined || values.material === undefined || 
    values.plotarea === '' || values.jurstatus === '' || values.material === '') : ''
    
  React.useEffect(()=> {
    resetForm()
    setSelectedImage({})
    setElButtonActive(false)
    setRapButtonActive(false)
    setBalButtonActive(false)
      if(editCardData) {
        setValues({
          rooms: editCardData.rooms,
          name: editCardData.name,
          totalArea: editCardData.totalarea,
          kitchenArea: editCardData.kitchenarea,
          adress: editCardData.adress,
          district: editCardData.district,
          metro: editCardData.metro,
          info: editCardData.description,
          price: editCardData.price,
          transaction: editCardData.transaction,
          floor: editCardData.floor,
          kadastr: editCardData.cadastre,
          elevator: editCardData.elevator,
          balcony: editCardData.balcony,
          repair: editCardData.repair,
          id: editCardData._id,
          deadline: `${object === 'Новостройка' && editCardData.deadline}`,
          roomarea: `${object === 'Комната' && editCardData.roomarea}`,
          plotarea: `${object === 'Дом' && editCardData.plotarea}`,
          jurstatus: `${object === 'Дом' && editCardData.jurstatus}`,
          material: `${object === 'Дом' && editCardData.material}`,
        })

        setImageBlob(editCardData.image)  
      }
    },  [props.isOpen, setValues, setSelectedImage, resetForm, editCardData, object])
    
    function handleNewImage() {
      setImageBlob([]);
    }

  //сжатие изображения
  function uploadImage(e) {
    setSelectedImage(e.target.files);
    const imgarr = Object.values(e.target.files);
    const resizeArr = imgarr.map((item)=>{
      return Resizer.imageFileResizer(
        item, // the file from input
        600, // width
        600, // height
        "JPEG", // compress format WEBP, JPEG, PNG
        70, // quality
        0, // rotation
        (uri) => {
          resImage.push(uri)
          // You upload logic goes here
        },
        "base64" // blob or base64 default base64
      );
    })
    setImageBlob(resImage)
    return resizeArr
    
  }
  
  function handleSubmit(event) {
    event.preventDefault();
    props.onEditCard({
        values, 
        imageBlob,
        id: editCardData._id
    })
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
      <h2 className="popup__title">Редактировать объект</h2>
      <form ref={form} className="add-form"  onSubmit={handleSubmit} encType="multipart/form-data" name="fileinfo">
        <div className="add-form__modul">
          <div className="add-form__modul_class"> 
          <fieldset className="add-form__fieldset add-form__type_rooms">
              <h2 className="add-form__title add-form__title_rooms">Количество комнат</h2>
              <ul>
                <li>  
                  <label className="add-form__label add-form__label_num" htmlFor="studio">Студия</label>
                  <input type="radio" value='studio' checked={values.rooms ==='studio' ? true : false} onChange={handleChange} className="add-form__item_type_rooms" name="rooms" id="studio" />
                </li>
                <li>
                  <label className="add-form__label add-form__label_num" htmlFor="one">1</label>
                  <input type="radio" value={'1' || ''} checked={values.rooms ==='1' ? true : false} onChange={handleChange} className="add-form__item_type_rooms" name="rooms" id="one"/>
                </li>
                <li>
                  <label className="add-form__label add-form__label_num" htmlFor="two">2</label>
                  <input type="radio" value={'2' || ''} checked={values.rooms ==='2' ? true : false} onChange={handleChange} className="add-form__item_type_rooms" name="rooms" id="two"/>
                </li>
                <li>
                  <label className="add-form__label add-form__label_num" htmlFor="three">3</label>
                  <input type="radio"  value={'3' || ''} checked={values.rooms ==='3' ? true : false} onChange={handleChange} className="add-form__item_type_rooms" name="rooms" id="three"/>
                </li>
                <li>
                  <label className="add-form__label add-form__label_num" htmlFor="four">4</label>
                  <input type="radio" value={'4' || ''} checked={values.rooms ==='4' ? true : false}  onChange={handleChange} className="add-form__item_type_rooms" name="rooms" id="four"/>
                </li>
                <li>
                  <label className="add-form__label add-form__label_num" htmlFor="five">5+</label>
                  <input type="radio" value={'5' || ''} checked={values.rooms ==='5' ? true : false} onChange={handleChange} className="add-form__item_type_rooms" name="rooms" id="five"/>
                </li>
              </ul>
            </fieldset>  
            <fieldset className="add-form__fieldset add-form__type_area">
              <h2 className="add-form__title add-form__title_total-area">Площадь квартиры</h2>
              <label className="add-form__label" htmlFor="totalArea">Общая площадь:</label>
              <input type="number" onChange={handleChange} value={values.totalArea || ''} className="add-form__item add-form__item_type_total-area" name="totalArea" id="totalArea"/>
              {values.totalArea==='' && <span className="email-error add-form__item-error">Поле не может быть пустым</span> }
              <label className="add-form__label" htmlFor="kitchenArea">Площадь кухни:</label>
              <input type="number" onChange={handleChange}  value={values.kitchenArea || ''} className="add-form__item add-form__item_type_kitchen-area" name="kitchenArea" id="kitchenArea"/>
              {values.kitchenArea==='' && <span className="email-error add-form__item-error">Поле не может быть пустым</span> }
            </fieldset> 
            <fieldset className="add-form__fieldset add-form__fieldset_type_column add-form_type_adress">
              <label className="add-form__label" htmlFor="adress">Адрес</label>
              <input type="text" value={values.adress || ''} onChange={handleChange} placeholder='Введите адрес' className="add-form__item add-form__item_type_adress" name="adress" id="adress"/>
              {values.adress==='' && <span className="email-error add-form__item-error">Поле не может быть пустым</span> }
            </fieldset>
            <fieldset className="add-form__fieldset_type_column add-form_type_district">
              <label className="add-form__label" htmlFor="district">Район</label>
              <input type="text"value={values.district || ''} onChange={handleChange} placeholder='Введите район' className="add-form__item add-form__item_type_district" name="district" id="district"/>
              {values.district==='' && <span className="email-error add-form__item-error">Поле не может быть пустым</span> }
            </fieldset>
            <fieldset className="add-form__fieldset add-form_type_metro">
              <h2 className="add-form__title add-form__title_metro">Метро</h2>
              <select name="metro" value={values.metro || ''} onChange={handleChange}>
              <option value="none" name="none">Выберите метро</option>
                {metro.map((item, index)=> (
                  <SelectedMetro item={item} key={index}/>
                ))}
              </select>
            </fieldset>
            <fieldset className="add-form__fieldset add-form__type_info">
              <label className="add-form__label" htmlFor="info">Описание</label>
              <textarea value={values.info || ''} onChange={handleChange} type="textarea" cols='50' min="0" max="1000" placeholder='Введите текст от 3 до 10000 символов' autoFocus className="add-form__item add-form__item_type_info" name="info" id="info" />  
              {infoError && <span className="email-error add-form__item-error">{infoError}</span>}
            </fieldset>
          </div>
          <div className="add-form__modul_class">
            <fieldset className="add-form__fieldset_type_column add-form_type_price">
              <label className="add-form__label" htmlFor="price">Цена</label>
              <input type="number" value={values.price || ''} onChange={handleChange} placeholder='Укажите цену' className="add-form__item add-form__item_type_price" name="price" id="price"/>
              {values.price==='' && <span className="email-error add-form__item-error">Поле не может быть пустым</span> }
            </fieldset>
            <fieldset className="add-form__fieldset add-form__type_transaction">
              <h2 className="add-form__title add-form__title_transaction">Тип сделки</h2>
              <select name="transaction" value={values.transaction || ''} onChange={handleChange}>
                <option value="none" name="none">Выберите сделку</option>
                <option value="Продажа">Продажа</option>
                <option value="Аренда">Аренда</option>
              </select>
            </fieldset>
            {object !== "Дом" &&
            <>
            <fieldset className="add-form__fieldset_type_column add-form_type_kadastr">
              <label className="add-form__label" htmlFor="kadastr">Кадастровый номер</label>
              <input type="text" value={values.kadastr || ''} onChange={handleChange} placeholder='Введите номер' className="add-form__item add-form__item_type_kadastr" name="kadastr" id="kadastr"/>
              {values.kadastr==='' && <span className="email-error add-form__item-error">Поле не может быть пустым</span> }
            </fieldset>
            <fieldset className="add-form__fieldset add-form__type_addition">
              <button type="button" value={values.elevator= elButtonActive} className={`add-form_button element__link ${elButtonActive ? 'add-form_button_active' : ''}`} name="elevator" id="elevator" onClick={handleElButtonClick}>Лифт</button>
              <button type="button" value={values.repair= repButtonActive} className={`add-form_button element__link ${repButtonActive ? 'add-form_button_active' : ''}`} name="repair" onClick={handleRepButtonClick}>Ремонт</button>
              <button type="button" value={values.balcony= balButtonActive} className={`add-form_button element__link ${balButtonActive ? 'add-form_button_active' : ''}`} name="balcony" onClick={handleBalButtonClick}>Балкон</button>
            </fieldset>
            <fieldset className="add-form__fieldset_type_column add-form_type_floor">
              <label className="add-form__label" htmlFor="floor">Этаж</label>
              <input type="text" pattern={pattern.floor} value={values.floor || ''} onChange={handleChange} placeholder='Введите этаж в формате этаж/этажность' className="modal__item add-form__item_type_floor" name="floor" id="floor"/>
              {floorError && <span className="email-error add-form__item-error">{floorError}</span>}
            </fieldset>
            </>
             }
            <fieldset className="add-form__fieldset_type_column add-form_type_commission">
              <label className="add-form__label" htmlFor="commission">Комиссионные</label>
              <input type="text" pattern={pattern.commission} value={values.commission || '0'} onChange={handleChange} placeholder='Введите вознаграждение(необязательное)' className="modal__item add-form__item_type_commission" name="commission" id="commission"/>
            </fieldset>
            <fieldset className="add-form_type_image">
              <SceletonImage selectedImage={selectedImage} isOpen={props.isOpen} imageBlob={imageBlob} editCardData={editCardData && editCardData} onChange={uploadImage} onClick={handleNewImage} />
            </fieldset>
            {object === "Новостройка" && 
            <fieldset className="add-form__fieldset add-form__fieldset_type_column add-form_type_adress">
              <label className="add-form__label" htmlFor="deadline">Срок сдачи</label>
              <input type="text" value={values.deadline || ''} onChange={handleChange} placeholder='Введите сроки сдачи' className="add-form__item add-form__item_type_adress" name="deadline" id="deadline"/>
            {values.deadline==='' && <span className="email-error add-form__item-error">Поле не может быть пустым</span> }
            </fieldset>
            }
            {object === "Комната" && 
            <fieldset className="add-form__fieldset add-form__fieldset_type_column add-form_type_roomarea">
              <label className="add-form__label" htmlFor="roomarea">Площадь комнаты</label>
              <input type="text" value={values.roomarea || ''} onChange={handleChange} placeholder='Введите сроки сдачи' className="add-form__item add-form__item_type_roomarea" name="roomarea" id="roomarea"/>
           {values.roomarea==='' && <span className="email-error add-form__item-error">Поле не может быть пустым</span> }
           </fieldset>
           }
          {props.object === "Дом" && 
          <>
          <fieldset className="add-form__fieldset add-form__fieldset_type_column add-form_type_plotarea">
          <label className="add-form__label" htmlFor="plotarea">Площадь участка</label>
          <input type="text" value={values.plotarea || ''} onChange={handleChange} placeholder='Введите площадь участка' className="add-form__item add-form__item_type_plotarea" name="plotarea" id="plotarea"/>
          {values.plotarea==='' && <span className="email-error add-form__item-error">Поле не может быть пустым</span> }
          </fieldset>
          <fieldset className="add-form__fieldset add-form__fieldset_type_column add-form_type_jurstatus">
          <label className="add-form__label" htmlFor="jurstatus">Юридический статус</label>
          <input type="text" value={values.jurstatus || ''} onChange={handleChange} placeholder='Введите юридический статус' className="add-form__item add-form__item_type_jurstatus" name="jurstatus" id="jurstatus"/>
          {values.jurstatus==='' && <span className="email-error add-form__item-error">Поле не может быть пустым</span> }
          </fieldset>
         <fieldset className="add-form__fieldset add-form__fieldset_type_column add-form_type_material">
         <label className="add-form__label" htmlFor="material">Материал дома</label>
         <input type="text" value={values.material || ''} onChange={handleChange} placeholder='Введите материал дома' className="add-form__item add-form__item_type_material" name="material" id="material"/>
         {values.material==='' && <span className="email-error add-form__item-error">Поле не может быть пустым</span> }
         </fieldset>
         </> }   
          </div>
        </div>
       <div className='button__row'>
        <button className={`add-form__button  ${submitDisabled ? ('add-form__button_disabled') : 'element__link'}`} type="submit" disabled={submitDisabled ? true : ''} aria-label='Сохранить'>Сохранить</button>
        <button className="add-form__button element__link" type="button" onClick={props.onClose} aria-label='Отменить'>Отменить</button>
        {values.rooms === undefined && <span className="email-error add-form__item-error">Заполните количество комнат</span>}
        {values.totalArea === undefined && <span className="email-error add-form__item-error">Заполните площадь объекта</span>}
        {values.kitchenArea === undefined && <span className="email-error add-form__item-error">Заполните площадь кухни</span>}
        {values.adress === undefined && <span className="email-error add-form__item-error">Заполните адресс</span>}
        {values.district === undefined && <span className="email-error add-form__item-error">Заполните район</span>}
        {(props.object !== 'Дом' && values.metro === undefined) && <span className="email-error add-form__item-error">Выберите метро</span>}
        {values.info === undefined && <span className="email-error add-form__item-error">Добавьте описание объекта</span>}
        {values.price === undefined && <span className="email-error add-form__item-error">Заполните цену</span>}
        {values.transaction === undefined && <span className="email-error add-form__item-error">Выберите тип сделки</span>}
        {(props.object !== 'Дом' && values.kadastr === undefined) && <span className="email-error add-form__item-error">Заполните кадастровый номер</span>}
        {(props.object !== 'Дом' && values.floor === undefined) && <span className="email-error add-form__item-error">Заполните этаж</span>}
        {(imageBlob.length === 0 && Object.keys(selectedImage).length===0) && <span className="email-error add-form__item-error">Добавьте фотографию</span>}
        
        </div>
      </form>
    </div>
    </div>
  )
}

export default EditFlats;