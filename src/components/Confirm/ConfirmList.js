
import React from "react";
import Confirm from "./Confirm";
import './ConfirmList.css';

function ConfirmList(props) {
 
  const users = props.users
  console.log(users)
  return (
    <>
    <h2>Пользователи</h2>
      <ul>
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