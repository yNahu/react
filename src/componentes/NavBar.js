import React from 'react';
import './NavBar.css';

const NavBar = () => {
  return (
    <nav className="navbar">
      <div className="brand">
        <img src="/assets/logo.png" alt="NAIK logo" className="logo" />
        <h1>NAIK</h1>
      </div>
      <ul className="nav-links">
        <li><a href="#remeras">Remeras</a></li>
        <li><a href="#buzos">Buzos</a></li>
        <li><a href="#pantalones">Pantalones</a></li>
        <li><a href="#medias">Medias</a></li>
        <li><a href="#zapatillas">Zapatillas</a></li>
      </ul>
      <div className="cart-icon">
        <a href="#cart">🛒 Cart</a>
      </div>
    </nav>
  );
};

export default NavBar;
