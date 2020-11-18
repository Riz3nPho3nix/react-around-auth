import React from 'react';
import logo from '../images/logo-white.svg';

function Header() {
  return (
    <>
    <header className="header">
        <img src={logo} alt="Around the US logo" className="header__logo" />
        <p className="header__nav">Log in</p>
    </header>
    </>
  )
}

export default Header;