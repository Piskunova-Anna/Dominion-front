import React from "react";

import "./Footer.css";

function Footer(props) {
  return (
    <footer className="footer">
      <div>
        <article className="footer__block">
          <p className="footer__logo">Доминион</p>
          <p className="footer__author">&copy; 2021.Пискунова Анна</p>
        </article>
        <ul className="contacts">
          Контакты
          <li className="contact">8-950-035-10-35</li>
          <li className="contact">8-981-808-33-58</li>
          <li className="contact"></li>
        </ul>
      </div>
    </footer>
  );
}

export default Footer;
