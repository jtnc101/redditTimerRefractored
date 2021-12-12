import React from 'react';
import sign from '../../images/sign.svg';
import FooterCSS from '../../styles/shared/Footer.module.css';
import { Link } from 'react-router-dom';

const Footer = () => {

    const appName = "redditTimerRefractored";

    return (
        <footer className={FooterCSS.container}>
            {/* <a href="https://profy.dev/employers" className={FooterCSS.links}>profy.dev</a>
            <Link to={`/${appName}/`}><img src={sign} alt="sign"/></Link>
            <Link to={`/${appName}/terms`} className={FooterCSS.links}>Terms & Privacy</Link> */}
            <a href="https://profy.dev/employers" className={FooterCSS.links}>profy.dev</a>
            <Link to={`/${appName}`}><img src={sign} alt="sign"/></Link>
            <Link to={"/terms"} className={FooterCSS.links}>Terms & Privacy</Link>
        </footer>
    );
}

export default Footer;