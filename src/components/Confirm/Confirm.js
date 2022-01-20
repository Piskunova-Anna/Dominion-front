import React from "react";
import "./Confirm.css";

function Confirm(props) {
  const user=props.user
  const status = user.access ? 'Активен' : 'Не активирован'
  console.log(user.access)
  return (
    <li className = "confirm__card">
      <p className = "confirm__item">{user.name}</p>
      <p className = "confirm__item"> Email: {user.email}</p>
      <p className = "confirm__item">Статус: {status}</p>
      <p className = "confirm__item">Агенство: {user.agency}</p>
      <p className="confirm__item">тел: {user.phone}</p>
      <div>
        <button className = "confirm__button confirm__ok"></button>
        <button className="confirm__button confirm__no"></button>
      </div>
    </li>

  )
}

export default Confirm;