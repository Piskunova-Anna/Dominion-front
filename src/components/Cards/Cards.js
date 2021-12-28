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
  
      <img src={props.card.image[0]} alt={props.card.address} className="object__photo" />
      <div className="object__about">
        <div className="object__price object__cost">{props.card.price}</div>
        <div className="object__name object_a">
          М.
          <p className="object__block object__metro">{props.card.metro}</p>
        </div>
        <div className="object__name object_b">
          Этаж:
          <p className="object__block object__level">{props.card.floor}</p>
        </div>
        <div className="object__block object__area">50<div className="object__name">кв.м.</div></div>  
        <div className="object__block object__address">{props.card.address}</div>
        <div className="object__name object_c">район:<div className = "object__block">красногвардейский</div></div>  
        <div className="object__name object_d">
          Кол-во комнат:
          <p className="object__block object__num">{props.card.rooms}</p>
        </div>
        <div className="object__text-block">
          <h2 className="object__head">Описание</h2>
          <p className="object__text">bla-bla-bla</p>
        </div>
      </div>
  </article>
  )
}

export default Card;