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
        <Contact />
      </div>
    );
  }
}

export default Home;
