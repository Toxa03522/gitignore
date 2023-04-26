import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <nav>
        <h2>Header</h2>
      <ul>
        <li><Link to="/">Главная страница</Link></li>
        <li><Link to="/catalog">Каталог</Link></li>
        <li><Link to="/services">Услуги</Link></li>
        <li><Link to="/about">О нас</Link></li>
      </ul>
    </nav>
  );
};

export default Header;
