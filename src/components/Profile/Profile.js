import React from "react";
import "./Profile.css";
//import Cards from '../Cards.js';
//{props.name}{props.surname}

//Страничка профиля
function Profile(props) {
  return (
    <main className = "profile">
      <div className = "profile__block">
        <div className="profile__user">Piskunova Anna</div>
        <a href="/signin" className="profile__exit">
          Выход
        </a>
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
    </main>
  );
}

export default Profile;
