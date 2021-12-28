
import React from "react";
import Confirm from "../Confirm";

function ConfirmList(props) {
  const users = props.users
  return (
    <>
    <h2>{users.name}</h2>
      <ul>
        {users.map((user)=> (
          <Confirm key={user._id} user={user}/>
        ))}
      </ul>
    </>
  )
}

export default ConfirmList;