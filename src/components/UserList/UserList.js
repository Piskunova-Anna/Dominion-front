import React from "react";
import Confirm from "../Confirm/Confirm";

function UserList(props) {
  return (
    <h1 className="UserList">
      Пользователи
      <ul>
        <li>
          <Confirm />
        </li>
      </ul>
    </h1>
  )
}