import React from "react";

function Confirm(props) {
  return (
    <>
      <h2>{props.userName}</h2>
      <p>Статус: {props.status}</p>
      <button className = "confirm__ok"></button>
      <button className = "confirm__no"></button>
    </>
  )
}

export default Confirm;