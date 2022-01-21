import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css';
import logo from '../../images/logovector.svg'
import { CurrentUserContext } from '../../contexts/CurrentUserContext.js';

function Header(props) {
  const currentUser = React.useContext(CurrentUserContext);

  return (
    <header className='header'>
      <Link to="/" className = 'header__img'>
        <img className="header__logo" src={logo} alt="лого" />
      </Link>
      {Object.keys(currentUser).length !== 0
      ?
      <Link to="/profile" className = 'header__profile'>Профиль</Link>
      : ''
      }
   </header>
  );

}

export default Header;