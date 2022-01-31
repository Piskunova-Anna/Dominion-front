import React from "react";
import './Menu.css';
import { NavLink } from "react-router-dom";

function Menu(props) {
  return (
    <ul className = "menu__list">
      <NavLink exact to = "/" target="_self" activeClassName="menu__item_active" className = "menu__item">Главная</NavLink>
      <NavLink to = "flats" target="_self" activeClassName="menu__item_active" className = "menu__item">Квартиры</NavLink>
      <NavLink to = "new-flats" target="_self" activeClassName="menu__item_active" className = "menu__item none">Новостройки</NavLink>
      <NavLink to = "houses" target="_self" activeClassName="menu__item_active" className = "menu__item none">Комнаты</NavLink>
      <NavLink to = "news" target="_self" activeClassName="menu__item_active" className = "menu__item none">Новости</NavLink>
      <li className = "menu__item none">Прочее</li>
    </ul>
  )
}

export default Menu;