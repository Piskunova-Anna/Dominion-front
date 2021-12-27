import React from 'react';
import './NotFound.css';
import { Link } from 'react-router-dom';

function NotFound(props) {
  
  return (
      <div className="error__page">
      <h2 className="error__title">404</h2>
      <p className="error__text">Страница не найдена</p>
      <Link to="/" className="error__link section__link">Назад</Link>
      </div>
  ) 
}

export default NotFound;