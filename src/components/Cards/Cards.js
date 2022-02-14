import React from "react";
import {Link, useLocation} from 'react-router-dom';
import "./Cards.css";
import { CurrentUserContext } from '../../contexts/CurrentUserContext.js';

//Шаблон карточек на странице квартир
function Card(props) {
  const card = props.card
  const eyesbutton = props.card.active ? true: false;
  const currentUser = React.useContext(CurrentUserContext);
  const location = useLocation();
  const editbutton = location.pathname === '/profile' || location.pathname === '/profile/myflats' || location.pathname === '/profile/public' ||
  location.pathname === '/profile/nopublic' ? true : false 
  const [isActive, setIsActive] = React.useState(false)

  //удаление карточки
  function handleDeleteClick () {
    props.onCardDelete(props.card) 
  }

  //редактирование карточки
  function handleEditCard() {
    props.onCardEdit(props.card)
  }

  //снятие с публикации карточки
  function handleHideCard() {
    setIsActive(!isActive)
    props.onCardHide({
      card,
      active: !isActive,
    })
  }

  return (
  <article className="object">
    {editbutton ?
    <>
      <button onClick={handleDeleteClick} type="button" className={` ${currentUser.name ? 'popup__close card__close' : ''}`} aria-label="Закрыть форму"></button>
      <button onClick={handleEditCard} type="button" className='popup__edit'></button>
      <button onClick={handleHideCard} type="button" className={`${eyesbutton ? 'popup__hide': 'popup__eyes'}`}></button>
    </>
      : ''
      }
      <Link to={`/${props.card._id}`}>
      <img src={props.card.image[0]} alt={props.card.adress} className={`object__photo ${location.pathname === '/profile' || location.pathname === '/profile/myflats' || location.pathname === '/profile/public' || location.pathname === '/profile/nopublic' ? 'object__photo-item' : ''}`} />
      
      <ul className="object__about">
        <li className="object__price object__cost">{props.card.price}</li>
        <li className="object__name object_a">
          М.
          <p className="object__block object__metro">{props.card.metro}</p>
        </li>
        <li className="object__name object_b">
          Этаж:
          <p className="object__block object__level">{props.card.floor}</p>
        </li>
        <li className="object__block object__area">50<li className="object__name">кв.м.</li></li>  
        <li className="object__block object__address">{props.card.adress}</li>
        <li className="object__name object_c">район:<li className = "object__block">{props.card.district}</li></li>  
        <li className="object__name object_d">
          Кол-во комнат:
          <p className="object__block object__num">{props.card.rooms}</p>
        </li>
        <li className="object__text-block">
          <h2 className="object__head">Описание</h2>
          <p className="object__text">{props.card.description}</p>
        </li>
        </ul>
        </Link>
      
  </article>
  )
}

export default Card;