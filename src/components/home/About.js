import React, {Component} from 'react';
import Fade from 'react-reveal/Fade';
import Adam from '../../img/aripley.jpg';
import Cam from '../../img/ccabo.jpeg';

class About extends Component {
  render() {
    return (
      <div className="container about" id="about">
        <div className="row">
          <div className="absolute col-10 offset-2 col-md-8 offset-md-3 col-lg-6 offset-lg-5">
            <Fade right>
              <img src={Adam} className="img-fluid card-img" alt="adam" />
            </Fade>
          </div>
          <div className="absolute col-10 col-md-8 col-lg-6">
            <Fade left>
              <img src={Cam} className="img-fluid card-img" alt="adam" />
            </Fade>
          </div>
          <div className="col-12 col-md-10 offset-md-1 col-lg-8">
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
                  Riplo delivers everything from complex web applications to mobile apps to static websites. Its developers work with a variety of clients and are open to creating projects from scratch or modifying existing code bases.
                </p>
                <p>
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
