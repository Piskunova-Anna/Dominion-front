import React from "react";
import "./CardList.css";

//Список характеристик для страницы квартиры
function CardList(props) {
  const card=props.card
  console.log(card)
  return (
    <>
      <li className="card__block">Стоимость: {card.price}</li>
      <li className="card__block">Адрес: {card.adress}</li>
      <li className="card__block">Метро: {card.metro}</li>
      <li className="card__block">Район: {card.district}</li>
      <li className="card__block">Комиссионные: {card.commission}</li>
      <li className="card__block">Общая площадь: {card.totalarea}</li>
      <li className="card__block">Кол-во комнат: {card.rooms}</li>
      <li className="card__block">Площадь кухни: {card.kitchenarea}</li>
      <li className="card__block">Тип сделки: {card.transaction}</li>
      <li className="card__block">Ремонт: {`${card.repair ? 'есть' : 'нет'}`}</li>
      <li className="card__block">Лифт: {`${card.elevator ? 'есть' : 'нет'}`}</li>
      <li className="card__block">балкон: {`${card.balcony ? 'есть' : 'нет'}`}</li>
      <li className="card__block">Этаж: {card.floor}</li>
      <li className="card__block">Кадастровый номер: {card.cadastre}</li>
    </>
  );
}

export default CardList;