import React, {Component} from 'react';

class Hero extends Component {
  render() {
    return (
      <div className="container hero">
        <div className="space-2 hidden-md-down" />
        <div className="row">
          <div className="col-12 col-md-9 offset-md-1 col-lg-7 offset-lg-1">
            <div className="pad-1 hero-text-wrapper">
              <p className="hero-text">
                We are a driven group of <span className="underline">student developers.</span>
              </p>
              <p className="hero-text">
                We rapidly <span className="underline">build websites and mobile apps</span> with modern technologies and industry-trained best practices.
              </p>
            </div>
          </div>
        </div>
        <div className="space-4 hidden-md-down" />
        <div className="space-4 hidden-md-down" />
        <div className="space-4 hidden-lg-down" />
      </div>
    );
  }
}

export default Hero;
