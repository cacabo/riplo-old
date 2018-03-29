import React from 'react';
import Computer from '../../img/computer.jpg';
import Fade from 'react-reveal/Fade';

export default () => (
  <div className="container">
    <div className="space-2" />
    <div className="space-2 hidden-md-down" />
    <div className="row">
      <div className="absolute col-10 offset-2 col-md-8 offset-md-3 col-lg-6 offset-lg-5">
        <Fade right>
          <img src={Computer} className="img-fluid card-img" alt="computer" />
        </Fade>
      </div>
      <div className="col-11 col-md-8 offset-md-2 col-lg-6 offset-lg-3">
        <div className="space-4" />
        <div className="space-3" />
        <div className="space-2" id="technologies"/>
        <div className="space-2 hidden-md-down" />
        <Fade>
          <div className="card">
            <h2 className="bold marg-bot-1">Technologies</h2>
            <div className="squiggle-1" />
            <div className="squiggle-2" />
            <div className="row">
              <div className="col-12 col-md-6">
                <ul>
                  <li>Javascript</li>
                  <li>React/Redux</li>
                  <li>React Native</li>
                  <li>Express</li>
                  <li>Ruby on Rails</li>
                </ul>
              </div>
              <div className="col-12 col-md-6">
                <ul>
                  <li>MongoDB</li>
                  <li>Firebase</li>
                  <li>Node</li>
                  <li>HTML5/CSS3</li>
                  <li>...</li>
                </ul>
              </div>
            </div>
          </div>
        </Fade>
      </div>
    </div>
  </div>
);
