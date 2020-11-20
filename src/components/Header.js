import React from 'react';
import logo from '../images/logo-white.svg';

function Header(props) {
  return (
    <>
    <header className="header">
        <img src={logo} alt="Around the US logo" className="header__logo" />
  <p className="header__nav">{props.link}</p>
    </header>
    </>
  )
}

export default Header;