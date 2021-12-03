import React from "react";
import "./Cards.css";

function Cards(props) {
  <article className="object">
    <div className="object_mob">
      <img src={props.photo} alt={props.address} className="object__photo" />
      <ul className="object__about">
        <li className="object__price object__cost">{props.price}</li>
        <li className="object__block object__address">{props.address}</li>
        <li className="object__name">
          М.
          <p className="object__block object__metro">{props.metro}</p>
        </li>
        <li className="object__name">
          Этаж:
          <p className="object__block object__level">{props.level}</p>
        </li>
        <li className="object__name">
          Кол-во комнат:
          <p className="object__block object__num">{props.num}</p>
        </li>
      </ul>
    </div>
    <div className="object__text-block">
      <h2 className="object__head">Описание</h2>
      <p className="object__text">{props.text}</p>
    </div>
  </article>;
}

export default Cards;