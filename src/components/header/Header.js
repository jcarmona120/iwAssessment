import React from 'react';
import Logo from '../../images/logo.png'

const Header = () => {
    return (
        <header className="header fixed">
            <img src={Logo} alt="" className="header__logo"/>
            <div className="header__information">
                <a href="tel:555-555-1212" className="header__number">555-555-1212</a>
                <p className="header__login">Login</p>
                <div className="header__hamburger">
                    <div className="hamburgerLevel"></div>
                    <div className="hamburgerLevel__middle"></div>
                    <div className="hamburgerLevel"></div>
                </div>
            </div>
        </header>
    )
}

export default Header;