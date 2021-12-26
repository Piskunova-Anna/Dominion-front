import React from "react";
import "./Cards.css";
import { CurrentUserContext } from '../../contexts/CurrentUserContext.js';

function Card(props) {
  const currentUser = React.useContext(CurrentUserContext);

  function handleDeleteClick () {
    props.onCardDelete(props.card) 
  }

  return (
  <article className="object">
      <button onClick={handleDeleteClick} type="button" className={` ${currentUser.name ? 'popup__close card__close' : ''}`} aria-label="Закрыть форму"></button>
    <div className="object_mob">
  
      <img src={props.card.image[0]} alt={props.card.address} className="object__photo" />
      <ul className="object__about">
        <li className="object__price object__cost">{props.card.price}</li>
        <li className="object__block object__address">{props.card.address}</li>
        <li className="object__name">
          М.
          <p className="object__block object__metro">{props.card.metro}</p>
        </li>
        <li className="object__name">
          Этаж:
          <p className="object__block object__level">{props.card.floor}</p>
        </li>
        <li className="object__name">
          Кол-во комнат:
          <p className="object__block object__num">{props.card.rooms}</p>
        </li>
      </ul>
    </div>
    <div className="object__text-block">
      <h2 className="object__head">Описание</h2>
      <p className="object__text">{props.card.description}</p>
    </div>
  </article>
  )
}

export default Card;