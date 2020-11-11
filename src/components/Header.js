import React from 'react';
import logo from '../images/logo-white.svg';

function Header() {
  return (
    <>
    <header className="header">
        <img src={logo} alt="Around the US logo" className="header__logo" />
    </header>
    </>
  )
}

export default Header;