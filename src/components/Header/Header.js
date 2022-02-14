import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import './Header.css';
import logo from '../../images/logovector.svg'
import { CurrentUserContext } from '../../contexts/CurrentUserContext.js';

function Header(props) {
  const currentUser = React.useContext(CurrentUserContext);
  const location = useLocation();

    
    
  return (
    <header className={`header ${location.pathname === '/flats' ? ('header__back') : ''}`}>
      <Link to="/" className = 'header__img'>
        <img className="header__logo" src={logo} alt="лого" />
      </Link>
      {Object.keys(currentUser).length !== 0
      ?
      <Link to="/profile/myflats" className = 'header__profile'>Профиль</Link>
      : ''
      }
   </header>
  );

}

export default Header;