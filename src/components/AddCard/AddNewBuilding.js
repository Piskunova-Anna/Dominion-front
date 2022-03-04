import React from 'react';
import './AddNewObject.css';
import {useFormValidation} from '../../utils/Validator.js';
import AddNewObject from './AddNewObject';
import Resizer from "react-image-file-resizer";

//Компонент для добавления новостроек
function AddNewBuilding(props) {
  const { 
    values, 
    handleChange,
    resetForm,
    isValid,
    floorError,
    infoError
 } = useFormValidation({});
  const [elButtonActive, setElButtonActive] = React.useState(false);
  const [repButtonActive, setRapButtonActive] = React.useState(false);
  const [balButtonActive, setBalButtonActive] = React.useState(false);
  const [selectedImage, setSelectedImage] = React.useState({});
  const [imageBlob, setImageBlob] = React.useState([]);
  //let copy = Object.assign([], imageBlob);
  let resImage = []
  const object= props.object;
  const submitDisabled = 
    values.rooms === undefined || values.rooms === '' ||  
    values.totalArea === undefined || values.totalArea === '' || 
    values.kitchenArea === undefined || values.kitchenArea === '' ||
    values.adress === undefined ||  values.adress === '' ||
    values.district === undefined || values.district === undefined ||
    values.metro === '' ||
    values.info === undefined || values.info === '' || 
    values.price === undefined || values.price === '' ||
    values.transaction === undefined || values.transaction === '' ||
    values.floor === '' || 
    values.kadastr === '' ||
    values.commission === undefined || values.commission === '' ||
    Object.keys(selectedImage).length === 0 || !isValid ||
    object === 'Новостройка' ? (values.deadline === undefined || values.deadline === '') :
    object === 'Комната' ? (values.roomarea === undefined || values.roomarea === '') : 
    object !== 'Дом' ? (values.metro === undefined || values.floor === undefined || values.kadastr === undefined) :
    object === 'Дом' ? (values.plotarea === undefined || values.jurstatus === undefined || values.material === undefined || 
      values.plotarea === '' || values.jurstatus === '' || values.material === '') : ''
    
   
    React.useEffect(()=> {
      resetForm()
      setSelectedImage({})
      setElButtonActive(false)
      setRapButtonActive(false)
      setBalButtonActive(false)
    },  [props.isOpen, setSelectedImage, resetForm])
  
    //очистка полей фоток при открытии редактирования
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
    props.onCardData({
      values, 
      imageBlob, 
      object
    })
  } 

  function handleElButtonClick() {
    values.elevator=!elButtonActive
    setElButtonActive(!elButtonActive)
  }

  function handleRepButtonClick() {
    values.repair=!repButtonActive
    setRapButtonActive(!repButtonActive)
  }
  function handleBalButtonClick() {
    values.balcony=!balButtonActive
    setBalButtonActive(!balButtonActive)
  }

  return (
    <>
   <AddNewObject
      isOpen={props.isOpen}
      onClose={props.onClose}
      onSubmit={handleSubmit}
      onChange={handleChange}
      rooms={values.rooms}
      totalArea={values.totalArea}
      kitchenArea={values.kitchenArea}
      metro={values.metro}
      adress={values.adress}
      price={values.price}
      balcony={values.balcony=balButtonActive}
      repair={values.repair=repButtonActive}
      district={values.district}
      elevator={values.elevator= elButtonActive}
      transaction={values.transaction}
      commission={values.commission}
      floor={values.floor}
      kadastr={values.kadastr}
      info={values.info}
      infoError={infoError}
      floorError={floorError}
      submitDisabled={submitDisabled}
      selectedImage={selectedImage}
      imageBlob={imageBlob}
      uploadImage={uploadImage}
      handleNewImage={handleNewImage}
      elButtonActive={elButtonActive}
      repButtonActive={repButtonActive}
      balButtonActive={balButtonActive}
      handleElButtonClick={handleElButtonClick}
      handleRepButtonClick={handleRepButtonClick}
      handleBalButtonClick={handleBalButtonClick}
      object={object}
    >
     {props.object === "Новостройка" && 
    <fieldset className="add-form__fieldset add-form__fieldset_type_column add-form_type_adress">
    <label className="add-form__label" htmlFor="deadline">Срок сдачи</label>
    <input type="text" value={values.deadline || ''} onChange={handleChange} placeholder='Введите сроки сдачи' className="add-form__item add-form__item_type_adress" name="deadline" id="deadline"/>
    {values.deadline==='' && <span className="email-error add-form__item-error">Поле не может быть пустым</span> }
    </fieldset>
     }
    {props.object === "Комната" && 
      <fieldset className="add-form__fieldset add-form__fieldset_type_column add-form_type_roomarea">
      <label className="add-form__label" htmlFor="roomarea">Площадь комнаты</label>
      <input type="text" value={values.roomarea || ''} onChange={handleChange} placeholder='Введите площадь комнаты' className="add-form__item add-form__item_type_roomarea" name="roomarea" id="roomarea"/>
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
      </AddNewObject>
   </>
  )
}

export default AddNewBuilding;