import React, { Component } from 'react';
import Contact from './Contact';
import Video from './Video';

class Home extends Component {
  render() {
    return (
      <div>
        <Video />
        <div className="container hero">
          <div className="row">
            <div className="col-12 col-md-9 offset-md-1 col-lg-7 offset-lg-1">
              <p className="hero-text">
                We are a driven group of <span className="underline">student developers.</span>
              </p>
              <p className="hero-text">
                We rapidly <span className="underline">build websites and mobile apps</span> with modern technology and industry-trained best practices.
              </p>
            </div>
          </div>
        </div>
        <div className="container contact">
          <div className="row">
            <div className="col-12 col-md-8 col-lg-6">
              <div className="card">
                <Contact />
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Home;
