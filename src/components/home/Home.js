import React, { Component } from 'react';
import Contact from './Contact';

class Home extends Component {
  render() {
    return (
      <div>
        <div className="container hero">
          <div className="row">
            <div className="col-12 col-md-9 offset-md-1 col-lg-7 offset-lg-1 col-xl-6">
              <div className="card">
                <p className="marg-bot-0">
                  We are a driven group of student developers. We rapidly and cost-effectively build websites and mobile applications using the most modern technology under industry-trained best practices.
                </p>
              </div>
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
