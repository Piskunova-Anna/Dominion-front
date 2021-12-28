import React from "react";
import "./Profile.css";
import {Link} from 'react-router-dom';
import Flats from '../Flats/Flats.js'
import { CurrentUserContext } from '../../contexts/CurrentUserContext.js';
import CurrentCards from '../Auxiliary/auxiliary'

//Страничка профиля
function Profile(props) {
  const currentUser = React.useContext(CurrentUserContext);
  const newcards = CurrentCards(props.cards)
  
  return (
    <>
    
    <main className = "profile">
      <div className = "profile__block">
      <Link to = "/confirm" className = "profile__confirm">Подтвердить регистрацию пользователя</Link>
        <div className="profile__user">{currentUser.name}</div>
        <Link to="/signin" className="profile__exit" onClick={props.logOut}>Выход</Link>
      </div>
      <div className = "profile__block">
      <h1 className="profile__name">Ваши объекты</h1>
      <button className="profile__button profile__button_public">Опубликованные</button>
      <button className="profile__button profile__button_no-piblic">Снятые с публикации</button>
      </div>
      <div className = "profile__block">
      <a href="/" className="profile__main">На главную</a>
      <button className="profile__object" onClick={props.onClick}>Добавить новый объект</button>
      </div>
      <div>
        <Flats cards={newcards} onCardDelete={props.onCardDelete} />
      </div>
    </main>
    
    
    </>
  );
  
}

export default Profile;
