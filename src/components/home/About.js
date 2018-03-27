import React, {Component} from 'react';

class About extends Component {
  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col-12 col-md-10 offset-md-1 col-lg-7 offset-lg-1">
            <div className="card">
              <h2 className="bold marg-bot-1">More about us</h2>
              <p>
                Riplo is a student-run freelance web development company centered at the University of Pennsylvania. Its members specialize in fullstack development.
              </p>

              <p>
                Riplo delivers everything from complex web applications to mobile apps to static websites. Its developers work with a variety of clients and are open to creating projects from scratch or modifying existing code bases. A few of our past clients include Nalda (a centralized source of information on fun, food, and activities on college campuses) and Flourish (a micro-donation platform targeted at millenials looking to hold charities accountable).
              </p>

              <p>
                The team is always looking to bring on more clients and more developers. If you have an idea for an app or need help on an existing project, please feel free to get in touch. If you are an experienced developer looking to find a client base and work with a motivated team, send us an email.
              </p>
            </div>
          </div>
          <div className="col-12 col-md-10 offset-md-1 col-lg-3 offset-lg-0">
            <div className="space-2" />
            <div className="space-2 hidden-md-down" />
            <div className="card">
              <h2 className="bold marg-bot-1">Technologies</h2>
              <ul>
                <li>Javascript</li>
                <li>React/Redux</li>
                <li>React Native</li>
                <li>Express</li>
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
    );
  }
}

export default About;
