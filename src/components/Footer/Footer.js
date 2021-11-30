import React from 'react';

import './Footer.css';


function Footer(props) {
  
  
  return (
    <footer class="footer">
        <div class = 'footer__block'>
        <p class="footer__logo">Доминион</p>
        <p class="footer__author">&copy; 2021.Пискунова Анна</p>
        </div>
        <ul class="contacts">Контакты
            <li class="contact">8-950-035-10-35</li>
            <li class="contact">8-981-808-33-58</li>
            <li class="contact"></li>
        </ul>
    </footer>
  );

}

export default Footer;