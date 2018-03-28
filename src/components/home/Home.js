import React, {Component} from 'react';

// Import components
import Video from './Video';
import Hero from './Hero';
import About from './About';
import Technologies from './Technologies';
import Contact from './Contact';

class Home extends Component {
  render() {
    return (
      <div>
        <Video />
        <Hero />
        <About />
        <Technologies />
        <div className="container">
          <div className="row">
            <div className="col-12 col-md-8 col-lg-6">
              <div className="space-2" />
              <Contact />
              <div className="space-2" />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Home;
