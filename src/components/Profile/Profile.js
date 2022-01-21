import React from "react";
import "./Profile.css";
import {Link} from 'react-router-dom';
import Flats from '../Flats/Flats.js'
import { CurrentUserContext } from '../../contexts/CurrentUserContext.js';
import CurrentCards from '../Auxiliary/auxiliary'

//Страничка профиля
function Profile(props) {
  const currentUser = React.useContext(CurrentUserContext);
  const [userCards, setUserCards] = React.useState(CurrentCards(props.cards))
  const newcards = userCards.length !==0 ? userCards : CurrentCards(props.cards)
  
  function handleCardActiveClick() {
    const userCards = newcards.filter((item) => {
      return item.active
    })
    setUserCards(userCards)
  }

  function handleCardDesableClick() {
    const userCards = newcards.filter((item) => {
      return !item.active
    })
    setUserCards(userCards)
  }


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
      <button onClick={handleCardActiveClick} className="profile__button profile__button_public">Опубликованные</button>
      <button onClick={handleCardDesableClick} className="profile__button profile__button_no-piblic">Снятые с публикации</button>
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
