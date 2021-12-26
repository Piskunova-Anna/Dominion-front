import React from 'react';
import { Link } from 'react-router-dom';
import './NavBar.css';

function NavBar(props) {
  
  return (
      <section className="menu">
    <nav className="nav">
      <div className="property">
        <h2 className="property_estate">Жилая недвижимость</h2>
        <ul className="property__grid">
            <Link to="/flats" target="_self" className="property__block">Квартиры</Link>
            <Link to="/rooms" target='_self' className="property__block">Комнаты</Link>
            <Link to="new-flats" target='_self' className="property__block">Новостройки</Link>
            <Link to="houses" target='_self' className="property__block">Дома</Link>
            <Link to="plots" target='_self' className="property__block">Участки</Link>
            <Link to="news" target='_self' className="property__block">Новости</Link>
        </ul>
      </div>
      <div className="property">
        <h2 className="property_estate">Коммерческая недвижимость</h2>
        <ul className="property__grid">
            <Link to="ofiices" target='_self' className="property__block">Офисы</Link>
            <Link to="earth" target='_self' className="property__block">Земля</Link>
            <Link to="buildings" target='_self' className="property__block">Здания</Link>
        </ul>
      </div>
  </nav>
  </section>
  );
}

export default NavBar;