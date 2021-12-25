import React from "react";
import "./Profile.css";
import {Link, Navigate} from 'react-router-dom';
import Flats from '../Flats/Flats.js'
import { CurrentUserContext } from '../../contexts/CurrentUserContext.js';
import { CurrentCards } from '../Auxiliary/auxiliary'

//Страничка профиля
function Profile(props) {
  const currentUser = React.useContext(CurrentUserContext);
  const newcards = CurrentCards(props.cards)
console.log(props.loggedIn)
  return (
    currentUser ? 

    <main className = "profile">
      <div className = "profile__block">
        <div className="profile__user">{currentUser.name}</div>
        <Link to="/signin" className="profile__exit" onClick={props.logOut}>Выход</Link>
      </div>
      <div className = "profile__block">
      <h1 className="profile__name">Ваши объекты</h1>
      <button className="profile__button profile__button_public">Опубликованные</button>
      <button className="profile__button profile__button_no-piblic">Снятые с публикации</button>
      </div>
      <div className = "profile__block">
      <a href="/" className="profile__main">
        На главную
      </a>
      <button className="profile__object" onClick={props.onClick}>Добавить новый объект</button>
      </div>
      <div>
        <Flats cards={newcards} onCardDelete={props.onCardDelete} />
      </div>
    </main>
    : <Navigate to="/signin" />
  );
}

export default Profile;
