import React from 'react';
import HeroCSS from '../../styles/main-page/Hero.module.css';
import table from '../../images/table.png';
import { Link } from 'react-router-dom';

const Hero = () => {

    const appName = "redditTimerRefractored";

    return (

        <div className={HeroCSS.container}>
            <span data-testid="hero-title" className={HeroCSS.title}>No reactions to your reddit posts?</span>
            <span className={HeroCSS.subtitle}>
            Great timing, great results! Find the best time to post on your subreddit.
            </span>
            <Link to={`/${appName}/search`}><button type="button" className={HeroCSS.showMeButton} data-testid="hero-button" ><span>SHOW ME THE BEST TIME</span></button></Link>
            <Link to={`/${appName}/search`} ><img src={table} alt="table" className={HeroCSS.tableImage} /></Link>
        </div>

    );
}

export default Hero;