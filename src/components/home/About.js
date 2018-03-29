import React, {Component} from 'react';
import Fade from 'react-reveal/Fade';
import Adam from '../../img/aripley.jpg';
import Cam from '../../img/ccabo.jpeg';

class About extends Component {
  render() {
    return (
      <div className="container about" id="about">
        <div className="row">
          <div className="absolute hidden-sm-down col-5 offset-6 col-md-5 offset-md-7 col-lg-3 offset-lg-8">
            <Fade right>
              <div className="space-3" />
              <img src={Adam} className="img-fluid card-img" alt="adam" />
            </Fade>
          </div>
          <div className="absolute hidden-sm-down col-5 col-md-4 col-lg-3">
            <Fade left>
              <img src={Cam} className="img-fluid card-img" alt="adam" />
            </Fade>
          </div>
          <div className="col-12 col-md-10 offset-md-1 col-lg-8">
            <div className="space-4" />
            <div className="space-4" />
            <div className="space-4 hidden-lg-up" />
            <Fade left>
              <div className="card">
                <h2 className="bold marg-bot-1">
                  More about us
                </h2>
                <div className="squiggle-1" />
                <div className="squiggle-2" />
                <p>
                  Riplo is a student-run freelance web development company centered at the University of Pennsylvania. Its members specialize in fullstack development.
                </p>
                <p>
                  Riplo delivers everything from complex web applications to mobile apps to static websites. Its developers work with a variety of clients at a variety of stages of development.
                </p>
                <p className="marg-bot-0">
                  The team is always looking to bring on more clients, designers, and developers. If you have an idea for an app or need help on an existing project, please get in touch.
                </p>
              </div>
            </Fade>
          </div>
        </div>
      </div>
    );
  }
}

export default About;
