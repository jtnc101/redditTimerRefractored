import React from 'react';
import logo from '../../images/logo.svg';
import HeaderCSS from '../../styles/shared/Header.module.css';
import { Link } from 'react-router-dom';


const Header = () => {
    
    const appName = "redditTimerRefractored";
    // used at github.

    return (
        <header className={HeaderCSS.headerContainer}>
            <Link to={`/${appName}`}><img src={logo} alt="logo" /></Link>
            <Link className={`${HeaderCSS.search} ${HeaderCSS.headerLinks} `} to={`/${appName}/search`}>Search</Link>
            <a className={HeaderCSS.headerLinks} href={`/${appName}/#how-it-works`} >How it works</a>
            <a className={HeaderCSS.headerLinks} href={`/${appName}/#about`} >About</a>
        </header>
    );
}

export default Header;