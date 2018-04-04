import React, {Component} from 'react';
import Fade from 'react-reveal/Fade';

class Projects extends Component {
  render() {
    return (
      <div className="container about" id="projects">
        <div className="row">
          <div className="col-12 col-md-10 offset-md-1 col-lg-8">
            <div className="space-2" />
            <div className="space-2 hidden-md-down" />
            <Fade left>
              <div className="card">
                <h2 className="bold marg-bot-1">
                  Check out our past work
                </h2>
                <div className="squiggle-1" />
                <div className="squiggle-2" />
                <p>
                  <strong>VITA Fitness</strong>: Mobile app for an on-demand, peer-to-peer fitness network that removes the need for personal trainers for entry-level gym-goers. Built using React Native and Firebase. See our app demo <a href="https://www.youtube.com/watch?v=MYW3XA3jP-8">here.</a>
                </p>
                <p>
                  <strong>Flourish</strong>: Web and mobile apps for a micro-donation platform targeted at millenials looking to hold charities accountable. Utilizing technologies such as React Native, React, and CSS. Check out the company’s landing page <a href="https://flourishroundup.com/">here.</a>
                </p>
              </div>
            </Fade>
          </div>
        </div>
      </div>
    );
  }
}

export default Projects;
