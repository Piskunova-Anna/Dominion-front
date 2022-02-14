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
            
            <Link to="rooms" target='_self' className="property__block none">Комнаты</Link>
            <Link to="flats" target="_self" className="property__block">Квартиры</Link>
            <Link to="new-flats" target='_self' className="property__block none">Новостройки</Link>
            <Link to="houses" target='_self' className="property__block none">Дома</Link>
            <Link to="plots" target='_self' className="property__block none">Участки</Link>
            <Link to="news" target='_self' className="property__block none">Новости</Link>
        </ul>
      </div>
      <div className="property none">
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