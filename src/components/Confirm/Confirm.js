import React from "react";

function Confirm(props) {
  const user=props.user
  const status = user.access ? 'Активен' : 'Не активирован'
  console.log(user.access)
  return (
    <>
    <li>
      <p>{user.name}</p>
      <p> Email: {user.email}</p>
      <p>Статус: {status}</p>
      <p>Агенство: {user.agency}</p>
      <p>тел: {user.phone}</p>
      <button className = "confirm__ok"></button>
      <button className = "confirm__no"></button>
        </li>
    </>
  )
}

export default Confirm;