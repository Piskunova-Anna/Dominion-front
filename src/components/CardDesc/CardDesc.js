import React from "react";
import "./CardDesc.css";
import Flats from "../CardList/CardList";

function CardDesc(props) {
  return (
    <main className="desc">
      <div className="desc__block">
        <div className="desc__photo">
          <img className="desc__photo_m" src={props.photo} alt={props.address} />
          <div className="desc__photo_mini">
            <img className="desc__photo_s" src={props.photoMini} alt="фото" />
            <img className="desc__photo_s" src={props.photoMini} alt="фото" />
            <img className="desc__photo_s" src={props.photoMini} alt="фото" />
          </div>
        </div>
        <div className="desc__list">
          <Flats />
        </div>
      </div>
      <div className="desc__text">Описание: {props.text}</div>
    </main>
  );
}

export default CardDesc;
