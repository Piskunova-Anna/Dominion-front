//Компонент подтверждения Юзера в доступе к ЛК
import React from "react";
import { useLocation } from "react-router-dom";
import "./Confirm.css";

function Confirm(props) {
  const user=props.user
  const location = useLocation().pathname === '/profile/supervisor';
  const status= user.access ? 'Активен' : 'Не активирован'
  const [access, setAccess] = React.useState(user.access)
  const [admin, setAdmin] = React.useState(user.admin)

  ///Отправляем подтверждение почты на сервер
 function handleAddAccess () {
  setAccess(!access)
   props.onUpdateUser({
     user,
     access: !access,
    })
 }

  //Добавляем права Админа
  function handleAdminUser () {
    setAdmin(!admin)
     props.onAdminUser({
       user,
       admin: !admin,
      })
   }
  
   
  //Добавляем права Админа
  function handleDeleteUser () {
     props.onDeleteUser(user)
   }

  return (
    <li className="confirm__card">
      <p className={`confirm__item ${user.access ? ('confirm__item_active') : ''} `}>{`${user.name} ${user.surname}`}</p>
      {admin && <p className={`${user.admin ? ('confirm__admin_active') : ''} `}>admin</p> }
      <p className={`confirm__item ${user.access ? ('confirm__item_active') : ''} `}> Email: {user.email}</p>
      <p className={`confirm__item ${user.access ? ('confirm__item_active') : ''} `}>Статус: {status}</p>
      <p className={`confirm__item ${user.access ? ('confirm__item_active') : ''} `}>Агенство: {user.agency}</p>
      <p className={`confirm__item ${user.access ? ('confirm__item_active') : ''} `}>тел: {user.phone}</p>
      <div>
        <button onClick={handleAddAccess} className={`confirm__button ${user.access ? ('confirm__ok ') :('confirm__no')}`}></button>
      {location && 
        <>
        <button onClick={handleDeleteUser} className={'confirm__button'}>Удалить</button>
        <button onClick={handleAdminUser} className={'confirm__button'}>Админ</button>
        </>
      }
      
      </div>
    </li>

  )
}

export default Confirm;