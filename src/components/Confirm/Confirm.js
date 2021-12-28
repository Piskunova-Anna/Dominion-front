import React from "react";

function Confirm(props) {
  
  return (
    <>
    <li>
      <p>Семенова Ольга</p>
      <p> Email: semenova@ya.ru</p>
      <p>Статус: Активен</p>
      <p>Агенство: Белый кот</p>
      <p>тел: 8-999-999-99-99</p>
      <button className = "confirm__ok"></button>
      <button className = "confirm__no"></button>
        </li>
    </>
  )
}

export default Confirm;