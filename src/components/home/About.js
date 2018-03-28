import React, {Component} from 'react';
import Fade from 'react-reveal/Fade';

class About extends Component {
  render() {
    return (
      <div className="container about" id="about">
        <div className="row">
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
