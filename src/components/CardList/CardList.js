import React from "react";
import "./CardList.css";

//Список для страницы квартиры
function Flats(props) {
  return (
    <>
      <li className="card__block">Стоимость: {props.price}</li>
      <li className="card__block">Адрес: {props.address}</li>
      <li className="card__block">Метро: {props.metro}</li>
      <li className="card__block">Район: {props.area}</li>
      <li className="card__block">Комиссионные: {props.commission}</li>
      <li className="card__block">Общая площадь: {props.totalArea}</li>
      <li className="card__block">Кол-во комнат: {props.num}</li>
      <li className="card__block">Площадь кухни: {props.kitchen}</li>
      <li className="card__block">Тип сделки: {props.deal}</li>
      <li className="card__block">Ремонт: {props.repair}</li>
      <li className="card__block">Лифт: {props.elevator}</li>
      <li className="card__block">балкон: {props.balcony}</li>
      <li className="card__block">Этаж: {props.level}</li>
      <li className="card__block">Кадастровый номер: {props.kadastr}</li>
    </>
  );
}

export default Flats;