//Компонент подтверждения Юзера в доступе к ЛК
import React from "react";
import "./Confirm.css";

function Confirm(props) {
  const user=props.user
  const status=user.access ? 'Активен' : 'Не активирован'
  const [access, setAccess] = React.useState(false)
console.log('nene')
  //Отправляем подтверждение почты на сервер
 function handleAddAccess () {
  setAccess(true)
   props.onUpdateUser({
     user,
     access: true,
    })
 }

  //Отправляем отмену подтверждения почты на сервер
 function handleDeleteAccess () {
  setAccess(false)
   props.onDeleteAcces({
     user,
     access: false,
    })
 }


  return (
    <li className="confirm__card">
      <p className={`confirm__item ${user.access ? ('confirm__item_active') : ''} `}>{`${user.name} ${user.surname}`}</p>
      <p className={`confirm__item ${user.access ? ('confirm__item_active') : ''} `}> Email: {user.email}</p>
      <p className={`confirm__item ${user.access ? ('confirm__item_active') : ''} `}>Статус: {status}</p>
      <p className={`confirm__item ${user.access ? ('confirm__item_active') : ''} `}>Агенство: {user.agency}</p>
      <p className={`confirm__item ${user.access ? ('confirm__item_active') : ''} `}>тел: {user.phone}</p>
      <div>
        <button onClick={handleAddAccess} className={`confirm__button confirm__ok ${user.access ? ('confirm__ok-no_active') : ''}`}></button>
        <button onClick={handleDeleteAccess} className={'confirm__button confirm__no'}></button>
      </div>
    </li>

  )
}

export default Confirm;