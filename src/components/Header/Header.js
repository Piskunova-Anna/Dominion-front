import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css';
import logo from '../../images/logo.png'

function Header(props) {
  
  
  return (
    <header className='header'>
      <Link to="/" className = 'header__img'>
        <img className="header__logo" src={logo} alt="лого" />
      </Link>
   </header>
  );

}

export default Header;