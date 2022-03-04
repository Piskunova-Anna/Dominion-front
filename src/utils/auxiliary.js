import React from "react";
import { CurrentUserContext } from '../contexts/CurrentUserContext.js';

//Дополнителные функции

//функция филтра пользователя для карточек собственных..
export default function CurrentCards (arr) {
    const currentUser = React.useContext(CurrentUserContext);
    const NewArray = arr.filter((item) => {
     return item.owner === currentUser._id;
   })
 return NewArray
}

//Функция фильтрации опубликованных объявлений
export function filtrPublic(cards) {
  const publicCards = cards.filter((item) => {
    return item.active
  }) 
  return publicCards
}

//Функция фильтрации по типу недвижимости
export function filtrType(cards, type) {
  const typeCards = cards.filter((item) => {
    return item.name === type
  }) 
  return typeCards
}