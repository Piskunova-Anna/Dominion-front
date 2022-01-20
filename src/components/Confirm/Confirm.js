import React from "react";
import "./Confirm.css";

function Confirm(props) {
  
  return (
    <li className = "confirm__card">
      <p className = "confirm__item">Семенова Ольга</p>
      <p className = "confirm__item"> Email: semenova@ya.ru</p>
      <p className = "confirm__item">Статус: Активен</p>
      <p className = "confirm__item">Агенство: Белый кот</p>
      <p className="confirm__item">тел: 8-999-999-99-99</p>
      <div>
      <button className = "confirm__button confirm__ok"></button>
        <button className="confirm__button confirm__no"></button>
        </div>
        </li>
  )
}

export default Confirm;