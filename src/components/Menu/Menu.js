import React from "react";
import './Menu.css';

function Menu(props) {
  return (
    <ul className = "menu__list">
      <li className = "menu__item">Главная</li>
      <li className = "menu__item">Квартиры</li>
      <li className = "menu__item">Новостройки</li>
      <li className = "menu__item">Комнаты</li>
      <li className = "menu__item">Новости</li>
      <li className = "menu__item">Прочее</li>
    </ul>
  )
}

export default Menu;