import React, { Component } from 'react';
import Home from './home/Home';
import Nav from './shared/Nav';
import Footer from './shared/Footer';
import Background from './shared/Background';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Nav />
        <Background />
        <Home />
        <Footer />
      </div>
    );
  }
}

export default App;
