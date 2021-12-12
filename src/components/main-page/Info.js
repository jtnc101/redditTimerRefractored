import React from 'react';
import InfoCSS from '../../styles/main-page/Info.module.css';

const Info = () => {
  return (
    <div className={InfoCSS.mainContainer}>
      <div className={InfoCSS.secondaryContainer}>
        <div className={InfoCSS.subContainer}>
          <span className={InfoCSS.title} name="how-it-works" id="how-it-works">How it works</span>
          <div className={InfoCSS.list}>
            <li>We find the 500 top posts from the past year for a subreddit.</li>
            <li>The data is visualized in a heatmap grouped by weekday and hour of the day.</li>
            <li>See immediately when to submit your reddit post.</li>
          </div>
        </div>
        <div className={InfoCSS.subContainer}>
          <span className={InfoCSS.title} name="about" id="about">About</span>
          <div>
            <div>
              The front page of the app was created with the guidance from <a href="https://profy.dev">profy.dev</a>. 
            The goal is
            </div>
            <div>
              to implement a pixel-perfect real-world application
              with professional workflows
            </div>
            <div>
              and tools like Kanban,ClickUp, Figma, Github, pull requests. 
              The search page and all of its 
            </div>
            <div> 
              dynamic contents was independently
              created. <a href="https://profy.dev/employers"> Click here for more information.</a>
              
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Info;