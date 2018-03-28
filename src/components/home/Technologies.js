import React from 'react';

export default () => (
  <div className="container">
    <div className="space-2" />
    <div className="row">
      <div className="col-12 col-md-10 offset-md-1 col-lg-8 offset-lg-3">
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
      </div>
    </div>
  </div>
);
