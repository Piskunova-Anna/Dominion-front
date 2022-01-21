
import React from "react";
import Confirm from "./Confirm";
import './ConfirmList.css';

function ConfirmList(props) {
 
  const users = props.users
  console.log(users)
  return (
    <>
<<<<<<< HEAD
    <h2 className = "confirm__users">Пользователи</h2>
      <ul className = "confirm__list">
        {users.map((user)=> (
          <Confirm key={user._id} user={user} />
        ))}
=======
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
>>>>>>> 9510170d1bcd6678851b60cd1bccd218e0c68bce
      </ul>
    </>
  )
}

export default ConfirmList;