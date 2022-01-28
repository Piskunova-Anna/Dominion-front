
import React from "react";
import Confirm from "./Confirm";
import './ConfirmList.css';

function ConfirmList(props) {
 
  const users = props.users
  console.log(users)
  return (
    <>
    <h2 className = "confirm__users">Пользователи</h2>
      <ul className = "confirm__list">
      {
        users.map((user)=>(
         <Confirm 
         onUpdateUser={props.onUpdateUser} 
         onDeleteAcces={props.onDeleteAcces} 
         key={user._id} user={user} />
        ))
      }
      </ul>
    </>
  )
}

export default ConfirmList;