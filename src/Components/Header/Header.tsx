import React from 'react';
import s from './Header.module.css';
import logo from "../../IMG/LogoB.png"
const Header = () => {
    return <header className={s.header}>
        <img className={s.mainLogo} src={logo}/>
        <div className={s.hat}>
            <b><p className={s.p}>Let's construct and riding</p></b>
        </div>
    </header>
}
export default Header;
